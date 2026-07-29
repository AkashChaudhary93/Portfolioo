import Link from 'next/link';
import React from 'react';
import PacmanProgress from '@/components/layout/PacmanProgress';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-cream border-b-4 border-black">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex flex-wrap items-center justify-between gap-4 lg:gap-6">
        <Link
          href="/"
          className="inline-flex items-center bg-white border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover-lift hover-pop"
        >
          <span className="font-black text-2xl md:text-3xl tracking-tight uppercase text-black hover-tilt">DEV</span>
          <span className="font-black text-2xl md:text-3xl tracking-tight uppercase text-hot-orange ml-1 hover-tilt">PORTFOLIO</span>
        </Link>

        <div className="hidden lg:flex items-center bg-white border-4 border-black px-5 py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] gap-5 xl:gap-7 flex-wrap">
          <div className="flex items-center gap-5 xl:gap-7 pr-5 xl:pr-7 border-r-4 border-black">
            <NavLink href="#about" text="ABOUT" />
            <NavLink href="#work" text="WORK" />
            <NavLink href="#features" text="ARSENAL" />
            <NavLink href="#education" text="EDUCATION" />
            <NavLink href="#contact" text="CONTACT" />
          </div>

          <div className="hidden xl:flex items-center gap-4">
            <CoinHud />
            <StatusChip />
            <HeartBar />
            <LevelBadge />
            <PacmanProgress />
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-lime-green border-4 border-black px-4 py-2 font-black uppercase tracking-widest text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]  transition-all"
          >
            HIRE ME
          </Link>
        </div>

        <div className="lg:hidden w-full flex items-center justify-between gap-3 bg-white border-4 border-black px-4 py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3 flex-wrap">
            <CoinHud compact />
            <StatusChip compact />
            <div className="sm:hidden flex items-center gap-2">
              <HeartBar compact />
              <LevelBadge compact />
            </div>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-lime-green border-4 border-black px-4 py-2 font-black uppercase text-sm tracking-widest text-black  shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            HIRE ME
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, text }: { href: string; text: string }) => (
  <Link href={href} className="font-black uppercase tracking-widest text-black hover:text-hot-orange transition-colors text-sm xl:text-base ">
    {text}
  </Link>
);

const CoinHud = ({ compact = false }: { compact?: boolean }) => (
  <div className={`inline-flex items-center gap-2 border-4 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover-pop ${compact ? 'px-2 py-1.5' : 'px-3 py-2'}`}>
    <span className={`inline-flex items-center justify-center font-black leading-none text-black border-2 border-black ${compact ? 'w-5 h-5 text-[12px]' : 'w-6 h-6 text-sm'} bg-mustard`}>C</span>
    <span className={`font-black uppercase tracking-widest text-black ${compact ? 'text-xs' : 'text-xs sm:text-sm'}`}>x99</span>
  </div>
);

const StatusChip = ({ compact = false }: { compact?: boolean }) => (
  <div className={`inline-flex items-center gap-2 border-4 border-black bg-white px-3 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover-pop ${compact ? 'hidden sm:inline-flex' : ''}`}>
    <span className="w-3 h-3 bg-lime-green border-2 border-black animate-pulse"></span>
    <span className="font-black uppercase text-xs tracking-widest">OPEN TO INTERN</span>
  </div>
);

const HeartBar = ({ compact = false }: { compact?: boolean }) => {
  const hearts = Array.from({ length: 5 }).map((_, i) => (
    <span
      key={i}
      className={`inline-flex items-center justify-center border-2 border-black leading-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover-pop ${
        compact ? 'w-5 h-5 text-[12px]' : 'w-6 h-6 text-[14px]'
      } ${i < 4 ? 'bg-coral-red text-black' : 'bg-white text-black'}`}
    >
      ♥
    </span>
  ));

  return (
    <div className="flex items-center gap-1" aria-label="lifeline hearts">
      {compact ? hearts.slice(0, 3) : hearts}
    </div>
  );
};

const LevelBadge = ({ compact = false }: { compact?: boolean }) => (
  <div className={`inline-flex items-center border-4 border-black bg-sky-blue shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover-pop ${compact ? 'px-2 py-1' : 'px-3 py-2'}`}>
    <span className={`font-black uppercase tracking-[0.3em] text-black ${compact ? 'text-[10px]' : 'text-xs'}`}>LVL 01</span>
  </div>
);

export default Navbar;
