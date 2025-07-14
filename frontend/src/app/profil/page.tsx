"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


type MBTIResult = {
  mbti_type: string;
  ie: number;
  sn: number;
  ft: number;
  jp: number;
};

export default function ProfilPage() {
  const [mbti, setMbti] = useState<MBTIResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMbti = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("Aucun token trouvé. Veuillez vous connecter.");
        return;
      }

      try {
        const res = await fetch("http://127.0.0.1:8000/mbti/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) throw new Error("Impossible de récupérer les données MBTI");
        const data = await res.json();
        setMbti(data);
      } catch (err) {
        console.error(err);
        setError("Erreur lors du chargement de ton profil MBTI.");
      }
    };

    fetchMbti();
  }, []);

  if (error) {
    return (
      <main className="flex items-center justify-center min-h-screen p-4">
        <Alert variant="destructive">
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </main>
    );
  }

  if (!mbti) {
    return (
      <main className="flex items-center justify-center min-h-screen p-4 text-xl text-zinc-700 dark:text-zinc-200">
        Chargement de ton profil...
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] dark:from-zinc-900 dark:to-zinc-800">
      <Card className="w-full max-w-md shadow-xl rounded-xl border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-zinc-800 dark:text-white">🧠 Ton Profil MBTI</CardTitle>
          <CardDescription className="text-zinc-600 dark:text-zinc-300">Voici ton type MBTI et tes préférences</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 px-6 pb-6">
          <Badge className="self-center text-lg px-4 py-2 bg-purple-600 text-white dark:bg-purple-500">{mbti.mbti_type}</Badge>

          <Dimension label="Introversion (I) / Extraversion (E)" percent={mbti.ie} color="bg-blue-600" dimension="I" />
          <Dimension label="Sensation (S) / Intuition (N)" percent={mbti.sn} color="bg-green-600" dimension="S" />
          <Dimension label="Feeling (F) / Thinking (T)" percent={mbti.ft} color="bg-pink-600" dimension="F" />
          <Dimension label="Jugement (J) / Perception (P)" percent={mbti.jp} color="bg-yellow-500" dimension="J" />

          <Button
            onClick={() => window.location.href = "/mbti"}
            className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400 text-white text-lg mt-4"
          >
            Refaire le test MBTI
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}

function Dimension({ label, percent, color, dimension }: { label: string; percent: number; color: string; dimension: string }) {
  return (
    <div className="space-y-1 w-full">
      <div className="flex justify-between text-sm font-semibold text-zinc-800 dark:text-zinc-200">
        <span>{label}</span>
        <span>{percent}% {dimension}</span>
      </div>
      <Progress value={percent} indicatorColor={color} />
    </div>
  );
}
