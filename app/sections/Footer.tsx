"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

import Reveal from "../components/Reveal";

export default function Footer() {
  return (
    <Reveal>
      <footer className="relative overflow-hidden border-t border-white/10 bg-black">

        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[170px]" />

        {/* Watermark */}
        <h1 className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-[120px] font-black uppercase tracking-[20px] text-white/[0.03] md:text-[220px]">
          HYPEFAULT
        </h1>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-14 md:grid-cols-3">

            {/* Brand */}
            <div>

              <motion.h2
                whileHover={{ scale: 1.05 }}
                className="text-5xl font-black"
              >
                <span className="text-red-600">HYPE</span>FAULT
              </motion.h2>

              <p className="mt-8 max-w-sm leading-8 text-zinc-400">
                Premium oversized streetwear crafted for creators,
                dreamers and people who refuse to blend in.
              </p>

            </div>

            {/* Links */}
            <div>

              <h3 className="mb-6 text-xl font-bold uppercase tracking-widest">
                Navigation
              </h3>

              <div className="flex flex-col gap-4">

                {[
                  "Home",
                  "Shop",
                  "About",
                  "Contact",
                ].map((item) => (
                  <motion.div
                    whileHover={{
                      x: 10,
                    }}
                    key={item}
                  >
                    <Link
                      href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                      className="text-zinc-400 transition hover:text-red-500"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}

              </div>

            </div>

            {/* Social */}
            <div>

              <h3 className="mb-6 text-xl font-bold uppercase tracking-widest">
                Connect
              </h3>

              <div className="flex gap-5">

                {[
                  <FaInstagram key="instagram" />,
                  <FaFacebookF key="facebook" />,
                  <FaTwitter key="twitter" />,
                ].map((icon, index) => (
                  <motion.button
                    key={index}
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl backdrop-blur-xl transition hover:border-red-600 hover:bg-red-600"
                  >
                    {icon}
                  </motion.button>
                ))}

              </div>

              <p className="mt-8 text-zinc-500">
                hello@hypefault.com
              </p>

            </div>

          </div>

          {/* Divider */}
          <div className="my-16 h-px bg-white/10" />

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <p className="text-zinc-500">
              © 2026 HYPEFAULT. All Rights Reserved.
            </p>

            <motion.button
              whileHover={{
                y: -5,
              }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-xl shadow-lg shadow-red-600/30"
            >
              <FaArrowUp />
            </motion.button>

          </div>

        </div>

      </footer>
    </Reveal>
  );
}