import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import ModernGallery from "@/components/sections/ModernGallery";
import AboutCEO from "@/components/sections/AboutCEO";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <AboutCEO />
      <ModernGallery />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  );
}