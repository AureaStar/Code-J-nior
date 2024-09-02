'use client';

import Card from "./card";

export default function Services() {
    return (
        <section className="flex flex-col items-center justify-center px-8 py-4 bg-w gap-4 md:gap-16 md:h-[32rem] md:my-8">
            <h1 className="text-2xl md:text-4xl text-re font-intro">Serviços</h1>
            <div className="flex flex-col md:flex-row gap-4 md:h-full justify-center md:gap-8">
                <Card title="Sites Expositivos Personalizados" />
                <Card title="Aplicativos" />
                <Card title="Sistemas de Gerênciamento" />
            </div>
        </section>
    )
}