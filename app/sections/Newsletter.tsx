"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="bg-black px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl rounded-3xl border border-red-600 bg-zinc-950 p-6 text-center sm:p-10 lg:p-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black sm:text-5xl"
        >
          JOIN THE COMMUNITY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg"
        >
          Get early access to every HYPEFAULT drop,
          exclusive discounts and limited collections.
        </motion.p>

        <div className="mt-8 flex flex-col gap-4 md:mt-10 md:flex-row md:justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-full border border-zinc-700 bg-black px-6 py-4 outline-none transition focus:border-red-600 md:w-[420px]"
          />

          <button className="rounded-full bg-red-600 px-8 py-4 font-bold transition hover:bg-red-700 md:px-10">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}