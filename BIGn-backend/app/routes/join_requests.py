from uuid import UUID
from fastapi import APIRouter, status, HTTPException

from app import crud, models, schemas
from app.core.deps import SessionDep, CurrentUser

router = APIRouter(prefix="/requests", tags=["Join Requests"])


@router.get("/")
def get_join_requests(session: SessionDep, current_user: CurrentUser):
    group = crud.get_group_by_user_id(session, current_user.user_id)
    if not group:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="no group")
    if current_user.user_id != group.leader_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="You are not the leader")

    requests = crud.get_requests_by_group_id(session, group.group_id)
    requests = [schemas.RequestSchema(user=u, role=r) for u, r in requests]
    return schemas.RequestsSchema(requests=requests)


@router.post('/join/{group_id}/')
def join_group(session: SessionDep, current_user: CurrentUser, data: schemas.RequestGroupJoin, group_id: UUID):
    join_req = crud.get_request_by_id(session, current_user.user_id)
    if join_req:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="You already have a request")
    join_req = models.JoinRequest(
        user_id=current_user.user_id,
        group_id=group_id,
        role_id=data.role_id,
    )
    session.add(join_req)
    session.commit()
    # email group leader about join request


@router.delete('/join/{group_id}/')
def cancel_join(session: SessionDep, current_user: CurrentUser, group_id: UUID):
    req = crud.get_request_by_id(session, current_user.user_id)
    if not req:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Request not found")
    crud.delete_request_by_id(session, current_user.user_id)



@router.post('/accept/')
def answer_request(session: SessionDep, current_user: CurrentUser, data: schemas.RequestReply):
    req = crud.get_request_by_id(session, data.user_id)
    if not req:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Request not found")
    group = crud.get_group_by_id(session, req.group_id)
    if not group:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Group deleted")
    if group.leader_id != current_user.user_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="You are not the leader")
    if data.accept:
        crud.delete_request_by_id(session, req.user_id)
        crud.add_member_to_group(session, req.user_id, req.group_id, req.role_id)
        # email
    else:
        crud.delete_request_by_id(session, req.user_id)
        # email