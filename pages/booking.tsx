"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    sessionType: "",
  });

  const sessionTypes = [
    "Recording Session",
    "Mixing & Mastering",
    "Podcast Recording",
    "Voiceover Session",
    "Custom Beat Session",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time ||
      !formData.sessionType
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("✅ Booking request sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      sessionType: "",
    });
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />

      {/* Hero Section */}
      <section className="min-h-[500px] w-full pt-40 pb-32 bg-gradient-to-r from-[#0a0018] via-[#130024] to-[#0a0018] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,0,255,0.15),transparent_70%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="mt-10 text-[37px] md:text-6xl font-extrabold text-white mb-4">
            Book a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d00ff] to-[#00e1ff]">
              Studio Session
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Schedule your next recording or production session effortlessly.
          </p>
        </motion.div>
      </section>

      {/* Booking Form Section */}
      <section className="relative bg-gradient-to-r from-[#0a0018] via-[#130024] to-[#0a0018] py-24 px-6">
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#140028] to-[#0a0018] rounded-2xl shadow-lg border border-white/10 p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Booking Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Session Type */}
            <div>
              <label className="block text-gray-300 mb-2">Session Type</label>
              <select
                name="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 text-gray-200 rounded-lg px-4 py-3 focus:border-[#7d00ff] outline-none"
              >
                <option value="" disabled>
                  Select a session
                </option>
                {sessionTypes.map((type) => (
                  <option
                    key={type}
                    value={type}
                    className="bg-[#0b0019] text-white"
                  >
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Pick a Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/20 text-gray-200 rounded-lg px-4 py-3 focus:border-[#00e1ff] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Pick a Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/20 text-gray-200 rounded-lg px-4 py-3 focus:border-[#00e1ff] outline-none"
                />
              </div>
            </div>

            {/* Name, Email, Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/20 text-gray-200 rounded-lg px-4 py-3 focus:border-[#7d00ff] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/20 text-gray-200 rounded-lg px-4 py-3 focus:border-[#7d00ff] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 text-gray-200 rounded-lg px-4 py-3 focus:border-[#7d00ff] outline-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#7d00ff] to-[#00e1ff] text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-all"
            >
              Book Session
            </motion.button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
