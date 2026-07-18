"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useCartContext } from "@/app/context/CartContext";
import { useCheckout } from "@/app/context/CheckoutContext";

export default function OrderSummary() {
  const router = useRouter();

  const { cart, subtotal, clearCart } = useCartContext();
  const { data } = useCheckout();

  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (
      !data.fullName.trim() ||
      !data.email.trim() ||
      !data.phone.trim() ||
      !data.address.trim() ||
      !data.city.trim() ||
      !data.state.trim() ||
      !data.zip.trim() ||
      !data.country.trim()
    ) {
      alert("Please fill all shipping details.");
      return;
    }

    const order = {
      id: crypto.randomUUID(),
      items: [...cart],
      customer: { ...data },
      subtotal,
      shipping,
      tax,
      total,
      createdAt: new Date().toISOString(),
    };

    // Save order temporarily
    sessionStorage.setItem("latestOrder", JSON.stringify(order));

    // Clear cart
    clearCart();

    // Go to success page
    router.push("/order-success");
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-xl">
      <h2 className="text-3xl font-bold">Order Summary</h2>

      <div className="mt-8 space-y-6">
        {cart.map((item) => (
          <div
            key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
            className="flex gap-4"
          >
            <div className="relative h-24 w-20 overflow-hidden rounded-xl">
              <Image
                src={
                  item.image && item.image.trim() !== ""
                    ? item.image
                    : "/products/tee-black.jpeg"
                }
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>

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

            <div className="font-semibold">
              ₹{item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      <div className="my-8 border-t border-white/10" />

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>₹{tax}</span>
        </div>

        <div className="flex justify-between border-t border-white/10 pt-4 text-xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="mt-8 w-full rounded-2xl bg-red-600 py-4 font-semibold transition hover:bg-red-700"
      >
        Place Order
      </button>
    </div>
  );
}