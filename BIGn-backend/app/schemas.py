from uuid import UUID
from pydantic import BaseModel, EmailStr


class RequestSchema(BaseModel):
    user: "UserSchema"
    role: "RoleSchema"


class RequestsSchema(BaseModel):
    requests: list[RequestSchema]

class GroupMemberPrivate(BaseModel):
    user_id: UUID
    name: str
    role: str
    phone_number: str

class GroupPrivateSchema(BaseModel):
    group_id: UUID
    name: str
    members: list[GroupMemberPrivate]
    available_roles: list[str]
    

class GroupMemberPublic(BaseModel):
    user_id: UUID
    name: str
    role: str

class RoleSchema(BaseModel):
    role_id: UUID
    role: str

class GroupPublic(BaseModel):
    group_id: UUID
    name: str
    members: list[GroupMemberPublic]
    available_roles: list[RoleSchema]


class GroupsPublicSchema(BaseModel):
    groups: list[GroupPublic]


class RequestGroupJoin(BaseModel):
    role_id: UUID

class RequestReply(BaseModel):
    user_id: UUID
    accept: bool

class CreateGroup(BaseModel):
    name: str
    role_id: UUID


class UserSchema(BaseModel):
    user_id: UUID
    name: str
    phone_number: str
    email: str

class RegisterSchema(BaseModel):
    email: EmailStr
    password: str
    name: str
    phone_number: str

class LoginSchema(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str ="bearer"


class TokenPayload(BaseModel):
    sub: str | None = None