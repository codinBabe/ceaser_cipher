from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class DocumentBase(BaseModel):
    """Document Model"""
    title : str
    original_document_url : str
    processed_document_url : str
    date_created : Optional[datetime]
    date_updated : Optional[datetime]

class DocumentCreate(DocumentBase):
    """extends DocumentBase"""
    user_id : int

class DocumentResponse(DocumentBase):
    """document response"""
    id: int

    class Config:
        from_attributes = True
