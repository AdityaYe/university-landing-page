import Hero from "../components/sections/Hero";
import StatsCard from "../components/sections/StatsCard";
import About from "../components/sections/About";
import Programmes from "../components/sections/Programmes"
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";
import CampusLife from "../components/sections/CampusLife";
import Features from "../components/sections/Features";
import Partners from "../components/sections/Partners";

export default function Home() {
  return (
    <main className="bg-(--background) text-(--text-primary) overflow-hidden">
      <Hero />
      <StatsCard />
      <About />
      <Programmes />
      <Features />
      <Partners />
      <CampusLife />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}