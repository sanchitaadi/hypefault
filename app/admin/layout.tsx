import AdminSidebar from "@/app/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-black text-white">

      <AdminSidebar />

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}