from datetime import datetime
from typing import List, Optional
from uuid import UUID, uuid4

from sqlalchemy import TEXT, ForeignKey
from sqlalchemy.orm import DeclarativeBase, relationship, mapped_column, Mapped, MappedAsDataclass


class Base(DeclarativeBase, MappedAsDataclass):
    type_annotation_map = {
        str: TEXT,
    }

class User(Base):
    __tablename__ = "users"

    user_id: Mapped[UUID] = mapped_column(primary_key=True, default_factory=uuid4, init=False)
    hashed_password: Mapped[str] = mapped_column()
    email: Mapped[str] = mapped_column(unique=True)

    phone_number: Mapped[str] = mapped_column()
    name: Mapped[str] = mapped_column()
    created_at: Mapped[datetime] = mapped_column(default_factory=datetime.now, init=False)

    group: Mapped[Optional["Group"]] = relationship(back_populates="groups", secondary="usergroups", init=False)

class Group(Base):
    __tablename__ = "groups"

    group_id: Mapped[UUID] = mapped_column(primary_key=True, default_factory=uuid4, init=False)
    leader_id: Mapped[UUID] = mapped_column(ForeignKey("users.user_id"), unique=True)
    name: Mapped[str] = mapped_column()
    created_at: Mapped[datetime] = mapped_column(default_factory=datetime.now, init=False)

    members: Mapped[list[User]] = relationship(secondary="users", init=False)

class UserInGroup(Base):
    __tablename__ = "usergroups"

    user_id: Mapped[UUID] = mapped_column(ForeignKey("users.user_id"), primary_key=True)
    group_id: Mapped[UUID] = mapped_column(ForeignKey("groups.group_id"), primary_key=True)
    role_id: Mapped[UUID] = mapped_column(ForeignKey("roles.role_id"))
    created_at: Mapped[datetime] = mapped_column(default_factory=datetime.now, init=False)


class Role(Base):
    __tablename__ = "roles"

    role_id: Mapped[UUID] = mapped_column(primary_key=True, default_factory=uuid4, init=False)
    role: Mapped[str] = mapped_column()


class JoinRequest(Base):
    __tablename__ = "joinrequests"

    user_id: Mapped[UUID] = mapped_column(ForeignKey("users.user_id"), primary_key=True)
    group_id: Mapped[UUID] = mapped_column(ForeignKey("groups.group_id"))
    role_id: Mapped[UUID] = mapped_column(ForeignKey("roles.role_id"))
    created_at: Mapped[datetime] = mapped_column(default_factory=datetime.now, init=False)
