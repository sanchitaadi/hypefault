"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { v4 as uuid } from "uuid";

export default function AddProductPage() {
  const router = useRouter();
 
  const [images, setImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

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

  if (images.length === 0) {
    alert("Please select at least one image.");
    return;
  }

  try {
    setUploading(true);

    const uploadedUrls: string[] = [];

    for (const image of images) {
      const fileName = `${uuid()}-${image.name}`;

      const { error } = await supabase.storage
        .from("products")
        .upload(fileName, image);

      if (error) throw error;

      const { data } = supabase.storage
        .from("products")
        .getPublicUrl(fileName);

      uploadedUrls.push(data.publicUrl);
    }

    const res = await fetch("/api/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        image_url: uploadedUrls[0],
        gallery: uploadedUrls,
        price: Number(form.price),
        old_price: Number(form.old_price),
        stock: Number(form.stock),
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
      throw new Error(data.error || "Failed to add product");
    }

    alert("✅ Product Added Successfully");
    router.push("/admin/products");
  } catch (err: any) {
  console.error("UPLOAD ERROR:", err);

  alert(
    err?.message ||
    JSON.stringify(err) ||
    "Something went wrong while uploading."
  );
} finally {
  setUploading(false);
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
        <div className="space-y-4">
  <label className="font-semibold">
    Product Images
  </label>

  <input
    type="file"
    multiple
    accept="image/*"
    className="rounded-xl bg-zinc-900 p-4"
    onChange={(e) => {
      if (e.target.files) {
        setImages(Array.from(e.target.files));
      }
    }}
  />

  {images.length > 0 && (
    <div className="text-sm text-zinc-400">
      {images.length} image(s) selected
    </div>
  )}
</div>
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
  disabled={uploading}
  className="rounded-xl bg-red-600 p-4 font-bold transition hover:bg-red-700 disabled:opacity-50"
>
  {uploading ? "Uploading..." : "Save Product"}
</button>
      </form>
    </div>
  );
}