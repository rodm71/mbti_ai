"use client"; // React côté client

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Composant Shadcn
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Soumission du formulaire d'inscription
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        console.log("✅ Utilisateur inscrit :", data);
      } else {
        console.error("❌ Erreur d'inscription :", data);
      }
    } catch (err) {
      console.error("❌ Erreur de requête :", err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-indigo-700 text-center">Créer un compte</h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
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
            S’inscrire
          </Button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Déjà un compte ?{" "}
          <Link href="/login" className="text-indigo-600 hover:underline">
            Connecte-toi ici
          </Link>
        </p>
      </div>
    </main>
  );
}
