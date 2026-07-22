"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import ReviewForm from "./ReviewForm";

type Review = {
  id: string;
  name: string;
  rating: number;
  review: string;
  created_at: string;
};

interface ReviewFormProps {
  productId: string;
  onReviewAdded?: () => Promise<void>;
}

export default function Reviews({
  productId,
  productName,
}: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const loadReviews = async () => {
  setLoading(true);

  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("product_id", productId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    setLoading(false);
    return;
  }

  setReviews((data as Review[]) || []);
  setLoading(false);
};

useEffect(() => {
  loadReviews();
}, [productId]);

  const average = useMemo(() => {
    if (!reviews.length) return 0;

    return (
      reviews.reduce((sum, review) => sum + review.rating, 0) /
      reviews.length
    ).toFixed(1);
  }, [reviews]);

  return (
    <section className="mt-24 border-t border-zinc-800 pt-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-black">
          Customer Reviews
        </h2>

        <p className="mt-3 text-zinc-400">
          Reviews for{" "}
          <span className="text-white font-semibold">
            {productName}
          </span>
        </p>

        <div className="mt-8 flex items-center gap-4">
          <span className="text-5xl">
            ⭐
          </span>

          <div>
            <h3 className="text-4xl font-black">
              {average}
            </h3>

            <p className="text-zinc-400">
              {reviews.length} Reviews
            </p>
          </div>
        </div>

        {loading ? (
          <div className="mt-12 text-zinc-500">
            Loading reviews...
          </div>
        ) : reviews.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center">
            <h3 className="text-2xl font-bold">
              No Reviews Yet
            </h3>

            <p className="mt-3 text-zinc-400">
              Be the first customer to review this product.
            </p>
          </div>
        ) : (
          <div className="mt-12 space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold">
                    {review.name}
                  </h4>

                  <span className="text-yellow-400">
                    {"⭐".repeat(review.rating)}
                  </span>
                </div>

                <p className="mt-5 text-zinc-300">
                  {review.review}
                </p>

                <p className="mt-5 text-sm text-zinc-500">
                  {new Date(
                    review.created_at
                  ).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}

        <ReviewForm
  productId={productId}
  onReviewAdded={loadReviews}
/>
      </div>
    </section>
  );
}