import React from 'react';

const certifications = [
  {
    title: 'Cloud Computing',
    org: 'NPTEL',
    meta: 'Nov 2025'
  },
  {
    title: 'Advanced DSA Training',
    org: 'Programming Pathshala',
    meta: 'Jun 2025'
  }
];

const achievements = [
  {
    title: 'Local LLM inference optimisation',
    meta: 'Cut inference latency by 20% in offline workflows.'
  }
];

const Experience = () => {
  return (
    <section className="bg-mustard py-32 px-6 md:px-12 border-b-4 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-10 leading-none robot-title">Certifications</h2>
          <div className="space-y-6">
            {certifications.map((item, i) => (
              <div key={i} className="bg-white border-4 border-black p-6 rounded-md shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-coral-red border-2 border-black inline-block px-3 py-1 font-mono font-black text-xs uppercase mb-4">CERT {i + 1}</div>
                <div className="text-2xl font-black uppercase mb-2">{item.title}</div>
                <div className="text-lg font-bold mb-2">{item.org}</div>
                <div className="text-text-dark-gray font-medium">{item.meta}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-10 leading-none robot-title">Achievements</h2>
          <div className="space-y-6">
            {achievements.map((item, i) => (
              <div key={i} className="bg-white border-4 border-black p-6 rounded-md shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-sky-blue border-2 border-black inline-block px-3 py-1 font-mono font-black text-xs uppercase mb-4">ACHIEVEMENT</div>
                <div className="text-2xl font-black uppercase mb-2">{item.title}</div>
                <div className="text-text-dark-gray font-medium">{item.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
