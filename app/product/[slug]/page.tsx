"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { useCart } from "@/app/hooks/useCart";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default function ProductPage({ params }: Props) {
  const { slug } = use(params);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="min-h-screen bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT */}

        <div>
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full rounded-3xl"
          />

          <div className="flex gap-4 mt-5 flex-wrap">
            {product.images.map((image) => (
              <img
                key={image}
                src={image}
                alt={product.name}
                onClick={() => setSelectedImage(image)}
                className={`h-24 w-24 rounded-xl object-cover cursor-pointer border-2 transition ${
                  selectedImage === image
                    ? "border-red-600"
                    : "border-zinc-700"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div>

          <h1 className="text-6xl font-black">
            {product.name}
          </h1>

          <div className="flex gap-4 mt-8 items-center">
            <span className="text-4xl font-bold text-red-500">
              ₹{product.price}
            </span>

            <span className="line-through text-2xl text-gray-500">
              ₹{product.oldPrice}
            </span>
          </div>

          <p className="mt-8 text-gray-400 leading-8">
            {product.description}
          </p>

          {/* Sizes */}

          <div className="mt-10">
            <h3 className="font-bold mb-4">
              Sizes
            </h3>

            <div className="flex gap-3 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-3 rounded-xl border transition ${
                    selectedSize === size
                      ? "bg-red-600 border-red-600"
                      : "border-zinc-700 hover:bg-zinc-800"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}

          <div className="mt-10">
            <h3 className="font-bold mb-4">
              Colors
            </h3>

            <div className="flex gap-3 flex-wrap">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-5 py-3 rounded-xl border transition ${
                    selectedColor === color
                      ? "bg-red-600 border-red-600"
                      : "border-zinc-700 hover:bg-zinc-800"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}

          <div className="mt-10">
            <h3 className="font-bold mb-4">
              Quantity
            </h3>

            <div className="flex items-center gap-5">
              <button
                onClick={() =>
                  setQuantity((q) => Math.max(1, q - 1))
                }
                className="h-12 w-12 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition"
              >
                −
              </button>

              <span className="text-2xl font-bold">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="h-12 w-12 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Add To Cart */}

          <button
            onClick={() => {
              console.log("Add To Cart Clicked");

              addToCart(
                product,
                selectedSize,
                selectedColor,
                quantity
              );

              alert("Product Added To Cart");
            }}
            className="mt-12 w-full rounded-full bg-red-600 py-5 text-xl font-bold transition hover:bg-red-700"
          >
            Add To Cart
          </button>

        </div>

      </div>
    </main>
  );
}