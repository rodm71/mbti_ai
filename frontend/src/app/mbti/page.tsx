"use client";   // Dit à Next.js : ce composant tourne côté navigateur ➜ autorise les hooks et localStorage

import { calculateMbtiType } from "@/utils/calculateMbtiType";      // Import de la fonction pour calculer le MBTI
import { useState } from "react";               // Import du hook pour stocker
import { questions } from "@/data/questions";   // Import des questions

export default function MBTIPage() {
  const [responses, setResponses] = useState<Record<number, number>>({});       // Pour stocker les réponses
  const [mbtiResult, setMbtiResult] = useState<string | null>(null);

  const handleChange = (questionId: number, value: number) => {                 // Màj des réponses quand on clic sur un bouton radio
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement

  // 1. ✅ On affiche les réponses pour débogage
    console.log("✅ Réponses utilisateur :", responses);

  // 2. 🧠 On calcule le type MBTI
    const mbtiType = calculateMbtiType(responses);

  // 3. 🔍 On l'affiche en console (et plus tard, on l’enverra à l’API)
    setMbtiResult(mbtiType); // On stocke le type MBTI pour l’afficher

    // Récupère le token depuis localStorage (qu'on avait stocké au login)
    const token = localStorage.getItem("access_token");

    if (!token) {
      console.error("❌ Aucun token trouvé, utilisateur non connecté");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/mbti", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ mbti_type: mbtiType }),
      });

      if (!res.ok) {
        throw new Error("Erreur API : " + res.status);
      }

      console.log("✅ Type MBTI enregistré !");
    } catch (err) {
      console.error("❌ Erreur lors de l’envoi du MBTI :", err);
    }

  };


  return (
    <main className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Questionnaire MBTI</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-4xl">
        {questions.map((question) => (                                                      // Génération des questions
          <div key={question.id} className="flex flex-col gap-2">
            <p className="font-medium">{question.text}</p>
            <div className="flex justify-between gap-4">
              {[1, 2, 3, 4, 5, 6].map((value) => (                                         // 6 boutons radio par question
                <label key={value} className="flex flex-col items-center text-sm">
                  <input                                                                   
                    type="radio"
                    name={`question-${question.id}`}                                        // Oblige le navigateur à choisir une seule réponse par question
                    value={value}                                                          // Le score (1 à 6)
                    checked={responses[question.id] === value}                             // Affiche la réponse choisie
                    onChange={() => handleChange(question.id, value)}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Envoyer mes réponses
        </button>

        {mbtiResult && (
          <div className="mt-8 text-center">
            <p className="text-lg">🧬 Votre type MBTI est :</p>
            <p className="text-3xl font-bold text-blue-600">{mbtiResult}</p>
          </div>
        )}

      </form>
    </main>
  );
}
