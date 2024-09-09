'use client';

import Image from "next/image";
import Link from "next/link";

type CardProps = {
    title: string;
    description: string;
    image: string;
  };

export default function Card({title, description, image}: CardProps) {
    return (
        <div className="flex flex-col items-center justify-center py-4 px-4 rounded-2xl gap-4 md:h-full md:w-1/4">
            <Image src={image} width={500} height={500} alt="Placeholder" className="w-72 h-48" />
            <h1 className="text-lg md:text-2xl text-center text-w font-mont font-medium">{title}</h1>
            <p className="text-sm md:text-xl text-center text-w font-mont">{description}</p>
        </div>
    )
}