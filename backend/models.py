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
    user_id = Column(Integer, ForeignKey("users.id"))       #ID de l'user
    mbti_type = Column(String, index=True)          #Type MBTI
    ie = Column(Integer)                        #Pourcentage I
    sn = Column(Integer)                        #Pourcentage S
    ft = Column(Integer)                        #Pourcentage F
    jp = Column(Integer)                        #Pourcentage J
    created_at = Column(DateTime(timezone=True), server_default=func.now())         #Date de création

    owner = relationship("User", back_populates="mbti_results")                 #Relation avec la table User

