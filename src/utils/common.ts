import { FlashcardQuestionType } from "@/components/organism/flashcardTemplate";

export const generateUniqueRandomNumbers = (
  max: number,
  count: number
): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers);
};

export const generateRandomNumbers = (max: number, count: number): number[] => {
  const numbers = [];
  while (numbers.length < count) {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    numbers.push(randomNumber);
  }
  return numbers;
};

export function shuffleArray<T>(array: T[]) {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const generateNeighboringNumbers = (
  initialNumber: number,
  ceiling: number,
  floor: number
) => {
  let prev = initialNumber - 1;
  if (prev < floor) {
    prev = ceiling;
  }
  let next = initialNumber + 1;
  if (next > ceiling) {
    next = floor;
  }

  return [prev, initialNumber, next];
};

export const useGenerateHiraganaOrKatakanaQuestions = ({
  dataset,
  readableData,
  japaneseToRomaji,
}: {
  dataset: string[];
  readableData: string[];
  japaneseToRomaji: { [key: string]: string };
}) => {
  const datasetLength = dataset.length;

  const randomNumbers = generateUniqueRandomNumbers(datasetLength, 10);

  const questions: FlashcardQuestionType[] = randomNumbers?.map((dataIndex) => {
    const actualDataIndex = dataIndex - 1;
    const answersIndexes = generateNeighboringNumbers(
      actualDataIndex,
      datasetLength,
      0
    );
    const answersShuffled = shuffleArray(answersIndexes);

    return {
      question: readableData[actualDataIndex],
      answers: answersShuffled.map((answerIndex) => ({
        text: japaneseToRomaji[readableData?.[answerIndex]],
        isCorrect: answerIndex === actualDataIndex,
      })),
    };
  });

  return questions;
};
