"use client";

import HeroVideo from "../components/hero/HeroVideo";
import HeroOverlay from "../components/hero/HeroOverlay";
import HeroParticles from "../components/hero/HeroParticles";
import HeroContent from "../components/hero/HeroContent";
import HeroScroll from "../components/hero/HeroScroll";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-black">
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