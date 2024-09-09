'use server';

import PortfolioSection from "@/components/home/portfolio";
import Title from "@/components/title";
import Image from "next/image";
import { Post } from "@prisma/client";
import { fetchPortfolio } from "@/back/adm/actions";

export default async function portfolio() {

  let portfolio: Post[] = [];
    let totalPages: number = 0;

    try {
        const response = await fetchPortfolio();
        portfolio = response.portfolio;
        totalPages = response.totalPages;
    } catch (error) {
        console.error('Erro ao buscar portifolio:', error);
    }

  return (
    <main className="bg-grar flex flex-col justify-center items-center py-8 gap-8">
        <div className="flex flex-col justify-center items-center gap-4">
            <Image src="/assets/logo2.png" alt="Code Júnior" width={500} height={500} className="w-8" />
            <Title color="w">Portfólio</Title>
        </div>
        <PortfolioSection  portfolio={portfolio} totalPages={totalPages} />
    </main>
  )
}
