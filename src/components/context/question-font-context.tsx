"use client";

import { Fonts } from "@/constant/fonts";
import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from "react";

const QuestionFontContext = createContext<{
    setQuestionFont: Dispatch<SetStateAction<string>>;
    questionFont: string;
}>({
    questionFont: "",
    setQuestionFont: () => { }
})

export const useQuestionFont = () => useContext(QuestionFontContext);

export const QuestionFontProvider = ({ children }: { children: ReactNode }) => {
    const [questionFont, setQuestionFont] = useState(Fonts.Hina_Mincho as string)
    return <QuestionFontContext.Provider value={{
        questionFont,
        setQuestionFont
    }}>{children}</QuestionFontContext.Provider>
}