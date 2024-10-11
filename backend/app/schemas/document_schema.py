from pydantic import BaseModel

class DocumentBase(BaseModel):
    """Document Model"""
    filename : str
    content : bytes
    status : str
    task_id : str

class DocumentCreate(DocumentBase):
    """extends DocumentBase"""
    user_id : int

class DocumentResponse(DocumentBase):
    """document response"""
    id: int

    class Config:
        from_attributes = True
