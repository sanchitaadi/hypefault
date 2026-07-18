import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    slug: "oversized-shadow-tee",
    name: "Oversized Shadow Tee",
    price: 1499,
    oldPrice: 1999,

    images: [
      "/products/tee-black.jpeg",
      "/products/tee-white.jpeg",
    ],

    colors: ["Black", "White", "Red"],

    sizes: ["XS", "S", "M", "L", "XL", "XXL"],

    category: "T-Shirt",

    stock: 12,

    rating: 4.9,

    reviews: 182,

    description: "Premium 240 GSM oversized cotton oversized t-shirt with a relaxed streetwear fit. Designed for everyday comfort and style.",

    featured: true,

    newArrival: true,
  },

  {
    id: 2,
    slug: "heavyweight-hoodie",
    name: "Heavyweight Hoodie",
    price: 2899,
    oldPrice: 3499,

    images: [
      "/products/hoodie-black.jpeg",
    ],

    colors: ["Black", "Grey"],

    sizes: ["S", "M", "L", "XL"],

    category: "Hoodie",

    stock: 8,

    rating: 5.0,

    reviews: 92,

    description: "Premium 420 GSM heavyweight hoodie with oversized fit and ultra-soft fleece interior.",

    featured: true,

    newArrival: false,
  },

  {
    id: 3,
    slug: "street-cargo-pants",
    name: "Street Cargo Pants",
    price: 2499,
    oldPrice: 3199,

    images: [
      "/products/cargo-black.jpeg",
    ],

    colors: ["Black"],

    sizes: ["S", "M", "L", "XL"],

    category: "Cargo",

    stock: 15,

    rating: 4.8,

    reviews: 67,

    description: "Relaxed-fit premium cargo pants made for everyday streetwear with multiple utility pockets.",

    featured: false,

    newArrival: true,
  },
];