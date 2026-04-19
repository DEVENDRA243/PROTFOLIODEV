import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface TerminalButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const TerminalButton: React.FC<TerminalButtonProps> = ({ onClick, isOpen }) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`fixed bottom-8 right-8 z-[100] flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-colors duration-300 ${
        isOpen 
          ? 'bg-white text-black' 
          : 'bg-zinc-900 border border-zinc-800 text-white hover:border-zinc-700'
      }`}
      aria-label="Toggle Terminal"
    >
      <Terminal size={24} className={isOpen ? 'animate-pulse' : ''} />
      
      {!isOpen && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-accent"></span>
        </span>
      )}
    </motion.button>
  );
};

export default TerminalButton;
