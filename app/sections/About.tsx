"use client";

import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const stats = [
  {
    title: "100%",
    subtitle: "Premium Cotton",
  },
  {
    title: "240 GSM",
    subtitle: "Heavyweight Fabric",
  },
  {
    title: "7 Days",
    subtitle: "Easy Returns",
  },
];

export default function About() {
  return (
    <Reveal>
      <section className="relative overflow-hidden bg-zinc-950 py-32 px-6">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center uppercase tracking-[8px] text-red-500"
          >
            OUR STORY
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-center text-5xl font-black leading-tight md:text-7xl"
          >
            MORE THAN A BRAND.
            <br />
            A STATEMENT.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-3xl text-center text-lg leading-9 text-zinc-400"
          >
            HYPEFAULT isn't just about oversized T-shirts. It's about
            confidence, individuality, and wearing something that reflects
            your mindset. Every piece is crafted with premium materials,
            oversized silhouettes, and bold graphics designed to stand out.
          </motion.p>

          {/* Stats */}
          <div className="mt-24 grid gap-8 md:grid-cols-3">
            {stats.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500"
              >
                <div className="absolute opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="h-32 w-32 rounded-full bg-red-600/20 blur-3xl" />
                </div>

                <h3 className="relative text-5xl font-black text-red-500">
                  {item.title}
                </h3>

                <p className="relative mt-4 text-lg text-zinc-400">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-28 max-w-4xl text-center"
          >
            <p className="text-3xl font-light italic leading-relaxed text-white md:text-4xl">
              “We don't follow trends.
              <span className="text-red-500"> We create identity.</span>”
            </p>
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}