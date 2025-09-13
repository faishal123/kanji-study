import { JapaneseParagraph, JapaneseToken } from "@/service/paragraph/model";
import { textOnlyHasHiraganaOrKatakana } from "@/utils/common";
import { PopoverComponent } from "../atoms/popover";
import { useState } from "react";
import { cn } from "@/lib/utils";

const KanjiWithFurigana = ({ kanji, furigana }: { kanji: string, furigana: string }) => {
  return <ruby>
    {kanji}
    <rt>{furigana}</rt>
  </ruby>
}

const Kanji = ({ token }: { token: JapaneseToken }) => {
  const japanese = token.japanese
  const components = token.components
  if (components) {
    const japaneseSplitted = japanese.split('')
    return japaneseSplitted.map((char, i) => {
      const kanjiComponent = components.find(c => c.kanji === char)
      if (kanjiComponent) {
        return <KanjiWithFurigana kanji={kanjiComponent.kanji} furigana={kanjiComponent.furigana || ""} key={JSON.stringify(kanjiComponent) + i} />
      }
      return <div key={char + i}>{char}</div>
    })
  }
  return <KanjiWithFurigana kanji={japanese} furigana={token?.furigana || ""} />
}

const TokenPopoverContent = ({ token }: { token: JapaneseToken }) => {
  const furigana = token.furigana
  const japanese = token.japanese
  const showFurigana = furigana && furigana !== japanese
  return <div className="flex flex-col gap-4">
    <div>
      <div>Japanese</div>
      <div className="text-5xl">{japanese}</div>
    </div>
    {showFurigana && <div>
      <div>Furigana</div>
      <div className="text-5xl">{furigana}</div>
    </div>}
    <div>
      <div>Romaji</div>
      <div className="text-5xl">{token.romanji}</div>
    </div>
    <div>
      <div>English</div>
      <div className="text-5xl">{token.english}</div>
    </div>
  </div >
}

const Token = ({ token }: { token: JapaneseToken }) => {
  const [showHighlight, setShowHighlight] = useState(false)
  const components = token.components
  const japanese = token.japanese
  const furigana = token.furigana
  const hasKanji = (!!furigana || !!components) && !textOnlyHasHiraganaOrKatakana(japanese)

  return <PopoverComponent
    onOpenChange={open => {
      setShowHighlight(open)
    }}
    trigger={<div className={cn(["transition-all cursor-pointer flex items-end", showHighlight ? "bg-green-100 dark:bg-[#12ff1220]" : ''])}>{hasKanji ? <Kanji token={token} /> : <div>{japanese}</div>}</div>}
    triggerAsChild
    content={<TokenPopoverContent token={token} />}
    showPopover
  />
}

export const ParagraphRenderer = ({ paragraph }: { paragraph: JapaneseParagraph }) => {
  return <div className="text-5xl flex flex-wrap items-end gap-y-4">
    {
      paragraph.map((token, i) => {
        return <Token key={JSON.stringify(token) + i} token={token} />
      })
    }
  </div>;
}