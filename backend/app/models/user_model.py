from db.base import Base
from sqlalchemy import String, Column, Integer
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key= True, nullable=False)
    username = Column(String)
    email = Column(String, unique=True)
    password = Column(String)

    documents = relationship("Document", back_populates="user")
