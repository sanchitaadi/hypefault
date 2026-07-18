"use client";

import { ShoppingBag } from "lucide-react";

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-black p-10 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <h1 className="text-5xl font-black">
            Orders
          </h1>

          <p className="mt-2 text-zinc-400">
            Manage customer orders
          </p>
        </div>

        <div className="rounded-3xl border border-dashed border-zinc-700 bg-zinc-900 p-20 text-center">

          <ShoppingBag
            size={70}
            className="mx-auto mb-6 text-zinc-600"
          />

          <h2 className="text-3xl font-bold">
            No Orders Yet
          </h2>

          <p className="mt-3 text-zinc-500">
            Orders will appear here when customers place purchases.
          </p>

        </div>

      </div>
    </div>
  );
}