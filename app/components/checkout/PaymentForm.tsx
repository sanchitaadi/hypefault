"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const QRCode = dynamic(() => import("react-qr-code"), {
  ssr: false,
});
import { useCheckout } from "@/app/context/CheckoutContext";

interface Props {
  total: number;
  orderId: string;
  paid: boolean;
  setPaid: (value: boolean) => void;
}

export default function PaymentForm({
  total,
  orderId,
  paid,
  setPaid,
}: Props) {
  const upiId = "8750485010@mbk";
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);
  const { data, setData } = useCheckout();

  const upiLink =
    `upi://pay?pa=${upiId}` +
    `&pn=HYPEFAULT` +
    `&am=${total}` +
    `&cu=INR` +
    `&tn=${orderId}`;

  return (
    <div className="mt-8 rounded-3xl border border-red-500/20 bg-zinc-900/70 p-8 backdrop-blur-xl">

      <h2 className="text-2xl font-bold">
        Secure UPI Payment
      </h2>

      <p className="mt-2 text-zinc-400">
        Pay using Google Pay, PhonePe, Paytm or any UPI App.
      </p>

      <div className="mt-8 flex justify-center rounded-2xl bg-white p-6">
  {mounted && (
    <QRCode
      value={upiLink}
      size={220}
    />
  )}
</div>

      <a
        href={upiLink}
        className="mt-8 block rounded-xl bg-red-600 py-4 text-center font-bold transition hover:bg-red-700"
      >
        Pay ₹{total}
      </a>

      <div className="mt-6 rounded-xl border border-zinc-700 p-5">
        <p className="text-sm text-zinc-500">
          UPI ID
        </p>

        <p className="mt-2 text-lg font-bold text-red-500">
          {upiId}
        </p>

        <p className="mt-5 text-sm text-zinc-500">
          Order ID
        </p>

        <p className="font-semibold">
          {orderId}
        </p>
      </div>
      <div className="mt-6 rounded-xl border border-zinc-700 p-5">
  <label className="flex items-center gap-3 cursor-pointer">
    <input
      type="checkbox"
      checked={paid}
      onChange={(e) => setPaid(e.target.checked)}
      className="h-5 w-5 accent-red-600"
    />

    <span>I have completed the payment.</span>
    <div className="mt-6">
  <label className="mb-2 block text-sm font-medium text-zinc-300">
    UPI Transaction ID (UTR)
  </label>

  <input
  type="text"
  placeholder="Enter your UPI Transaction ID"
  value={data.utr}
  onChange={(e) =>
    setData({
      ...data,
      utr: e.target.value,
    })
  }
  className="w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 text-white outline-none focus:border-red-500"
/>

  <p className="mt-2 text-xs text-zinc-500">
    You can find the UTR in your Google Pay, PhonePe or Paytm payment history.
  </p>
</div>
  </label>
</div>
    </div>
  );
}
