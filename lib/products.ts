import { supabase } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  if (error) throw error;

  return data.map((product) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,

    price: product.price,
    oldPrice: product.old_price,

    images:
      product.gallery?.length > 0
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
}