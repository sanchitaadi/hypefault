"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    const text = `🔥 Hello HYPEFAULT!

Name: ${name}

Email: ${email}

Phone: ${phone}

Subject: ${subject}

Message:
${message}`;

    window.open(
      `https://wa.me/918750485010?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[180px]" />

      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-red-700/10 blur-[160px]" />

      <div className="absolute right-0 top-1/2 h-[300px] w-[300px] rounded-full bg-red-500/10 blur-[160px]" />

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-40">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <p className="mb-4 tracking-[8px] text-red-500 uppercase">
            CONTACT
          </p>

          <h1 className="text-6xl font-black md:text-8xl">
            HYPEFAULT
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
            Whether you're placing a custom order,
            collaborating with us, or simply have a question,
            we're here to help.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {/* WhatsApp */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-red-500/20 bg-white/5 p-8 backdrop-blur-xl transition"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600">

              <Phone size={30} />

            </div>

            <h2 className="text-2xl font-bold">
              WhatsApp
            </h2>

            <p className="mt-3 text-zinc-400">
              Chat with us directly for quick support
              and custom orders.
            </p>

            <a
              href="https://wa.me/918750485010"
              target="_blank"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-red-500 hover:text-red-400"
            >
              Start Chat
              <ArrowRight size={18} />
            </a>

          </motion.div>

          {/* Email */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-zinc-800 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800">

              <Mail size={30} />

            </div>

            <h2 className="text-2xl font-bold">
              Email
            </h2>

            <p className="mt-3 text-zinc-400">
              support@hypefault.com
            </p>

          </motion.div>

          {/* Instagram */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-zinc-800 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800">

              <div className="text-3xl">📷</div>

            </div>

            <h2 className="text-2xl font-bold">
              Instagram
            </h2>

            <p className="mt-3 text-zinc-400">
              @hypefault
            </p>

          </motion.div>

        </div>
                {/* Contact Form + Info */}

        <div className="mt-24 grid gap-10 lg:grid-cols-2">

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="rounded-3xl border border-zinc-800 bg-white/5 p-8 backdrop-blur-xl"
          >

            <h2 className="mb-8 text-3xl font-bold">
              Send us a Message
            </h2>

            <div className="space-y-5">

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none transition focus:border-red-500"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none transition focus:border-red-500"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none transition focus:border-red-500"
              />

              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none transition focus:border-red-500"
              />

              <textarea
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none transition focus:border-red-500"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: .97 }}
                onClick={sendWhatsApp}
                className="w-full rounded-xl bg-red-600 py-4 text-lg font-bold transition hover:bg-red-700"
              >
                Send on WhatsApp
              </motion.button>

            </div>

          </motion.div>

          {/* Business Information */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="space-y-8"
          >

            <div className="rounded-3xl border border-zinc-800 bg-white/5 p-8 backdrop-blur-xl">

              <div className="mb-5 flex items-center gap-4">

                <MapPin className="text-red-500" size={28} />

                <h3 className="text-2xl font-bold">
                  Headquarters
                </h3>

              </div>

              <p className="leading-8 text-zinc-400">
                Delhi NCR
                <br />
                India
              </p>

            </div>

            <div className="rounded-3xl border border-zinc-800 bg-white/5 p-8 backdrop-blur-xl">

              <h3 className="mb-5 text-2xl font-bold">
                Response Time
              </h3>

              <div className="space-y-3 text-zinc-400">

                <p>⚡ WhatsApp: Within 1 Hour</p>

                <p>📧 Email: Within 24 Hours</p>

                <p>🎨 Custom Orders: 1–2 Business Days</p>

                <p>📦 Order Support: Monday – Saturday</p>

              </div>

            </div>

            <div className="rounded-3xl border border-red-500/20 bg-red-600/10 p-8">

              <h3 className="mb-3 text-2xl font-bold">
                Need a Custom Design?
              </h3>

              <p className="text-zinc-300">
                Upload your artwork, tell us your idea,
                and our team will create a premium oversized
                tee exclusively for you.
              </p>

            </div>

          </motion.div>

        </div>
                {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="overflow-hidden rounded-[32px] border border-red-500/20 bg-gradient-to-r from-red-700/20 via-zinc-900 to-red-700/20 p-12 backdrop-blur-xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="mb-4 uppercase tracking-[8px] text-red-500">
                HYPEFAULT
              </p>

              <h2 className="text-5xl font-black">
                LET'S BUILD SOMETHING
                <span className="block text-red-500">
                  EXTRAORDINARY.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Whether you want a custom oversized tee,
                a bulk order, or have a collaboration idea,
                we're always excited to hear from you.
              </p>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={sendWhatsApp}
                className="mt-10 rounded-2xl bg-red-600 px-10 py-4 text-lg font-bold transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_40px_rgba(220,38,38,.45)]"
              >
                Chat on WhatsApp
              </motion.button>

            </div>

          </div>
        </motion.div>

      </section>

    </main>
  );
}