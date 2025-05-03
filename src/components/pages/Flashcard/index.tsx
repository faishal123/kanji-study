"use client";

import { Button } from "@/components/atoms/button";
import { CenteredPageWrapper } from "@/components/atoms/centeredPageWrapper";
import { Collapse } from "@/components/atoms/collapse";
import { useState } from "react";
import { CurrentQuestionType } from "@/app/flashcard/[slug]/page";
import { partOfSpeech } from "@/constant/partOfSpeech";
import { BackButton } from "@/components/atoms/backbutton";
import { KanjiDetailsContainer } from "@/components/molecules/kanjiDetailsContainer";

export const Flashcard = ({
  questions,
  level,
}: {
  questions: CurrentQuestionType[];
  level: string;
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
        <KanjiDetailsContainer level={level} showPopover={state?.showAnswers}>
          {currentQuestion?.kanji}
        </KanjiDetailsContainer>
      </div>
      <Collapse open={state?.showAnswers}>
        <div className="pt-3 flex flex-col gap-1">
          {currentQuestion?.sense?.map((sense, i) => (
            <div key={JSON.stringify(sense)}>
              <div className="text-sm font-light text-gray-500">
                {sense?.partOfSpeech
                  ?.map((pos) => partOfSpeech[pos])
                  .join("; ")}
              </div>
              <div className="text-lg">
                <span className="text-sm font-light text-gray-500">
                  {i + 1}.{" "}
                </span>
                {sense?.gloss?.map((gloss) => gloss.text).join("; ")}
              </div>
            </div>
          ))}
        </div>
      </Collapse>
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
            {item.kana}
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
