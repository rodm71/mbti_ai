"use client"; // permet d’utiliser les hooks côté navigateur

import { useEffect, useState } from "react";

export default function ProfilPage() {
  const [mbti, setMbti] = useState<string | null>(null); // état pour stocker le type
  const [error, setError] = useState<string | null>(null); // état pour erreur éventuelle

  useEffect(() => {
    const fetchMbti = async () => {
      const token = localStorage.getItem("access_token"); // récupère le JWT
      if (!token) {
        setError("Aucun token trouvé. Veuillez vous connecter.");
        return;
      }

      try {
        const res = await fetch("http://127.0.0.1:8000/mbti/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Impossible de récupérer le MBTI");
        }

        const data = await res.json(); // { mbti_type: "INTJ" }
        setMbti(data.mbti_type);
      } catch (err) {
        setError("Erreur lors du chargement du MBTI.");
        console.error(err);
      }
    };

    fetchMbti();
  }, []);

  return (
    <main className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Mon profil</h1>

      {error && <p className="text-red-500">{error}</p>}

      {mbti ? (
        <p className="text-xl">🧠 Ton type MBTI est : <strong>{mbti}</strong></p>
      ) : (
        !error && <p>Chargement...</p>
      )}
    </main>
  );
}
