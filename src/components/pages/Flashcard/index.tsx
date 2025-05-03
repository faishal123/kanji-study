"use client";

import { KanjiQuestionType } from "@/app/flashcard/[slug]/page";
import { KanjiDetailsContainer } from "@/components/molecules/kanjiDetailsContainer";
import { FlashcardTemplate } from "@/components/organism/flashcardTemplate";

export const Flashcard = ({
  questions,
  level,
}: {
  questions: KanjiQuestionType[];
  level: string;
}) => {
  return (
    <>
      <FlashcardTemplate
        questions={questions?.map((question) => ({
          index: question?.index,
          question: question?.kanji,
          answers: question?.answers?.map((answer) => ({
            text: answer?.kana,
            isCorrect: answer?.isCorrect,
            index: answer?.index,
          })),
          translations: question?.sense?.map((sense) => ({
            partOfSpeech: sense?.partOfSpeech,
            meaning: sense?.gloss?.map((gloss) => gloss.text),
          })),
        }))}
        QuestionRenderer={(question, showAnswers) => (
          <KanjiDetailsContainer level={level} showPopover={showAnswers}>
            {question}
          </KanjiDetailsContainer>
        )}
      />
    </>
  );
};
