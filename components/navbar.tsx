"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Beats", href: "/beats" },
    { name: "Booking", href: "/booking" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0a0018] via-[#1a0033] to-[#00081a] backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          {" "}
          <img
            src="/logo1.png"
            alt="BA Studio Logo"
            className="h-10 w-auto md:h-12 object-contain drop-shadow-[0_0_12px_rgba(125,0,255,0.5)] rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="ml-4 px-5 py-2 rounded-full from-[#3a0a73] to-[#00445c] text-white font-semibold shadow-[0_0_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_12px_rgba(0,225,255,0.15)] transition-all"
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0018] border-t border-white/10 px-6 py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-white transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#7d00ff] to-[#00e1ff] text-white font-semibold shadow-lg hover:shadow-[0_0_15px_#00e1ff] transition-all">
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
