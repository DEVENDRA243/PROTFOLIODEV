import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, X } from 'lucide-react';

interface TerminalButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const TerminalButton: React.FC<TerminalButtonProps> = ({ onClick, isOpen }) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#111111] shadow-[4px_4px_0px_#111111] transition-all duration-200 cursor-pointer ${
        isOpen 
          ? 'bg-[#111111] text-[#ebebea] shadow-[4px_4px_0px_#5fb57a]' 
          : 'bg-[#5fb57a] text-[#111111] hover:bg-white'
      }`}
      aria-label="Toggle Interactive Terminal"
      title="Toggle Developer Terminal"
    >
      {isOpen ? <X size={22} /> : <Terminal size={22} />}
      
      {!isOpen && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#111111] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#111111] border border-white"></span>
        </span>
      )}
    </motion.button>
  );
};

export default TerminalButton;
