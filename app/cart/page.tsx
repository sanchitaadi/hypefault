"use client";

import CartItem from "@/app/components/Cart/CartItem";
import CartSummary from "@/app/components/Cart/CartSummary";
import { useCart } from "@/app/hooks/useCart";
import Link from "next/link";

export default function CartPage() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">

          <h1 className="mb-4 text-5xl font-bold">
            Your Cart is Empty
          </h1>

          <p className="mb-8 text-gray-400">
            Looks like you haven't added anything yet.
          </p>

          <Link
  href="/shop"
  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300"
>
  Continue Shopping →
</Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-12 text-5xl font-bold">
          Shopping Cart
        </h1>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

          <div className="space-y-6">
            {cart.map((item) => (
              <CartItem
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                item={item}
              />
            ))}
          </div>

          <CartSummary />

        </div>

      </div>
    </main>
  );
}