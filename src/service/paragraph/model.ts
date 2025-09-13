export interface KanjiComponent {
  kanji: string;
  furigana?: string;
  romanji: string;
  english: string;
}

export interface JapaneseToken {
  japanese: string;
  furigana?: string;
  romanji: string;
  english: string;
  components?: KanjiComponent[];
}

export type JapaneseParagraph = JapaneseToken[];

