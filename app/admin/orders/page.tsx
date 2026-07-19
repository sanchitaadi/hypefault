"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Order {
  id: string;
  full_name: string;
  email: string;
  phone: string;

  total: number;

  payment_status: string;
  utr: string;

  created_at: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadOrders() {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setOrders(data);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadOrders();
  }, []);

  async function updateStatus(
    id: string,
    status: string
  ) {
    await supabase
      .from("orders")
      .update({
        payment_status: status,
      })
      .eq("id", id);

    loadOrders();
  }

  if (loading) {
    return (
      <div className="p-10 text-white">
        Loading Orders...
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="mb-8 text-5xl font-bold text-white">
        Store Orders
      </h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {order.full_name}
                </h2>

                <p className="text-zinc-400">
                  {order.email}
                </p>

                <p className="text-zinc-400">
                  {order.phone}
                </p>

                <p className="mt-3 text-sm text-zinc-500">
                  Order ID
                </p>

                <p className="font-mono text-red-500">
                  {order.id}
                </p>

                <p className="mt-3 text-sm text-zinc-500">
                  UTR
                </p>

                <p>{order.utr || "-"}</p>
              </div>

              <div className="text-right">
                <p className="text-3xl font-bold text-white">
                  ₹{order.total}
                </p>

                <p className="mt-2">
                  {order.payment_status}
                </p>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() =>
                      updateStatus(
                        order.id,
                        "Verified"
                      )
                    }
                    className="rounded-lg bg-green-600 px-4 py-2"
                  >
                    Verify
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        order.id,
                        "Rejected"
                      )
                    }
                    className="rounded-lg bg-red-600 px-4 py-2"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {orders.length === 0 && (
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center text-zinc-400">
            No orders yet.
          </div>
        )}
      </div>
    </div>
  );
}