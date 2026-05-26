from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from app.api import deps
from app.models import Task, TaskBase
from sqlmodel import select

router = APIRouter()

@router.get("/{task_id}", response_model=Task)
def read_task(
    task_id: int,
    session=Depends(deps.get_db),
    current_user=Depends(deps.get_current_active_user),
):
    task = session.get(Task, task_id)
    if not task or task.owner_id != current_user.id:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

@router.patch("/{task_id}/notes")
def update_notes(
    task_id: int,
    notes: str,
    session=Depends(deps.get_db),
    current_user=Depends(deps.get_current_active_user),
):
    task = session.get(Task, task_id)
    if not task or task.owner_id != current_user.id:
        raise HTTPException(status_code=404, detail="Task not found")
    
    task.notes = notes
    session.add(task)
    session.commit()
    return {"status": "success"}

@router.post("/{task_id}/upload")
async def upload_report(
    task_id: int,
    file: UploadFile = File(...),
    session=Depends(deps.get_db),
    current_user=Depends(deps.get_current_active_user),
):
    # Логіка збереження файлу (наприклад, у папку uploads/)
    file_location = f"uploads/{current_user.id}_{task_id}_{file.filename}"
    with open(file_location, "wb+") as file_object:
        file_object.write(file.file.read())
    
    task = session.get(Task, task_id)
    task.file_path = file_location
    session.add(task)
    session.commit()
    
    return {"filename": file.filename}


@router.get("/")
def get_tasks(
    task_type_id: str,
    session=Depends(
        deps.get_db,
    ),
):

    tasks = session.exec(

        select(Task).where(
            Task.task_type_id
            == task_type_id
        )

    ).all()

    return tasks