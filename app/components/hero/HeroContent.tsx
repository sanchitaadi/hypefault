"use client";

import { motion } from "framer-motion";
import HeroStats from "./HeroStats";
import Button from "@/app/components/ui/Button";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-7xl px-6 pt-20 lg:px-12">

        {/* Campaign Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
        >
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />

          <span className="text-xs uppercase tracking-[5px] text-zinc-300">
            DROP 01 • NOW LIVE
          </span>
        </motion.div>

        {/* Brand */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-10 text-sm font-semibold uppercase tracking-[10px] text-red-500"
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
          className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.88] text-white sm:text-6xl md:text-7xl lg:text-[95px] xl:text-[120px]
drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]
"
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
          className="mt-8 max-w-xl text-lg leading-8 text-zinc-300"
        >
          Premium oversized graphic apparel crafted with heavyweight cotton,
          bold artwork, and timeless streetwear aesthetics.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap gap-5"
        >
          <Button href="/shop">
            SHOP DROP →
          </Button>

          <Button variant="glass">
            WATCH FILM ↗
          </Button>
        </motion.div>

        {/* Stats */}
        <HeroStats />

      </div>
    </div>
  );
}