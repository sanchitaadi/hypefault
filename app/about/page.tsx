"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shirt, Sparkles, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[160px]" />
      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-red-700/10 blur-[160px]" />
      <div className="absolute right-0 top-1/2 h-[300px] w-[300px] rounded-full bg-red-500/10 blur-[160px]" />

      <section className="relative mx-auto max-w-7xl px-6 pt-36 pb-24">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <p className="mb-4 uppercase tracking-[8px] text-red-500">
            ABOUT US
          </p>

          <h1 className="text-6xl font-black leading-none md:text-8xl">
            BUILT FOR
            <span className="block text-red-500">
              THE BOLD.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            HYPEFAULT isn't just clothing.
            It's an attitude.
            Every oversized tee is created for people
            who aren't afraid to stand out and express
            themselves.
          </p>

        </motion.div>

        {/* Brand Story */}

        <div className="mt-28 grid items-center gap-14 lg:grid-cols-2">

          <motion.div
            initial={{ opacity:0, x:-40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
          >

            <p className="mb-4 uppercase tracking-[6px] text-red-500">
              OUR STORY
            </p>

            <h2 className="text-5xl font-black">
              Streetwear with
              <span className="text-red-500">
                {" "}Purpose.
              </span>
            </h2>

            <p className="mt-8 leading-8 text-zinc-400">
              HYPEFAULT was created with one simple goal—
              to deliver premium oversized apparel that
              blends comfort, confidence, and individuality.
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              Every design is carefully crafted with
              heavyweight cotton, premium printing,
              and timeless aesthetics inspired by
              modern street culture.
            </p>

            <div className="mt-10 flex gap-5">

              <Link
                href="/shop"
                className="rounded-xl bg-red-600 px-8 py-4 font-bold transition hover:bg-red-700"
              >
                Shop Now
              </Link>

              <Link
                href="/custom-garage"
                className="rounded-xl border border-red-500/30 px-8 py-4 font-bold transition hover:bg-red-600/10"
              >
                Custom Garage
              </Link>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
            className="rounded-[32px] border border-zinc-800 bg-white/5 p-10 backdrop-blur-xl"
          >

            <h3 className="mb-8 text-3xl font-bold">
              Our Mission
            </h3>

            <p className="leading-8 text-zinc-400">
              To redefine Indian streetwear by combining
              premium craftsmanship with bold designs,
              ensuring every customer wears confidence
              instead of just clothing.
            </p>

          </motion.div>

        </div>

        {/* Feature Cards */}

        <div className="mt-28 grid gap-8 md:grid-cols-3">

          <motion.div
            whileHover={{ y:-8 }}
            className="rounded-3xl border border-zinc-800 bg-white/5 p-8 backdrop-blur-xl"
          >

            <Shirt
              className="mb-6 text-red-500"
              size={40}
            />

            <h3 className="text-2xl font-bold">
              Premium Quality
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Heavyweight cotton,
              oversized fit,
              premium finish,
              built for everyday wear.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y:-8 }}
            className="rounded-3xl border border-zinc-800 bg-white/5 p-8 backdrop-blur-xl"
          >

            <Sparkles
              className="mb-6 text-red-500"
              size={40}
            />

            <h3 className="text-2xl font-bold">
              Custom Designs
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Design your own apparel through
              Custom Garage and bring your
              creativity to life.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y:-8 }}
            className="rounded-3xl border border-zinc-800 bg-white/5 p-8 backdrop-blur-xl"
          >

            <ShieldCheck
              className="mb-6 text-red-500"
              size={40}
            />

            <h3 className="text-2xl font-bold">
              Trusted Experience
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Premium support,
              secure shopping,
              quality products,
              and customer-first service.
            </p>

          </motion.div>

        </div>
                {/* Why Choose HYPEFAULT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="rounded-[36px] border border-red-500/20 bg-gradient-to-r from-red-700/10 via-zinc-900 to-red-700/10 p-12 backdrop-blur-xl">

            <div className="text-center">

              <p className="uppercase tracking-[8px] text-red-500">
                WHY CHOOSE US
              </p>

              <h2 className="mt-4 text-5xl font-black">
                MORE THAN A
                <span className="block text-red-500">
                  CLOTHING BRAND
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                HYPEFAULT is built for people who love individuality.
                Every oversized tee reflects confidence, creativity,
                and premium craftsmanship.
              </p>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-4">

              <div className="text-center">
                <h3 className="text-5xl font-black text-red-500">
                  100%
                </h3>
                <p className="mt-3 text-zinc-400">
                  Premium Cotton
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-5xl font-black text-red-500">
                  24/7
                </h3>
                <p className="mt-3 text-zinc-400">
                  Customer Support
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-5xl font-black text-red-500">
                  PAN
                </h3>
                <p className="mt-3 text-zinc-400">
                  India Shipping
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-5xl font-black text-red-500">
                  ∞
                </h3>
                <p className="mt-3 text-zinc-400">
                  Creative Possibilities
                </p>
              </div>

            </div>

          </div>

        </motion.div>

        {/* Final CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28"
        >

          <div className="rounded-[36px] border border-zinc-800 bg-white/5 p-14 text-center backdrop-blur-xl">

            <p className="uppercase tracking-[8px] text-red-500">
              JOIN THE MOVEMENT
            </p>

            <h2 className="mt-4 text-5xl font-black">
              WEAR YOUR
              <span className="block text-red-500">
                ATTITUDE.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Every drop is designed with passion,
              premium materials, and bold creativity.
              It's time to wear something that truly represents you.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

              <Link
                href="/shop"
                className="rounded-xl bg-red-600 px-10 py-4 font-bold transition hover:bg-red-700"
              >
                Shop Collection
              </Link>

              <Link
                href="/custom-garage"
                className="rounded-xl border border-red-500/30 px-10 py-4 font-bold transition hover:bg-red-600/10"
              >
                Create Your Own
              </Link>

            </div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}