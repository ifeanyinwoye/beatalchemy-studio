import Beats from "@/components/beats";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import About from "@/components/about";
import CTASection from "@/components/cTASection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#0a0018] via-[#1a0033] to-[#00081a]">
      <Navbar />
      <Hero />
      <Beats />
      <About />
      <CTASection />
      <Footer />
    </main>
  );
}
