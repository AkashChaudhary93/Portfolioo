import React from 'react';
import { FiCode, FiDatabase, FiGlobe, FiLayers } from 'react-icons/fi';

const features = [
  {
    title: 'Programming Languages',
    desc: 'C#, C++, Java, Python, C, SQL',
    icon: <FiCode size={32} strokeWidth={3} />,
    color: 'bg-hot-orange'
  },
  {
    title: 'Core Concepts',
    desc: 'Multiplayer Networking, OOP, Data Structures & Algorithms, Physics Simulation (Blender), CI/CD',
    icon: <FiLayers size={32} strokeWidth={3} />,
    color: 'bg-sky-blue'
  },
  {
    title: 'Backend & Platforms',
    desc: 'Node.js, Express.js, Spring Boot, FastAPI, REST APIs, Git, GitHub Actions, Docker, Maven, Vercel, Streamlit, Blender, Visual Studio, Jupyter Notebooks',
    icon: <FiDatabase size={32} strokeWidth={3} />,
    color: 'bg-lime-green'
  },
  {
    title: 'AI / CV / ML',
    desc: 'Scikit-Learn, TF-IDF, Cosine Similarity, RAG, LLMs, K-Means, XGBoost, Pandas, NumPy, Image Segmentation, YOLOv8, Otsu Binarisation, Camera Geometry',
    icon: <FiGlobe size={32} strokeWidth={3} />,
    color: 'bg-coral-red'
  }
];

const Features = () => {
  return (
    <section id="features" className="bg-cream py-32 px-6 md:px-12 border-b-4 border-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000000 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-none robot-title">Skills and Tools</h2>
          <p className="text-xl font-medium text-text-dark-gray border-l-4 border-black pl-6 robot-text">These are the technologies and concepts listed in the CV.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, i) => (
            <div key={i} className="bg-white border-4 border-black p-8 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-md">
              <div className={`absolute -top-6 -left-6 ${feature.color} border-4 border-black p-4 rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 text-black`}>
                {feature.icon}
              </div>
              <div className="pt-6">
                <h3 className="text-3xl font-black mb-4 uppercase">{feature.title}</h3>
                <p className="font-medium text-lg text-text-dark-gray">{feature.desc}</p>
              </div>
              <div className="absolute top-4 right-4 font-black text-4xl text-cream-dark opacity-50 font-mono">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
