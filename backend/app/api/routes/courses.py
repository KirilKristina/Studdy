from fastapi import APIRouter
from sqlmodel import Session

from app.models import Course
from app.core.db import engine
import uuid

from fastapi import HTTPException

router = APIRouter(
    prefix="/courses",
    tags=["Courses"],
)



@router.get("/")
def get_courses():

    with Session(engine) as session:

        courses = session.query(Course).all()

        return courses