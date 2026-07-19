"use client";

import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";
import {
  CartItem as Item,
  useCartContext,
} from "@/app/context/CartContext";

interface Props {
  item: Item;
}

export default function CartItem({ item }: Props) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartContext();

  return (
    <div className="flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

      <div className="relative h-32 w-28 overflow-hidden rounded-xl">
       <Image
  src={
    item.images && item.images.length > 0
      ? item.images[0]
      : "/products/M2-W1.png"
  }
  alt={item.name}
  fill
  className="object-cover"
  sizes="112px"
/>
      </div>

      <div className="flex flex-1 flex-col justify-between">

        <div>
          <h2 className="text-lg font-semibold text-white">
            {item.name}
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Size: {item.selectedSize}
          </p>

          <p className="text-sm text-gray-400">
            Color: {item.selectedColor}
          </p>

          <p className="mt-2 text-xl font-bold text-white">
            ₹{item.price}
          </p>
        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                decreaseQuantity(
                  item.id,
                  item.selectedSize,
                  item.selectedColor
                )
              }
              className="rounded-lg border border-zinc-700 p-2 transition hover:bg-zinc-800"
            >
              <Minus size={18} />
            </button>

            <span className="text-lg font-semibold">
              {item.quantity}
            </span>

            <button
              onClick={() =>
                increaseQuantity(
                  item.id,
                  item.selectedSize,
                  item.selectedColor
                )
              }
              className="rounded-lg border border-zinc-700 p-2 transition hover:bg-zinc-800"
            >
              <Plus size={18} />
            </button>

          </div>

          <button
            onClick={() =>
              removeFromCart(
                item.id,
                item.selectedSize,
                item.selectedColor
              )
            }
            className="text-red-500 transition hover:text-red-400"
          >
            <Trash2 />
          </button>

        </div>

      </div>

    </div>
  );
}