"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "glass" | "ghost";
  className?: string;
  onClick?: () => void;
}

function ButtonContent({
  children,
  variant = "primary",
  className,
  onClick,
}: Omit<ButtonProps, "href">) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
      className={clsx(
        "group relative overflow-hidden rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[3px] transition-all duration-300",
        {
          "bg-red-600 text-white shadow-lg shadow-red-600/30":
            variant === "primary",

          "border border-white/10 bg-white/5 text-white backdrop-blur-xl":
            variant === "glass",

          "text-white": variant === "ghost",
        },
        className
      )}
    >
      {/* Shine Effect */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export default function Button(props: ButtonProps) {
  if (props.href) {
    return (
      <Link href={props.href}>
        <ButtonContent {...props} />
      </Link>
    );
  }

  return <ButtonContent {...props} />;
}