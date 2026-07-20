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
        <div className="absolute left-1/2 top-0 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[80px] md:h-[500px] md:w-[500px] md:blur-[170px]" />

        {/* Watermark */}
        <h1 className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-[48px] font-black uppercase tracking-[8px] text-white/[0.03] sm:text-[90px] sm:tracking-[14px] md:text-[220px] md:tracking-[20px]">
          HYPEFAULT
        </h1>

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 text-center md:grid-cols-3 md:text-left">
            {/* Brand */}
            <div>
              <motion.h2
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-black sm:text-5xl"
              >
                <span className="text-red-600">HYPE</span>FAULT
              </motion.h2>

              <p className="mx-auto mt-6 max-w-sm leading-7 text-zinc-400 md:mx-0 md:mt-8 md:leading-8">
                Premium oversized streetwear crafted for creators,
                dreamers and people who refuse to blend in.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="mb-6 text-lg font-bold uppercase tracking-widest sm:text-xl">
                Navigation
              </h3>

              <div className="flex flex-col gap-4">
                {["Home", "Shop", "About", "Contact"].map((item) => (
                  <motion.div
                    whileHover={{ x: 10 }}
                    key={item}
                  >
                    <Link
                      href={`/${
                        item.toLowerCase() === "home"
                          ? ""
                          : item.toLowerCase()
                      }`}
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
              <h3 className="mb-6 text-lg font-bold uppercase tracking-widest sm:text-xl">
                Connect
              </h3>

              <div className="flex justify-center gap-5 md:justify-start">
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
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg backdrop-blur-xl transition hover:border-red-600 hover:bg-red-600 sm:h-14 sm:w-14 sm:text-xl"
                  >
                    {icon}
                  </motion.button>
                ))}
              </div>

              <p className="mt-6 text-zinc-500 sm:mt-8">
                hello@hypefault.com
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-white/10 lg:my-16" />

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-center text-sm text-zinc-500 md:text-base">
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
              className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-lg shadow-lg shadow-red-600/30 sm:h-14 sm:w-14 sm:text-xl"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </footer>
    </Reveal>
  );
}