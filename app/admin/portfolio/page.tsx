'use server';

import Title from "@/components/title";
import { fetchPortfolio } from "@/back/adm/actions";
import Link from "next/link";
import { Post } from "@prisma/client";
import Table from "@/components/admin/portfolio/table";


export default async function Portfolio() {

    let portfolio: Post[] = [];
    let totalPages: number = 0;

    try {
        const response = await fetchPortfolio();
        portfolio = response.portfolio;
        totalPages = response.totalPages;
    } catch (error) {
        console.error('Erro ao buscar membros:', error);
    }

  return (
    <main className="bg-re flex flex-col py-12 gap-12 items-end min-h-screen">
        <Title color="w">Membros</Title>
        <Table portfolio={portfolio} totalPages={totalPages} />
    </main>
  )
}
