'use client';

import Title from "@/components/title";
import { Instagram, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactRedes() {
    return (
        <div className="flex flex-col gap-4 w-4/5 items-center text-w md:order-2">
            <h1 className="text-lg md:text-2xl font-intro text-center">
                Nossas Redes Sociais 
            </h1>
            <div className="flex flex-col gap-2 items-start">
                <Link className="flex flex-row gap-4 items-center" href="https://www.instagram.com/">
                    <Instagram size={28} />
                    @codejr
                </Link>
                <Link className="flex flex-row gap-4 items-center" href="https://www.instagram.com/">
                    <Phone size={28} />
                    (11) 99999-9999
                </Link>
                <Link className="flex flex-row gap-4 items-center" href="https://www.instagram.com/">
                    <Linkedin size={28} />
                    codejr
                </Link>
            </div>
        </div>
    )
}