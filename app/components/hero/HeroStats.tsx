"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "240 GSM",
    label: "Heavyweight Fabric",
  },
  {
    value: "100%",
    label: "Premium Cotton",
  },
  {
    value: "7 Days",
    label: "Easy Returns",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1,
        duration: 0.8,
      }}
      className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-5"
    >
      {stats.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{
            y: -5,
            scale: 1.03,
          }}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl sm:w-auto"
        >
          <h3 className="text-2xl font-black text-white">
            {item.value}
          </h3>

          <p className="mt-2 text-xs uppercase tracking-[3px] text-zinc-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}