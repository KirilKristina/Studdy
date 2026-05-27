from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlmodel import select
from app.api import deps
from app.models import Task, File as DBFile

router = APIRouter(prefix="/api/v1/courses/tasks")

# GET task
@router.get("/{task_id}")
def read_task(
    task_id: int,
    session=Depends(deps.get_db),
):
    task = session.get(Task, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task


# UPDATE notes
import uuid

@router.post("/{task_id}/upload")
async def upload_report(
    task_id: uuid.UUID,
    file: UploadFile = File(...),
    session=Depends(deps.get_db),
    current_user=Depends(deps.get_current_active_superuser),
):
    task = session.get(Task, task_id)

    if not task or task.owner_id != current_user.id:
        raise HTTPException(status_code=404, detail="Task not found")

    session.add(task)
    session.commit()

    return {"status": "success"}


from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from app.api import deps
from app.models import Task, File as DBFile
import uuid

router = APIRouter(
    prefix="/courses/tasks",
    tags=["tasks"],
)

@router.post("/{task_id}/upload")
async def upload_report(
    task_id: uuid.UUID,
    file: UploadFile = File(...),
    session=Depends(deps.get_db),
    current_user=Depends(deps.get_current_user),
):
    task = session.get(Task, task_id)

    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    content = await file.read()

    db_file = DBFile(
        name=file.filename,
        size=len(content),
        data=content,
        user_id=current_user.id,
    )

    session.add(db_file)
    session.commit()

    return {
        "status": "success",
        "filename": file.filename,
    }