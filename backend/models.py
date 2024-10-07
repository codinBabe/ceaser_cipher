from datetime import datetime
from database import Base
from sqlalchemy import String, Column, Integer, ForeignKey
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key= True, nullable=False)
    username = Column(String)
    email = Column(String, unique=True)
    password = Column(String)
    documents = relationship("Document", back_populates="owner")


class Document(Base):
    __tablename__ = 'documents'
    
    id = Column(Integer, primary_key= True, nullable=False)
    filename = Column(String,index=True)
    owner_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    owner = relationship("User", back_populates="documents")
    uploaded_at = Column(datetime, default=datetime.now)
    status = Column(String, default='encrypted')