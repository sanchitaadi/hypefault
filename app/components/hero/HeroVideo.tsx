"use client";

import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <>
      {/* Background Video */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 h-full w-full object-cover object-[82%_center] md:object-center"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-black via-black/40 to-transparent" />
    </>
  );
}