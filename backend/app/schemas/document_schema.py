from pydantic import BaseModel

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
        from_attributes = True
