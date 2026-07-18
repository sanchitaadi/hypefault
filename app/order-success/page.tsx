"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Home, ShoppingBag } from "lucide-react";

interface Order {
  id: string;
  items: any[];
  customer: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    payment: string;
  };
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  createdAt: string;
}

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("latestOrder");

    if (saved) {
      setOrder(JSON.parse(saved));
    }
  }, []);

  if (!order) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black">
        <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-10 text-center">
          <h1 className="text-4xl font-bold">No Order Found</h1>

          <p className="mt-4 text-zinc-400">
            Place an order first.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-zinc-900/70 p-10">
        <div className="text-center">
          <CheckCircle2 className="mx-auto h-20 w-20 text-green-500" />

          <h1 className="mt-6 text-5xl font-black">
            Order Confirmed
          </h1>

          <p className="mt-3 text-zinc-400">
            Thank you for shopping with HYPE-UP.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Customer
            </h2>

            <p>{order.customer.fullName}</p>
            <p>{order.customer.email}</p>
            <p>{order.customer.phone}</p>

            <p className="mt-4">
              {order.customer.address}
            </p>

            <p>
              {order.customer.city}, {order.customer.state}
            </p>

            <p>{order.customer.zip}</p>

            <p>{order.customer.country}</p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Order Details
            </h2>

            <p>
              <strong>Order ID:</strong>{" "}
              {order.id.slice(0, 8).toUpperCase()}
            </p>

            <p>
              <strong>Payment:</strong>{" "}
              {order.customer.payment.toUpperCase()}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
            </p>

            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{order.subtotal}</span>
              </div>

              <div className="mt-2 flex justify-between">
                <span>Shipping</span>
                <span>
                  {order.shipping === 0
                    ? "FREE"
                    : `₹${order.shipping}`}
                </span>
              </div>

              <div className="mt-2 flex justify-between">
                <span>Tax</span>
                <span>₹{order.tax}</span>
              </div>

              <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-2xl font-bold">
                <span>Total</span>
                <span>₹{order.total}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 p-6">
          <h2 className="mb-6 text-2xl font-bold">
            Ordered Items
          </h2>

          <div className="space-y-5">
            {order.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-white/10 pb-4"
              >
                <div>
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-zinc-400">
                    Size: {item.selectedSize}
                  </p>

                  <p className="text-sm text-zinc-400">
                    Color: {item.selectedColor}
                  </p>

                  <p className="text-sm text-zinc-400">
                    Qty: {item.quantity}
                  </p>
                </div>

                <div className="font-bold">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <Link
            href="/shop"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-red-600 py-4 font-semibold hover:bg-red-700"
          >
            <ShoppingBag size={20} />
            Continue Shopping
          </Link>

          <Link
            href="/"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 py-4 font-semibold hover:border-red-500"
          >
            <Home size={20} />
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}