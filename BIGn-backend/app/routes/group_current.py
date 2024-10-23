from uuid import UUID
from fastapi import APIRouter, status, HTTPException

from app import crud
from app.core.deps import SessionDep, CurrentUser


router = APIRouter(prefix='/current')


@router.post('/leave/')
def leave_group(session: SessionDep, current_user: CurrentUser):
    if not current_user.group:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="no group")
    crud.delete_user_group(session, current_user.user_id)


@router.post("/management/kick/{kick_user}")
def kick_user_from_group(session: SessionDep, current_user: CurrentUser, kick_user: UUID):
    group = crud.get_group_by_user_id(session, kick_user)
    if not group:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="user not in a group")
    if group.leader_id != current_user.user_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="you are not the leader")
    crud.delete_user_group(session, kick_user)

@router.delete("/management/")
def delete_group(session: SessionDep, current_user: CurrentUser):
    group = crud.get_group_by_user_id(session, current_user.user_id)
    if not group:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="user not in a group")
    if group.leader_id != current_user.user_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="you are not the leader")
    crud.delete_group(session, group.group_id)


@router.post("/management/pass_lead/{pass_to}")
def pass_lead(session: SessionDep, current_user: CurrentUser, pass_to: UUID):
    group = crud.get_group_by_user_id(session, pass_to)
    if not group:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="user not in a group")
    if group.leader_id != current_user.user_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="you are not the leader")
    group.leader_id = pass_to
    session.add(group)
    session.commit()
