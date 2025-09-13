import { katakanaOnly } from "@/constant/katakana";
import { hiraganaOnly } from "@/constant/hiragana";
import { useFetchKanjiDetail } from "@/service/kanjiDetails";
import { Loading } from "../atoms/loading";
import { PopoverComponent } from "../atoms/popover";

const SingleKanjiDetail = ({
  children,
  level,
}: {
  children: string;
  level: string;
}) => {
  const { data, isLoading } = useFetchKanjiDetail({
    kanji: children,
    // convert from jlpt-1 to n1
    level: `n${level?.split("-")?.[1]}`,
  });

  const dataToRender = [
    {
      title: "Kunyomi",
      data: data?.kunyomi,
      separator: "、",
    },
    {
      title: "Onyomi",
      data: data?.onyomi,
      separator: "、",
    },
    {
      title: "Meaning",
      data: data?.eng,
      separator: "; ",
    },
  ];

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="font-bold text-4xl">{children}</div>
      <div className="mt-5 flex flex-col gap-1">
        {dataToRender?.map((d) => (
          <div key={d?.title}>
            <div className="text-sm text-gray-500">{d?.title}</div>
            <div className="text-lg font-medium">
              {d?.data?.join(d?.separator)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SingleKanji = ({
  children,
  showPopover,
  level,
}: {
  children: string;
  showPopover: boolean;
  level: string;
}) => {
  return <PopoverComponent
    trigger={<span className="cursor-pointer">{children}</span>}
    content={<SingleKanjiDetail level={level}>{children}</SingleKanjiDetail>}
    showPopover={showPopover ? undefined : false}
    triggerAsChild
    contentClassName="w-[100vw] max-w-72"
  />
};

export const KanjiDetailsContainer = ({
  children,
  showPopover,
  level,
}: {
  children: string;
  showPopover: boolean;
  level: string;
}) => {
  const childrenSplitted = children
    ?.split("")
    ?.reduce<{ isKanji: boolean; text: string }[]>((a, c) => {
      if (katakanaOnly?.includes(c) || hiraganaOnly?.includes(c)) {
        return [...a, { isKanji: false, text: c }];
      }
      return [...a, { isKanji: true, text: c }];
    }, []);

  return (
    <>
      {childrenSplitted.map((child, i) => {
        if (child.isKanji) {
          return (
            <SingleKanji level={level} showPopover={showPopover} key={i}>
              {child?.text}
            </SingleKanji>
          );
        }
        return <span key={i}>{child?.text}</span>;
      })}
    </>
  );
};
