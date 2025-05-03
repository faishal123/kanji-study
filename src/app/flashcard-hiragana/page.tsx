import { useGenerateHiraganaOrKatakanaQuestions } from "@/utils/common";
import {
  hiraganaOnly,
  readableHiragana,
  hiraganaToRomaji,
} from "@/constant/hiragana";
import { FlashcardTemplate } from "@/components/organism/flashcardTemplate";

const FlashcardHiragana = () => {
  const questions = useGenerateHiraganaOrKatakanaQuestions({
    dataset: hiraganaOnly,
    readableData: readableHiragana,
    japaneseToRomaji: hiraganaToRomaji,
  });

  return <FlashcardTemplate questions={questions} />;
};

export default FlashcardHiragana;
