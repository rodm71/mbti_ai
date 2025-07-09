from fastapi import Depends, HTTPException, status # type: ignore
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials # type: ignore
from passlib.context import CryptContext  # type: ignore # Pour hash/verif
from sqlalchemy.orm import Session # type: ignore
from database import get_db
from datetime import datetime, timedelta
from crud import get_user_by_email
from datetime import datetime, timedelta
from jose import JWTError, jwt  # type: ignore # Pour le token
import os

# Contexte de hash pour bcrypt
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Config du JWT 
SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")  # Prends depuis .env ou valeur par défaut
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Décode le header `Authorization: Bearer <token>`
oauth2_scheme = HTTPBearer()

# Fonction pour vérifier le mot de passe
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

# Fonction pour créer un JWT token
def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


# Fonction pour vérifier que le token est valide, pas expiré et contient un sub, puis récupérer l'utilisateur en cours
def get_current_user(
    token: HTTPAuthorizationCredentials = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Impossible de valider le token",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    user = get_user_by_email(db, email=email)
    if user is None:
        raise credentials_exception

    return user

