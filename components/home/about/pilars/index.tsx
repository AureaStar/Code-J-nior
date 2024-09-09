'use client';

import Title from "@/components/title";
import Card from "./card";
import { Compass, Target, Shield } from 'lucide-react';
import { use, useEffect, useState } from "react";
import { get } from "http";
import getApi from "@/api/get-sessao";

type ApiProps = {
    id: number;
    title: string;
    text: string;
}

type ApiData = {
    identities: ApiProps[];
    status: number;
}

export default function Pilares() {

    const [cards, setCards] = useState<ApiProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {identities} = await getApi();
                setCards(identities);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="flex flex-col justify-center items-center py-16 gap-16 w-full">
            <div className="flex flex-col justify-center items-center gap-4">
                <Title color="w">Nossos Pilares</Title>
            </div>
            <div className="flex flex-col items-center w-full p-0 gap-8 md:flex-row md:justify-center">
                <div className="flex flex-col items-center w-full p-0 gap-12 md:px-8 lg:px-0 md:flex-row md:justify-center">
                    {cards.map((card, i) => (
                        <Card key={i} id={card.id} title={card.title} text={card.text} icon={Shield} />
                    ))}
                </div>
            </div>
        </section>
    )
}