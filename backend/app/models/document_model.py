from db.base import Base
from datetime import datetime, timezone
from sqlalchemy import String, Column, Integer, ForeignKey, DateTime, LargeBinary
from sqlalchemy.orm import relationship

class Document(Base):
    __tablename__ = "documents"
    
    id = Column(Integer, primary_key= True, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"))

    filename = Column(String,index=True)
    content = Column(LargeBinary, default=None)
    status = Column(String, nullable=False)
    task_id = Column(String, nullable=False)
    uploaded_at = Column(DateTime, default=datetime.now(timezone.utc))

    user = relationship("User", back_populates="documents")