"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Settings,
} from "lucide-react";

export default function AdminSidebar() {
  return (
    <aside className="min-h-screen w-64 border-r border-zinc-800 bg-zinc-950 p-6">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-black tracking-wider text-red-600">
          HYPEFAULT
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Admin Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-3">
        <Link
          href="/admin"
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-800"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="/admin/products"
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-800"
        >
          <Package size={20} />
          Products
        </Link>

        <Link
          href="/admin/orders"
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-800"
        >
          <ShoppingCart size={20} />
          Orders
        </Link>

        <Link
          href="/admin/settings"
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-800"
        >
          <Settings size={20} />
          Settings
        </Link>
      </nav>
    </aside>
  );
}