from db.base import Base
from datetime import datetime, timezone
from sqlalchemy import String, Column, Integer, ForeignKey, DateTime, LargeBinary
from sqlalchemy.orm import relationship

class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key= True, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"))

    title = Column(String, nullable=False)
    original_document_url = Column(String, nullable=False)
    processed_document_url = Column(String, nullable=False)
    date_created = Column(DateTime, default=datetime.now(timezone.utc))
    date_updated = Column(DateTime, default=datetime.now(timezone.utc))

    user = relationship("User", back_populates="documents")
