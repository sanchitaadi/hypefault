"use client";

import { motion } from "framer-motion";

const items = [
  "⚡ LIMITED DROP",
  "FREE SHIPPING ABOVE ₹999",
  "NEW DESIGNS WEEKLY",
  "100% PREMIUM COTTON",
  "COD AVAILABLE",
  "HYPEFAULT EXCLUSIVE",
];

export default function OfferBar() {
  const loop = [...items, ...items, ...items];

  return (
    <div className="relative h-10 overflow-hidden border-b border-red-600/30 bg-black">

      {/* Red Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-700/20 via-red-600/30 to-red-700/20" />

      {/* Shine */}
      <motion.div
        animate={{ x: ["-120%", "130%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-y-0 w-52 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      {/* Left Fade */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear",
        }}
        className="flex h-full w-max items-center whitespace-nowrap"
      >
        {loop.map((text, index) => (
          <div
            key={index}
            className="mx-10 flex items-center gap-10"
          >
            <span className="text-xs font-bold uppercase tracking-[5px] text-white">
              {text}
            </span>

            <span className="text-red-500 text-lg">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}