"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function BeatsSection() {
  const [dots, setDots] = useState<
    { x: number; y: number; delay: number; duration: number }[]
  >([]);
  console.log(dots);

  useEffect(() => {
    const createDots = () => {
      const newDots = Array.from({ length: 35 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 3,
        duration: Math.random() * 10 + 8,
      }));
      setDots(newDots);
    };
    if (typeof window !== "undefined") createDots();
    window.addEventListener("resize", createDots);
    return () => window.removeEventListener("resize", createDots);
  }, []);

  const beats = [
    { id: 1, title: "Neon Dreams", genre: "Trap", img: "/beat1.png" },
    { id: 2, title: "Vibe Flow", genre: "R&B", img: "/beat2.png" },
    { id: 3, title: "Night Pulse", genre: "Afrobeat", img: "/beat3.png" },
    { id: 4, title: "Digital Soul", genre: "Hip-Hop", img: "/beat4.png" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#0a0018] flex flex-col items-center justify-center overflow-hidden py-24 px-6">
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0a0018] via-[#1a0033] to-[#00081a]
 z-0"
      ></div>

      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-3xl md:text-4xl font-bold text-white text-center mb-12"
      >
        Featured Beats
      </motion.h2>

      {/* Beats grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full">
        {beats.map((beat) => (
          <motion.div
            key={beat.id}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer bg-[#130024]/70 backdrop-blur-md border border-white/10 transition-all duration-300"
          >
            <img
              src={beat.img}
              alt={beat.title}
              className="w-full h-48 object-cover transition-all duration-300 group-hover:opacity-70"
            />

            <div className="p-4">
              <h3 className="text-white font-semibold text-lg">{beat.title}</h3>
              <p className="text-gray-400 text-sm">{beat.genre}</p>
            </div>

            {/* Play button overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black/10 transition-all duration-300"
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
