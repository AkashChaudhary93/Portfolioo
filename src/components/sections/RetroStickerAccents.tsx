import React from 'react';

const RetroStickerAccents = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block opacity-70">
      <div className="absolute left-8 top-24 w-8 h-8 border-4 border-black bg-mustard rounded-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-6 float-swing"></div>
      <div className="absolute right-12 top-40 w-6 h-6 border-4 border-black bg-coral-red rounded-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-3 float-bob"></div>
      <div className="absolute left-16 bottom-16 w-8 h-8 border-4 border-black bg-sky-blue rounded-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-6 float-swing"></div>
    </div>
  );
};

export default RetroStickerAccents;
