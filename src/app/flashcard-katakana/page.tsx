"use client";

import { useState, useEffect } from "react";
import { useGenerateHiraganaOrKatakanaQuestions } from "@/utils/common";
import { FlashcardTemplate } from "@/components/organism/flashcardTemplate";
import {
  katakanaOnly,
  katakanaToRomaji,
  readableKatakana,
} from "@/constant/katakana";

const FlashcardKatakana = () => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);

  const questions = useGenerateHiraganaOrKatakanaQuestions({
    dataset: katakanaOnly,
    readableData: readableKatakana,
    japaneseToRomaji: katakanaToRomaji,
  });

  if (!rendered) return null;

  return <FlashcardTemplate questions={questions} />;
};

export default FlashcardKatakana;
