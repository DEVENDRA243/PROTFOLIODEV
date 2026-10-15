import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Works', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Resume', href: '/DEVENDRA%20KUMAR.pdf', external: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 md:pt-4 px-4 pointer-events-none">
      <div 
        className={`pointer-events-auto flex items-center justify-between gap-3 md:gap-6 bg-white border-2 border-[#111111] rounded-full px-3 py-1.5 md:px-5 md:py-2 transition-all duration-300 ${
          isScrolled ? 'shadow-[4px_4px_0px_#111111] bg-white' : 'shadow-[3px_3px_0px_#111111] bg-white/95'
        }`}
      >
        {/* Brand / Index Pill */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 group text-decoration-none"
          aria-label="Home"
        >
          <span className="w-8 h-8 md:w-9 md:h-9 bg-[#5fb57a] text-[#111111] border-2 border-[#111111] rounded-full flex items-center justify-center font-display text-xs md:text-sm font-black transition-transform duration-200 group-hover:rotate-12 group-hover:scale-105">
            DK
          </span>
          <span className="hidden sm:inline-block font-display text-xs md:text-sm font-black tracking-tight text-[#111111]">
            DEVENDRA
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 font-sans text-xs font-bold uppercase tracking-wider text-[#111111]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="px-3 py-1.5 rounded-full hover:bg-[#5fb57a] hover:text-[#111111] transition-all duration-150"
            >
              {link.name}
              {link.external && <FileText className="inline-block ml-1 w-3 h-3" />}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:devenjsr@gmail.com"
            className="inline-flex items-center gap-1.5 bg-[#5fb57a] text-[#111111] border-2 border-[#111111] rounded-full px-3.5 py-1.5 md:px-4 md:py-1.5 font-display text-[11px] md:text-xs font-black uppercase tracking-wider transition-all duration-200 hover:bg-[#111111] hover:text-[#ebebea] hover:shadow-[2px_2px_0px_#5fb57a]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center border-2 border-[#111111] rounded-full bg-white text-[#111111]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto fixed top-16 left-4 right-4 bg-white border-2 border-[#111111] rounded-2xl p-4 shadow-[5px_5px_0px_#111111] flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="px-4 py-2.5 rounded-xl font-display text-sm font-bold uppercase text-[#111111] hover:bg-[#5fb57a] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
