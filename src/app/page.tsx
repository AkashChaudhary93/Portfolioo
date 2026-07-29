import Navbar from "@/components/layout/Navbar";
import ResumeStrip from "@/components/sections/ResumeStrip";
import SpiderSticker from "@/components/sections/SpiderSticker";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import SkillsGrid from "@/components/sections/SkillsGrid";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-cream relative">
      <Navbar />
      <ResumeStrip />
      <section className="w-full relative pt-10 md:pt-14">
        <SpiderSticker />
        <Hero />
      </section>
      <section className="w-full">
        <About />
      </section>
      <section className="w-full">
        <Features />
      </section>
      <section className="w-full">
        <SkillsGrid />
      </section>
      <section className="w-full">
        <Projects />
      </section>
      <section className="w-full">
        <Experience />
      </section>
      <section className="w-full">
        <Education />
      </section>
      <section className="w-full">
        <Testimonials />
      </section>
      <section className="w-full">
        <Footer />
      </section>
    </main>
  );
}
