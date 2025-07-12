"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import { MBTIQuestion } from "@/components/MBTIQuestion";
import { calculateMbtiType } from "@/utils/calculateMbtiType";
import { Button } from "@/components/ui/button"; // bouton stylisé Shadcn

export default function MBTIPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleAnswerChange = (index: number, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const handleSubmit = async () => {
    if (Object.keys(answers).length !== questions.length) {
      alert("⚠️ Merci de répondre à toutes les questions.");
      return;
    }

    const mbtiType = calculateMbtiType(answers);
    const token = localStorage.getItem("access_token");
    if (!token) {
      console.error("❌ Aucun token trouvé.");
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

      alert(`✅ Ton type MBTI est ${mbtiType}`);
    } catch (err) {
      console.error("❌ Erreur d'envoi :", err);
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
        Questionnaire MBTI
      </h1>

      <div className="space-y-10">
        {questions.map((question, index) => (
          <MBTIQuestion
            key={index}
            index={index}
            question={question}
            value={answers[index] || 0}
            onChange={handleAnswerChange}
          />
        ))}
      </div>

      <div className="text-center">
        <Button onClick={handleSubmit} className="text-lg px-6 py-3">
          Envoyer mes réponses
        </Button>
      </div>
    </main>
  );
}
