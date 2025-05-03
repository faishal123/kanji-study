import { useQuery } from "@tanstack/react-query";
import { fetchKanjiDetail } from "./request";

export const useFetchKanjiDetail = ({
  kanji,
  level,
}: {
  kanji: string;
  level: string;
}) => {
  return useQuery({
    queryKey: ["kanjiDetail", kanji, level],
    queryFn: () => fetchKanjiDetail({ kanji, level }),
  });
};
