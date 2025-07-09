from pydantic import BaseModel  # type: ignore # On importe Pydantic, la brique pour dire "voici la forme des données"
from datetime import datetime

# Faire comprendre à FastAPI comment on reçoit et on renvoie les données


#Utilisateur ---------------

#Entrée User
class UserCreate(BaseModel):
    email: str  # Ce qu’on attend côté input : un email
    password: str  # Et un mot de passe


#Sortie User
class UserOut(BaseModel):
    id: int  # Ce qu’on renvoie côté output : l’id du user
    email: str  # Et l’email

    class Config:
        orm_mode = True  # Permet à Pydantic de bosser avec un objet SQLAlchemy direct


class UserLogin(BaseModel):
    email: str
    password: str



#MBTI ---------------

#Entrée MBTI
class MBTICreate(BaseModel):        # Quand l'user envoie son résultat par Post /mbti, Fast API valide -> Est-ce qu'il a bien envoyé un mbti_type de type string ?
    mbti_type: str


#Sortie MBTI
class MBTIOut(BaseModel):
    id: int
    mbti_type: str
    created_at: datetime

    class Config:
        from_attributes = True  # Pour convertir l'objet SQLAlchemy en dict JSON
