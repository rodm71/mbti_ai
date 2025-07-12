// frontend/src/data/questions.ts
import { MBTIQuestion } from "@/types/mbti";

export const questions: MBTIQuestion[] = [
  // EI - Extraversion vs Introversion
  { id: 1, text: "Vous aimez être entouré(e) de gens et socialiser souvent.", dimension: "EI", direction: "A" },
  { id: 2, text: "Vous préférez les activités solitaires aux événements sociaux.", dimension: "EI", direction: "B" },
  { id: 3, text: "Vous trouvez facilement de l'énergie dans les interactions sociales.", dimension: "EI", direction: "A" },
  { id: 4, text: "Vous avez besoin de temps seul(e) pour recharger vos batteries.", dimension: "EI", direction: "B" },
  { id: 5, text: "Vous initiez souvent les conversations.", dimension: "EI", direction: "A" },
  { id: 6, text: "Vous attendez que les autres fassent le premier pas pour parler.", dimension: "EI", direction: "B" },
  { id: 7, text: "Vous vous sentez à l'aise dans les grands groupes.", dimension: "EI", direction: "A" },
  { id: 8, text: "Les groupes nombreux vous fatiguent rapidement.", dimension: "EI", direction: "B" },
  { id: 9, text: "Vous parlez souvent sans trop réfléchir.", dimension: "EI", direction: "A" },
  { id: 10, text: "Vous préférez écouter avant de parler.", dimension: "EI", direction: "B" },

  // SN - Sensing vs Intuition
  { id: 11, text: "Vous vous concentrez sur les faits concrets plutôt que sur les idées abstraites.", dimension: "SN", direction: "A" },
  { id: 12, text: "Vous aimez explorer des concepts théoriques.", dimension: "SN", direction: "B" },
  { id: 13, text: "Vous préférez apprendre en observant des exemples concrets.", dimension: "SN", direction: "A" },
  { id: 14, text: "Vous aimez faire des liens entre des idées abstraites.", dimension: "SN", direction: "B" },
  { id: 15, text: "Vous remarquez les détails pratiques dans votre environnement.", dimension: "SN", direction: "A" },
  { id: 16, text: "Vous percevez rapidement les modèles et les tendances.", dimension: "SN", direction: "B" },
  { id: 17, text: "Vous êtes terre-à-terre et réaliste.", dimension: "SN", direction: "A" },
  { id: 18, text: "Vous êtes attiré(e) par les idées nouvelles et les possibilités.", dimension: "SN", direction: "B" },
  { id: 19, text: "Vous avez une bonne mémoire des faits.", dimension: "SN", direction: "A" },
  { id: 20, text: "Vous imaginez facilement ce qui pourrait être.", dimension: "SN", direction: "B" },

  // TF - Thinking vs Feeling
  { id: 21, text: "Vous prenez des décisions de manière logique et objective.", dimension: "TF", direction: "A" },
  { id: 22, text: "Vous tenez compte des émotions des autres dans vos décisions.", dimension: "TF", direction: "B" },
  { id: 23, text: "Vous appréciez les discussions rationnelles.", dimension: "TF", direction: "A" },
  { id: 24, text: "Vous cherchez à préserver l'harmonie dans vos relations.", dimension: "TF", direction: "B" },
  { id: 25, text: "Vous êtes à l'aise avec la critique si elle est justifiée.", dimension: "TF", direction: "A" },
  { id: 26, text: "Vous prenez souvent en compte les besoins émotionnels des autres.", dimension: "TF", direction: "B" },
  { id: 27, text: "Vous séparez facilement vos émotions de vos décisions.", dimension: "TF", direction: "A" },
  { id: 28, text: "Vous vous mettez facilement à la place des autres.", dimension: "TF", direction: "B" },
  { id: 29, text: "Vous valorisez la justice avant tout.", dimension: "TF", direction: "A" },
  { id: 30, text: "Vous valorisez la compassion avant tout.", dimension: "TF", direction: "B" },

  // JP - Judging vs Perceiving
  { id: 31, text: "Vous aimez planifier les choses à l'avance.", dimension: "JP", direction: "A" },
  { id: 32, text: "Vous préférez rester flexible et ouvert aux imprévus.", dimension: "JP", direction: "B" },
  { id: 33, text: "Vous suivez souvent un emploi du temps précis.", dimension: "JP", direction: "A" },
  { id: 34, text: "Vous aimez improviser selon le moment.", dimension: "JP", direction: "B" },
  { id: 35, text: "Vous terminez vos tâches bien avant la date limite.", dimension: "JP", direction: "A" },
  { id: 36, text: "Vous travaillez souvent à la dernière minute.", dimension: "JP", direction: "B" },
  { id: 37, text: "Vous aimez avoir des choses décidées et organisées.", dimension: "JP", direction: "A" },
  { id: 38, text: "Vous préférez garder toutes les options ouvertes.", dimension: "JP", direction: "B" },
  { id: 39, text: "Vous êtes ponctuel et structuré.", dimension: "JP", direction: "A" },
  { id: 40, text: "Vous êtes spontané et adaptable.", dimension: "JP", direction: "B" },

  // Reprise équilibrée (5 par dimension encore)
  { id: 41, text: "Vous aimez les environnements dynamiques avec beaucoup d'interactions.", dimension: "EI", direction: "A" },
  { id: 42, text: "Vous évitez les événements trop bruyants ou surpeuplés.", dimension: "EI", direction: "B" },
  { id: 43, text: "Vous aimez manipuler des objets concrets.", dimension: "SN", direction: "A" },
  { id: 44, text: "Vous préférez penser à ce qui pourrait être plutôt qu'à ce qui est.", dimension: "SN", direction: "B" },
  { id: 45, text: "Vous restez calme dans des situations stressantes.", dimension: "TF", direction: "A" },
  { id: 46, text: "Vous ressentez intensément les émotions des autres.", dimension: "TF", direction: "B" },
  { id: 47, text: "Vous faites souvent des to-do lists.", dimension: "JP", direction: "A" },
  { id: 48, text: "Vous préférez vivre au jour le jour.", dimension: "JP", direction: "B" },
  { id: 49, text: "Vous vous exprimez facilement à l'oral.", dimension: "EI", direction: "A" },
  { id: 50, text: "Vous réfléchissez longuement avant de parler.", dimension: "EI", direction: "B" },
];
