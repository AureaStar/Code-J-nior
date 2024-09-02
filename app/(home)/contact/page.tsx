'use client';

import ContactForm from "@/components/contact/form";
import Maps from "@/components/contact/maps";
import ContactRedes from "@/components/contact/redes";
import Title from "@/components/title";
import Image from "next/image";

export default function Contato() {
  return (
    <main className="bg-grar flex flex-col justify-center items-center py-8 gap-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src="/assets/logo2.png" alt="Code Júnior" width={500} height={500} className="w-8" />
        <Title color="w">Contato</Title>
      </div>
      <div className="flex flex-col items-center w-full p-0 gap-8 md:flex-row md:justify-center md:pl-12">
          <ContactForm />
        <div className="flex flex-col items-center w-full p-0 gap-8 md:justify-end">
          <ContactRedes />
          <Maps />
        </div>
      </div>
    </main>
  )
}
