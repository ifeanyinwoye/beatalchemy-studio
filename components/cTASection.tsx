"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative w-full py-28 bg-gradient-to-r from-[#0a0018] via-[#120022] to-[#0a0018] flex items-center justify-center overflow-hidden">
      {/* Soft gradient edge glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,0,255,0.15),transparent_70%)]" />

      {/* Subtle moving line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#7d00ff]/50 via-[#00e1ff]/50 to-[#7d00ff]/50"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug">
          Let’s make your next hit <span className="text-[#00e1ff]">🔥</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mt-3">
          Book your session and bring your sound to life with BA Studio.
        </p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-[#3a0a73] to-[#00445c] text-white/90 font-semibold text-lg border border-white/10 hover:border-white/20 hover:bg-gradient-to-r hover:from-[#4a118a] hover:to-[#006b89] transition-all duration-300"
        >
          Book a Session
        </motion.button>
      </motion.div>
    </section>
  );
}
