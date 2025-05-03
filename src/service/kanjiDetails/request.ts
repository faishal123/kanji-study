export const fetchKanjiDetail = async ({
  kanji,
  level,
}: {
  kanji: string;
  level: string;
}) => {
  const response = await fetch(
    `/api/kanji-details?kanji=${kanji}&level=${level}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch kanji details: ${response.statusText}`);
  }

  return response.json(); // Parse and return the JSON response
};
