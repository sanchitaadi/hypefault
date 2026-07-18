"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", size: 6, delay: 0, duration: 10 },
  { left: "18%", size: 8, delay: 1, duration: 12 },
  { left: "28%", size: 5, delay: 2, duration: 11 },
  { left: "40%", size: 7, delay: 0.5, duration: 13 },
  { left: "52%", size: 9, delay: 1.5, duration: 10 },
  { left: "65%", size: 6, delay: 2.2, duration: 12 },
  { left: "78%", size: 8, delay: 0.8, duration: 11 },
  { left: "90%", size: 5, delay: 1.8, duration: 13 },
];

export default function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          initial={{ y: "110%", opacity: 0 }}
          animate={{
            y: "-10%",
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full bg-red-500/30 blur-[2px]"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
}