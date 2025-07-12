"use client";

import { BackButton } from "@/components/atoms/backbutton";
import { Button } from "@/components/atoms/button";
import { CenteredPageWrapper } from "@/components/atoms/centeredPageWrapper";
import { useQuestionFont } from "@/components/context/question-font-context";
import { games } from "@/constant/games";
import { cn } from "@/lib/utils";

export default function FlashcardPage() {
  const { questionFontClass } = useQuestionFont()
  return (
    <CenteredPageWrapper>
      <BackButton />
      <div>
        <div className={cn(["text-4xl font-bold", questionFontClass])}>{games.flashcard.name}</div>
        <div className="text-sm font-light text-gray-500">
          {games.flashcard.englishName}
        </div>
      </div>
      <div className="mt-4">
        <div>
          <div className={cn(["text-xl font-bold", questionFontClass])}>レベルを選択してください</div>
          <div className="text-sm font-light text-gray-500">
            Choose your level
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(125px,1fr))] gap-x-5 gap-y-2">
          {games.flashcard.levels.map((level) => (
            <Button type="link" key={level.name} href={level.url}>
              {level.name}
            </Button>
          ))}
        </div>
      </div>
    </CenteredPageWrapper>
  );
}
