"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { products } from "@/data/products";
import { FaHeart, FaShoppingBag, FaStar } from "react-icons/fa";

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-black px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[90px] md:h-[700px] md:w-[700px] md:blur-[180px]" />

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
       className="relative z-10 mb-12 text-center text-3xl font-black tracking-wide sm:text-5xl lg:mb-20 lg:text-6xl"
      >
        SHOP COLLECTION
      </motion.h2>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            delay={index * 0.15}
          />
        ))}
      </div>
    </section>
  );
}

interface ProductProps {
  product: (typeof products)[0];
  delay: number;
}

function ProductCard({ product, delay }: ProductProps) {
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
    <Link href={`/product/${product.slug}`}>
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
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl transition-all duration-500"
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[100px]" />
        </div>

        {/* Product Image */}
        <div className="relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={800}
            height={1000}
            className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[420px] lg:h-[480px]"
          />

          {product.newArrival && (
            <span className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-2 text-sm font-bold">
              NEW
            </span>
          )}

          <motion.button
            whileHover={{
              scale: 1.15,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-xl"
          >
            <FaHeart />
          </motion.button>
        </div>

        {/* Product Details */}
        <div className="relative z-20 p-5 sm:p-7">
          <div className="flex items-center gap-2 text-yellow-400">
            <FaStar />
            <span>{product.rating}</span>

            <span className="text-sm text-gray-400">
              ({product.reviews})
            </span>
          </div>

          <h3 className="mt-3 text-xl font-bold sm:text-2xl">
            {product.name}
          </h3>

          <div className="mt-3 flex items-center gap-3">
            <span className="text-xl font-bold text-red-500 sm:text-2xl">
              ₹{product.price}
            </span>

            <span className="text-gray-500 line-through">
              ₹{product.oldPrice}
            </span>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-sm text-gray-400">
              Sizes
            </p>

            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <motion.button
                  key={size}
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="rounded-lg border border-zinc-700 px-3 py-2 transition hover:border-red-600 hover:bg-red-600"
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-red-600 py-3 text-sm font-bold transition hover:bg-red-500 sm:mt-8 sm:py-4 sm:text-base"
          >
            <FaShoppingBag />
            Add To Cart
          </motion.button>
        </div>
      </motion.div>
    </Link>
  );
}