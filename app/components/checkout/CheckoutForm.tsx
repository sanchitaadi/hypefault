"use client";

import { motion } from "framer-motion";
import { useCheckout } from "@/app/context/CheckoutContext";

export default function CheckoutForm() {
  const { data, setData } = useCheckout();

  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-xl">
      <h2 className="text-3xl font-bold">Shipping Details</h2>

      <p className="mt-2 text-sm text-zinc-400">
        Fill in your delivery information.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-10 space-y-6"
      >
        {/* Full Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            value={data.fullName}
            onChange={(e) =>
              setData({
                ...data,
                fullName: e.target.value,
              })
            }
            className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Email Address
          </label>

          <input
            type="email"
            placeholder="john@email.com"
            value={data.email}
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+91 9876543210"
            value={data.phone}
            onChange={(e) =>
              setData({
                ...data,
                phone: e.target.value,
              })
            }
            className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
          />
        </div>

        {/* Address */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Address
          </label>

          <textarea
            rows={4}
            placeholder="House No., Street, Area..."
            value={data.address}
            onChange={(e) =>
              setData({
                ...data,
                address: e.target.value,
              })
            }
            className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
          />
        </div>

        {/* City + State */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              City
            </label>

            <input
              type="text"
              placeholder="Delhi"
              value={data.city}
              onChange={(e) =>
                setData({
                  ...data,
                  city: e.target.value,
                })
              }
              className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              State
            </label>

            <input
              type="text"
              placeholder="Delhi"
              value={data.state}
              onChange={(e) =>
                setData({
                  ...data,
                  state: e.target.value,
                })
              }
              className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            />
          </div>
        </div>

        {/* ZIP + Country */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              ZIP Code
            </label>

            <input
              type="text"
              placeholder="110001"
              value={data.zip}
              onChange={(e) =>
                setData({
                  ...data,
                  zip: e.target.value,
                })
              }
              className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Country
            </label>

            <input
              type="text"
              value={data.country}
              onChange={(e) =>
                setData({
                  ...data,
                  country: e.target.value,
                })
              }
              className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            />
          </div>
        </div>

        {/* Payment Method */}
        <div className="pt-4">
          <h3 className="mb-4 text-xl font-semibold">
            Payment Method
          </h3>

          <div className="grid gap-4">
            <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-red-500">
              <div>
                <p className="font-semibold">💳 Credit / Debit Card</p>
                <p className="text-sm text-zinc-400">
                  Visa, Mastercard, RuPay
                </p>
              </div>

              <input
                type="radio"
                name="payment"
                checked={data.payment === "card"}
                onChange={() =>
                  setData({
                    ...data,
                    payment: "card",
                  })
                }
                className="h-5 w-5 accent-red-600"
              />
            </label>

            <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-red-500">
              <div>
                <p className="font-semibold">📱 UPI</p>
                <p className="text-sm text-zinc-400">
                  Google Pay, PhonePe, Paytm
                </p>
              </div>

              <input
                type="radio"
                name="payment"
                checked={data.payment === "upi"}
                onChange={() =>
                  setData({
                    ...data,
                    payment: "upi",
                  })
                }
                className="h-5 w-5 accent-red-600"
              />
            </label>

            <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-red-500">
              <div>
                <p className="font-semibold">💵 Cash on Delivery</p>
                <p className="text-sm text-zinc-400">
                  Pay when your order arrives
                </p>
              </div>

              <input
                type="radio"
                name="payment"
                checked={data.payment === "cod"}
                onChange={() =>
                  setData({
                    ...data,
                    payment: "cod",
                  })
                }
                className="h-5 w-5 accent-red-600"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}