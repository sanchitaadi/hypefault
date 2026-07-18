"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface ProductProps {
  product: {
    id: number;
    slug: string;
    name: string;
    price: number;
    images: string[];
    category: string;
  };
}

export default function ProductCard({ product }: ProductProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [12, -12]);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);

  function handleMove(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    x.set(mouseX);
    y.set(mouseY);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={`/product/${product.slug}`}>
      <motion.div
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
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950"
      >
        {/* Glow */}
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute -left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-red-600/20 blur-[100px]" />
        </div>

        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={800}
            height={1000}
            className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        {/* Info */}
        <div className="relative z-20 p-6">
          <p className="text-sm uppercase tracking-[4px] text-red-500">
            {product.category}
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {product.name}
          </h2>

          <p className="mt-4 text-2xl font-black">
            ₹{product.price}
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="mt-6 w-full rounded-full bg-red-600 py-3 font-semibold"
          >
            View Product
          </motion.button>
        </div>
      </motion.div>
    </Link>
  );
}