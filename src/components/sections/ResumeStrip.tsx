import React from 'react';

const ResumeStrip = () => {
  return (
    <section className="bg-cream py-6 px-6 md:px-12 border-b-4 border-black">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="inline-flex items-center gap-3 border-4 border-black bg-white px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="w-3 h-3 bg-coral-red border-2 border-black"></span>
          <span className="font-black uppercase tracking-widest text-sm">Resume / Certificates / Badges / GitHub</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#education" className="bg-sky-blue border-4 border-black px-4 py-3 font-black uppercase text-sm tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Education</a>
          <a href="#features" className="bg-lime-green border-4 border-black px-4 py-3 font-black uppercase text-sm tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Skills</a>
          <a href="#contact" className="bg-hot-orange border-4 border-black px-4 py-3 font-black uppercase text-sm tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default ResumeStrip;
