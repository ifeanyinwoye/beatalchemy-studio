"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative w-full bg-[#0a0018] py-24 px-6 flex items-center justify-center overflow-hidden">
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0a0018] via-[#1a0033] to-[#00081a]
 z-0"
      ></div>

      {/* Floating dots */}
      {typeof window !== "undefined" &&
        Array.from({ length: 20 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#7d00ff] to-[#00e1ff] rounded-full blur-sm opacity-70"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 1.2 + 0.5,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Content grid */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 items-center gap-12">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d00ff] to-[#00e1ff]">
              BA Studio
            </span>
          </h2>

          <p className="text-white text-base md:text-lg leading-relaxed md:leading-normal">
            At <span className="font-semibold">Beat Alchemy Studio</span>, we
            blend <span className="font-semibold opacity-90">creativity</span>,{" "}
            <span className="font-semibold opacity-90">sound design</span>, and{" "}
            <span className="font-semibold opacity-90">innovation</span> to
            craft premium audio experiences that inspire and elevate your music.
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-[#3a0a73] to-[#00445c] text-white font-semibold shadow-[0_0_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_12px_rgba(0,225,255,0.15)] transition-all duration-300"
          >
            <Link href="/about"> Learn More</Link>
          </motion.button>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[300px] sm:w-[400px] md:w-[450px] h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_40px_#7d00ff50]">
            <img
              src="/hero1.png"
              alt="BA Studio workspace"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0018]/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
