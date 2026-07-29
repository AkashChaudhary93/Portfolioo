import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-cream border-b-4 border-black">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex flex-wrap items-center justify-between gap-4 lg:gap-6">
        <Link
          href="/"
          className="inline-flex items-center bg-white border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover-lift hover-pop"
        >
          <span className="font-black text-2xl md:text-3xl tracking-tight uppercase text-black">DEV</span>
          <span className="font-black text-2xl md:text-3xl tracking-tight uppercase text-hot-orange ml-1">PORTFOLIO</span>
        </Link>

        <div className="hidden lg:flex items-center bg-white border-4 border-black px-5 py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] gap-6">
          <NavLink href="#about" text="ABOUT" />
          <NavLink href="#work" text="WORK" />
          <NavLink href="#features" text="ARSENAL" />
          <NavLink href="#education" text="EDUCATION" />
          <NavLink href="#contact" text="CONTACT" />
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-lime-green border-4 border-black px-5 py-2 font-black uppercase tracking-widest text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover-lift"
          >
            HIRE ME
          </Link>
        </div>

        <div className="lg:hidden w-full flex items-center justify-between gap-3 bg-white border-4 border-black px-4 py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
          <StatusChip compact />
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-lime-green border-4 border-black px-4 py-2 font-black uppercase text-sm tracking-widest text-black hover-lift shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            HIRE ME
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, text }: { href: string; text: string }) => (
  <Link href={href} className="font-black uppercase tracking-widest text-black hover:text-hot-orange transition-colors text-sm xl:text-base hover-lift">
    {text}
  </Link>
);

const StatusChip = ({ compact = false }: { compact?: boolean }) => (
  <div className={`inline-flex items-center gap-2 border-4 border-black bg-white px-3 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover-pop ${compact ? 'hidden sm:inline-flex' : ''}`}>
    <span className="w-3 h-3 bg-lime-green border-2 border-black"></span>
    <span className="font-black uppercase text-xs tracking-widest">OPEN TO INTERN</span>
  </div>
);

export default Navbar;
