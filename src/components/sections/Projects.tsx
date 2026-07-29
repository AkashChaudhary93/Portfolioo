import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from 'next/link';

const projects = [
  {
    title: 'Real-Time Floodwater Level Measurement using YOLOv8',
    desc: 'Trained a YOLOv8n semantic segmentation model achieving 90%+ mask accuracy for real-time floodwater monitoring. Used Otsu binarisation to improve measurement precision by 25%.',
    tech: ['YOLOv8', 'Computer Vision', 'Otsu Binarisation'],
    source: 'https://github.com/AkashChaudhary93/Computer-vision'
  },
  {
    title: 'RAG-SaaS — Enterprise Knowledge Base Platform',
    desc: 'Built a full-stack RAG platform with FastAPI, React, ChromaDB, and multi-LLM support. Added JWT auth, user-scoped data isolation, SQLite persistence, rate limiting, and Docker multi-stage builds.',
    tech: ['FastAPI', 'React', 'ChromaDB', 'Docker'],
    source: 'https://github.com/AkashChaudhary93/RAG-Saas'
  },
  {
    title: 'Campus Crave: Logistics & Operations',
    desc: 'Developed a full-stack food ordering system using React.js and Spring Boot, with dual interfaces, real-time status tracking, and automated inventory updates.',
    tech: ['React.js', 'Spring Boot', 'MySQL'],
    source: 'https://github.com/AkashChaudhary93/Project-Winter-Pep'
  }
];

const Projects = () => {
  return (
    <section id="work" className="bg-navy py-32 px-6 md:px-12 border-b-4 border-black text-white relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="inline-block bg-sky-blue text-black border-4 border-black px-4 py-2 font-mono text-xs font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              Projects
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none robot-title">
              Featured Projects
            </h2>
          </div>
          <Link href="https://github.com/AkashChaudhary93" target="_blank" className="inline-flex items-center justify-center font-black uppercase tracking-wide px-6 py-3 bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md">
            View GitHub <FiGithub className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div key={i} className="bg-cream text-black border-4 border-black rounded-md shadow-[8px_8px_0px_0px_rgba(245,197,24,1)] flex flex-col h-full hover-lift hover-pop hover-tilt">
              <div className="bg-mustard border-b-4 border-black p-4">
                <div className="font-mono text-sm font-black border-2 border-black bg-white px-2 py-0.5 inline-block uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover-pop">
                  PROJECT {i + 1}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col bg-white rounded-b-sm">
                <h3 className="text-3xl font-black mb-4 uppercase leading-tight hover-tilt">{project.title}</h3>
                <p className="font-medium text-lg text-text-dark-gray mb-8 flex-grow">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-black font-mono uppercase bg-cream border-2 border-black px-2 py-1 hover-pop hover-glow">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a href={project.source || '#'} target="_blank" rel="noreferrer" className="flex-1 text-center font-black uppercase border-4 border-black py-3 hover:bg-mustard transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-md hover-lift">
                    <FiGithub /> Code
                  </a>
                  <a href="#" className="flex-1 text-center font-black uppercase border-4 border-black py-3 bg-black text-white hover:bg-sky-blue hover:text-black transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-md hover-lift">
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
