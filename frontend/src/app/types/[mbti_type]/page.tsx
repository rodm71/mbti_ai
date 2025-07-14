"use client";

import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ✅ Dictionnaire complet des 16 types avec description et couleur associée
const mbtiData: Record<string, { description: string; color: string }> = {
  intj: {
    description: "Stratégique, visionnaire, indépendant. Les INTJ planifient sur le long terme et poursuivent leurs objectifs avec ténacité.",
    color: "bg-purple-600",
  },
  intp: {
    description: "Analytique, logique, curieux. Les INTP adorent explorer des idées et résoudre des problèmes complexes.",
    color: "bg-indigo-600",
  },
  entj: {
    description: "Leader né, organisé, efficace. Les ENTJ dirigent naturellement et aiment optimiser les systèmes.",
    color: "bg-red-600",
  },
  entp: {
    description: "Innovant, énergique, adaptable. Les ENTP aiment les débats, les idées nouvelles et les challenges intellectuels.",
    color: "bg-pink-500",
  },
  infj: {
    description: "Idéaliste, empathique, réservé. Les INFJ sont motivés par leurs valeurs profondes et un fort désir d’aider les autres.",
    color: "bg-teal-600",
  },
  infp: {
    description: "Créatif, loyal, introspectif. Les INFP cherchent du sens dans tout et sont très sensibles aux émotions.",
    color: "bg-green-600",
  },
  enfj: {
    description: "Charismatique, altruiste, motivant. Les ENFJ inspirent et soutiennent les autres avec énergie.",
    color: "bg-yellow-500",
  },
  enfp: {
    description: "Spontané, enthousiaste, imaginatif. Les ENFP aiment explorer les possibilités et connecter avec les gens.",
    color: "bg-orange-500",
  },
  istj: {
    description: "Responsable, fiable, structuré. Les ISTJ respectent les règles et préfèrent la logique et l’organisation.",
    color: "bg-blue-600",
  },
  isfj: {
    description: "Serviable, patient, attentif. Les ISFJ prennent soin des autres avec discrétion et loyauté.",
    color: "bg-emerald-600",
  },
  estj: {
    description: "Direct, méthodique, gestionnaire. Les ESTJ organisent les gens et les projets pour atteindre des objectifs.",
    color: "bg-rose-600",
  },
  esfj: {
    description: "Chaleureux, sociable, dévoué. Les ESFJ cherchent l’harmonie et prennent soin de leur communauté.",
    color: "bg-amber-500",
  },
  istp: {
    description: "Pragmatique, observateur, efficace. Les ISTP résolvent les problèmes rapidement et aiment bricoler.",
    color: "bg-lime-600",
  },
  isfp: {
    description: "Artistique, discret, spontané. Les ISFP expriment leur créativité et vivent dans le moment présent.",
    color: "bg-cyan-600",
  },
  estp: {
    description: "Énergique, flexible, audacieux. Les ESTP aiment l’action, les expériences nouvelles et les défis.",
    color: "bg-violet-600",
  },
  esfp: {
    description: "Chaleureux, joyeux, vivant. Les ESFP sont spontanés et aiment profiter de la vie.",
    color: "bg-fuchsia-600",
  },
};

export default function TypeDetailPage({ params }: { params: { mbti_type: string } }) {
  const { mbti_type } = params;

  // ✅ Cherche le type dans le dictionnaire, insensible à la casse
  const data = mbtiData[mbti_type.toLowerCase()];

  // ✅ Gestion automatique 404 si type inconnu
  if (!data) notFound();

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] dark:from-zinc-900 dark:to-zinc-800">
      <Card className="max-w-md w-full rounded-xl border-2 shadow-lg bg-white dark:bg-zinc-900">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-zinc-800 dark:text-white capitalize">
            {mbti_type.toUpperCase()}
          </CardTitle>
          <CardDescription className="text-zinc-600 dark:text-zinc-300">Découvre ce type MBTI</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 px-6 pb-6">
          <Badge className={`self-center text-lg px-4 py-2 text-white ${data.color}`}>
            {mbti_type.toUpperCase()}
          </Badge>

          <p className="text-zinc-700 dark:text-zinc-200 text-center text-lg leading-relaxed">
            {data.description}
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
