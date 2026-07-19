"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const products = [
  {
    name: "Oversized Tee",
    image: "/products/M2-W1.PNG",
  },
  {
    name: "Hoodie",
    image: "/products/BMW 2.PNG",
  },
  {
    name: "Sweatshirt",
    image: "/products/PORSCHE 2.png",
  },
  {
    name: "Tank",
    image: "/products/always god 2.png",
  },
];

const colors = [
  "Black",
  "White",
  "Grey",
  "Beige",
  "Navy",
];

const sizes = ["S","M","L","XL","XXL"];

export default function CustomGarage() {

const [loading,setLoading]=useState(false);

const [preview,setPreview]=useState("");

const [image,setImage]=useState<File|null>(null);

const [form,setForm]=useState({

full_name:"",
email:"",
phone:"",
address:"",
notes:"",

product_type:"Oversized Tee",

color:"Black",

size:"M",

print_position:"Front",

quantity:1,

});

async function handleSubmit(e:React.FormEvent){

e.preventDefault();

if(!image){

alert("Upload your design");

return;

}

setLoading(true);

try{

const fileName=`${Date.now()}-${image.name}`;

const {error}=await supabase.storage

.from("custom-designs")

.upload(fileName,image);

if(error) throw error;

const {data}=supabase.storage

.from("custom-designs")

.getPublicUrl(fileName);

const image_url=data.publicUrl;

const res=await fetch("/api/custom-orders",{

method:"POST",

headers:{

"Content-Type":"application/json",

},

body:JSON.stringify({

...form,

image_url,

}),

});

const result=await res.json();

if(!result.success){

throw new Error(result.error);

}

const message=`Hello HYPEFAULT

Name: ${form.full_name}

Phone: ${form.phone}

Product: ${form.product_type}

Size: ${form.size}

Color: ${form.color}

Print: ${form.print_position}

Qty: ${form.quantity}

Design:

${image_url}`;

window.open(

`https://wa.me/918750485010?text=${encodeURIComponent(message)}`,

"_blank"

);

alert("Order Submitted Successfully");

}catch(err){

console.error(err);

alert("Something went wrong");

}

setLoading(false);

}

return (
  <main className="min-h-screen bg-black text-white">

    {/* HERO */}

    <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-black">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <h1 className="text-center text-6xl font-black tracking-tight text-white">
          CUSTOM{" "}
          <span className="text-red-500">
            GARAGE
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-zinc-400">
          Build your own premium HYPEFAULT apparel.
          Upload your design, choose your product,
          and we'll handle the rest.
        </p>
<div className="mt-5 flex justify-center">
  <div className="rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2">
    <p className="text-center text-sm font-semibold tracking-wide text-red-400">
      NOTE: Custom Designs start from ₹1,199*
    </p>
  </div>
</div>
      </div>

    </section>

    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-7xl px-6 py-12"
    >

      <div className="grid gap-10 lg:grid-cols-2">

        {/* LEFT */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

          <h2 className="mb-6 text-2xl font-bold">
            Upload Design
          </h2>

          <label className="flex h-80 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-red-600 bg-zinc-950 transition hover:bg-zinc-900">

  {preview ? (

    <img
      src={preview}
      className="h-full w-full rounded-3xl object-contain"
    />

  ) : (

    <>

      <div className="text-7xl">
        🎨
      </div>

      <p className="mt-5 text-xl font-bold">
        Drag & Drop Design
      </p>

      <p className="text-zinc-500">
        PNG • JPG • SVG • PDF
      </p>

    </>

  )}

  <input
    hidden
    type="file"
    accept="image/*"
    onChange={(e)=>{

      const file=e.target.files?.[0];

      if(!file)return;

      setImage(file);

      setPreview(URL.createObjectURL(file));

    }}
  />

</label>

        </div>

        {/* RIGHT */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

          <h2 className="mb-6 text-2xl font-bold">
            Select Product
          </h2>

          <div className="grid grid-cols-2 gap-5">

            {products.map((product) => (

              <button
                key={product.name}
                type="button"
                onClick={() =>
                  setForm({
                    ...form,
                    product_type: product.name,
                  })
                }
                className={`rounded-2xl border p-5 transition ${
                  form.product_type === product.name
                    ? "border-red-500 bg-red-500/10"
                    : "border-zinc-800 hover:border-zinc-600"
                }`}
              >

                <div className="relative overflow-hidden rounded-xl">

  <img
    src={product.image}
    alt={product.name}
    className="h-48 w-full object-cover transition duration-300 hover:scale-110"
  />

  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">

    <p className="font-bold">
      {product.name}
    </p>

  </div>

</div>

                <p className="mt-4 text-center font-semibold">
                  {product.name}
                </p>

              </button>

            ))}

          </div>

        </div>

      </div>
            {/* CUSTOMIZATION */}

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

        <h2 className="mb-8 text-3xl font-bold">
          Customize Your Apparel
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {/* COLORS */}

          <div>

            <h3 className="mb-4 text-xl font-semibold">
              Color
            </h3>

            <div className="flex flex-wrap gap-3">

              {colors.map((color) => (

                <button
                  key={color}
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      color,
                    })
                  }
                  className={`rounded-full border px-5 py-2 transition ${
                    form.color === color
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-zinc-700"
                  }`}
                >
                  {color}
                </button>

              ))}

            </div>

          </div>

          {/* SIZE */}

          <div>

            <h3 className="mb-4 text-xl font-semibold">
              Size
            </h3>

            <div className="flex flex-wrap gap-3">

              {sizes.map((size) => (

                <button
                  key={size}
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      size,
                    })
                  }
                  className={`h-12 w-12 rounded-xl border transition ${
                    form.size === size
                      ? "border-red-500 bg-red-500"
                      : "border-zinc-700"
                  }`}
                >
                  {size}
                </button>

              ))}

            </div>

          </div>

          {/* PRINT */}

          <div>

            <h3 className="mb-4 text-xl font-semibold">
              Print Position
            </h3>

            <select
              value={form.print_position}
              onChange={(e) =>
                setForm({
                  ...form,
                  print_position: e.target.value,
                })
              }
              className="w-full rounded-xl bg-zinc-900 p-4"
            >
              <option>Front</option>
              <option>Back</option>
              <option>Front + Back</option>
              <option>Sleeve</option>
            </select>

          </div>

          {/* QUANTITY */}

          <div>

            <h3 className="mb-4 text-xl font-semibold">
              Quantity
            </h3>

            <div className="flex items-center gap-4">

              <button
                type="button"
                onClick={() =>
                  setForm({
                    ...form,
                    quantity: Math.max(1, form.quantity - 1),
                  })
                }
                className="rounded-xl bg-zinc-800 px-5 py-3 text-xl"
              >
                −
              </button>

              <span className="text-2xl font-bold">
                {form.quantity}
              </span>

              <button
                type="button"
                onClick={() =>
                  setForm({
                    ...form,
                    quantity: form.quantity + 1,
                  })
                }
                className="rounded-xl bg-red-600 px-5 py-3 text-xl"
              >
                +
              </button>

            </div>

          </div>

        </div>

      </div>
            {/* CUSTOMER DETAILS */}

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

        <h2 className="mb-8 text-3xl font-bold">
          Customer Details
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              value={form.full_name}
              onChange={(e) =>
                setForm({ ...form, full_name: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-red-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-red-500"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-red-500"
              placeholder="9876543210"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Delivery Address
            </label>
            <input
              type="text"
              value={form.address}
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-red-500"
              placeholder="Enter delivery address"
              required
            />
          </div>

        </div>

        <div className="mt-6">

          <label className="mb-2 block text-sm font-medium">
            Special Instructions
          </label>

          <textarea
            rows={5}
            value={form.notes}
            onChange={(e) =>
              setForm({ ...form, notes: e.target.value })
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-red-500"
            placeholder="Mention anything you'd like us to know..."
          />

        </div>

      </div>

      {/* SUBMIT */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-red-600 to-red-700 p-10 text-center">

        <h2 className="text-3xl font-black">
          READY TO BUILD YOUR HYPE?
        </h2>

        <p className="mt-3 text-red-100">
          Our Pit Crew will review your design and contact you shortly.
        </p>
<div className="mt-10 rounded-2xl bg-zinc-900 p-8">

<h2 className="mb-5 text-2xl font-bold">
Order Summary
</h2>

<div className="space-y-2 text-zinc-300">

<p>
<b>Product:</b> {form.product_type}
</p>

<p>
<b>Color:</b> {form.color}
</p>

<p>
<b>Size:</b> {form.size}
</p>

<p>
<b>Print:</b> {form.print_position}
</p>

<p>
<b>Quantity:</b> {form.quantity}
</p>

</div>

</div>
        <button
          type="submit"
          disabled={loading}
          className="mt-8 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-black transition hover:scale-105 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "SUBMIT DESIGN TO PIT CREW"}
        </button>

      </div>

    </form>
<footer className="mt-20 border-t border-zinc-800 py-10 text-center text-zinc-500">

Made with ❤️ by

<span className="ml-2 font-bold text-red-500">

HYPEFAULT

</span>

</footer>
  </main>
);
}