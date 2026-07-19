"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomGarageSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28">

      {/* Background Glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />
<div
  className="pointer-events-none absolute inset-0 opacity-[0.04]"
  style={{
    backgroundImage:
      "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  }}
/>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-red-500 px-5 py-2 text-sm text-red-400">
            🔥 NEW • CUSTOM GARAGE
          </span>

          <h2 className="mt-8 text-6xl font-black leading-tight">
            BUILD YOUR
            <span className="block text-red-500">
              OWN HYPE.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg text-zinc-400">
            Upload your artwork, anime, logo, racing graphics,
            or anything you imagine.
            We'll print it on premium HYPE-UP apparel.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              🎨 Upload Any Design
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              🖨 Premium DTF Printing
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              👕 Oversized Apparel
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              🚚 PAN India Delivery
            </div>

          </div>

          <div className="mt-10 flex gap-5">

            <Link
              href="/custom-garage"
              className="rounded-xl bg-red-600 px-8 py-4 font-bold transition hover:scale-105"
            >
              Start Designing →
            </Link>

            <Link
              href="/shop"
              className="rounded-xl border border-zinc-700 px-8 py-4 font-bold transition hover:border-red-500"
            >
              Browse Products
            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  animate={{
    y: [0, -15, 0],
    rotate: [-1, 1, -1],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  viewport={{ once: true }}
  className="relative"
>

          <img
            src="/products/M2-W1.PNG"
            className="mx-auto w-[520px] drop-shadow-[0_0_60px_rgba(255,0,0,.4)]"
            alt=""
          />

          <div className="absolute -bottom-6 left-10 rounded-2xl bg-zinc-900 px-5 py-3 shadow-xl">
            🎨 Upload Design
          </div>

          <div className="absolute right-8 top-10 rounded-2xl bg-red-600 px-5 py-3 shadow-xl">
            Premium Print
          </div>

        </motion.div>

            </div>

      {/* HOW IT WORKS */}

      <div className="mx-auto mt-28 max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="text-red-500 uppercase tracking-[0.35em] text-sm">
            HOW IT WORKS
          </p>

          <h3 className="mt-4 text-4xl font-black">
            Create Your Own Streetwear
          </h3>

          <p className="mt-4 text-zinc-400">
            Four simple steps to create apparel that's uniquely yours.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-4">

          {[
            {
              number: "01",
              title: "Upload Design",
              text: "Upload your own artwork, logo, anime or custom graphic."
            },
            {
              number: "02",
              title: "Customize",
              text: "Choose apparel, color, size and print placement."
            },
            {
              number: "03",
              title: "We Print",
              text: "We use premium DTF printing with vibrant colors."
            },
            {
              number: "04",
              title: "Delivered",
              text: "Packed carefully and delivered across India."
            },
          ].map((step) => (

            <motion.div
              key={step.number}
              whileHover={{
                y: -8,
                scale: 1.03
              }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition"
            >

              <div className="text-5xl font-black text-red-500/30">
                {step.number}
              </div>

              <h4 className="mt-5 text-2xl font-bold">
                {step.title}
              </h4>

              <p className="mt-4 text-zinc-400">
                {step.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}