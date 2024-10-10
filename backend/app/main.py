from fastapi import FastAPI
from db.session import engine
from db.base import Base
from api.v1 import auth, cipher, file_handler


app = FastAPI()


app.include_router(auth.router)
app.include_router(cipher.router)
app.include_router(file_handler.router)


Base.metadata.create_all(bind=engine)


@app.get("/")
def read_root():
    return {"message": "Welcome to Ceaser Cipher API!"}