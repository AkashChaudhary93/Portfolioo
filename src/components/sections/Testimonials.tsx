import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-mustard py-32 px-6 md:px-12 border-b-4 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-center mb-16 leading-none">
          Internship Summary
        </h2>

        <div className="bg-white border-4 border-black p-10 md:p-12 rounded-md shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] max-w-4xl mx-auto">
          <div className="text-2xl font-black uppercase mb-6">Software Engineer Intern — The Educode</div>
          <div className="font-mono font-bold mb-4 text-text-dark-gray">Jun 2025</div>
          <ul className="space-y-4 text-lg text-text-dark-gray list-disc pl-6">
            <li>Engineered a web-based learning platform serving 500+ students, implementing secure examination environments and 10+ interactive coding problem modules.</li>
            <li>Optimised application architecture and resource delivery pipelines, cutting page load latency by 30% and maintaining 99% uptime during peak usage.</li>
            <li>Authored 15+ detailed PDF study guides and developed a complete interactive C programming curriculum with 50+ algorithmic challenges.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
