"use client";

import { useRouter } from "next/navigation";
import { useCartContext } from "@/app/context/CartContext";

interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  sizes?: string[];
  colors?: string[];
}

interface Props {
  product: Product;
  selectedSize?: string;
  selectedColor?: string;
  quantity?: number;
}

export default function ProductActions({
  product,
  selectedSize = product.sizes?.[0] || "M",
  selectedColor = product.colors?.[0] || "Black",
  quantity = 1,
}: Props) {
  const router = useRouter();

  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(
      product,
      selectedSize,
      selectedColor,
      quantity
    );

    router.push("/cart");
  };

  const handleBuyNow = () => {
    addToCart(
      product,
      selectedSize,
      selectedColor,
      quantity
    );

    router.push("/checkout");
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <button
        onClick={handleAddToCart}
        className="rounded-2xl bg-red-600 py-4 text-lg font-bold transition hover:bg-red-700"
      >
        Add to Cart
      </button>

      <button
        onClick={handleBuyNow}
        className="rounded-2xl border border-white/20 py-4 text-lg font-bold transition hover:border-red-600 hover:text-red-500"
      >
        Buy Now
      </button>
    </div>
  );
}