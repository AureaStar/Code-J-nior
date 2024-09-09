'use client';

import Form from "@/components/login/form";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import Image from "next/image";

export default function Login() {
  return (
    <main className="bg-grar flex flex-col justify-center items-center py-16 gap-8 min-h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src="/assets/logo2.png" alt="Code Júnior" width={500} height={500} className="w-8" />
        <Title color="w">Login</Title>
      </div>
      <Form />
    </main>
  )
}