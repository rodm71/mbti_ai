from fastapi import FastAPI, HTTPException, Depends, status, Security  # type: ignore # On importe FastAPI + dépendances
from sqlalchemy.orm import Session  # type: ignore # On importe la session DB
from database import get_db  # Notre utilitaire pour ouvrir/fermer la connexion
from models import Base, User, MBTIResult  # On importe la base + User pour créer la table
from database import engine  # Le moteur de connexion
from schemas import UserCreate, UserOut, UserLogin, MBTICreate, MBTIOut  # Les schémas entrée/sortie
from crud import get_user_by_email, create_user, create_mbti, get_mbti_for_user  # La logique CRUD
from passlib.context import CryptContext  # type: ignore # Pour hasher le mot de passe
from auth import verify_password, create_access_token, get_current_user
from fastapi.middleware.cors import CORSMiddleware # type: ignore


app = FastAPI()  # On crée l’API

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Ou ["*"] pour tout autoriser (pas pour prod)
    allow_credentials=True,
    allow_methods=["*"],  # Autorise POST, GET, OPTIONS, etc.
    allow_headers=["*"],
)


# CRUCIAL : on définit la variable !
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

Base.metadata.create_all(bind=engine)  # On crée les tables si elles n’existent pas déjà

# Route de création d'utilisateur
@app.post("/register", response_model=UserOut)
def register(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db, email=user.email)                       # On verifie si l'email est / n'est pas déjà présent en bdd
    if db_user:                                                             # Si déjà présent -> Email déjà utilisé
        raise HTTPException(status_code=400, detail="Email déjà utilisé")
    hashed_password = pwd_context.hash(user.password)                       # Si pas présent -> On hash le mdp
    return create_user(db=db, user=user, hashed_password=hashed_password)   # Et on créé l'user en bdd


# Route de Connexion
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


# Route pour poster un nouveau MBTI
@app.post("/mbti", response_model=MBTIOut)  #MBTIOut = le format que l'on va renvoyé à la bdd
def save_mbti(
    mbti: MBTICreate,                       # Reçoit mbti_type et scores
    current_user: User = Security(get_current_user),       # On vérifie le token de l'user et récupère ses données
    db: Session = Depends(get_db)                          # La session de la bdd
):
    return create_mbti(
        db=db,
        user_id=current_user.id,
        mbti_type=mbti.mbti_type,
        scores=mbti.scores
    )
 # Appel de la fonciton CRUD


@app.get("/mbti/me", response_model=MBTIOut)
def get_last_mbti_for_user(current_user: User = Security(get_current_user), db: Session = Depends(get_db)):
    result = (db.query(MBTIResult)
        .filter(MBTIResult.user_id == current_user.id)
        .order_by(MBTIResult.created_at.desc())  # 🔁 Trie du plus récent au plus ancien
        .first()
    )

    if not result:
        raise HTTPException(status_code=404, detail="Aucun résultat MBTI trouvé.")

    return result


