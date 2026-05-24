from fastapi import APIRouter

router = APIRouter()

@router.get("/terms")
def get_terms():
    return {"text": "Terms from backend"}