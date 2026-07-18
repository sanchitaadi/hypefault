import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  const products = data.map((product) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,

    price: product.price,
    oldPrice: product.old_price,

    images:
      product.gallery && product.gallery.length > 0
        ? product.gallery
        : [product.image_url],

    colors: product.colors ?? [],
    sizes: product.sizes ?? [],

    category: product.category,
    stock: product.stock,

    rating: Number(product.rating),
    reviews: product.reviews,

    description: product.description,

    featured: product.featured,
    newArrival: false,
  }));

  return NextResponse.json(products);
}