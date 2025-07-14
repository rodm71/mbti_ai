"use client";

import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mbtiData } from "@/data/mbtiData";

export default function TypeDetailPage({ params }: { params: { mbti_type: string } }) {
  const { mbti_type } = params;

  const data = mbtiData.find(
    (type) => type.mbti_type.toLowerCase() === mbti_type.toLowerCase()
  );

  if (!data) notFound();

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] dark:from-zinc-900 dark:to-zinc-800">
      <Card className="max-w-3xl w-full rounded-xl border-2 shadow-lg bg-white dark:bg-zinc-900">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-zinc-800 dark:text-white capitalize">
            {data.title}
          </CardTitle>
          <CardDescription className="text-zinc-600 dark:text-zinc-300">
            Type MBTI détaillé
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 px-8 pb-8">
          <Badge className={`self-center text-lg px-4 py-2 text-white ${data.color}`}>
            {data.mbti_type}
          </Badge>
          <p className="text-zinc-700 dark:text-zinc-200 text-lg leading-relaxed text-justify whitespace-pre-line">
            {data.description}
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
