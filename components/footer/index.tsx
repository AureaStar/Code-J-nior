'use client';

import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-center px-8 py-8 bg-w gap-4 md:justify-between md:py-12 md:px-12">
            <Image 
                src="/assets/logo.svg" 
                alt="Logo" 
                width={500} 
                height={500} 
                className="w-40 md:w-52" 
            />
            <div className="flex flex-col gap-2 md:order-2">
                <p className="text-re text-center font-semibold">Fale Conosco</p>
                <div className="flex flex-row gap-4 text-re">
                    <Instagram className="w-6 h-6 md:w-10 md:h-10 cursor-pointer" />
                    <Facebook className="w-6 h-6 md:w-10 md:h-10 cursor-pointer" />
                    <Mail className="w-6 h-6 md:w-10 md:h-10 cursor-pointer" />
                    <Phone className="w-6 h-6 md:w-10 md:h-10 cursor-pointer" />
                </div>
            </div>
            <p className="text-re text-center text-sm md:order-1 md:h-full">© 2024 Code Júnior</p>
        </footer>
    )
}