'use server';

import Title from "@/components/title";
import { fetchMembers } from "@/back/adm/actions";
import Link from "next/link";
import Table from "@/components/admin/members/table";
import { Membro } from "@prisma/client";


export default async function Members() {

    let members: Membro[] = [];
    let totalPages: number = 0;

    try {
        const response = await fetchMembers();
        members = response.members;
        totalPages = response.totalPages;
    } catch (error) {
        console.error('Erro ao buscar membros:', error);
    }

  return (
    <main className="bg-re flex flex-col py-12 gap-12 items-end min-h-screen">
        <Title color="w">Membros</Title>
        <Table members={members} totalPages={totalPages} />
    </main>
  )
}
