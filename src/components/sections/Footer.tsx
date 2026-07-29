import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer id="contact" className="bg-cream pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="inline-flex items-center gap-2 bg-lime-green border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-xs tracking-[0.25em]">
            <span className="w-3 h-3 bg-black border border-black"></span>
            Currently Available
          </span>
          <span className="inline-flex items-center gap-2 bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-xs tracking-[0.25em]">
            <FiMail /> akashchaudhary9368@gmail.com
          </span>
          <span className="inline-flex items-center gap-2 bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-xs tracking-[0.25em]">
            <FiPhone /> +91-9368644199
          </span>
          <span className="inline-flex items-center gap-2 bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-xs tracking-[0.25em]">
            <FiMapPin /> Phagwara, Punjab
          </span>
        </div>

        <div className="bg-navy text-white border-4 border-black p-10 md:p-14 mb-12 shadow-[10px_10px_0px_0px_rgba(255,107,53,1)] rounded-md relative hover-lift">
          <div className="absolute top-0 left-0 w-full h-2 bg-mustard border-b-4 border-black"></div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-[1]">
            Get in touch
          </h2>
          <p className="text-base md:text-xl font-medium text-text-light-gray mb-10 max-w-2xl robot-text">
            Email: akashchaudhary9368@gmail.com • Mobile: +91-9368644199 • LinkedIn and GitHub links below.
          </p>
          <a
            href="mailto:akashchaudhary9368@gmail.com"
            className="inline-flex items-center justify-center font-black text-lg px-8 py-4 bg-lime-green text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-md hover-lift transition-transform"
          >
            <FiMail className="mr-3" size={22} /> Email Me
          </a>
        </div>

        <div className="border-t-8 border-black pt-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="bg-black text-white border-4 border-black px-5 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -skew-x-6">
            <span className="font-black text-3xl md:text-4xl tracking-tight uppercase">AKASH CHAUDHARY</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AkashChaudhary93"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 bg-white border-4 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover-lift transition-transform rounded-sm"
              aria-label="GitHub"
            >
              <FiGithub size={26} strokeWidth={3} />
            </a>
            <a
              href="https://linkedin.com/in/akashchaudhary93/"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 bg-white border-4 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover-lift transition-transform rounded-sm"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={26} strokeWidth={3} />
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-white border-4 border-black px-4 py-3 font-black uppercase text-xs tracking-[0.25em] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover-lift transition-transform rounded-sm"
            >
              Top <FiArrowUpRight />
            </a>
          </div>

          <div className="bg-white border-4 border-black px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-mono text-sm font-black text-black">
            © {new Date().getFullYear()} Akash Chaudhary
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
