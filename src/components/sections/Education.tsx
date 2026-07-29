import React from 'react';

const education = [
  {
    title: 'Bachelor of Technology – Computer Science and Engineering',
    org: 'Lovely Professional University',
    meta: 'CGPA: 8.01 • Phagwara, Punjab • Aug 2023 – Present'
  },
  {
    title: 'Intermediate – PCM',
    org: 'Golden Gate Global School',
    meta: '80% • Moradabad, Uttar Pradesh • Apr 2021 – Mar 2023'
  },
  {
    title: 'Matriculation',
    org: 'Golden Gate Global School',
    meta: 'Moradabad, Uttar Pradesh • Apr 2020 – Apr 2021'
  }
];

const Education = () => {
  return (
    <section className="bg-cream py-32 px-6 md:px-12 border-b-4 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-16 leading-none robot-title">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {education.map((item, i) => (
            <div key={i} className="bg-white border-4 border-black p-8 rounded-md shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-lime-green border-2 border-black inline-block px-3 py-1 font-mono font-black text-xs uppercase mb-4">0{i + 1}</div>
              <div className="text-2xl font-black uppercase mb-3">{item.org}</div>
              <div className="text-lg font-bold mb-3">{item.title}</div>
              <div className="text-text-dark-gray font-medium">{item.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
