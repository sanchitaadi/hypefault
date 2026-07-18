"use client";

import { motion } from "framer-motion";

export default function HeroOverlay() {
  return (
    <>
      {/* Left Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-red-600/20 blur-[180px]"
      />

      {/* Right White Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-white blur-[170px]"
      />

      {/* Bottom Red Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-red-600 blur-[220px]"
      />

      {/* Moving Light Beam */}
      <motion.div
        animate={{
          x: [-400, 400, -400],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-0 h-full w-32 -translate-x-1/2 rotate-12 bg-gradient-to-b from-white/15 via-white/5 to-transparent blur-3xl"
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.9)_100%)]" />

      {/* Premium Noise */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />
    </>
  );
}