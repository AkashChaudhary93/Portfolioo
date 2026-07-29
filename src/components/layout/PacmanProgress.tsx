import React from 'react';

const PacmanProgress = () => {
  const sections = ['#hero', '#about', '#work', '#features', '#education', '#contact'];
  const activeIndex = 1;

  return (
    <div className="hidden md:flex items-center gap-2 border-4 border-black bg-white px-3 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
      <span className="text-sm leading-none font-black">P1</span>
      <span className="w-4 h-4 rounded-full border-2 border-black bg-lime-green inline-block shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></span>
      <span className="flex items-center gap-1">
        {sections.map((_, i) => (
          <span
            key={i}
            className={`inline-block w-2.5 h-2.5 rounded-full border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] ${
              i === activeIndex ? 'bg-hot-orange' : i < activeIndex ? 'bg-mustard' : 'bg-white'
            }`}
          ></span>
        ))}
      </span>
    </div>
  );
};

export default PacmanProgress;
