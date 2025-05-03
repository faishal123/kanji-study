import { useGenerateHiraganaOrKatakanaQuestions } from "@/utils/common";
import { FlashcardTemplate } from "@/components/organism/flashcardTemplate";
import {
  katakanaOnly,
  katakanaToRomaji,
  readableKatakana,
} from "@/constant/katakana";

const FlashcardKatakana = () => {
  const questions = useGenerateHiraganaOrKatakanaQuestions({
    dataset: katakanaOnly,
    readableData: readableKatakana,
    japaneseToRomaji: katakanaToRomaji,
  });

  return <FlashcardTemplate questions={questions} />;
};

export default FlashcardKatakana;
