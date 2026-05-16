import Hero from "../components/sections/Hero";
import StatsCard from "../components/sections/StatsCard";
import About from "../components/sections/About";
import Programmes from "../components/sections/Programmes"
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import CampusLife from "../components/sections/CampusLife";
import Features from "../components/sections/Features";
import Partners from "../components/sections/Partners";
import Events from "../components/sections/Events";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-(--background) text-(--text-primary) overflow-hidden">
      <ScrollProgress />
      
      <Hero />
      <StatsCard />
      <About />
      <Programmes />
      <Features />
      <Partners />
      <Events />
      <CampusLife />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}