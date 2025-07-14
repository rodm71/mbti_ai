"use client";

import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

// ✅ Liste des types MBTI avec couleur + texte blanc assuré
const mbtiTypes = [
  { type: "INTJ", color: "bg-purple-600" },
  { type: "INTP", color: "bg-indigo-600" },
  { type: "ENTJ", color: "bg-red-600" },
  { type: "ENTP", color: "bg-pink-500" },
  { type: "INFJ", color: "bg-teal-600" },
  { type: "INFP", color: "bg-green-600" },
  { type: "ENFJ", color: "bg-yellow-500" },
  { type: "ENFP", color: "bg-orange-500" },
  { type: "ISTJ", color: "bg-blue-600" },
  { type: "ISFJ", color: "bg-emerald-600" },
  { type: "ESTJ", color: "bg-rose-600" },
  { type: "ESFJ", color: "bg-amber-500" },
  { type: "ISTP", color: "bg-lime-600" },
  { type: "ISFP", color: "bg-cyan-600" },
  { type: "ESTP", color: "bg-violet-600" },
  { type: "ESFP", color: "bg-fuchsia-600" },
];

export default function MBTITypesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] dark:from-zinc-900 dark:to-zinc-800 p-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-zinc-800 dark:text-white">📚 Les 16 Types MBTI</h1>

      {/* ✅ Grille responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {mbtiTypes.map(({ type, color }) => (
          <Link href={`/types/${type.toLowerCase()}`} key={type}>
            <Card className="hover:scale-105 transition-transform shadow-lg rounded-lg overflow-hidden">
              {/* ✅ Couleur en fond + texte blanc forcé */}
              <CardContent className={`flex items-center justify-center h-32 ${color}`}>
                <CardTitle className="text-3xl font-bold text-white">{type}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
