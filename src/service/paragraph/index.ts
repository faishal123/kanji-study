import { useQuery } from "@tanstack/react-query"
import { fetchRandomParagraph } from "./request"

export const useFetchRandomParagraph = () => {
  return useQuery({
    queryKey: ['paragraph', 'random'],
    queryFn: async () => fetchRandomParagraph(),
    refetchOnWindowFocus: false,
  })
}