"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
        >
          {/* Background Glow */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute h-[250px] w-[250px] rounded-full bg-red-600/20 blur-[80px] md:h-[500px] md:w-[500px] md:blur-[150px]"
          />

          <div className="relative w-full px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-black tracking-[2px] sm:text-5xl sm:tracking-[6px] md:text-8xl md:tracking-[10px]"
            >
              <span className="text-red-600">HYPE</span>FAULT
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-5 text-[10px] uppercase tracking-[4px] text-zinc-400 sm:text-sm sm:tracking-[8px]"
            >
              BREAK THE MUNDANE.
            </motion.p>

            <div className="mx-auto mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-zinc-800 sm:mt-10 sm:w-56">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2 }}
                className="h-full w-full bg-red-600"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}