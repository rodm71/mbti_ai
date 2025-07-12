"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export default function ProfilPage() {
  const [mbti, setMbti] = useState<string | null>(null);
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
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Impossible de récupérer le MBTI");
        }

        const data = await res.json(); // { mbti_type: "INTJ" }
        setMbti(data.mbti_type);
      } catch (err) {
        setError("Erreur lors du chargement du MBTI.");
        console.error(err);
      }
    };

    fetchMbti();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center p-4">
      {error ? (
        <Alert variant="destructive" className="max-w-lg w-full">
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : mbti ? (
        <Card className="max-w-md w-full shadow-xl rounded-xl border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white">
              🧠 Ton profil MBTI
            </CardTitle>
            <CardDescription className="text-zinc-600 dark:text-zinc-300">
              Basé sur tes réponses au test
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4 mt-4">
            <Badge className="text-lg px-4 py-2 bg-purple-600 text-black hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400">
              {mbti}
            </Badge>

            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
              Tu peux refaire le test à tout moment pour mettre à jour ton type.
            </p>
            {/* <Button variant="outline">Reprendre le test</Button> */}
          </CardContent>
        </Card>
      ) : (
        <p className="text-zinc-600 dark:text-zinc-300 text-lg">Chargement de ton profil...</p>
      )}
    </main>
  );
}
