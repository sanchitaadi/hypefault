import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/app/context/CartContext";
import { CheckoutProvider } from "@/app/context/CheckoutContext";
import { OrderProvider } from "@/app/context/OrderContext";

import CustomCursor from "@/app/components/CustomCursor";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:  "HYPEFAULT",
  description: "Premium Streetwear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <OrderProvider>
          <CheckoutProvider>
            <CartProvider>
              <CustomCursor />
             

              {children}
            </CartProvider>
          </CheckoutProvider>
        </OrderProvider>
      </body>
    </html>
  );
}