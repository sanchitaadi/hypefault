import {
  Package,
  ShoppingCart,
  IndianRupee,
  Users,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-5xl font-black tracking-wide">
          Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          Welcome to the HYPEFAULT Admin Panel
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-red-600">
          <div className="flex items-center justify-between">
            <h2 className="text-zinc-400">Products</h2>
            <Package className="text-red-500" size={24} />
          </div>

          <p className="mt-5 text-4xl font-black">
            0
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-red-600">
          <div className="flex items-center justify-between">
            <h2 className="text-zinc-400">Orders</h2>
            <ShoppingCart className="text-red-500" size={24} />
          </div>

          <p className="mt-5 text-4xl font-black">
            0
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-red-600">
          <div className="flex items-center justify-between">
            <h2 className="text-zinc-400">Revenue</h2>
            <IndianRupee className="text-red-500" size={24} />
          </div>

          <p className="mt-5 text-4xl font-black">
            ₹0
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-red-600">
          <div className="flex items-center justify-between">
            <h2 className="text-zinc-400">Customers</h2>
            <Users className="text-red-500" size={24} />
          </div>

          <p className="mt-5 text-4xl font-black">
            0
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <h2 className="mb-6 text-2xl font-bold">
          Recent Activity
        </h2>

        <div className="rounded-xl border border-dashed border-zinc-700 py-16 text-center text-zinc-500">
          No recent activity yet.
        </div>
      </div>
    </div>
  );
}