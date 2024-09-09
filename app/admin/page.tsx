'use client';

import Title from "@/components/title";
import { Images, UserRound } from "lucide-react";
import Link from "next/link";

export default function Admin() {
  return (
    <main className="bg-re flex flex-col py-36 h-screen items-center gap-28">
        <Title color="w">Dashoard</Title>
        <div className="flex flex-row items-center justify-center gap-8">
            <Link href="/admin/members" className="flex flex-col">
                <button className="flex flex-col items-center justify-center px-8 py-8 gap-2 text-lg md:text-2xl text-center text-re font-mont font-medium bg-w rounded-lg">
                    <UserRound size={64} className="text-re" />
                    Membros
                </button>
            </Link>
            <Link href="/admin/portfolio" className="flex flex-col">
                <button className="flex flex-col items-center justify-center px-8 py-8 gap-2 text-lg md:text-2xl text-center text-re font-mont font-medium bg-w rounded-lg">
                    <Images size={64} className="text-re" />
                    Portfólio
                </button>
            </Link>
        </div>
    </main>
  )
}
