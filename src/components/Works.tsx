import React from 'react';
import { motion } from 'framer-motion';
import { CardStack } from './ui/card-stack';
import type { CardStackItem } from '../types/projects';

const projects: CardStackItem[] = [
  {
    id: 1,
    title: "Family Hub",
    description: "Smart Family Healthcare Hub with real-time tracking and member management.",
    imageSrc: "/HUB.png",
    href: "https://family-health-hub-navy.vercel.app/login",
  },
  {
    id: 2,
    title: "Ocean Odyssey",
    description: "Interactive 3D ocean exploration experience with real-time physics and visuals.",
    imageSrc: "/OCEAN.png",
    href: "https://ocean-live.vercel.app/",
  },
  {
    id: 3,
    title: "AI Malware Classification",
    description: "Intelligent Malware Analysis System using advanced machine learning models.",
    imageSrc: "/classification_OG.webp",
    href: "https://malware-classification.onrender.com/",
  },
  {
    id: 4,
    title: "AI Finance Advisor",
    description: "Smarter Financial Decisions and Portfolio Management powered by AI.",
    imageSrc: "/AI_FINANCE.png",
    href: "https://finance--management.streamlit.app/",
  },
];

const Works: React.FC = () => {
  return (
    <section id="work" className="bg-bg py-12 md:py-16 px-6 md:px-10 lg:px-16 overflow-hidden transform-gpu will-change-transform">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-display mb-4">
                Featured <span className="italic">projects</span>
              </h2>
              <p className="text-muted text-sm md:text-base max-w-sm">
                A selection of projects I've worked on, from concept to launch.
              </p>
            </div>
            

          </div>
        </motion.div>

        {/* New 3D Fan Card Stack */}
        <div className="w-full flex items-center justify-center pt-8">
            <CardStack
              items={projects}
              initialIndex={0}
              autoAdvance
              intervalMs={3000}
              pauseOnHover
              showDots
              cardWidth={600}
              cardHeight={400}
            />
        </div>
      </div>
    </section>
  );
};

export default Works;

