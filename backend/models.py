from database import Base
from sqlalchemy import String, Column, Boolean, Integer, ForeignKey

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key= True, nullable=False)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String, unique=True)
    password = Column(String)
    is_active = Column(Boolean, default=True)


class Document(Base):
    __tablename__ = 'documents'
    
    id = Column(Integer, primary_key= True, nullable=False)
    title = Column(String)
    content = Column(String)
    owner_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    is_active = Column(Boolean, default=True)