import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="bg-mustard relative w-full min-h-screen flex items-center pt-32 pb-24 px-6 md:px-12 border-b-4 border-black overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-4 h-4 bg-black rotate-45 border border-black"></div>
        <div className="absolute top-40 right-1/4 w-8 h-8 bg-sky-blue border-2 border-black rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="absolute bottom-24 left-1/4 w-6 h-6 border-4 border-black rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-coral-red border-2 border-black"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-block px-3 py-1 bg-lime-green border-2 border-black rounded-md font-mono text-sm font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4 transform -rotate-2 pac-waddle hover-glow">
            AVAILABLE FOR HIRE
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-black leading-[0.98] tracking-[-0.06em] uppercase font-sans">
            Hi, I&apos;m <span className="relative inline-block bg-black text-white px-4 py-1 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]">Akash Chaudhary</span>.
          </h1>

          <p className="text-lg md:text-xl font-semibold text-text-dark-gray max-w-xl leading-relaxed font-sans border-l-4 border-black pl-5">
            Computer Science and Engineering student at Lovely Professional University. I build software, backend systems, and AI projects with a focus on performance and clean execution.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <InfoPill icon={<FiMail />} label="EMAIL" value="akashchaudhary9368@gmail.com" />
            <InfoPill icon={<FiPhone />} label="MOBILE" value="+91-9368644199" />
            <InfoPill icon={<FiLinkedin />} label="LINKEDIN" value="linkedin.com/in/akashchaudhary93/" />
            <InfoPill icon={<FiGithub />} label="GITHUB" value="github.com/AkashChaudhary93" />
          </div>
        </div>

        <div className="relative">
          <div className="bg-navy border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden text-white relative z-10 mx-auto w-full max-w-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="border-b-4 border-black bg-white px-4 py-3 flex items-center justify-between text-black">
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-coral-red border-2 border-black"></div>
                <div className="w-4 h-4 rounded-full bg-mustard border-2 border-black"></div>
                <div className="w-4 h-4 rounded-full bg-lime-green border-2 border-black"></div>
              </div>
              <div className="font-mono text-xs font-bold uppercase tracking-widest bg-sky-blue px-2 py-0.5 border-2 border-black">/cv/profile</div>
            </div>

            <div className="p-6 font-mono text-sm leading-relaxed bg-navy-dark">
              <div className="text-lime-green mb-4 font-bold">$ student_profile --ready</div>
              <div className="text-white mb-2">Name: Akash Chaudhary</div>
              <div className="text-white mb-2">CGPA: 8.01</div>
              <div className="text-white mb-2">LPU • B.Tech CSE • Phagwara, Punjab</div>
              <div className="text-white mb-2">Experience: Software Engineer Intern @ The Educode</div>
              <div className="text-white mb-2">Projects: YOLOv8 Floodwater, RAG-SaaS, Campus Crave</div>
              <div className="text-white mb-2">Certifications: NPTEL Cloud Computing, Advanced DSA Training</div>
              <div className="text-white mb-2">Skills: C#, C++, Java, Python, Node.js, Spring Boot, FastAPI, React, Docker, YOLOv8, RAG</div>
              <div className="mt-8 border-4 border-black p-4 bg-white text-black rounded-sm relative shadow-[4px_4px_0px_0px_rgba(168,230,0,1)]">
                <div className="flex gap-4">
                  <div className="flex-1 text-center">
                    <div className="text-4xl font-black">500+</div>
                    <div className="text-[10px] font-black uppercase tracking-wider mt-1">Students Served</div>
                  </div>
                  <div className="w-1 bg-black"></div>
                  <div className="flex-1 text-center">
                    <div className="text-4xl font-black">99%</div>
                    <div className="text-[10px] font-black uppercase tracking-wider mt-1">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-8 bg-hot-orange border-4 border-black p-4 rounded-md shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20 transform -rotate-3">
            <div className="font-mono text-xs font-black uppercase mb-2">Internship</div>
            <div className="text-3xl font-black bg-white border-4 border-black px-3 py-1 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">The Educode</div>
          </div>

          <div className="absolute -top-6 -right-6 bg-sky-blue border-4 border-black p-3 rounded-md shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-0 hidden md:block transform rotate-6">
            <div className="bg-white border-4 border-black rounded-sm p-2 flex items-center justify-center font-black text-3xl">8.01</div>
          </div>
        </div>
      </div>
    </section>
  );
};

function InfoPill({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white border-4 border-black p-4 rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center gap-2 font-mono text-xs font-black uppercase mb-2">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <div className="text-sm font-bold break-all">{value}</div>
    </div>
  );
}

export default Hero;
