
import Agents from "@/components/Agents";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Technology from "@/components/Technology";


export default function Home() {
  return (
      <main className="bg-black  text-white min-h-screen bg-gradient-to-br from-purple-900/30 via-red-500/20 to-black/50 backdrop-blur-2xl inset-0">
        <Navbar/>
       <Hero/>
       <Features/>
       <Technology/>
       <Agents/>
       <Pricing/>
       <Contact/>
       <Footer/>
      </main>
  );
}
