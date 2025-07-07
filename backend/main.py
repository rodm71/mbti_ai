from fastapi import FastAPI, HTTPException, Depends, status  # On importe FastAPI + dépendances
from sqlalchemy.orm import Session  # On importe la session DB
from database import get_db  # Notre utilitaire pour ouvrir/fermer la connexion
from models import Base, User  # On importe la base + User pour créer la table
from database import engine  # Le moteur de connexion
from schemas import UserCreate, UserOut, UserLogin  # Les schémas entrée/sortie
from crud import get_user_by_email, create_user  # La logique CRUD
from passlib.context import CryptContext  # Pour hasher le mot de passe
from auth import verify_password, create_access_token, get_current_user


app = FastAPI()  # On crée l’API

# 👇 CRUCIAL : on définit la variable !
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

Base.metadata.create_all(bind=engine)  # On crée les tables si elles n’existent pas déjà

#Route de création d'utilisateur
@app.post("/register", response_model=UserOut)
def register(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db, email=user.email)                       # On verifie si l'email est / n'est pas déjà présent en bdd
    if db_user:                                                             # Si déjà présent -> Email déjà utilisé
        raise HTTPException(status_code=400, detail="Email déjà utilisé")
    hashed_password = pwd_context.hash(user.password)                       # Si pas présent -> On hash le mdp
    return create_user(db=db, user=user, hashed_password=hashed_password)   # Et on créé l'user en bdd


#Route de Connexion
@app.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db, email=user.email)
    if not db_user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Identifiants invalides")
    if not verify_password(user.password, db_user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Identifiants invalides")
    access_token = create_access_token(data={"sub": db_user.email})
    return {"access_token": access_token, "token_type": "bearer"}       # On retourne le Token nouvellement créé


# Route pour vérifier le Token envoyé par le client, décoder l'info sub (l'email) dedans, chercher l'user en bdd 
# et lui envoyer son profil
@app.get("/me")
def read_users_me(current_user: User = Depends(get_current_user)):      # Le "Depends" oblige la route à vérifier le token avant de continuer
    return {"id": current_user.id, "email": current_user.email}
