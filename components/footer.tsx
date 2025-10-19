"use client";
import { motion } from "framer-motion";
import {
  FaSpotify,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";

export default function Footer() {
  const BoomplayIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.6 4.5c1.9 0 3.4 1.5 3.4 3.4 0 1.4-.8 2.6-2 3.1 1.3.6 2.2 1.9 2.2 3.5 0 2.1-1.7 3.9-3.8 3.9H9V6.5h3.6zm-.6 2.2h-1v3h1c.9 0 1.6-.7 1.6-1.5S12.9 8.7 12 8.7zm.2 5.3h-1.2v3.3h1.2c.9 0 1.7-.8 1.7-1.6s-.7-1.7-1.7-1.7z" />
    </svg>
  );

  const socialLinks = [
    { Icon: FaInstagram, href: "#" },
    { Icon: FaTwitter, href: "#" },
    { Icon: FaYoutube, href: "#" },
    { Icon: FaSpotify, href: "#" },
    { Icon: BoomplayIcon, href: "#" },
    { Icon: SiAudiomack, href: "#" },
    { Icon: FaTiktok, href: "#" },
    { Icon: FaFacebookF, href: "#" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0a0018] via-[#0f0025] to-[#000000] text-gray-300 pt-16 pb-10 px-6 overflow-hidden">
      {/* Floating gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-[#7d00ff] via-[#00e1ff] to-[#7d00ff]" />

      {/* Centered content */}
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Brand */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-3xl font-bold tracking-wider"
        >
          BA Studio
        </motion.h2>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-wrap gap-6"
        >
          {socialLinks.map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_8px_#7d00ff]"
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-32 h-[1px] mx-auto bg-gradient-to-r from-transparent via-[#7d00ff] to-transparent opacity-50" />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">BA Studio</span>. All rights
          reserved.
        </motion.p>
      </div>

      {/* Subtle glow at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#7d00ff15] to-transparent blur-2xl" />
    </footer>
  );
}

// "use client";
// import { motion } from "framer-motion";
// import {
//   FaSpotify,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
//   FaTiktok,
//   FaFacebookF,
// } from "react-icons/fa";
// import { SiAudiomack } from "react-icons/si";

// export default function Footer() {
//   const BoomplayIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="w-5 h-5"
//     >
//       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.6 4.5c1.9 0 3.4 1.5 3.4 3.4 0 1.4-.8 2.6-2 3.1 1.3.6 2.2 1.9 2.2 3.5 0 2.1-1.7 3.9-3.8 3.9H9V6.5h3.6zm-.6 2.2h-1v3h1c.9 0 1.6-.7 1.6-1.5S12.9 8.7 12 8.7zm.2 5.3h-1.2v3.3h1.2c.9 0 1.7-.8 1.7-1.6s-.7-1.7-1.7-1.7z" />
//     </svg>
//   );

//   const socialLinks = [
//     { Icon: FaInstagram, href: "#" },
//     { Icon: FaTwitter, href: "#" },
//     { Icon: FaYoutube, href: "#" },
//     { Icon: FaSpotify, href: "#" },
//     { Icon: BoomplayIcon, href: "#" },
//     { Icon: SiAudiomack, href: "#" },
//     { Icon: FaTiktok, href: "#" },
//     { Icon: FaFacebookF, href: "#" },
//   ];

//   return (
//     <footer className="relative w-full bg-[#070013] text-gray-300 py-12 border-t border-white/10 overflow-hidden">
//       {/* glowing gradient top line */}
//       <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7d00ff] via-[#00e1ff] to-[#7d00ff]" />

//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-8">
//         {/* Left section */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center md:text-left"
//         >
//           <h3 className="text-white font-bold text-2xl tracking-wide">
//             BA Studio
//           </h3>
//           <p className="text-gray-400 text-sm mt-2 max-w-sm">
//             Crafting sound that speaks — premium music production & creative
//             audio experiences.
//           </p>
//         </motion.div>

//         {/* Right section (socials) */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="flex items-center gap-6 flex-wrap justify-center"
//         >
//           {socialLinks.map(({ Icon, href }, i) => (
//             <motion.a
//               key={i}
//               href={href}
//               whileHover={{ scale: 1.25 }}
//               className="text-gray-400 hover:text-[#00e1ff] transition-colors duration-300"
//             >
//               <Icon className="w-5 h-5" />
//             </motion.a>
//           ))}
//         </motion.div>
//       </div>

//       {/* Bottom copyright line */}
//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//         viewport={{ once: true }}
//         className="text-xs text-gray-500 text-center mt-10 tracking-wide"
//       >
//         © {new Date().getFullYear()} BA Studio — All Rights Reserved.
//       </motion.p>
//     </footer>
//   );
// }
