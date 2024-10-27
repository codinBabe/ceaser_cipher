from pydantic import BaseModel

class DocumentBase(BaseModel):
    """Document Model"""
    title : str
    original_document_url : str
    processed_document_url : str
    date_created : str
    date_updated : str

class DocumentCreate(DocumentBase):
    """extends DocumentBase"""
    user_id : int

class DocumentResponse(DocumentBase):
    """document response"""
    id: int

    class Config:
        from_attributes = True
