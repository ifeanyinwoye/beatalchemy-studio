"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Player from "@/components/player";
import { motion } from "framer-motion";

// ✅ Define the Beat type for type safety
interface Beat {
  id: number;
  name: string;
  genre: string;
  bpm: number;
  audio: string;
  image: string;
}

export default function Beats() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Your beats data first
  const beats: Beat[] = [
    {
      id: 1,
      name: "Midnight Vibes",
      genre: "Afrobeat",
      bpm: 120,
      audio: "/beats/lagos-vibe.mp3",
      image: "/midnight.png",
    },
    {
      id: 2,
      name: "Dreamwave",
      genre: "R&B",
      bpm: 95,
      audio: "/beats/dreamwave.mp3",
      image: "/beat2.png",
    },
    {
      id: 3,
      name: "Skyline Groove",
      genre: "Trap",
      bpm: 140,
      audio: "/beats/midnight-vibe.mp3",
      image: "/beat3.png",
    },
  ];

  // ✅ States
  const [search, setSearch] = useState("");
  const [currentBeat, setCurrentBeat] = useState<Beat | null>(null);

  // ✅ Filter logic (after beats declaration)
  const filteredBeats = beats.filter(
    (beat) =>
      (selectedCategory === "All" || beat.genre === selectedCategory) &&
      (beat.name.toLowerCase().includes(search.toLowerCase()) ||
        beat.genre.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[500px] w-full pt-40 pb-32 bg-gradient-to-r from-[#0a0018] via-[#130024] to-[#0a0018] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,0,255,0.15),transparent_70%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-white mb-4">
            Discover{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d00ff] to-[#00e1ff]">
              Premium Beats
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Explore exclusive sounds crafted for artists, producers, and
            creators who want to stand out.
          </p>
        </motion.div>
      </section>

      {/* Featured Beats Section */}
      <section className="w-full py-24 bg-[#0b0019] relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,0,255,0.1),transparent_70%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d00ff] to-[#00e1ff]">
              Featured Beats
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12">
            Handpicked beats that set the mood and define your next hit.
          </p>

          {/* 🔍 Category Buttons (Filter) */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "All",
              "Afrobeat",
              "Trap",
              "R&B",
              "Afrofusion",
              "Lo-Fi",
              "EDM",
            ].map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#7d00ff] to-[#00e1ff] text-white border-transparent"
                    : "border-white/10 text-gray-400 hover:border-[#00e1ff]/30 hover:text-white"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Beats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {filteredBeats.length > 0 ? (
              filteredBeats.map((beat) => (
                // <motion.div
                //   key={beat.id}
                //   whileHover={{ scale: 1.02 }}
                //   transition={{ duration: 0.4 }}
                //   className="relative bg-gradient-to-b from-[#140028] to-[#0a0018] rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-[#00e1ff]/30 transition-all duration-300"
                // >
                //   <div className="aspect-video bg-black/40 flex items-center justify-center text-white/40">
                //     🎵 Beat Preview
                //   </div>
                //   <div className="p-5 text-left">
                //     <h3 className="text-white font-semibold text-lg mb-1">
                //       {beat.name}
                //     </h3>
                //     <p className="text-gray-400 text-sm mb-3">
                //       {beat.genre} • {beat.bpm} BPM
                //     </p>
                //     <button
                //       onClick={() => setCurrentBeat(beat)}
                //       className="px-4 py-2 rounded-full bg-gradient-to-r from-[#7d00ff] to-[#00e1ff] text-white text-sm font-medium hover:opacity-90 transition-all"
                //     >
                //       Play Beat
                //     </button>
                //   </div>
                // </motion.div>
                <motion.div
                  key={beat.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-gradient-to-b from-[#140028] to-[#0a0018] rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-[#00e1ff]/30 transition-all duration-300"
                >
                  {/* Beat Image Preview */}
                  <div className="aspect-video relative">
                    <img
                      src={beat.image} // ✅ replace this with your actual beat image path
                      alt={beat.name}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0018]/70 to-transparent" />
                  </div>

                  {/* Beat Info + Play Button */}
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {beat.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {beat.genre} • {beat.bpm} BPM
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentBeat(beat)}
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7d00ff] to-[#00e1ff] text-white text-sm font-medium hover:shadow-[0_0_15px_#00e1ff40] transition-all"
                    >
                      ▶️ Play
                    </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-gray-400 mt-10"
              >
                <p className="text-lg">😔 No beats found for your search.</p>
                <p className="text-sm text-gray-500 mt-1">
                  Try a different keyword or category.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Player (appears when a beat is playing) */}
      {currentBeat && (
        <Player beat={currentBeat} onClose={() => setCurrentBeat(null)} />
      )}

      <Footer />
    </>
  );
}
