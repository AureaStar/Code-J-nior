'use client';

import Title from "@/components/title";
import { UserRound } from "lucide-react";
import Link from "next/link";

export default function Admin() {
  return (
    <main className="bg-re flex flex-col py-16 gap-16">
        <Title color="w">Dashoard</Title>
        <div className="flex flex-col items-center justify-center gap-4">
            <Link href="/admin/members" className="flex flex-col">
                <button className="flex flex-col items-center justify-center px-8 py-8 gap-2 text-lg md:text-2xl text-center text-re font-mont font-medium bg-w rounded-lg">
                    <UserRound size={64} className="text-re" />
                    Membros
                </button>
            </Link>
        </div>
    </main>
  )
}
