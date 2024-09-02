'use client';

import { LucideIcon } from 'lucide-react';

type CardProps = {
    id: number;
    title: string;
    text: string;
    icon: LucideIcon;
}

export default function Card({ icon: Icon, title, text }: CardProps) {
    return (
        <div className="relative flex flex-col items-center justify-center gap-4 w-52 py-6 md:w-1/3 lg:w-1/4 md:h-80 bg-w rounded-xl shadow-lg">
            {/* <div className="absolute top-[-2.5rem] w-20 h-20 bg-w rounded-full flex items-center justify-center p-2">
                <Icon className="text-a w-full h-full" />
            </div> */}
            <h1 className="text-2xl text-re font-intro">{title}</h1>
            <p className="text-re text-center w-5/6 text-sm lg:text-lg">{text}</p>
        </div>
    )
}