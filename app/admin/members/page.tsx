'use server';

import Title from "@/components/title";
import { fetchMembers } from "@/back/adm/actions";
import Link from "next/link";
import Table from "@/components/admin/members/table";

export default async function Members() {

    const {members, totalPages} = await fetchMembers();

  return (
    <main className="bg-re flex flex-col py-12 gap-12 items-end">
        <Title color="w">Membros</Title>
        <Link className="mr-36" href={'/admin/manage/members/create'}>
            <button  className="text-lg md:text-2xl text-center text-re font-mont font-medium bg-w px-4 py-4 rounded-lg">Adicionar Membro</button>
        </Link>
        <Table members={members} totalPages={totalPages} />
    </main>
  )
}
