'use client';

export default function ContactForm() {
    return (
        <form className="flex flex-col gap-4 w-4/5 md:w-full items-center md:justify-between md:h-full">
            <input placeholder="Nome" type="text" id="name" name="name" className="rounded-xl pl-2 py-1 w-full md:text-xl md:pl-4 md:py-3"/>
            <input placeholder="Email" type="email" id="email" name="email" className="rounded-xl pl-2 py-1 w-full md:text-xl md:pl-4 md:py-3" />
            <textarea placeholder="Messagem" id="message" name="message" className="rounded-xl pl-2 py-1 h-24 w-full md:h-64 md:text-xl md:pl-4 md:py-2"/>
            <button type="submit" className="bg-w rounded-lg px-2 py-1 w-1/3 text-re md:text-lg">Enviar</button>
        </form>
    )
}