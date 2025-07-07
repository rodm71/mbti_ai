from sqlalchemy import Column, Integer, String
from database import Base

# Définis une table 'users'
class User(Base): # Base = Classe de base pour dire à SQLAlchemy "ce modèle est une table"
    __tablename__ = "users"  # Nom de la table dans Postgres

    id = Column(Integer, primary_key=True, index=True)  # Colonne id = clé primaire
    email = Column(String, unique=True, index=True)     # Colonne email unique
    hashed_password = Column(String)                    # Colonne pour stocker le mdp haché
