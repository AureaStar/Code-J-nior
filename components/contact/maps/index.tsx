'use client';

import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Maps() {
    return (
        <section className="flex flex-col gap-4 w-4/5 items-center text-w md:order-1">
            <h1 className="text-lg md:text-2xl font-intro text-center">
                Onde Estamos?
            </h1>
            <div className="flex flex-col gap-2">
                <Image src="/assets/maps.svg" alt="Maps" width={500} height={500} className="w-full rounded-xl" />
                <div className="flex flex-row gap-2 items-start w-full">
                    <MapPin size={16} />
                    <p className="text-center text-sm">
                        Rua dos Bobos, nº 0
                    </p>
                </div>
            </div>
        </section>
    )
}