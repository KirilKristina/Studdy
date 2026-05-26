from fastapi import APIRouter
from pydantic import BaseModel
from openai import OpenAI
from app.core.config import settings
from docx import Document
from pathlib import Path
import urllib.parse
import uuid

router = APIRouter()

client = OpenAI(
    api_key=settings.OPENROUTER_API_KEY,
    base_url="https://openrouter.ai/api/v1",
)

TMP_DIR = Path("./tmp")
TMP_DIR.mkdir(exist_ok=True)


class ChatRequest(BaseModel):
    message: str

@router.post("/image")
def generate_image(req: ChatRequest):

    prompt = req.message
    encoded = urllib.parse.quote(prompt)

    return {
        "type": "image",
        "url": f"https://image.pollinations.ai/prompt/{encoded}?width=1024&height=1024&model=flux"
    }

# 💬 MAIN AI ROUTE
@router.post("/chat")
def chat(req: ChatRequest):

    # 🖼️ IMAGE fallback detection (ВАЖЛИВО: ДО GPT або ПІСЛЯ — але ДО file/text return)
    if "draw" in req.message.lower() or "diagram" in req.message.lower():
        import urllib.parse

        return {
            "type": "image",
            "url": f"https://image.pollinations.ai/prompt/{urllib.parse.quote(req.message)}"
        }

    response = client.chat.completions.create(
        model="openai/gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": "..."
            },
            {"role": "user", "content": req.message}
        ]
    )

    content = response.choices[0].message.content

    text = content.lower()


    # 📄 FILE MODE (DOCX)
    if len(content) > 500:

        filename = f"{uuid.uuid4().hex}.docx"
        file_path = TMP_DIR / filename

        doc = Document()
        doc.add_paragraph(content)
        doc.save(file_path)

        return {
            "type": "file",
            "filename": filename,
            "download_url": f"/api/v1/ai/download/{filename}"
        }

    # 💬 TEXT MODE
    return {
        "type": "text",
        "content": content
    }


# 📥 DOWNLOAD DOCX
from fastapi.responses import FileResponse

@router.get("/download/{filename}")
def download_file(filename: str):
    file_path = TMP_DIR / filename
    return FileResponse(file_path, filename=filename)