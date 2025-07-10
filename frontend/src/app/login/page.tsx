"use client"; // Dit à Next.js : ce composant tourne côté navigateur ➜ autorise les hooks et localStorage

import { useState } from "react"; // Import du hook pour gérer les champs email et password

export default function LoginPage() { // Déclare le composant pour la page /login

  const [email, setEmail] = useState(""); // Champ email et setEmail pour le changer
  const [password, setPassword] = useState(""); // Champ mot de passe et setPassword pour le changer

  //Fonction appelée quand on soumet le formulaire de login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Bloque le rechargement automatique du formulaire
    console.log("➡️ handleLogin déclenché"); // Pour vérifier que ça s'exécute

    try {
      // Envoie la requête vers FastAPI /login
      const res = await fetch("http://127.0.0.1:8000/login", {
        method: "POST", // Méthode HTTP POST
        headers: {
          "Content-Type": "application/json", // Dit que c'est du JSON
        },
        body: JSON.stringify({
          email: email, // Côté FastAPI ça doit s'appeler `username` (même si c'est un email)
          password: password, // Le mot de passe
        }),
      });

      // Transforme la réponse en JSON
      const data = await res.json();
      console.log("Réponse FastAPI /login :", data);

      // Si FastAPI dit OK ➜ on sauvegarde le token dans le navigateur
      if (res.ok) {
        localStorage.setItem("access_token", data.access_token); // Stocke le JWT
        console.log("Token sauvegardé dans localStorage !");
      } else {
        console.error("Mauvais identifiants :", data); // Si le login rate
      }

    } catch (err) {
      console.error("Erreur côté Front :", err); // Si le fetch plante
    }
  };

  // Le formulaire
  return (
    <main className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form
        onSubmit={handleLogin} // ➜ Relie le bouton au handleLogin
        className="flex flex-col gap-4 w-full max-w-sm"
      >
        <input
          type="email"
          placeholder="Email"
          value={email} // ➜ Valeur du champ liée à l'état
          onChange={(e) => setEmail(e.target.value)} // ➜ Change l'état quand on tape
          className="border p-2"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
          required
        />

        <button
          type="submit" // ➜ C'est bien un bouton de submit
          className="bg-green-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>

            <button
                onClick={async () => {
                    const token = localStorage.getItem("access_token");
                    if (!token) {
                    console.error("❌ Aucun token trouvé !");
                    return;
                    }

                    try {
                    const res = await fetch("http://127.0.0.1:8000/me", {
                        method: "GET",
                        headers: {
                        Authorization: `Bearer ${token}`,
                        },
                    });

                    const data = await res.json();
                    console.log("✅ Réponse /me :", data);
                    } catch (err) {
                    console.error("❌ Erreur GET /me :", err);
                    }
                }}
                className="bg-purple-600 text-white p-2 rounded mt-4"
            >
            Tester /me
        </button>

    </main>
  );
}
