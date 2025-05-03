"use client";

import { useState, useEffect } from "react";
import { useGenerateHiraganaOrKatakanaQuestions } from "@/utils/common";
import {
  hiraganaOnly,
  readableHiragana,
  hiraganaToRomaji,
} from "@/constant/hiragana";
import { FlashcardTemplate } from "@/components/organism/flashcardTemplate";

const FlashcardHiragana = () => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);

  const questions = useGenerateHiraganaOrKatakanaQuestions({
    dataset: hiraganaOnly,
    readableData: readableHiragana,
    japaneseToRomaji: hiraganaToRomaji,
  });

  if (!rendered) return null;

  return <FlashcardTemplate questions={questions} />;
};

export default FlashcardHiragana;
