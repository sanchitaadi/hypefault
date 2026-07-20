"use client";

import { motion } from "framer-motion";
import HeroStats from "./HeroStats";
import Button from "@/app/components/ui/Button";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-[100svh] items-center">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-6 lg:px-12">

        {/* Campaign Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl sm:px-5"
        >
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />

          <span className="text-[10px] uppercase tracking-[3px] text-zinc-300 sm:text-xs sm:tracking-[5px]">
            DROP 01 • NOW LIVE
          </span>
        </motion.div>

        {/* Brand */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-xs font-semibold uppercase tracking-[6px] text-red-500 sm:mt-10 sm:text-sm sm:tracking-[10px]"
        >
          HYPEFAULT
        </motion.h2>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.9] text-white sm:mt-6 sm:text-6xl md:text-7xl lg:text-[95px] xl:text-[120px] drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]"
        >
          BREAK THE
          <br />
          MUNDANE.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:mt-8 sm:text-lg sm:leading-8"
        >
          Premium oversized graphic apparel crafted with heavyweight cotton,
          bold artwork, and timeless streetwear aesthetics.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap gap-4 sm:mt-12 sm:gap-5"
        >
          <Button href="/shop">
            SHOP DROP →
          </Button>

          <Button variant="glass">
            WATCH FILM ↗
          </Button>
        </motion.div>

        <HeroStats />
      </div>
    </div>
  );
}