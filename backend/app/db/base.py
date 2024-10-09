from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

from models.user_model import User
from models.document_model import Document

__all__ = ["Base", "User", "Document"]
