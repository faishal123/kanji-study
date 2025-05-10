"use client";
import { Button } from "@/components/atoms/button";
import { CenteredPageWrapper } from "@/components/atoms/centeredPageWrapper";
import { games } from "@/constant/games";

const KanjiList = () => {
  return (
    <CenteredPageWrapper>
      <div className="text-4xl font-bold">ようこそ！</div>
      <div className="grid gap-x-5 gap-y-2 items-stretch mt-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {Object.values(games).map((game) => (
          <Button key={game.name} type="link" href={game.url}>
            <div>
              <div className="text-2xl font-bold">{game.name}</div>
              <div className="text-sm font-light text-gray-500">
                {game.englishName}
              </div>
            </div>
            <div>
              <div className="text-md font-bold">{game.description}</div>
              <div className="text-sm font-light text-gray-500">
                {game.englishDescription}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </CenteredPageWrapper>
  );
};

export default KanjiList;
