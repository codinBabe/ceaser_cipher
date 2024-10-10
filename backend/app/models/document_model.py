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
    status = Column(String, default=None)
    task_id = Column(String, default=None)
    uploaded_at = Column(DateTime, default=datetime.now(timezone.utc))

    user = relationship("User", back_populates="documents")