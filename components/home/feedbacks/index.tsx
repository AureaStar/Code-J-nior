'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const feedbacks = [
    {
        img: "/assets/logocirc.svg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
        author: "João da Silva"
    },
    {
        img: "/assets/logocirc.svg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
        author: "João da Silva"
    },
    {
        img: "/assets/logocirc.svg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
        author: "João da Silva"
    },
    {
        img: "/assets/logocirc.svg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
        author: "João da Silva"
    },
];


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Feedbacks() {
    return (
        <section className="flex flex-col items-center justify-center px-8 py-4 bg-grar gap-4 md:gap-8 md:py-12 lg:gap-16">
            <h1 className="text-2xl md:text-4xl text-w font-intro">Feedbacks</h1>
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                    clickable: true, 
                    dynamicBullets: true,
                }}
                breakpoints={{
                    1024: { // lg breakpoint
                        slidesPerView: 2,
                    },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="w-full lg:w-4/5"
            >
                {feedbacks.map((feedback, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-center md:w-full">
                            <div className="flex flex-col items-center justify-center bg-w rounded-2xl gap-4 p-4 md:w-2/3 md:px-8 md:py-12 md:gap-8">
                                <Image src={feedback.img} alt="Feedback 1" width={500} height={500} className="w-16 rounded-full" />
                                <p className="text-lg text-re font-mont text-center italic">{`"${feedback.text}"`}</p>
                                <p className="text-lg text-re font-mont text-center">- {feedback.author}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}