import { questions } from "@/data/questions";

// On définit les lettres MBTI possibles
type MBTILetter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

// ✅ Fonction qui prend "EI" et retourne ["E", "I"]
function getLettersFromDimension(dimension: string): [MBTILetter, MBTILetter] {
  return [dimension[0] as MBTILetter, dimension[1] as MBTILetter];
}

// ✅ Fonction principale : retourne un type MBTI (ex : "INFJ")
export function calculateMbtiType(responses: Record<number, number>): string {
  const scores: Record<MBTILetter, number> = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
  };

  for (const question of questions) {
    const userScore = responses[question.id];
    if (userScore === undefined) continue;

    const favorDirectionA = userScore >= 4;
    const [letterA, letterB] = getLettersFromDimension(question.dimension);

    if ((question.direction === "A" && favorDirectionA) || (question.direction === "B" && !favorDirectionA)) {
      scores[letterA] += 1;
    } else {
      scores[letterB] += 1;
    }
  }

  const mbti =
    (scores.E >= scores.I ? "E" : "I") +
    (scores.S >= scores.N ? "S" : "N") +
    (scores.T >= scores.F ? "T" : "F") +
    (scores.J >= scores.P ? "J" : "P");

  return mbti;
}

// ✅ Fonction scores bruts : retourne les scores des 8 lettres
export function calculateMbtiScores(responses: Record<number, number>): Record<MBTILetter, number> {
  const scores: Record<MBTILetter, number> = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
  };

  for (const question of questions) {
    const userScore = responses[question.id];
    if (userScore === undefined) continue;

    const favorDirectionA = userScore >= 4;
    const [letterA, letterB] = getLettersFromDimension(question.dimension);

    if ((question.direction === "A" && favorDirectionA) || (question.direction === "B" && !favorDirectionA)) {
      scores[letterA] += 1;
    } else {
      scores[letterB] += 1;
    }
  }

  return scores;
}
