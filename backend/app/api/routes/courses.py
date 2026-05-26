from fastapi import APIRouter
from sqlmodel import Session, select

from app.models import Course,TaskType
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
    
    
@router.get("/{course_id}/task-types")
def get_task_types(
    course_id: str,
):

    with Session(engine) as session:

        task_types = session.exec(
            select(TaskType).where(
                TaskType.course_id == course_id
            )
        ).all()

        return task_types
    
@router.get("/{course_id}")
def get_course(
    course_id: str,
):

    with Session(engine) as session:

        course = session.get(
            Course,
            course_id,
        )

        if not course:

            raise HTTPException(
                status_code=404,
                detail="Course not found",
            )

        return course
    
    
@router.get("/task-types/{task_type_id}")
def get_task_type(
    task_type_id: str,
):

    with Session(engine) as session:

        task_type = session.get(
            TaskType,
            task_type_id,
        )

        if not task_type:

            raise HTTPException(
                status_code=404,
                detail="Task type not found",
            )

        return task_type