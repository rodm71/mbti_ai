#LES FONCTIONS PERMETTANT DE FAIRE DES ACTIONS EN BDD (Create, Read, Update, Delete).
#Aucune fonction en dehors de ce fichier ne doit maanipuler les tables en bdd.

from sqlalchemy.orm import Session  # type: ignore # On importe la session DB
from models import User, MBTIResult  # On récupère le modèle User
from schemas import UserCreate  # Et le schéma UserCreate


#User CRUD ---------------

#Avoir un utilisateur par l'email, permet également de vérifier si un email existe déjà (ex : avant d'enregistrer un doublon)
def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

#Création d'un utilisateur
def create_user(db: Session, user: UserCreate, hashed_password: str):
    db_user = User(email=user.email, hashed_password=hashed_password)  # On crée l’objet User
    db.add(db_user)  # On le prépare à l’enregistrement
    db.commit()  # On valide en DB
    db.refresh(db_user)  # On recharge l’objet avec l’ID créé
    return db_user  # On le retourne


#MBTI CRUD --------------

#Avoir un ou les MBTI par l'user id
def get_mbti_for_user(db: Session, user_id: int):
    return db.query(MBTIResult).filter(MBTIResult.user_id == user_id).all()


#Création d'un MBTI
def create_mbti(db: Session, user_id: int, mbti_type: str):
    # On crée un objet MBTIResult lié au user
    db_mbti = MBTIResult(user_id=user_id, mbti_type=mbti_type)

    # On le prépare pour l’insertion
    db.add(db_mbti)

    # On valide l’insertion en DB
    db.commit()

    # On recharge l’objet pour avoir son ID auto
    db.refresh(db_mbti)

    return db_mbti




