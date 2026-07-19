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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
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
            className="absolute h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[150px]"
          />

          <div className="relative text-center">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl font-black tracking-[10px] md:text-8xl"
            >
              <span className="text-red-600">HYPE</span>FAULT
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-sm uppercase tracking-[8px] text-zinc-400"
            >
              BREAK THE MUNDANE.
            </motion.p>

            {/* Loading Bar */}
            <div className="mx-auto mt-10 h-[2px] w-56 overflow-hidden rounded-full bg-zinc-800">
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
