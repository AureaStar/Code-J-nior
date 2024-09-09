'use client';

import Title from "@/components/title";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const clients = [
    {
        img: "/assets/logocirc.svg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    },
    {
        img: "/assets/logocirc.svg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    },
    {
        img: "/assets/logocirc.svg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    },
    {
        img: "/assets/logocirc.svg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    },
];

export default function Sobre() {
    return (
        <section className="flex flex-col justify-center items-center gap-8 py-8">
            <Title color="w">Nossa História</Title>
            <div className="flex flex-col justify-center items-center gap-8 lg:flex-row lg:px-auto lg:gap-4 lg:px-8">
                <div className="flex flex-col justify-center items-center gap-4 lg:w-1/2 lg:p-8">
                    <Image src="/assets/code.jpg" alt="Sobre Nós" width={500} height={500} className="w-full lg:rounded-lg"/>
                </div>
                <div className="flex flex-col items-center w-full p-0 gap-8 md:flex-row md:justify-center md:pl-12 lg:w-1/2">
                    <div className="flex flex-col items-center w-full px-8 gap-8 md:justify-end lg:pl-4 lg:pr-32">
                        <p className="text-w text-sm md:text-lg lg:text-xl w-full md:w-2/3 lg:w-full">
                            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vero. Molestias repellat ut sit aperiam, possimus eos tempore ullam delectus quod praesentium porro consequatur dolorum laboriosam perspiciatis quisquam repudiandae beatae.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni amet dicta iure aliquid ullam unde. A sunt, repellendus aliquid architecto id soluta cumque, odio, suscipit nesciunt quod dicta delectus quis.
                            &quot;
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center md:gap-8 md:py-12 lg:gap-16 w-64 md:w-[100vw]">
                <Swiper
                    modules={[Pagination, Autoplay, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        clickable: true, 
                        dynamicBullets: true,
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={
                        {
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }
                    }
                    className="w-full lg:w-4/5"
                >
                    {clients.map((client, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center justify-center md:w-full">
                                <div className="flex flex-col items-center justify-center bg-w rounded-2xl gap-4 p-4 md:w-2/3 md:px-8 md:py-12 md:gap-8">
                                    <Image src={client.img} alt="Feedback 1" width={500} height={500} className="w-16 rounded-full" />
                                    <p className="text-lg text-re font-mont text-center italic">{`"${client.text}"`}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}