"use client"; // Permet d'utiliser les hooks côté navigateur

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Bouton Shadcn
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");         // Champ email
  const [password, setPassword] = useState("");   // Champ mot de passe

  // Soumission du formulaire
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const res = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("access_token", data.access_token); // Stocke le token
        console.log("✅ Connecté !");
      } else {
        console.error("❌ Erreur de login :", data);
      }
    } catch (err) {
      console.error("❌ Erreur API :", err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-indigo-700 text-center">
          Connexion
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <Button type="submit" className="w-full">
            Se connecter
          </Button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Pas encore inscrit ?{" "}
          <Link href="/register" className="text-indigo-600 hover:underline">
            Crée un compte
          </Link>
        </p>
      </div>
    </main>
  );
}
