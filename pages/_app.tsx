import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

// Configure the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Recommended for better loading experience
  // Optional: Add a CSS variable name for use in Tailwind or custom CSS
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className}`}>
      <Component {...pageProps} />;
    </div>
  );
}
