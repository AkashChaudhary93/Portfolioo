import React from 'react';
import FadeIn from '@/components/ui/FadeIn';

const About = () => {
  return (
    <section className="bg-cream min-h-screen flex items-center py-32 px-6 md:px-12 border-b-4 border-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '36px 36px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="inline-block bg-lime-green border-4 border-black px-4 py-2 font-mono text-xs font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            About Me
          </div>
          <FadeIn><h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-none robot-title">
            A bit about me
          </h2></FadeIn>
          <p className="text-lg md:text-xl font-medium text-text-dark-gray leading-relaxed max-w-2xl robot-text">
            I&apos;m Akash Chaudhary, a Computer Science and Engineering student at Lovely Professional University.
            I like building practical software, working on AI and computer vision projects, and solving problems with clean, reliable code.
            My focus is on performance, usability, and systems that actually help people.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <StatCard label="Location" value="Phagwara, Punjab" tone="bg-sky-blue" />
          <StatCard label="CGPA" value="8.01" tone="bg-hot-orange" />
          <StatCard label="Internship" value="The Educode" tone="bg-lime-green" />
          <StatCard label="Focus" value="AI + Full Stack" tone="bg-coral-red" />
        </div>
      </div>
    </section>
  );
};

function StatCard({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="bg-white border-4 border-black p-6 rounded-md shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className={`inline-block ${tone} border-2 border-black px-3 py-1 font-mono text-xs font-black uppercase mb-4`}>{label}</div>
      <div className="text-2xl font-black uppercase leading-tight">{value}</div>
    </div>
  );
}

export default About;
