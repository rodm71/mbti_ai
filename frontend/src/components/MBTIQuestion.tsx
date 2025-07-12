"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MBTIQuestion as MBTIQuestionType } from "@/types/mbti";

type Props = {
  question: MBTIQuestionType;
  index: number;
  value: number;
  onChange: (index: number, value: number) => void;
};

export function MBTIQuestion({ question, index, value, onChange }: Props) {
  return (
    <div className="p-4 rounded-lg border bg-white dark:bg-zinc-900 shadow-md space-y-4">
      <p className="text-lg font-medium text-gray-800 dark:text-white">{question.text}</p>

      <RadioGroup
        value={value.toString()}
        onValueChange={(val) => onChange(index, parseInt(val))}
        className="flex justify-between items-center"
      >
        {[1, 2, 3, 4, 5, 6].map((val) => (
          <div key={val} className="flex flex-col items-center">
            <RadioGroupItem
              value={val.toString()}
              id={`${question.id}-${val}`}
              className="h-6 w-6 border-2 border-gray-400"
            />
            <Label htmlFor={`${question.id}-${val}`} className="text-sm text-gray-600 mt-1">
              {val}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
