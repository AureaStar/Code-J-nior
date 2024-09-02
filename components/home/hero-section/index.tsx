'use client';

export default function HeroSection() {
    return (
        <section className="sm:h-screen md:h-screen lg:h-screen xl:h-screen test flex flex-col items-center justify-center bg-grar py-12 md:py-0 gap-4 w-full px-8 md:px-0">
            <h1 className="text-xl md:text-4xl text-white font-intro text-center">Transformando ideias em softwares há 10 anos</h1>
            <button className="bg-a text-re font-mont font-medium px-1 md:px-4 py-2 mt-4 rounded-md">Entre em contato agora mesmo</button>
            <div className="flex flex-row justify-center items-center gap-2 md:gap-4 w-full">
                <p className="text-white font-mont text-md md:text-2xl w-40 text-center">Conheça nossos <a href="#" className="text-a">projetos</a></p>
                <div className="border-r-2 bg-w border-white h-12 md:h-full mx-2"></div>
                <p className="text-white font-mont text-md md:text-2xl w-40 text-center">ou <a href="#" className="text-a">serviços</a></p>
                <div className="border-r-2 bg-w border-white h-12 md:h-full mx-2"></div>
                <p className="text-white font-mont text-md md:text-2xl w-40 text-center">ou <a href="#" className="text-a">sobre nós</a></p>
            </div>
        </section>
        )
    }