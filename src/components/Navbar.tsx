import React, { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '/DEVENDRA%20KUMAR.pdf' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      {/* Container with Search Bar Style Glowing Layers */}
      <div id="poda" className="relative flex items-center justify-center group">
        {/* Decorative Backdrop Layers */}
        <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-full blur-[3px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[999px] before:h-[999px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-60
                        before:bg-[conic-gradient(#000,#402fb5_5%,#000_38%,#000_50%,#cf30aa_60%,#000_87%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-120deg]">
        </div>
        <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-full blur-[3px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-98deg]">
        </div>
        <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-full blur-[2px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[83deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0)_0%,#a099d8,rgba(0,0,0,0)_8%,rgba(0,0,0,0)_50%,#dfa2da,rgba(0,0,0,0)_58%)] before:brightness-140
                        before:transition-all before:duration-2000 group-hover:before:rotate-[-97deg]">
        </div>
        <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-full blur-[0.5px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-70
                        before:bg-[conic-gradient(#1c191c,#402fb5_5%,#1c191c_14%,#1c191c_50%,#cf30aa_60%,#1c191c_64%)] before:brightness-130
                        before:transition-all before:duration-2000 group-hover:before:rotate-[-110deg]">
        </div>

        {/* Main Navbar Content */}
        <div 
          className={cn(
            "relative flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-2 py-2 transition-all duration-300 min-h-[56px]",
            isScrolled && "shadow-md shadow-black/20 border-white/20 bg-surface"
          )}
        >
          {/* Logo Area (with spinning glowing border) */}
          <div className="relative group/logo ml-1 h-9 w-9 overflow-hidden rounded-full mr-2">
            <div className="absolute inset-0 z-[-1] animate-spin-slow opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300
                            before:absolute before:content-[''] before:w-[300%] before:h-[300%] before:top-[-100%] before:left-[-100%]
                            before:bg-[conic-gradient(rgba(0,0,0,0),#3d3a4f,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_50%,#3d3a4f,rgba(0,0,0,0)_100%)]" />
            <div className="absolute inset-[2px] bg-bg rounded-full flex items-center justify-center">
              <span className="font-display italic text-[13px] text-text-primary">DK</span>
            </div>
          </div>

          <div className="hidden md:block w-px h-5 bg-stroke mx-1" />

          {/* Nav Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name === 'Resume' ? "_blank" : undefined}
                rel={link.name === 'Resume' ? "noopener noreferrer" : undefined}
                className="text-xs sm:text-sm text-muted hover:text-text-primary hover:bg-stroke/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
