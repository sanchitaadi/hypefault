"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="bg-black py-28 px-8">
      <div className="max-w-5xl mx-auto rounded-3xl border border-red-600 bg-zinc-950 p-12 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black"
        >
          JOIN THE COMMUNITY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-6 text-lg"
        >
          Get early access to every HYPEFAULT drop,
          exclusive discounts and limited collections.
        </motion.p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="bg-black border border-zinc-700 rounded-full px-6 py-4 w-full md:w-[420px] outline-none focus:border-red-600"
          />

          <button className="bg-red-600 hover:bg-red-700 transition px-10 py-4 rounded-full font-bold">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}