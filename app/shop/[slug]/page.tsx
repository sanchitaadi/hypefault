import { notFound } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import ProductGallery from "./ProductGallery";
import ProductOptions from "./ProductOptions";
import ProductActions from "./ProductActions";

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  old_price?: number;
  image_url: string;
  gallery?: string[];
  sizes?: string[];
  colors?: string[];
  category?: string;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    notFound();
  }

  const product = data as Product;

  const discount =
    product.old_price && product.old_price > product.price
      ? Math.round(
          ((product.old_price - product.price) / product.old_price) * 100
        )
      : 0;

  return (
    <main className="min-h-screen bg-black pt-32 pb-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Back Button */}
        <Link
          href="/shop"
          className="mb-10 inline-flex text-zinc-400 transition hover:text-red-500"
        >
          ← Back to Shop
        </Link>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <ProductGallery
              image={product.image_url}
              gallery={product.gallery}
              name={product.name}
            />
          </div>

          {/* RIGHT */}
          <div>
            {product.category && (
              <span className="rounded-full border border-red-600 px-4 py-1 text-sm uppercase tracking-widest text-red-500">
                {product.category}
              </span>
            )}

            <h1 className="mt-5 text-6xl font-black leading-tight">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-2 text-lg text-yellow-400">
              ★★★★★
              <span className="text-base text-zinc-500">(124 Reviews)</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <span className="text-5xl font-black text-red-500">
                ₹{product.price}
              </span>

              {product.old_price && (
                <>
                  <span className="text-2xl text-zinc-500 line-through">
                    ₹{product.old_price}
                  </span>

                  <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-bold">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              {product.description}
            </p>

            {/* Product Options */}
            <div className="mt-10">
              <ProductOptions
                sizes={product.sizes}
                colors={product.colors}
              />
            </div>

            {/* Stock */}
            <div className="mt-10 rounded-2xl border border-green-700 bg-green-900/20 p-4 text-green-400">
              ✓ In Stock — Ready to Ship
            </div>

           {/* Buttons */}
<div className="mt-10">
  <ProductActions
    product={{
      id: product.id,
      name: product.name,
      slug: product.slug,
      image: product.image_url,
      price: product.price,
      sizes: product.sizes,
      colors: product.colors,
    }}
  />
</div>

{/* Delivery */}
            <div className="mt-10 space-y-3 text-zinc-400">
              <p>🚚 Free Shipping on orders above ₹999</p>
              <p>📦 Estimated Delivery: 3–5 Business Days</p>
              <p>🔄 7 Days Easy Returns</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}