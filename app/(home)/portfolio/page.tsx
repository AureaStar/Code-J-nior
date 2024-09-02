'use client';

import PortfolioSection from "@/components/portfolio";
import Title from "@/components/title";
import Image from "next/image";

export default function portfolio() {
  return (
    <main className="bg-grar flex flex-col justify-center items-center py-8 gap-8">
        <div className="flex flex-col justify-center items-center gap-4">
            <Image src="/assets/logo2.png" alt="Code Júnior" width={500} height={500} className="w-8" />
            <Title color="w">Portfólio</Title>
        </div>
        <PortfolioSection />
    </main>
  )
}
