import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",

    slug: "bmw-m2-oversized-teee",

    name: "M2",

    price: 799,

    oldPrice: 999,

    images: [
      "/products/M2-W1.PNG",
      "/products/M2-W2.PNG"
    ],

    colors: ["OFF-WHITE"],

    sizes: ["S", "M", "L", "XL"],

    category: "T-Shirts",

    stock: 20,

    rating: 5.0,

    reviews: 126,

    description: `⚡ Specs & Vibe

• The Ultimate Fit — Oversized silhouette designed to complement every body type.

• Premium Comfort — Ultra-soft, breathable cotton that feels broken-in from the very first wear.

• Made to Last — Pre-shrunk fabric that keeps its shape wash after wash.

• Premium Fabric — Crafted from 100% premium cotton for everyday comfort and durability.`,

    featured: true,

    newArrival: true,
  },

  {
    id:"2",

    slug: "bmw-oversized-tee",

    name: "BMW",

    price: 799,

    oldPrice: 999,

    images: [
      "/products/BMW 1.PNG",
      "/products/BMW 2.PNG"
    ],

    colors: ["OFF-WHITE"],

    sizes: ["S", "M", "L", "XL"],

    category: "T-Shirts",

    stock: 18,

    rating: 4.9,

    reviews: 94,

    description: `⚡ Specs & Vibe

• The Ultimate Fit — Oversized silhouette designed to complement every body type.

• Premium Comfort — Ultra-soft, breathable cotton that feels broken-in from the very first wear.

• Made to Last — Pre-shrunk fabric that keeps its shape wash after wash.

• Premium Fabric — Crafted from 100% premium cotton for everyday comfort and durability.`,

    featured: true,

    newArrival: true,
  },

  {
    id:" 3",

    slug: "porsche-oversized-tee",

    name: "Porsche",

    price: 799,

    oldPrice: 999,

    images: [
      "/products/PORSCHE 1.PNG", 
      "/products/PORSCHE 2.PNG"
      // Change to .png if that's your actual filename
    ],

    colors: ["Black"],

    sizes: ["S", "M", "L", "XL"],

    category: "T-Shirts",

    stock: 15,

    rating: 5.0,

    reviews: 78,

    description: `⚡ Specs & Vibe

• The Ultimate Fit — Oversized silhouette designed to complement every body type.

• Premium Comfort — Ultra-soft, breathable cotton that feels broken-in from the very first wear.

• Made to Last — Pre-shrunk fabric that keeps its shape wash after wash.

• Premium Fabric — Crafted from 100% premium cotton for everyday comfort and durability.`,

    featured: true,

    newArrival: true,
  },
];