import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';

// Lazy load non-critical sections
const Hero = lazy(() => import('./components/Hero'));
const Works = lazy(() => import('./components/Works'));
const Quote = lazy(() => import('./components/Quote'));
const Skills = lazy(() => import('./components/Skills'));
const Footer = lazy(() => import('./components/Footer'));
const Terminal = lazy(() => import('./components/Terminal'));
import TerminalButton from './components/TerminalButton';

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
    <div className="relative min-h-screen bg-bg selection:bg-accent/30">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <main>
          <Navbar />
          <Suspense fallback={<div className="h-screen bg-bg" />}>
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
