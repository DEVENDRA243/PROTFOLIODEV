import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import TerminalButton from './components/TerminalButton';
import { IDCardLanyard } from './components/ui/id-card-lanyard';

// Lazy load non-critical sections
const Hero = lazy(() => import('./components/Hero'));
const Works = lazy(() => import('./components/Works'));
const Quote = lazy(() => import('./components/Quote'));
const Skills = lazy(() => import('./components/Skills'));
const Footer = lazy(() => import('./components/Footer'));
const Terminal = lazy(() => import('./components/Terminal'));

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-[#ebebea] text-[#111111] selection:bg-[#5fb57a] selection:text-[#111111]">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <main className="relative z-10">
          <Navbar />
          <IDCardLanyard
            name="Devendra Kumar"
            role="Full-Stack & Systems"
            brand="DEVENDRA"
            brandTagline="Software & Cloud Systems"
            pillars={["Cloud", "AI / ML", "Systems"]}
            location="India // Remote"
            idNumber="DK-2026-X"
            validThru="12/2028"
            site="devendrakumar.dev"
            githubUrl="https://github.com/DEVENDRA243"
            linkedinUrl="https://www.linkedin.com/in/devendrakumar03/"
            instagramUrl="https://instagram.com"
            anchorX="calc(100% - 150px)"
            anchorY={0}
            zIndex={45}
            showHint={true}
            className="hidden md:block"
          />
          <Suspense fallback={<div className="h-screen bg-[#ebebea] flex items-center justify-center font-display text-xl uppercase">Loading...</div>}>
            <Hero />
            <Works />
            <Quote />
            <Skills />
            <Footer />
            <AnimatePresence>
              {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}
            </AnimatePresence>
          </Suspense>
          <TerminalButton isOpen={isTerminalOpen} onClick={() => setIsTerminalOpen(prev => !prev)} />
        </main>
      )}
    </div>
  );
};

export default App;
