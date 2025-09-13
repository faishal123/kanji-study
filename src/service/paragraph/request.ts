import { JapaneseParagraph } from "./model"

export const fetchRandomParagraph = async (): Promise<JapaneseParagraph | undefined> => {
  const response = await fetch('/api/paragraph')

  if (!response.ok) {
    throw new Error(`Failed to fetch paragraph: ${response.statusText}`)
  }

  return response.json() // Parse and return the JSON response
}