"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [dots, setDots] = useState<
    { x: number; y: number; delay: number; duration: number }[]
  >([]);
  console.log(dots);

  useEffect(() => {
    const createDots = () => {
      const newDots = Array.from({ length: 40 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 3,
        duration: Math.random() * 10 + 8,
      }));
      setDots(newDots);
    };

    createDots();
    window.addEventListener("resize", createDots);
    return () => window.removeEventListener("resize", createDots);
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#0a0018] overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0a0018] via-[#1a0033] to-[#00081a]
 z-0"
      ></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_0_15px_rgba(125,0,255,0.6)]">
          Where{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d00ff] to-[#00e1ff]">
            Creativity
          </span>{" "}
          Finds Its Rhythm
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-xl mx-auto">
          Premium recording and production for creators who want to stand out.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#3a0a73] to-[#00445c] text-white font-semibold shadow-[0_0_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_12px_rgba(0,225,255,0.15)] transition-all duration-300"
          >
            <Link href="beats">Explore Beats</Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
          >
            <Link href="booking">Book Session</Link>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
