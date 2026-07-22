export interface Product {
  id: string;
  slug: string;

  name: string;

  price: number;
  oldPrice: number;

  images: string[];

  colors: string[];

  sizes: string[];

  category: string;

  stock: number;

  rating: number;

  reviews: number;

  description: string;

  featured: boolean;

  newArrival: boolean;
}