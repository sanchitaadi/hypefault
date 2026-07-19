"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Pencil,
  Trash2,
  Star,
  Package,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  old_price: number;
  stock: number;
  category: string;
  featured: boolean;
  image_url: string;
  gallery: string[];
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    setLoading(true);

    try {
      const res = await fetch("/api/products");
      const data = await res.json();

      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function deleteProduct(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to delete product");
        return;
      }

      alert("Product deleted successfully!");

      loadProducts();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  }

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-black">
              Products
            </h1>

            <p className="mt-2 text-zinc-400">
              Manage your HYPEFAULT collection
            </p>
          </div>

          <Link
            href="/admin/products/new"
            className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
          >
            <Plus size={18} />
            Add Product
          </Link>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-20 text-center text-zinc-400">
            Loading products...
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 p-20 text-center">

            <Package
              className="mx-auto mb-6 text-zinc-600"
              size={70}
            />

            <h2 className="text-3xl font-bold">
              No Products Found
            </h2>

            <p className="mt-3 text-zinc-500">
              Add your first product to get started.
            </p>

            <Link
              href="/admin/products/new"
              className="mt-8 inline-flex items-center rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
            >
              + Add Product
            </Link>

          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">

            <table className="w-full">

              <thead className="bg-zinc-800">
                <tr>
                  <th className="p-5 text-left">
                    Product
                  </th>

                  <th className="text-left">
                    Category
                  </th>

                  <th className="text-left">
                    Price
                  </th>

                  <th className="text-left">
                    Stock
                  </th>

                  <th className="text-left">
                    Featured
                  </th>

                  <th className="pr-8 text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>

                {products.map((product) => (

                  <tr
                    key={product.id}
                    className="border-t border-white/10 transition hover:bg-zinc-800/50"
                  >

                    <td className="p-5">

                      <div className="flex items-center gap-4">

                        <Image
  src={
    product.image_url ||
    product.gallery?.[0] ||
    "/products/tee-black.jpeg"
  }
  alt={product.name}
  width={70}
  height={70}
  className="rounded-xl object-cover"
/>

                        <div>
                          <h3 className="font-bold">
                            {product.name}
                          </h3>

                          <p className="text-sm text-zinc-500">
                            {product.slug}
                          </p>
                        </div>

                      </div>

                    </td>

                    <td>
                      {product.category}
                    </td>

                    <td>

                      <div>
                        <span className="font-bold text-red-500">
                          ₹{product.price}
                        </span>

                       {product.old_price > 0 && (
  <div className="text-sm text-zinc-500 line-through">
    ₹{product.old_price}
  </div>
)}
                      </div>

                    </td>

                    <td>

                      <span
                        className={`rounded-full px-3 py-1 text-sm ${
                          product.stock > 0
                            ? "bg-green-600/20 text-green-400"
                            : "bg-red-600/20 text-red-400"
                        }`}
                      >
                        {product.stock} Left
                      </span>

                    </td>

                    <td>

                      {product.featured ? (
                        <Star
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ) : (
                        "-"
                      )}

                    </td>

                    <td>

                      <div className="flex justify-end gap-3 pr-6">

                        <Link
                          href={`/admin/products/edit/${product.id}`}
                          className="rounded-lg bg-blue-600 p-2 transition hover:bg-blue-700"
                        >
                          <Pencil size={18} />
                        </Link>

                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="rounded-lg bg-red-600 p-2 transition hover:bg-red-700"
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>
    </div>
  );
}