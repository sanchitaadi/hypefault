"use client";

import Link from "next/link";
import { useCart } from "@/app/hooks/useCart";

export default function CartSummary() {
  const { subtotal, cartCount } = useCart();

  const shipping = subtotal > 1999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="sticky top-24 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-xl">

      <h2 className="mb-6 text-3xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between text-zinc-400">
          <span>Items</span>
          <span>{cartCount}</span>
        </div>

        <div className="flex justify-between text-zinc-400">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between text-zinc-400">
          <span>Shipping</span>
          <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
        </div>

        <hr className="border-zinc-700" />

        <div className="flex justify-between text-2xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>

      {/* Checkout Button */}
      <Link
        href="/checkout"
        className="mt-8 flex w-full items-center justify-center rounded-xl
                   bg-red-600 py-4 text-lg font-semibold text-white
                   transition-all duration-300
                   hover:bg-red-700
                   hover:shadow-xl hover:shadow-red-500/30
                   active:scale-95"
      >
        Proceed to Checkout →
      </Link>

      {/* Continue Shopping */}
      <Link
        href="/shop"
        className="mt-4 flex w-full items-center justify-center rounded-xl
                   border border-zinc-700 py-4 text-white
                   transition-all duration-300
                   hover:border-red-500
                   hover:bg-zinc-800"
      >
        Continue Shopping
      </Link>

    </div>
  );
}