import { BackButton } from "@/components/atoms/backbutton";
import { Button } from "@/components/atoms/button";
import { CenteredPageWrapper } from "@/components/atoms/centeredPageWrapper";
import { games } from "@/constant/games";

export default function FlashcardPage() {
  return (
    <CenteredPageWrapper>
      <BackButton />
      <div>
        <div className="text-4xl font-bold">{games.flashcard.name}</div>
        <div className="text-sm font-light text-gray-500">
          {games.flashcard.englishName}
        </div>
      </div>
      <div className="mt-4">
        <div>
          <div className="text-xl font-bold">レベルを選択してください</div>
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
