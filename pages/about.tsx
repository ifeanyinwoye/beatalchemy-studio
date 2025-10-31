"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="font-montserrat relative w-full pt-40 pb-32 bg-gradient-to-r from-[#0a0018] via-[#130024] to-[#0a0018] text-center overflow-hidden">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,0,255,0.15),transparent_70%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-[37px] md:text-6xl font-extrabold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d00ff] to-[#00e1ff]">
              BA Studio
            </span>
          </h1>

          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Where creativity meets sound — experience the next level of music
            production, crafted with passion and precision.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="relative w-full py-24 bg-[#0b0019] overflow-hidden">
        {/* Decorative gradient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,0,255,0.1),transparent_70%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d00ff] to-[#00e1ff]">
              Our Story
            </span>
          </h2>

          <p className="text--300 text-lg leading-relaxed mb-6">
            At{" "}
            <span className="text-white font-semibold">
              Beat Alchemy Studio
            </span>
            , we believe that sound is more than just audio — it’s an emotion, a
            connection, and an identity. Our mission is to help artists and
            creators transform their ideas into world-class sonic experiences.
          </p>

          <p className="text-gray-400 text-base leading-relaxed">
            From beat-making and sound design to full production, we blend
            innovation, skill, and creativity to deliver music that resonates.
            Every track we craft carries the heart of artistry — precision,
            passion, and power. <br />
            <br />
            Our studio was born from a desire to bridge the gap between
            underground talent and world-class sound. Whether it’s a smooth R&B
            vibe, a hard-hitting trap beat, or cinematic soundscapes, our
            mission is to help artists bring their visions to life with clarity
            and depth. <br />
            <br />
            At Beat Alchemy Studio, we don’t just create music — we build
            experiences. We believe every sound tells a story, every frequency
            has emotion, and every artist deserves a platform that amplifies
            their truth. This is more than a studio — it’s a movement fueled by
            passion, authenticity, and the power of creativity.
          </p>
        </motion.div>
      </section>

      {/* Our mission / Vision  */}
      <section className="py-24 bg-[#0b0019] text-center px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-10"
          >
            Our Mission & Vision
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-[#13002a]/50 p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-[#7d00ff]/20 transition"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                🎧 Our Mission
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To empower artists and creators by providing a space where sound
                meets emotion. We’re on a mission to redefine the future of
                music production — where technology, passion, and innovation
                blend to inspire greatness. Every project we take on is handled
                with precision, creativity, and heart.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-[#13002a]/50 p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-[#00e1ff]/20 transition"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                🚀 Our Vision
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To become the heartbeat of the modern sound movement — a
                creative hub where artists across the globe connect,
                collaborate, and create timeless music. We envision a future
                where every beat produced at{" "}
                <span className="text-white font-medium">
                  Beat Alchemy Studio
                </span>{" "}
                {""}
                carries global influence and emotional depth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio Experiences */}
      <section className="py-24 bg-gradient-to-r from-[#0a0018] via-[#130024] to-[#0a0018] text-white relative overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,0,255,0.1),transparent_70%)]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-10"
          >
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d00ff] to-[#00e1ff]">
              BA Studio
            </span>{" "}
            Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Step inside a creative space built for sonic excellence. From our
            state-of-the-art equipment to a collaborative, artist-first approach
            — every detail is crafted to spark inspiration and deliver
            world-class sound. At{" "}
            <span className="text-white font-medium">Beat Alchemy Studio</span>,
            we don’t just record music; we create moments that live forever.
          </motion.p>

          {/* Studio Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "🎚️ Professional Mixing & Mastering",
                desc: "Our team ensures every sound is clean, crisp, and powerful — ready for any platform or stage.",
              },
              {
                title: "🎙️ Premium Recording Environment",
                desc: "Experience studio-grade acoustics and top-tier microphones for crystal-clear vocal takes.",
              },
              {
                title: "🎵 Creative Collaboration",
                desc: "We work side-by-side with artists to bring their sound to life — from raw ideas to polished tracks.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#13002a]/50 p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-[#00e1ff]/20 transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Action */}
      <section className="relative py-32 bg-gradient-to-r from-[#0a0018] via-[#130024] to-[#0a0018] text-center text-white overflow-hidden">
        {/* Soft glowing background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,0,255,0.15),transparent_70%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d00ff] to-[#00e1ff]">
              Create Magic
            </span>
            ?
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Whether you’re an artist, producer, or sound enthusiast — Beat
            Alchemy Studio is your home for creativity and professional sound.
            Let’s make your next track unforgettable.
          </p>

          {/* CTA Button */}
          <motion.a
            href="/booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-[#7d00ff] to-[#00e1ff] text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-[#00e1ff]/40 transition-all"
          >
            Book Your Session Now
          </motion.a>

          {/* Small Note */}
          <p className="text-gray-500 text-sm mt-6">
            Have questions?{" "}
            <Link href="/contact" className="text-[#00e1ff] hover:underline">
              Contact us
            </Link>{" "}
            — we’d love to help.
          </p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
