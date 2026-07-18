"use client";

import { motion } from "framer-motion";

export default function ProductModal() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ scale: .8 }}
        animate={{ scale: 1 }}
        className="bg-zinc-950 rounded-3xl w-[900px] max-w-[95%] p-10 border border-red-600"
      >
        <h2 className="text-4xl font-black">
          Oversized Shadow Tee
        </h2>

        <p className="text-red-500 mt-2">
          ₹1499
        </p>

        <div className="mt-8">

          <p>Choose Size</p>

          <div className="flex gap-3 mt-3">

            {["XS","S","M","L","XL","XXL"].map(size=>(
              <button
                key={size}
                className="border border-zinc-700 px-5 py-3 rounded-xl hover:bg-red-600"
              >
                {size}
              </button>
            ))}

          </div>

        </div>

        <button className="mt-10 bg-red-600 w-full py-5 rounded-full text-xl font-bold">
          ADD TO CART
        </button>

      </motion.div>
    </motion.div>
  );
}