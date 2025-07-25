"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { mbtiData } from "@/data/mbtiData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Liste ordonnée des types pour la navigation
const mbtiOrder = mbtiData.map((type) => type.mbti_type);

export default function TypeDetailPage() {
  const params = useParams<{ mbti_type: string }>();
  const mbti_type = params?.mbti_type;

  const data = mbtiData.find(
    (type) => type.mbti_type.toLowerCase() === mbti_type?.toLowerCase()
  );

  if (!data) return notFound();

  const currentIndex = mbtiOrder.findIndex(
    (t) => t.toLowerCase() === mbti_type?.toLowerCase()
  );
  const prevType =
    mbtiOrder[(currentIndex - 1 + mbtiOrder.length) % mbtiOrder.length];
  const nextType = mbtiOrder[(currentIndex + 1) % mbtiOrder.length];

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] dark:from-zinc-900 dark:to-zinc-800 p-6">
      <Card className="max-w-4xl w-full rounded-2xl border-2 shadow-lg bg-white dark:bg-zinc-900 space-y-6">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-4xl font-bold text-zinc-800 dark:text-white uppercase">
            {data.title}
          </CardTitle>
          <CardDescription className="text-zinc-600 dark:text-zinc-300">
            Type MBTI détaillé
          </CardDescription>
          <Badge
            className={`text-lg px-4 py-2 text-white ${data.color}`}
          >
            {data.mbti_type}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-8 px-8 pb-10">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-700 dark:text-white">
              Description générale
            </h2>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-200 whitespace-pre-line">
              {data.description}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-zinc-700 dark:text-white">
              Anecdote intéressante
            </h2>
            <p className="text-lg italic text-zinc-700 dark:text-zinc-200">
              {data.anecdote}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-zinc-700 dark:text-white">
              Représentation mondiale
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-200">
              {data.population}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">
              Points forts
            </h2>
            <ul className="list-disc list-inside space-y-1 text-lg text-zinc-700 dark:text-zinc-200">
              {data.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">
              Points faibles
            </h2>
            <ul className="list-disc list-inside space-y-1 text-lg text-zinc-700 dark:text-zinc-200">
              {data.weaknesses.map((weakness, index) => (
                <li key={index}>{weakness}</li>
              ))}
            </ul>
          </section>
        </CardContent>

        {/* Navigation bas de page */}
        <div className="flex justify-between px-8 pb-8">
          <Link href="/types">
            <span className="text-sm text-zinc-600 dark:text-zinc-300 hover:underline">
              ← Retour à la liste
            </span>
          </Link>
          <div className="flex space-x-4">
            <Link href={`/types/${prevType.toLowerCase()}`}>
              <span className="text-sm text-zinc-600 dark:text-zinc-300 hover:underline">
                ← {prevType}
              </span>
            </Link>
            <Link href={`/types/${nextType.toLowerCase()}`}>
              <span className="text-sm text-zinc-600 dark:text-zinc-300 hover:underline">
                {nextType} →
              </span>
            </Link>
          </div>
        </div>
      </Card>
    </main>
  );
}
