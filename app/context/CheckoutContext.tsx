"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export interface CheckoutData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
 payment: "upi";
utr: string;
}

interface CheckoutContextType {
  data: CheckoutData;
  setData: React.Dispatch<React.SetStateAction<CheckoutData>>;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);

export function CheckoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState<CheckoutData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "India",
    payment: "upi",
utr: "",
  });

  return (
    <CheckoutContext.Provider value={{ data, setData }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error(
      "useCheckout must be used within CheckoutProvider"
    );
  }

  return context;
}