import { Flashcard } from "@/components/pages/Flashcard";
import { createClient } from "@supabase/supabase-js";
import { Suspense } from "react";
import { Kanji } from "@/models/kanji";

const databaseKey: Record<string, string> = {
  "jlpt-5": "n5-only-words",
  "jlpt-4": "n4-only-words",
  "jlpt-3": "n3-only-words",
  "jlpt-2": "n2-only-words",
  "jlpt-1": "n1-only-words",
};
const generateUniqueRandomNumbers = (max: number, count: number): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers);
};

const generateRandomNumbers = (max: number, count: number): number[] => {
  const numbers = [];
  while (numbers.length < count) {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    numbers.push(randomNumber);
  }
  return numbers;
};

export type CurrentQuestionType = {
  kanji: string;
  kana: Kanji["kana"];
  answers: {
    kana: string;
    isCorrect: boolean;
  }[];
  sense: Kanji["sense"];
};

const divideQuestions = (data: Kanji[]) => {
  const questions: Kanji[][] = [];
  const chunkSize = 3;

  for (let i = 0; i < data.length; i += chunkSize) {
    questions.push(data.slice(i, i + chunkSize));
  }

  return questions;
};

export default async function FlashcardPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_ANON_KEY || ""
  );

  const { count } = await supabase
    .from(databaseKey[slug])
    .select("*", { count: "exact", head: true });

  const randomNumbers = generateUniqueRandomNumbers(count || 0, 30);
  const correctIndexes = generateRandomNumbers(3, 10);

  const { data } = await supabase
    .from(databaseKey[slug])
    .select("*")
    .or(`id.in.(${randomNumbers.join(",")})`);

  const questionsRaw = divideQuestions(data || []);

  const questions = questionsRaw?.map((questionRaw, parentIndex) =>
    questionRaw?.reduce<CurrentQuestionType>(
      (a, c, i) => {
        const currentIndex = i + 1;
        if (currentIndex === correctIndexes[parentIndex]) {
          return {
            ...a,
            kanji: c?.kanji,
            sense: c?.sense,
            kana: c?.kana,
            answers: [
              ...a?.answers,
              {
                kana: c?.kana?.[0]?.text,
                isCorrect: true,
              },
            ],
          };
        }
        return {
          ...a,
          answers: [
            ...a?.answers,
            {
              kana: c?.kana?.[0]?.text,
              isCorrect: false,
            },
          ],
        };
      },
      { kanji: "", answers: [], kana: [], sense: [] }
    )
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {data && <Flashcard questions={questions} />}
    </Suspense>
  );
}
