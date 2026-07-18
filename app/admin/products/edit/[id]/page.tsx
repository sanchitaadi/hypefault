"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    loadProduct();
  }, []);

  async function loadProduct() {
    const res = await fetch(`/api/products/${params.id}`);
    const product = await res.json();

    setForm({
      name: product.name ?? "",
      slug: product.slug ?? "",
      description: product.description ?? "",
      category: product.category ?? "",
      brand: product.brand ?? "HYPEFAULT",
      price: String(product.price ?? ""),
      old_price: String(product.old_price ?? ""),
      stock: String(product.stock ?? ""),
      image_url: product.image_url ?? "",
      gallery: (product.gallery ?? []).join(", "),
      sizes: (product.sizes ?? []).join(", "),
      colors: (product.colors ?? []).join(", "),
      featured: product.featured ?? false,
      active: product.active ?? true,
    });

    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(`/api/products/${params.id}`, {
      method: "PATCH",
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
          .map((x) => x.trim())
          .filter(Boolean),
        sizes: form.sizes
          .split(",")
          .map((x) => x.trim())
          .filter(Boolean),
        colors: form.colors
          .split(",")
          .map((x) => x.trim())
          .filter(Boolean),
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error);
      return;
    }

    alert("Product Updated Successfully");

    router.push("/admin/products");
  }

  if (loading) {
    return (
      <div className="p-10 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      <h1 className="mb-8 text-5xl font-black">
        Edit Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid max-w-4xl gap-6"
      >
        <input
          className="rounded-xl bg-zinc-900 p-4"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          className="rounded-xl bg-zinc-900 p-4"
          placeholder="Slug"
          value={form.slug}
          onChange={(e) =>
            setForm({
              ...form,
              slug: e.target.value,
            })
          }
        />

        <textarea
          rows={6}
          className="rounded-xl bg-zinc-900 p-4"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <input
          className="rounded-xl bg-zinc-900 p-4"
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
        />

        <input
          className="rounded-xl bg-zinc-900 p-4"
          placeholder="Price"
          value={form.price}
          onChange={(e) =>
            setForm({
              ...form,
              price: e.target.value,
            })
          }
        />

        <input
          className="rounded-xl bg-zinc-900 p-4"
          placeholder="Old Price"
          value={form.old_price}
          onChange={(e) =>
            setForm({
              ...form,
              old_price: e.target.value,
            })
          }
        />

        <input
          className="rounded-xl bg-zinc-900 p-4"
          placeholder="Stock"
          value={form.stock}
          onChange={(e) =>
            setForm({
              ...form,
              stock: e.target.value,
            })
          }
        />

        <input
          className="rounded-xl bg-zinc-900 p-4"
          placeholder="Main Image URL"
          value={form.image_url}
          onChange={(e) =>
            setForm({
              ...form,
              image_url: e.target.value,
            })
          }
        />

        <input
          className="rounded-xl bg-zinc-900 p-4"
          placeholder="Gallery"
          value={form.gallery}
          onChange={(e) =>
            setForm({
              ...form,
              gallery: e.target.value,
            })
          }
        />

        <input
          className="rounded-xl bg-zinc-900 p-4"
          placeholder="Sizes"
          value={form.sizes}
          onChange={(e) =>
            setForm({
              ...form,
              sizes: e.target.value,
            })
          }
        />

        <input
          className="rounded-xl bg-zinc-900 p-4"
          placeholder="Colors"
          value={form.colors}
          onChange={(e) =>
            setForm({
              ...form,
              colors: e.target.value,
            })
          }
        />

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) =>
              setForm({
                ...form,
                featured: e.target.checked,
              })
            }
          />
          Featured Product
        </label>

        <button
          className="rounded-xl bg-red-600 p-4 font-bold hover:bg-red-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}