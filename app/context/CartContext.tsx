"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Product } from "@/types/product";

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

interface CartContextType {
  cart: CartItem[];

  addToCart: (
    product: Product,
    size: string,
    color: string,
    quantity?: number
  ) => void;

  removeFromCart: (
    id: string,
    size: string,
    color: string
  ) => void;

  increaseQuantity: (
    id: string,
    size: string,
    color: string
  ) => void;

  decreaseQuantity: (
    id: string,
    size: string,
    color: string
  ) => void;

  clearCart: () => void;

  cartCount: number;

  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");

    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (
    product: Product,
    size: string,
    color: string,
    quantity: number = 1
  ) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity,
          selectedSize: size,
          selectedColor: color,
        },
      ];
    });
  };

  const removeFromCart = (
    id: string,
    size: string,
    color: string
  ) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedSize === size &&
            item.selectedColor === color
          )
      )
    );
  };

  const increaseQuantity = (
    id: string,
    size: string,
    color: string
  ) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.selectedSize === size &&
        item.selectedColor === color
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (
    id: string,
    size: string,
    color: string
  ) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id &&
          item.selectedSize === size &&
          item.selectedColor === color
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCartContext must be used inside CartProvider"
    );
  }

  return context;
}