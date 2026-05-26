from fastapi import APIRouter
from pydantic import BaseModel
from openai import OpenAI

from app.core.config import settings

router = APIRouter()

client = OpenAI(api_key=settings.OPENAI_API_KEY)

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
async def chat(req: ChatRequest):
    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {
                "role": "user",
                "content": req.message
            }
        ]
    )

    return {
        "response": response.choices[0].message.content
    }