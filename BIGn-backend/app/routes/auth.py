from datetime import timedelta

from fastapi import APIRouter, HTTPException, status, Depends

from app import crud, schemas, models
from app.core.deps import SessionDep
from app.core.config import settings
from app.core.security import check_password, create_access_token, generate_hashed_password

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post('/register', response_model=schemas.Token)
def register(session: SessionDep, data: schemas.RegisterSchema):
    user = crud.get_user_by_email(session, data.email)
    if user:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Account already exists')

    hashed = generate_hashed_password(data.password)
    user = models.User(
        email=data.email,
        hashed_password=hashed,
        phone_number=data.phone_number,
        name=data.name,
    )
    crud.register_user(session, user)

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(user.user_id, expires_delta=access_token_expires)
    return schemas.Token(access_token=access_token)


@router.post('/login', response_model=schemas.Token)
def login(session: SessionDep, data: schemas.LoginSchema):
    user = crud.get_user_by_email(session, data.email)
    if not user:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials")
    if not check_password(data.password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials")

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(user.user_id, expires_delta=access_token_expires)
    return schemas.Token(access_token=access_token)
