import React from 'react';
import { FiCode, FiCpu, FiDatabase, FiLayout, FiTool } from 'react-icons/fi';

const skills = [
  'C#', 'C++', 'Java', 'Python', 'C', 'SQL',
  'Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'REST APIs',
  'React', 'Docker', 'Git', 'GitHub Actions', 'Vercel', 'Maven',
  'Blender', 'Visual Studio', 'Jupyter Notebooks', 'Streamlit',
  'Scikit-Learn', 'TF-IDF', 'Cosine Similarity', 'RAG', 'LLMs',
  'K-Means', 'XGBoost', 'Pandas', 'NumPy', 'YOLOv8', 'Otsu Binarisation'
];

const skillIcons = [FiCode, FiLayout, FiDatabase, FiCpu, FiTool];

const SkillsGrid = () => {
  return (
    <section className="bg-mustard py-32 px-6 md:px-12 border-b-4 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 max-w-3xl">
          <div className="inline-block bg-white border-4 border-black px-4 py-2 font-mono text-xs font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            Skills
          </div>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4 leading-none">
            Stack I work with
          </h2>
          <p className="text-lg md:text-xl font-medium text-text-dark-gray">
            A quick glimpse of the technologies and tools mentioned in my CV.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => {
            const Icon = skillIcons[i % skillIcons.length];
            return (
              <div key={skill} className="bg-white border-4 border-black rounded-full px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                <Icon size={16} strokeWidth={3} />
                <span className="font-bold text-sm uppercase tracking-wide">{skill}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
