"use client"

import { ParagraphRenderer } from "@/components/organism/paragraphRenderer"
import { useFetchRandomParagraph } from "@/service/paragraph"

export default function Page() {
  const { data, isPending } = useFetchRandomParagraph()

  console.log({ data, isPending })

  if (!data) {
    return <div>No Data</div>
  }
  return (
    <div className="p-4">
      <ParagraphRenderer paragraph={data} />
    </div>
  )
}