'use client';

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

type QuestionProps = {
    question: string;
    answer: string;
    open: boolean;
    onClick: () => void;
}

export default function Question({ question, answer, open, onClick }: QuestionProps) {

    const [maxHeight, setMaxHeight] = useState<string>("0px");
    const answerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open) {
            const scrollHeight = answerRef.current ? answerRef.current.scrollHeight : "0px";
            setMaxHeight(`${scrollHeight}px`);
        } else {
            setMaxHeight("0px");
        }
    }, [open]);

    return (
        <div className="flex flex-col gap-2 border py-2 px-4 md:w-1/2 md:items-center md:px-4">
            <div className="flex flex-row text-w md:justify-between md:w-full items-center">
                <p className="text-sm font-mont font-semibold md:text-lg">{question}</p>
                {open ? (
                    <ChevronUp onClick={onClick} className="w-12 h-12 cursor-pointer" />
                ) : (
                    <ChevronDown onClick={onClick} className="w-12 h-12 cursor-pointer" />
                )}
            </div>
            <div
                ref={answerRef}
                style={{ maxHeight: maxHeight }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
            >
                <p className="text-w font-mont text-sm md:text-lg">{answer}</p>
            </div>
        </div>
    )   
}