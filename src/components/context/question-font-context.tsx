"use client";

import { Fonts, FontVariables } from "@/constant/fonts";
import { getFontPreference, setFontPreference } from "@/utils/localstorage";
import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction, useEffect } from "react";

const QuestionFontContext = createContext<{
    setQuestionFont: Dispatch<SetStateAction<string>>;
    questionFont: string;
    questionFontClass: string;
}>({
    questionFont: "",
    setQuestionFont: () => { },
    questionFontClass: "",
})

export const useQuestionFont = () => useContext(QuestionFontContext);

export const QuestionFontProvider = ({ children }: { children: ReactNode }) => {
    const [questionFont, setQuestionFont] = useState('')
    const questionFontClass = FontVariables[questionFont];

    useEffect(() => {
        const storedFont = getFontPreference();
        if (storedFont && Object.keys(FontVariables).includes(storedFont)) {
            setQuestionFont(storedFont);
        } else {
            setQuestionFont(Fonts.Hina_Mincho as string)
        }
    }, [])

    useEffect(() => {
        setFontPreference(questionFont);
    }, [questionFont]);

    return <QuestionFontContext.Provider value={{
        questionFont,
        questionFontClass,
        setQuestionFont
    }}>{questionFont ? children : null}</QuestionFontContext.Provider>
}