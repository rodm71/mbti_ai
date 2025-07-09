from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, func # type: ignore
from sqlalchemy.orm import relationship # type: ignore
from database import Base

# Les models pour structurer la BDD

# Définis une table 'users'
class User(Base): # Base = Classe de base pour dire à SQLAlchemy "ce modèle est une table"
    __tablename__ = "users"  # Nom de la table dans Postgres

    id = Column(Integer, primary_key=True, index=True)  # Colonne id = clé primaire
    email = Column(String, unique=True, index=True)     # Colonne email unique
    hashed_password = Column(String)                    # Colonne pour stocker le mdp haché
    mbti_results = relationship("MBTIResult", back_populates="owner")      # Chaque User peut avoir une liste de MBTIResult


class MBTIResult(Base):
    __tablename__ = "mbti_results"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    mbti_type = Column(String, index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    owner = relationship("User", back_populates="mbti_results")             #Chaque MBTIResult appartient à un User

