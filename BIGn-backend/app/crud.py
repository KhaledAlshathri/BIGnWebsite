from typing import Optional, Sequence
from uuid import UUID
from sqlalchemy import Row, delete, select
from sqlalchemy.orm import Session
from app.models import Role, User, Group, JoinRequest, UserInGroup

def get_user_by_email(session: Session, email: str) -> Optional[User]:
    user = session.scalar(
        select(User)
        .where(User.email == email)
    )
    return user

def register_user(session: Session, user: User) -> User:
    session.add(user)
    session.commit()
    session.refresh(user)
    return user

def get_groups(session: Session) -> Sequence[Group]:
    groups = session.scalars(
        select(Group)
    ).all()
    return groups

def get_group_by_id(session: Session, group_id: UUID) -> Optional[Group]:
    group = session.scalar(
        select(Group)
        .where(Group.group_id == group_id)
    )
    return group

def get_group_by_user_id(session: Session, user_id: UUID) -> Optional[Group]:
    group = session.scalar(
        select(Group)
        .join(UserInGroup, UserInGroup.group_id == Group.group_id)
        .where(UserInGroup.user_id == user_id)
    )
    return group


def delete_group(session: Session, group_id: UUID):
    session.execute(
        delete(UserInGroup)
        .where(UserInGroup.group_id == group_id)
    )
    session.execute(
        delete(Group)
        .where(Group.group_id == group_id)
    )
    session.commit()

def get_request_by_id(session: Session, user_id: UUID) -> Optional[JoinRequest]:
    req = session.scalar(
        select(JoinRequest)
        .where(JoinRequest.user_id == user_id)
    )
    return req

def add_member_to_group(session: Session, user_id: UUID, group_id: UUID, role_id: UUID):
    session.add(UserInGroup(user_id=user_id, group_id=group_id, role_id=role_id))
    session.commit()

def delete_request_by_id(session: Session, user_id: UUID):
    session.execute(
        delete(JoinRequest)
        .where(JoinRequest.user_id == user_id)
    )

def delete_user_group(session: Session, user_id: UUID):
    session.execute(
        delete(UserInGroup)
        .where(UserInGroup.user_id == user_id)
    )

def get_requests_by_group_id(session: Session, group_id: UUID) -> list[Row[tuple[User, Role]]]:
    requests = (
        session.query(User, Role)
        .join(JoinRequest, JoinRequest.user_id == User.user_id)
        .join(Role, Role.role_id == JoinRequest.role_id)
        .all()
    )
    return requests