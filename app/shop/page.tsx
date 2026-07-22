"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  old_price?: number;
  image_url: string;
  category: string;
  featured: boolean;
  active: boolean;
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Newest");

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("active", true)
        .order("created_at", { ascending: false });

      setProducts(data || []);
      setLoading(false);
    })();
  }, []);

  const categories = useMemo(
    () => ["All", ...new Set(products.map((p) => p.category).filter(Boolean))],
    [products]
  );

  const filtered = useMemo(() => {
    let list = [...products];

    if (category !== "All")
      list = list.filter((p) => p.category === category);

    if (search)
      list = list.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );

    switch (sort) {
      case "Price Low":
        list.sort((a, b) => a.price - b.price);
        break;
      case "Price High":
        list.sort((a, b) => b.price - a.price);
        break;
    }

    return list;
  }, [products, search, category, sort]);

  return (
    <main className="min-h-screen bg-black text-white pt-28">
      <div className="mx-auto max-w-7xl px-6">

        <section className="relative overflow-hidden rounded-3xl border border-red-600/20 bg-gradient-to-r from-black via-zinc-950 to-red-950 px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,.15),transparent_60%)]" />

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative z-10"
  >
    <h1 className="break-words text-4xl font-black tracking-[2px] sm:text-5xl sm:tracking-[6px] md:text-6xl md:tracking-[10px] lg:text-8xl lg:tracking-[12px]">
      HYPEFAULT
    </h1>

    <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-7 text-zinc-400 sm:mt-6 sm:text-base md:text-lg">
      Premium Streetwear • Minimal Design • Maximum Impact
    </p>
  </motion.div>
</section>

        <div className="my-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search products..."
            className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 outline-none focus:border-red-500"
          />

          <div className="flex flex-wrap gap-3">
            {categories.map((c)=>(
              <button
                key={c}
                onClick={()=>setCategory(c)}
                className={`rounded-full px-5 py-2 transition ${
                  category===c
                    ? "bg-red-600"
                    : "border border-zinc-700 hover:border-red-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e)=>setSort(e.target.value)}
            className="rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3"
          >
            <option>Newest</option>
            <option>Price Low</option>
            <option>Price High</option>
          </select>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_,i)=>(
              <div key={i} className="h-[420px] animate-pulse rounded-3xl bg-zinc-900"/>
            ))}
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {filtered.map((product)=>(
              <Link key={product.id} href={`/shop/${product.slug}`}>
                <motion.div
                  whileHover={{y:-8}}
                  className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 hover:border-red-600"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="h-96 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold">
                      {product.old_price ? "SALE" : "NEW"}
                    </span>
                    <button
                      onClick={(e)=>e.preventDefault()}
                      className="absolute right-4 top-4 rounded-full bg-black/70 p-3"
                    >
                      ♥
                    </button>
                  </div>

                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-red-500">
                      {product.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                      {product.name}
                    </h2>

                    

                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-2xl font-bold text-red-500">
                        ₹{product.price}
                      </span>

                      {product.old_price && (
                        <span className="text-zinc-500 line-through">
                          ₹{product.old_price}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e)=>e.preventDefault()}
                      className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold transition hover:bg-red-700"
                    >
                      Quick Add
                    </button>
                  </div>
                </motion.div>
              </Link>
            ))}
          </section>
        )}

        <section className="my-24 rounded-3xl border border-red-600/20 bg-gradient-to-r from-red-950 to-black p-16 text-center">
          <h2 className="text-5xl font-black">
            JOIN THE MOVEMENT
          </h2>
          <p className="mt-4 text-zinc-400">
            Get notified about exclusive drops and limited collections.
          </p>
          <button className="mt-8 rounded-full bg-red-600 px-10 py-4 font-bold hover:bg-red-700">
            Subscribe
          </button>
        </section>

      </div>
    </main>
  );
}
