'use client';

import Feedbacks from "@/components/home/feedbacks";
import HeroSection from "@/components/home/hero-section";
import FAQ from "@/components/home/FAQ";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <Feedbacks />
      <FAQ />
    </main>
  )
}
