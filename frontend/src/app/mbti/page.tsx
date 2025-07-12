"use client";   // Dit à Next.js : ce composant tourne côté navigateur ➜ autorise les hooks et localStorage

import { useState } from "react";               // Import du hook pour stocker
import { questions } from "@/data/questions";   // Import des questions

export default function MBTIPage() {
  const [responses, setResponses] = useState<Record<number, number>>({});       // Pour stocker les réponses

  const handleChange = (questionId: number, value: number) => {                 // Màj des réponses quand on clic sur un bouton radio
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("✅ Réponses utilisateur :", responses);
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
      </form>
    </main>
  );
}
