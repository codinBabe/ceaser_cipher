from pydantic import BaseModel

class CeaserCipherBase(BaseModel):
    """Ceaser Cipher Model"""
    text : str
    shift : int

class CeaserCipherCreate(CeaserCipherBase):
    """extends CeaserCipherBase"""
    decrypt : bool

class CeaserCipherResponse(CeaserCipherBase):
    id: int

    class Config:
        from_attributes = True