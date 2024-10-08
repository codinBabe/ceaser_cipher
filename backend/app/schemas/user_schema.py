from pydantic import BaseModel

class UserBase(BaseModel):
    """User Model"""
    username : str
    email : str

class UserCreate(UserBase):
    """extends userbase"""
    password : str

class UserRespone(UserBase):
    id: int

    class Config:
        from_attributes = True