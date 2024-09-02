'use client';

import Question from "./question";
import { useState } from 'react';

const questions = [
    {
        question: "1. Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
        question: "2. Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
        question: "3. Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
        question: "4. Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
        question: "5. Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
]

export default function FAQ() {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };


    return (
        <section className="flex flex-col items-center justify-center px-8 py-4 bg-grar2 md:w-full md:pt-12 md:pb-16">
            <h1 className="text-2xl md:text-4xl text-w font-intro text-center mb-4 md:mb-8">Perguntas Frequentes</h1>
            {questions.map((q, i) => (
                <Question 
                    open={openIndex === i} 
                    onClick={() => toggleOpen(i)} 
                    key={i} 
                    question={q.question} 
                    answer={q.answer} />
            ))}
        </section>
    )
}