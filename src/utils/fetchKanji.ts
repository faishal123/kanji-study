export const fetchKanjiList = async (
  kanjiType: string,
  onComplete: (data: string[]) => void
) => {
  try {
    const response = await fetch(`https://kanjiapi.dev/v1/kanji/${kanjiType}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    onComplete(data);
  } catch (error) {
    console.error("Error fetching kanji list:", error);
  }
};
