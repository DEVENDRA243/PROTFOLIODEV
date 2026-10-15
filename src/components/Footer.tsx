import React from 'react';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { CrowdCanvas } from './ui/skiper39';
import PerspectiveRoomBox from './ui/perspective-room-box';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#ebebea] text-[#111111] pt-16 md:pt-24 border-t-2 border-[#111111] relative overflow-hidden">
      {/* 3D Perspective Room Box Background for Contact Section */}
      <PerspectiveRoomBox opacity={0.13} />

      {/* Contact Content Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b-2 border-[#111111]">
          <div>
            <div className="inline-flex items-center gap-2 bg-white text-[#111111] border-2 border-[#111111] rounded-full px-3 py-1 mb-6 font-display text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#111111]">
              <Sparkles className="w-3.5 h-3.5 text-[#5fb57a]" />
              <span>Initiate Collab // 05</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.92] tracking-tight text-[#111111] max-w-2xl">
              HAVE AN IDEA? <br />
              <span className="text-[#5fb57a] underline decoration-[#111111] decoration-4 italic">LET'S BUILD IT.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-5 max-w-sm">
            <p className="font-sans text-sm md:text-base text-[#444444] leading-relaxed font-medium">
              Whether you need scalable cloud microservices, high-performance web frontends, or intelligent machine learning solutions, I'm ready to architect and execute.
            </p>

            <a
              href="mailto:devenjsr@gmail.com"
              className="inline-flex items-center justify-between bg-[#5fb57a] text-[#111111] border-2 border-[#111111] rounded-full px-6 py-4 font-display text-sm md:text-base font-black uppercase tracking-wider hover:bg-[#111111] hover:text-[#ebebea] transition-all duration-200 shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#5fb57a] group"
            >
              <span>devenjsr@gmail.com</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Links & Socials Grid */}
        <div className="pt-8 pb-4 flex flex-wrap items-center justify-between gap-6 relative z-20">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/DEVENDRA243"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#111111] border-2 border-[#111111] rounded-full px-4 py-2 font-sans text-xs font-bold uppercase shadow-[2px_2px_0px_#111111] hover:bg-[#5fb57a] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#111111] transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/devendrakumar03/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#111111] border-2 border-[#111111] rounded-full px-4 py-2 font-sans text-xs font-bold uppercase shadow-[2px_2px_0px_#111111] hover:bg-[#5fb57a] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#111111] transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 2H4C2.9 2 2 2.9 2 4v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4C22 2.9 21.1 2 20 2zM8.5 19H6V10h2.5v9zM7.25 8.9c-.8 0-1.45-.65-1.45-1.45S6.45 6 7.25 6s1.45.65 1.45 1.45-.65 1.45-1.45 1.45zM19 19h-2.5v-4.9c0-1.2-.4-2-1.4-2-.8 0-1.3.6-1.5 1.2h-.1V19H11V10h2.3v1.3h.1c.4-.7 1.3-1.5 2.8-1.5 2.1 0 3.8 1.4 3.8 4.3V19z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#111111] border-2 border-[#111111] rounded-full px-4 py-2 font-sans text-xs font-bold uppercase shadow-[2px_2px_0px_#111111] hover:bg-[#5fb57a] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#111111] transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </a>

            <a
              href="mailto:devenjsr@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-[#111111] border-2 border-[#111111] rounded-full px-4 py-2 font-sans text-xs font-bold uppercase shadow-[2px_2px_0px_#111111] hover:bg-[#5fb57a] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#111111] transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          <div className="inline-flex items-center gap-2.5 bg-white text-[#111111] border-2 border-[#111111] px-4 py-2 rounded-full shadow-[2px_2px_0px_#111111]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5fb57a] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5fb57a]" />
            </span>
            <span className="font-mono text-xs font-bold text-[#111111] tracking-wider uppercase">
              Available for projects @ 2026
            </span>
          </div>
        </div>
      </div>

      {/* CROWD CANVAS - FULL SIZE, FLOWING AROUND/UNDER SOCIAL LINKS WITH ZERO CUTTING */}
      <div className="relative w-full h-[600px] md:h-[680px] -mt-48 md:-mt-60 pointer-events-none z-10">
        <CrowdCanvas
          src="https://cdn.21st.dev/assets/localized/abdb8990a7bef8c2f5af3e45f0a3c969c4b0603fba8be92e81347de4ea4e1ed7.png"
          rows={15}
          cols={7}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>
    </footer>
  );
};

export default Footer;
