"use client";

import { motion } from "framer-motion";
import CheckoutForm from "@/app/components/checkout/CheckoutForm";
import OrderSummary from "@/app/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="uppercase tracking-[6px] text-red-500">
            Secure Checkout
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            COMPLETE YOUR ORDER
          </h1>

          <p className="mt-4 max-w-xl text-zinc-400">
            Enter your shipping details and payment information to complete your purchase.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.8fr]">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .2 }}
          >
            <CheckoutForm />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .35 }}
          >
            <OrderSummary />
          </motion.div>

        </div>
      </div>
    </main>
  );
}