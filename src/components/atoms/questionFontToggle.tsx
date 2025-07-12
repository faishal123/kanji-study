"use client";

import { useQuestionFont } from "../context/question-font-context"

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FontVariables } from "@/constant/fonts";


export const QuestionFontToggle = () => {
    const { setQuestionFont, questionFont } = useQuestionFont()

    const fontChoices = Object.keys(FontVariables).map(key => ({
        label: key,
        value: FontVariables[key]
    }))

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <span>Font: {questionFont}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {fontChoices.map((font) => (
                    <DropdownMenuItem
                        key={font.value}
                        onClick={() => setQuestionFont(font.label)}
                    >
                        {font.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}