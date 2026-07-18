"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    category: "",
    brand: "HYPEFAULT",
    price: "",
    old_price: "",
    stock: "",
    image_url: "",
    gallery: "",
    sizes: "",
    colors: "",
    featured: false,
    active: true,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          old_price: Number(form.old_price),
          stock: Number(form.stock),
          gallery: form.gallery
            .split(",")
            .map((x) => x.trim()),
          sizes: form.sizes
            .split(",")
            .map((x) => x.trim()),
          colors: form.colors
            .split(",")
            .map((x) => x.trim()),
        }),
      });

      const data = await res.json();

      console.log("API Response:", data);

      if (res.ok) {
        alert("✅ Product Added Successfully");
        router.push("/admin/products");
      } else {
        alert(data.error || "Failed to add product");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      <h1 className="mb-8 text-5xl font-black">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid max-w-4xl gap-6"
      >
        <input
          placeholder="Product Name"
          className="rounded-xl bg-zinc-900 p-4"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Slug"
          className="rounded-xl bg-zinc-900 p-4"
          value={form.slug}
          onChange={(e) =>
            setForm({ ...form, slug: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          className="rounded-xl bg-zinc-900 p-4"
          rows={5}
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <input
          placeholder="Category"
          className="rounded-xl bg-zinc-900 p-4"
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Price"
          className="rounded-xl bg-zinc-900 p-4"
          value={form.price}
          onChange={(e) =>
            setForm({
              ...form,
              price: e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Old Price"
          className="rounded-xl bg-zinc-900 p-4"
          value={form.old_price}
          onChange={(e) =>
            setForm({
              ...form,
              old_price: e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Stock"
          className="rounded-xl bg-zinc-900 p-4"
          value={form.stock}
          onChange={(e) =>
            setForm({
              ...form,
              stock: e.target.value,
            })
          }
        />

        <input
          placeholder="Main Image URL"
          className="rounded-xl bg-zinc-900 p-4"
          value={form.image_url}
          onChange={(e) =>
            setForm({
              ...form,
              image_url: e.target.value,
            })
          }
        />

        <input
          placeholder="Gallery (comma separated)"
          className="rounded-xl bg-zinc-900 p-4"
          value={form.gallery}
          onChange={(e) =>
            setForm({
              ...form,
              gallery: e.target.value,
            })
          }
        />

        <input
          placeholder="Sizes (S,M,L,XL)"
          className="rounded-xl bg-zinc-900 p-4"
          value={form.sizes}
          onChange={(e) =>
            setForm({
              ...form,
              sizes: e.target.value,
            })
          }
        />

        <input
          placeholder="Colors (Black,White)"
          className="rounded-xl bg-zinc-900 p-4"
          value={form.colors}
          onChange={(e) =>
            setForm({
              ...form,
              colors: e.target.value,
            })
          }
        />

        <button
          type="submit"
          className="rounded-xl bg-red-600 p-4 font-bold transition hover:bg-red-700"
        >
          Save Product
        </button>
      </form>
    </div>
  );
}