from uuid import UUID
from fastapi import APIRouter, status, HTTPException

from app import crud, schemas, models
from app.routes import group_current
from app.core.deps import SessionDep, CurrentUser


router = APIRouter(prefix="/groups", tags=["Groups"])
router.include_router(group_current.router)


@router.get('/', response_model=schemas.GroupsPublicSchema)
def get_groups(session: SessionDep, current_user: CurrentUser):
    groups = crud.get_groups(session)
    groups = [schemas.GroupPublic.model_validate(g) for g in groups]
    return schemas.GroupsPublicSchema(groups=groups)

@router.get('/{group_id}', response_model=schemas.GroupPublic)
def get_group(session: SessionDep, group_id: UUID, current_user: CurrentUser):
    group = crud.get_group_by_id(session, group_id)
    if not group:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Group not found")
    group = schemas.GroupPublic.model_validate(group)
    return group


@router.get('/current/', response_model=schemas.GroupPrivateSchema)
def get_current_group(session: SessionDep, current_user: CurrentUser):
    group = schemas.GroupPrivateSchema.model_validate(current_user.group)
    return group


@router.post("/create/", response_model=schemas.GroupPublic)
def create_group(session: SessionDep, current_user: CurrentUser, data: schemas.CreateGroup):
    group = models.Group(leader_id=current_user.user_id, name=data.name)
    group_member = models.UserInGroup(user_id=current_user.user_id, group_id=group.group_id, role_id=data.role_id)

    session.add(group)
    session.add(group_member)
    session.commit()
    return schemas.GroupPublic.model_validate(group)


