from db.base import Base
from datetime import datetime, timezone
from sqlalchemy import String, Column, Integer, ForeignKey, DateTime
from sqlalchemy.orm import relationship

class Document(Base):
    __tablename__ = "documents"
    
    id = Column(Integer, primary_key= True, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"))

    filename = Column(String,index=True)
    content = Column(String)
    uploaded_at = Column(DateTime, default=datetime.now(timezone.utc))
    status = Column(String, default="encrypted")

    user = relationship("User", back_populates="documents")