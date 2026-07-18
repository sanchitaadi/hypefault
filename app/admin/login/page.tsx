"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, Mail } from "lucide-react";
import { createClient } from "@/lib/supabase-browser";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const { error: loginError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (loginError) {
        alert(loginError.message);
        return;
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("Unable to get logged in user.");
        return;
      }

      const { data: admin } = await supabase
        .from("admins")
        .select("*")
        .eq("email", user.email)
        .maybeSingle();

      if (!admin) {
        await supabase.auth.signOut();
        alert("You are not authorized.");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-red-950 px-6">

      <div className="w-full max-w-md rounded-3xl border border-red-900/40 bg-zinc-900/90 p-10 shadow-2xl backdrop-blur">

        {/* Logo */}

        <div className="mb-8 flex flex-col items-center">

          <Image
            src="/logo.jpeg"
            alt="HYPEFAULT Logo"
            width={120}
            height={120}
            priority
            className="mb-5 rounded-2xl shadow-[0_0_40px_rgba(220,38,38,.35)]"
          />

          <h1 className="text-4xl font-black tracking-widest text-white">
            HYPEFAULT
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            ADMIN CONTROL PANEL
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div className="relative">

            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-zinc-700 bg-black py-4 pl-12 pr-4 text-white outline-none transition focus:border-red-500"
            />

          </div>

          <div className="relative">

            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-zinc-700 bg-black py-4 pl-12 pr-4 text-white outline-none transition focus:border-red-500"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-red-600 py-4 font-bold text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Signing In..." : "LOGIN"}
          </button>

        </form>

      </div>

    </div>
  );
}