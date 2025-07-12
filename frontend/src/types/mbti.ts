// src/types/mbti.ts

// Le type d'une question MBTI
export type MBTIQuestion = {
  id: number;
  text: string;
  dimension: "EI" | "SN" | "TF" | "JP";
  direction: "A" | "B";
};
