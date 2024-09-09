'use client';

import Sobre from "@/components/home/about/aboutus";
import Pilares from "@/components/home/about/pilars";

export default function SobreNos() {
  return (
    <main className="bg-grar3 flex flex-col justify-center items-center py-8">
      <Sobre />
      <Pilares />
    </main>
  )
}