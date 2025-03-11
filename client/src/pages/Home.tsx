import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import AboutCEO from "@/components/sections/AboutCEO";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <AboutCEO />
      <Portfolio />
      <Gallery />
      <Team />
      <Contact />
    </main>
  );
}