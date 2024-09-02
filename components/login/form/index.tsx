'use client';

import Link from "next/link";

export default function Form() {
  return (
    <div className="flex flex-col items-center justify-center py-4 px-4 rounded-2xl gap-4 w-1/3">
        <form className="flex flex-col items-center justify-center py-4 px-4 rounded-2xl gap-12 w-full">
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <input type="email" placeholder="Email" className="py-4 px-8 rounded-xl w-full text-lg" />
            <input type="password" placeholder="Senha" className="py-4 px-8 rounded-xl w-full text-lg" />
          </div>
          <Link href="/admin">
            <button type="submit" className="text-lg md:text-2xl text-center text-re font-mont font-medium bg-w px-3 py-1 rounded-lg">Entrar</button>
          </Link>
        </form>
    </div>
  )
}