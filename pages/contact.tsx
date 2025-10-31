"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[500px] w-full pt-40 pb-24 bg-gradient-to-r from-[#0a0018] via-[#130024] to-[#0a0018] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,0,255,0.15),transparent_70%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-[38px] mt-5 md:text-6xl font-extrabold text-white mb-4">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d00ff] to-[#00e1ff]">
              Touch
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Have a question, project idea, or just want to connect? We’d love to
            hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="relative w-full py-24 bg-[#0b0019] overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(125,0,255,0.08),transparent_70%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d00ff] to-[#00e1ff]">
              Let’s Work Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Fill out the form below and our team will reach out to you soon.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (typeof window !== "undefined") {
                const toast = (window as any).toast;
                if (toast) toast.success("Message sent successfully!");
              }
            }}
            className="bg-gradient-to-b from-[#120027] to-[#0b0019] border border-white/10 rounded-2xl p-8 shadow-xl space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 text-white placeholder-gray-400 rounded-lg border border-white/10 focus:border-[#00e1ff]/40 outline-none transition-all"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 text-white placeholder-gray-400 rounded-lg border border-white/10 focus:border-[#00e1ff]/40 outline-none transition-all"
                required
              />
            </div>

            <textarea
              placeholder="Your Message..."
              rows={5}
              className="w-full px-4 py-3 bg-white/5 text-white placeholder-gray-400 rounded-lg border border-white/10 focus:border-[#00e1ff]/40 outline-none transition-all resize-none"
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#7d00ff] to-[#00e1ff] text-white font-semibold shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(0,225,255,0.2)] transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Contact Info Section */}
      <section className="relative w-full py-20 bg-gradient-to-r from-[#0a0018] via-[#130024] to-[#0a0018] text-center overflow-hidden border-t border-white/5">
        {/* Decorative glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,0,255,0.08),transparent_70%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d00ff] to-[#00e1ff]">
              Get in Touch
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#7d00ff]/10 border border-[#7d00ff]/30 mb-4">
                📧
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
              <p className="text-gray-400 text-sm">josephnwoye001@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#00e1ff]/10 border border-[#00e1ff]/30 mb-4">
                📞
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
              <p className="text-gray-400 text-sm">+234 810 000 0000</p>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#00ff66]/10 border border-[#00ff66]/30 mb-4">
                💬
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">
                WhatsApp
              </h4>
              <p className="text-gray-400 text-sm">+234 810 000 0000</p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
