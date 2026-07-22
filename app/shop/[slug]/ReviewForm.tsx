"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface ReviewFormProps {
  productId: string;
  onReviewAdded?: () => Promise<void>;
}

export default function ReviewForm({
  productId,
  onReviewAdded,
}: ReviewFormProps) {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !review.trim()) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("reviews").insert({
      product_id: productId,
      name,
      rating,
      review,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setName("");
    setReview("");
    setRating(5);

    alert("Review submitted successfully!");

    if (onReviewAdded) {
  await onReviewAdded();
}
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
    >
      <h3 className="mb-6 text-2xl font-bold">
        Write a Review
      </h3>

      <input
        className="mb-4 w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        className="mb-4 w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option value={5}>⭐⭐⭐⭐⭐</option>
        <option value={4}>⭐⭐⭐⭐</option>
        <option value={3}>⭐⭐⭐</option>
        <option value={2}>⭐⭐</option>
        <option value={1}>⭐</option>
      </select>

      <textarea
        className="mb-6 h-40 w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none"
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-white px-8 py-3 font-bold text-black transition hover:scale-105 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}