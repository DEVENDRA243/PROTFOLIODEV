import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FileCode } from 'lucide-react';

interface Tech {
  name: string;
  url: string;
  color: string;
}

interface ComponentProps {
  techStack: Tech[];
  title?: string;
}

export const TechStackComponent: React.FC<ComponentProps> = ({ techStack, title = "Techstack" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const lightSize = 80; 

  const lightX = useTransform(x, (value) => value - lightSize / 2);
  const lightY = useTransform(y, (value) => value - lightSize / 2);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <div className='flex justify-center items-center h-full'>
      <div
        className="relative bg-black/50 overflow-hidden w-[380px] max-w-full h-64 pb-3 rounded-xl shadow-lg border border-transparent transition-all duration-300 hover:border-gray-700/50"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="https://images.unsplash.com/photo-1695883701435-7bd88f796e05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover filter blur-[40px] opacity-40 scale-110"
        />
        
        <div className="absolute inset-0 bg-black/60 rounded-xl border border-zinc-700/50 backdrop-blur-xl"></div>

        {isHovered && (
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: lightSize,
              height: lightSize,
              background: 'rgba(255, 255, 255, 0.15)',
              filter: 'blur(30px)',
              x: lightX,
              y: lightY,
            }}
          ></motion.div>
        )}

        <div className="relative z-10 flex flex-col h-full p-6">
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-3 text-sm text-white">
              <FileCode className="w-5 h-5 text-zinc-400" />
              <p className="font-semibold text-lg tracking-wide">{title}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {techStack.map((tech, index) => (
              <a key={index} target="_blank" rel="noopener noreferrer" href={tech.url}>
                <div className="inline-flex items-center rounded-full border border-zinc-700/80 bg-zinc-900/50 px-3 py-1 text-xs font-medium transition-colors hover:bg-white/10 hover:border-zinc-500 text-gray-200 shadow-sm">
                  <div className="w-2 h-2 mr-2 rounded-full shadow-sm" style={{ backgroundColor: tech.color }}></div>
                  {tech.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
