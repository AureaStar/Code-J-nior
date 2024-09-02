'use client';

import Link from "next/link";

type CardProps = {
    title: string;
  };

export default function Card({title}: CardProps) {
    return (
        <div className="flex flex-col items-center justify-between py-8 px-4 rounded-2xl bg-grtb lg:gap-4 lg:w-1/4 lg:px-8">
            <h1 className="text-lg md:text-2xl text-center text-w font-mont font-bold">{title}</h1>
            <p className="text-sm md:text-xl text-center text-w font-mont">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi inventore, odit quas numquam provident dolorum consequatur impedit consectetur.</p>
            <Link href={'/about'} className="bg-a text-re font-mont font-medium px-2 md:px-4 py-2 mt-4 rounded-xl">Saiba Mais</Link>
        </div>
    )
}