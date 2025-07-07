from pydantic import BaseModel  # On importe Pydantic, la brique pour dire "voici la forme des données"


class UserCreate(BaseModel):
    email: str  # Ce qu’on attend côté input : un email
    password: str  # Et un mot de passe


class UserOut(BaseModel):
    id: int  # Ce qu’on renvoie côté output : l’id du user
    email: str  # Et l’email

    class Config:
        orm_mode = True  # Permet à Pydantic de bosser avec un objet SQLAlchemy direct

class UserLogin(BaseModel):
    email: str
    password: str
    