"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Reveal from "../components/Reveal";

const categories = [
  {
    title: "OVERSIZED",
    subtitle: "PREMIUM COTTON",
    image: "/products/M2-W1.PNG",
    href: "/shop",
    button: "EXPLORE →",
    disabled: false,
  },
  {
    title: "CUSTOM GARAGE",
    subtitle: "DESIGN YOUR OWN",
    image: "/products/BMW 2.PNG",
    href: "/custom-garage",
    button: "START DESIGNING →",
    disabled: false,
  },
  {
    title: "COMING SOON",
    subtitle: "NEW COLLECTION",
    image: "/products/AV.jpg",
    href: "#",
    button: "COMING SOON",
    disabled: true,
  },
];

export default function Featured() {
  return (
    <Reveal>
      <section className="relative overflow-hidden bg-black py-32 px-6">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center uppercase tracking-[8px] text-red-500"
          >
            CURATED COLLECTIONS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 text-center text-5xl font-black leading-tight md:text-7xl"
          >
            DESIGNED TO
            <br />
            STAND OUT.
          </motion.h2>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {categories.map((item, index) => (
              <FeaturedCard
                key={item.title}
                item={item}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

interface CardProps {
  item: {
    title: string;
    subtitle: string;
    image: string;
    href: string;
    button: string;
    disabled: boolean;
  };
  delay: number;
}

function FeaturedCard({ item, delay }: CardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-120, 120], [10, -10]);
  const rotateY = useTransform(x, [-120, 120], [-10, 10]);

  function handleMove(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.7,
      }}
      viewport={{ once: true }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        y: -18,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[100px]" />
      </div>

      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={700}
          height={900}
          className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 z-20 w-full p-8">
        <p className="uppercase tracking-[5px] text-red-500">
          {item.subtitle}
        </p>

        <h3 className="mt-3 text-4xl font-black">
          {item.title}
        </h3>

        {item.disabled ? (
  <motion.button
    whileHover={{ scale: 1.02 }}
    className="mt-8 cursor-not-allowed rounded-full border border-red-600 bg-red-600/10 px-7 py-3 font-semibold uppercase tracking-wider text-red-400 animate-pulse"
  >
    {item.button}
  </motion.button>
) : (
  <Link href={item.href}>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-8 rounded-full border border-red-600 bg-black/40 px-7 py-3 font-semibold uppercase tracking-wider backdrop-blur-xl transition hover:bg-red-600"
    >
      {item.button}
    </motion.button>
  </Link>
)}
      </div>
    </motion.div>
  );
}