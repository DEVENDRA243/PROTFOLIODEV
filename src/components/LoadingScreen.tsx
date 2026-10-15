import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["Architect", "Engineer", "Deploy"];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const duration = 1800; // Snappy 1.8s load

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime;
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 250);
      }
    };

    const animationId = requestAnimationFrame(animate);

    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 600);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(wordInterval);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-[#ebebea] text-[#111111] flex flex-col justify-between p-6 md:p-12"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex items-center justify-between border-b-2 border-[#111111] pb-4">
        <div className="inline-flex items-center gap-2 bg-[#5fb57a] text-[#111111] border-2 border-[#111111] rounded-full px-3 py-0.5 font-display text-xs font-black uppercase tracking-wider">
          DK // 2026
        </div>
        <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#555555]">
          DEVENDRA KUMAR PORTFOLIO
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#555555] mb-2">
          Initializing Engine
        </span>
        <AnimatePresence mode="wait">
          <motion.h1
            key={words[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl font-display font-black uppercase text-[#111111]"
          >
            {words[wordIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className="border-t-2 border-[#111111] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:max-w-md h-5 bg-white border-2 border-[#111111] rounded-full overflow-hidden p-0.5 shadow-[2px_2px_0px_#111111]">
          <motion.div 
            className="h-full bg-[#5fb57a] rounded-full"
            style={{ width: `${count}%`, transition: 'width 0.1s linear' }}
          />
        </div>

        <div className="font-display text-3xl md:text-5xl font-black text-[#111111] tabular-nums">
          {String(count).padStart(3, "0")}%
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
