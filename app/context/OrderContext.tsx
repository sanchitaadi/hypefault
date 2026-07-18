"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { CheckoutData } from "./CheckoutContext";

export interface OrderItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  customer: CheckoutData;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  createdAt: string;
}

interface OrderContextType {
  order: Order | null;
  setOrder: (order: Order | null) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(
  undefined
);

export function OrderProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [order, setOrder] = useState<Order | null>(null);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrder must be used inside OrderProvider");
  }

  return context;
}