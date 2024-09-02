'use client';

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
      <header className="flex flex-row md:justify-between px-4 md:px-12 py-8">
        <div className="hidden md:flex flex-row gap-8 font-medium">
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                Sobre nós
            </Link>
            <Link href="/portfolio">
                Portfólio
            </Link>
            <Link href="/contact">
                Contato
            </Link>
            <Link href="/login">
                Login
            </Link>
        </div>
        {open ? (
            <div className="flex flex-row justify-between font-medium absolute bg-w w-full left-0 px-2">
                <div className="flex flex-col gap-4 pl-4 py-4">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/about">
                        Sobre nós
                    </Link>
                    <Link href="/portfolio">
                        Portfólio
                    </Link>
                    <Link href="/contact">
                        Contato
                    </Link>
                    <Link href="/login">
                        Login
                    </Link>
                </div>
                <X onClick={toggleMenu} className="block md:hidden" size={32} />
            </div>
        ) : null}
        <Menu onClick={toggleMenu} className="block md:hidden" size={32} />
        <Link className="mx-auto md:mx-0" href="/">
            <Image src="/assets/logo.svg" alt="Code Júnior" width={500} height={500} className="w-32" />
        </Link>
      </header>
    )
  }
  