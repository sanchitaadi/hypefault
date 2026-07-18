"use client";

import { useState } from "react";

interface Props {
  sizes?: string[];
  colors?: string[];
}

export default function ProductOptions({
  sizes = [],
  colors = [],
}: Props) {
  const [selectedSize, setSelectedSize] = useState<string | null>(
    sizes[0] ?? null
  );

  const [selectedColor, setSelectedColor] = useState<string | null>(
    colors[0] ?? null
  );

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-8">
      {/* Size */}
      {sizes.length > 0 && (
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Size
            {selectedSize && (
              <span className="ml-2 text-red-500">({selectedSize})</span>
            )}
          </h3>

          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`rounded-xl border px-6 py-3 font-medium transition ${
                  selectedSize === size
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-white/20 hover:border-red-600"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Color */}
      {colors.length > 0 && (
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Color
            {selectedColor && (
              <span className="ml-2 text-red-500">
                ({selectedColor})
              </span>
            )}
          </h3>

          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`rounded-xl border px-5 py-3 transition ${
                  selectedColor === color
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-white/20 hover:border-red-600"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Quantity</h3>

        <div className="flex w-fit items-center rounded-xl border border-white/20">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-5 py-3 text-xl"
          >
            −
          </button>

          <span className="w-14 text-center font-bold">
            {quantity}
          </span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-5 py-3 text-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}