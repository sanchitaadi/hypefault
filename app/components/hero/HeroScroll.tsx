"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroScroll() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 10, 0],
      }}
      transition={{
        opacity: {
          duration: 1,
          delay: 1.5,
        },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[6px] text-zinc-400">
          SCROLL
        </span>

        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-zinc-500">
          <motion.div
            animate={{
              y: [4, 20, 4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-1 h-2 w-2 rounded-full bg-red-500"
          />
        </div>

        <ChevronDown
          size={24}
          className="text-zinc-400"
        />
      </div>
    </motion.div>
  );
}