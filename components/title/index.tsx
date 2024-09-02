'use client';

type TitleProps = {
    children: React.ReactNode;
    color: string;
}


export default function Title({ children, color }: TitleProps) {
    return (
        <h1 className={`text-2xl md:text-4xl text-${color} font-intro text-center w-full`}>
            {children}
        </h1>
    )
}