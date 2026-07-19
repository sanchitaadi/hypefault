import { supabaseAdmin } from "@/lib/supabase-admin";

export default async function CustomOrdersPage() {
  const { data: orders, error } = await supabaseAdmin
    .from("custom_orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-10 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Custom Orders</h1>

      {!orders?.length ? (
        <p>No custom orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-zinc-700 rounded-xl p-6 bg-zinc-900"
            >
              <h2 className="text-2xl font-semibold">
                {order.full_name}
              </h2>

              <p>📞 {order.phone}</p>
              <p>📧 {order.email}</p>
              <p>👕 {order.product_type}</p>
              <p>🎨 {order.color}</p>
              <p>🖨️ {order.print_position}</p>
              <p>📦 Qty: {order.quantity}</p>
              <p>📍 {order.address}</p>
              <p>Status: {order.status}</p>

              {order.image_url && (
                <img
                  src={order.image_url}
                  alt="Design"
                  className="mt-4 w-52 rounded-lg border"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}