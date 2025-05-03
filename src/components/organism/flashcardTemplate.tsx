"use client";

import { Button } from "@/components/atoms/button";
import { CenteredPageWrapper } from "@/components/atoms/centeredPageWrapper";
import { Collapse } from "@/components/atoms/collapse";
import { useState } from "react";
import { partOfSpeech } from "@/constant/partOfSpeech";
import { BackButton } from "@/components/atoms/backbutton";
import { ReactNode } from "react";

export type FlashcardQuestionType = {
  question: string;
  answers: {
    text: string;
    isCorrect: boolean;
  }[];
  translations?: {
    partOfSpeech: string[];
    meaning: string[];
  }[];
};

type QuestionRenderer = (children: string, showAnswers: boolean) => ReactNode;

export const FlashcardTemplate = ({
  questions,
  QuestionRenderer = (children) => <>{children}</>,
}: {
  questions: FlashcardQuestionType[];
  QuestionRenderer?: QuestionRenderer;
}) => {
  const [state, setState] = useState({
    currentQuestion: 0,
    showAnswers: false,
  });
  const currentQuestion = questions[state?.currentQuestion];
  const isAtLastQuestion = state?.currentQuestion + 1 === questions.length;

  return (
    <CenteredPageWrapper>
      <BackButton />
      <div className="text-5xl font-bold">
        {QuestionRenderer(currentQuestion?.question, state?.showAnswers)}
      </div>
      {!!currentQuestion?.translations?.length && (
        <Collapse open={state?.showAnswers}>
          <div className="pt-3 flex flex-col gap-1">
            {currentQuestion?.translations?.map((translation, i) => (
              <div key={JSON.stringify(translation)}>
                <div className="text-sm font-light text-gray-500">
                  {translation?.partOfSpeech
                    ?.map((pos) => partOfSpeech[pos])
                    .join("; ")}
                </div>
                <div className="text-lg">
                  <span className="text-sm font-light text-gray-500">
                    {i + 1}.{" "}
                  </span>
                  {translation?.meaning?.join("; ")}
                </div>
              </div>
            ))}
          </div>
        </Collapse>
      )}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-5 gap-y-2 mt-5">
        {currentQuestion?.answers?.map((item, index) => (
          <Button
            className={
              state?.showAnswers
                ? item.isCorrect
                  ? "bg-green-100"
                  : "bg-red-100"
                : ""
            }
            type="button"
            key={index}
            onClick={() => {
              setState((prev) => ({
                ...prev,
                showAnswers: true,
              }));
            }}
          >
            {item.text}
          </Button>
        ))}
        <Collapse open={state?.showAnswers}>
          <Button
            type="button"
            onClick={() => {
              if (isAtLastQuestion) {
                window.location.reload();
              } else {
                setState((prev) => ({
                  ...prev,
                  showAnswers: false,
                  currentQuestion: prev.currentQuestion + 1,
                }));
              }
            }}
          >
            {isAtLastQuestion ? "ゲームを再開する" : "次の質問"}
          </Button>
        </Collapse>
      </div>
    </CenteredPageWrapper>
  );
};
