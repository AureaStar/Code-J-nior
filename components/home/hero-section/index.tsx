'use client';

import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="md:h-screen flex flex-col items-center justify-center bg-grar py-12 md:py-0 gap-4 w-full px-8 md:px-0 md:gap-8 lg:gap-24">
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-intro text-center">Transformando ideias em softwares há 10 anos</h1>
            <Link href="/contact">
                <button className="bg-a text-re font-mont text-sm font-medium px-2 md:px-4 py-2 mt-4 rounded-md md:text-lg lg:text-xl lg:px-8 lg:py-4">Entre em contato agora mesmo</button>
            </Link>
            <div className="flex flex-row justify-center items-center gap-2 md:gap-4 lg:gap-8 w-full">
                <div className="text-w flex flex-col justify-center items-center w-24">
                    <span className="font-bold text-xl lg:text-4xl">14</span>
                    <p className="text-white font-mont text-sm md:text-xl lg:text-2xl text-center"><a href="/portfolio" className="text-a">projetos</a> concluídos!</p>
                </div>
                <div className="border-r-2 bg-w border-white h-12 md:h-full mx-2"></div>
                <div className="text-w flex flex-col justify-center items-center w-24">
                    <span className="font-bold text-xl lg:text-4xl">10</span>
                    <p className="text-white font-mont text-sm md:text-xl lg:text-2xl text-center"><a href="/about" className="text-a">anos</a> de mercado!</p>
                </div>
                <div className="border-r-2 bg-w border-white h-12 md:h-full mx-2"></div>
                <div className="text-w flex flex-col justify-center items-center w-24">
                    <span className="font-bold text-xl lg:text-4xl">67</span>
                    <p className="text-white font-mont text-sm md:text-xl lg:text-2xl text-center"><a href="/admin/members" className="text-a">proficionais</a> formados!</p>
                </div>
            </div>
        </section>
        )
    }