"use client";

import HeroVideo from "../components/hero/HeroVideo";
import HeroOverlay from "../components/hero/HeroOverlay";
import HeroParticles from "../components/hero/HeroParticles";
import HeroContent from "../components/hero/HeroContent";
import HeroScroll from "../components/hero/HeroScroll";

export default function Hero() {
  return (
   <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-black pt-20 md:min-h-screen md:pt-24">
      {/* Background */}
      <HeroVideo />

      {/* Cinematic Effects */}
      <HeroOverlay />
      

      {/* Main Content */}
      <HeroContent />

      {/* Scroll Indicator */}
      <HeroScroll />
    </section>
  );
}