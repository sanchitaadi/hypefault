"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useCart } from "@/app/hooks/useCart";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
    scrolled
      ? "border-b border-white/10 bg-black/80 backdrop-blur-2xl shadow-2xl"
      : "bg-transparent"
  }`}
>
      <div className="mx-auto flex h-20 md:h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onDoubleClick={() => router.push("/admin/login")}
          className="group cursor-pointer select-none"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-[3px] sm:tracking-[5px] lg:tracking-[8px] text-white">
            <span className="text-red-600 transition-colors duration-300 group-hover:text-red-500">
              HYPE
            </span>
            FAULT
          </h1>

          <div className="mt-1 h-[2px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
        </motion.div>

        {/* Navigation */}
        <nav className="hidden items-center gap-12 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-sm font-semibold uppercase tracking-[4px] text-zinc-300 transition-colors duration-300 hover:text-white"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Side */}
<div className="flex items-center gap-3">
  {/* Cart */}
  <Link href="/cart">
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <FaShoppingBag className="text-lg text-white" />

      {cartCount > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white"
        >
          {cartCount}
        </motion.span>
      )}
    </motion.div>
  </Link>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setMenuOpen(true)}
    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl md:hidden"
  >
    <FaBars size={20} />
  </button>
</div>
      </div>
      {menuOpen && (
  <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl md:hidden">
    <div className="flex items-center justify-between border-b border-white/10 p-6">
      <h2 className="text-2xl font-black tracking-[4px] text-white">
        <span className="text-red-600">HYPE</span>FAULT
      </h2>

      <button onClick={() => setMenuOpen(false)}>
        <FaTimes className="text-2xl text-white" />
      </button>
    </div>

    <div className="flex flex-col gap-8 p-8">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold uppercase tracking-[4px] text-white"
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>
)}
    </header>
  );
}