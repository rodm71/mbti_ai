from sqlalchemy import create_engine # type: ignore
from sqlalchemy.orm import sessionmaker # type: ignore
from sqlalchemy.ext.declarative import declarative_base # type: ignore
from dotenv import load_dotenv # type: ignore
import os

# 1️⃣ Charge ton fichier .env
load_dotenv()

# 2️⃣ Récupère l'URL Postgres
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

# 3️⃣ Crée la connexion à ta base
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# 4️⃣ Crée une "session" → c'est ce que ton Python utilise pour envoyer des requêtes SQL
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 5️⃣ Crée la base de tes futurs modèles (User, MBTI, etc)
Base = declarative_base()

# 6️⃣ Petite fonction utilitaire pour ouvrir/fermer proprement la session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
