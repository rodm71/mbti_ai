import { questions } from "@/data/questions";

// On définit les lettres MBTI possibles
type MBTILetter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

// Fonction principale : prend les réponses et retourne un type MBTI (ex : "INFJ")
export function calculateMbtiType(responses: Record<number, number>): string {
  // Initialise un score à 0 pour chaque lettre MBTI
  const scores: Record<MBTILetter, number> = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0,
  };

  // Parcourt toutes les questions
  for (const question of questions) {
    const userScore = responses[question.id]; // Récupère la réponse de l’utilisateur
    if (userScore === undefined) continue;   // Ignore si non répondu

    const favorDirectionA = userScore >= 4;  // Score ≥ 4 = favorise la lettre A

    // On récupère les deux lettres concernées par la dimension (ex : "E" et "I")
    const [letterA, letterB] = question.dimension as unknown as [MBTILetter, MBTILetter];

    // Si la réponse favorise la direction A selon la question
    if (
      (question.direction === "A" && favorDirectionA) ||
      (question.direction === "B" && !favorDirectionA)
    ) {
      scores[letterA] += 1;
    } else {
      scores[letterB] += 1;
    }
  }

  // On déduit le type final en comparant chaque paire
  const mbti =
    (scores.E >= scores.I ? "E" : "I") +
    (scores.S >= scores.N ? "S" : "N") +
    (scores.T >= scores.F ? "T" : "F") +
    (scores.J >= scores.P ? "J" : "P");

  return mbti;
}
