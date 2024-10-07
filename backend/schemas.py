from pydantic import BaseModel

class CeaserCipherBase(BaseModel):
    """Ceaser Cipher Model"""
    text : str
    shift : int

class CeaserCipherCreate(CeaserCipherBase):
    """extends CeaserCipherBase"""
    decrypt : bool

class CeaserCipherResponse(CeaserCipherBase):
    id: int

    class Config:
        orm_mode = True

#user
class UserBase(BaseModel):
    """User Model"""
    first_name : str
    last_name : str
    email : str

class UserCreate(UserBase):
    """extends userbase"""
    password : str

class UserRespone(UserBase):
    id: int

    class Config:
        orm_mode = True

#document
class DocumentBase(BaseModel):
    """Document Model"""
    title : str
    content : str

class DocumentCreate(DocumentBase):
    """extends DocumentBase"""
    owner_id : int

class DocumentResponse(DocumentBase):
    id: int

    class Config:
        orm_mode = True
