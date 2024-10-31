from fastapi import FastAPI
from db.session import engine
from db.base import Base
from api.v1 import auth, cipher, file


app = FastAPI()


app.include_router(auth.router)
app.include_router(cipher.router)
app.include_router(file.router)


Base.metadata.create_all(bind=engine)


@app.get("/")
def read_root():
    """Root route"""
    return {"message": "Welcome to Cryptify API!"}