"use client"; // Ce composant tourne côté navigateur

import { useState } from "react";

export default function MBTIPage() {
  // La liste des questions
  const questions = [
    "Vous arrivez à aller parler à quelqu'un qui vous intéresse",
    "Vous aimez planifier chaque détail avant d'agir",
    "Vous préférez être seul plutôt qu'entouré de monde",
    "Vous prenez des décisions sur un coup de tête",
    "Vous aimez analyser les choses en profondeur",
    "Vous ressentez facilement l'humeur des autres"
  ];

  // state pour stocker les réponses : clé = index question, valeur = score (1-6)
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  // Fonction pour gérer quand un radio bouton change
  const handleChange = (questionIndex: number, value: number) => {
    setAnswers({
      ...answers,
      [questionIndex]: value,
    });
  };

  // Soumission : affichage dans la console pour l'instant
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Réponses : ", answers);

    // Ici tu enverras à ton backend pour calculer le type MBTI
    // Par ex :
    // const res = await fetch("http://127.0.0.1:8000/mbti", { ... })
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Questionnaire MBTI</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((q, index) => (
          <div key={index} className="mb-4">
            <p className="mb-2">{q}</p>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5, 6].map((value) => (
                <label key={value} className="flex flex-col items-center">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={value}
                    checked={answers[index] === value}
                    onChange={() => handleChange(index, value)}
                  />
                  <span className="text-xs">{value}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Envoyer mes réponses
        </button>
      </form>
    </main>
  );
}
