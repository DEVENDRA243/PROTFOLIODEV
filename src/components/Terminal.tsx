import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Minimize2, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  onClose: () => void;
}

interface HistoryItem {
  type: 'input' | 'output' | 'error' | 'success';
  content: string | string[];
}

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'output', content: 'Welcome to DEVENDRA KUMAR\'s Terminal [Version 1.0.4]' },
    { type: 'output', content: 'Type "help" to see available commands.' },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const projects = [
    { name: 'Family-Hub', url: 'https://family-health-hub-navy.vercel.app/login', desc: 'Smart Family Healthcare Hub' },
    { name: 'Ocean-Odyssey', url: 'https://ocean-live.vercel.app/', desc: 'Interactive Ocean Exploration' },
    { name: 'Malware-AI', url: 'https://malware-classification.onrender.com/', desc: 'AI Malware Classification System' },
    { name: 'Finance-Advisor', url: 'https://finance--management.streamlit.app/', desc: 'AI Financial Management Tool' },
  ];

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const [action, ...args] = trimmedCmd.split(' ');

    const newHistory: HistoryItem[] = [...history, { type: 'input', content: `guest@dk:~ $ ${cmd}` }];

    switch (action) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: [
            'Available commands:',
            '  help        - Show this help menu',
            '  ls          - List all projects',
            '  whoami      - Display bio information',
            '  contact     - Show social links',
            '  cd <proj>   - Open a project (e.g., cd malware-ai)',
            '  show <n>    - Switch project stack to index (0-3)',
            '  clear       - Clear terminal history',
            '  sudo        - Try your luck',
            '  exit        - Close terminal',
          ],
        });
        break;

      case 'ls':
      case 'projects':
        newHistory.push({
          type: 'output',
          content: projects.map(p => `• ${p.name.padEnd(16)} - ${p.desc}`),
        });
        break;

      case 'whoami':
      case 'about':
        newHistory.push({
          type: 'output',
          content: [
            'Name: DEVENDRA KUMAR',
            'Role: CS Student & Full-Stack Developer',
            'Bio: Passionate about building intelligent systems and cinematic web experiences.',
            'Specialties: React, TypeScript, AI/ML, 3D Web Graphics, and System Architecture.',
          ],
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: [
            'GitHub:   https://github.com/devendra',
            'LinkedIn: https://linkedin.com/in/devendra',
            'Email:    devendra@example.com',
          ],
        });
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        onClose();
        return;

      case 'sudo':
        newHistory.push({ type: 'error', content: 'Nice try! Access Denied: User "guest" is not in the sudoers file.' });
        break;

      case 'cd':
        const target = args[0];
        if (!target) {
          newHistory.push({ type: 'error', content: 'Usage: cd <project_name>' });
        } else {
          const project = projects.find(p => p.name.toLowerCase() === target.toLowerCase());
          if (project) {
            newHistory.push({ type: 'success', content: `Navigating to ${project.name}...` });
            window.open(project.url, '_blank');
          } else {
            newHistory.push({ type: 'error', content: `error: project "${target}" not found. Type "ls" to see projects.` });
          }
        }
        break;

      case 'show':
        const index = parseInt(args[0]);
        if (isNaN(index)) {
          newHistory.push({ type: 'error', content: 'Usage: show <0-3>' });
        } else {
          newHistory.push({ type: 'success', content: `Switching card stack to index ${index}...` });
          window.dispatchEvent(new CustomEvent('set-card-stack-index', { detail: index }));
          // Scroll to work section to see it
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        }
        break;

      case '':
        break;

      default:
        newHistory.push({ type: 'error', content: `command not found: ${action}` });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-3xl h-[500px] bg-[#0c0c0c] border border-zinc-800 rounded-lg shadow-2xl flex flex-col overflow-hidden font-mono"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <TerminalIcon size={16} className="text-muted" />
            <span className="text-xs text-muted uppercase tracking-widest font-bold">System Terminal</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-muted hover:text-white transition-colors"><Minimize2 size={16} /></button>
            <button onClick={onClose} className="text-muted hover:text-white transition-colors"><X size={16} /></button>
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={scrollRef}
          className="flex-1 p-6 overflow-y-auto crt-screen scrollbar-hide"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="scanline"></div>
          
          <div className="space-y-2">
            {history.map((item, i) => (
              <div key={i} className="animate-role-fade-in">
                {item.type === 'input' ? (
                  <p className="text-white opacity-80">{item.content}</p>
                ) : Array.isArray(item.content) ? (
                  <div className="space-y-1">
                    {item.content.map((line, li) => (
                      <p key={li} className={item.type === 'error' ? 'text-red-400' : item.type === 'success' ? 'text-accent' : 'text-zinc-400'}>
                        {line}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className={item.type === 'error' ? 'text-red-400' : item.type === 'success' ? 'text-accent' : 'text-zinc-400'}>
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-accent/80 font-bold">guest@dk:~ $</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleCommand(input);
                }
              }}
              className="flex-1 bg-transparent border-none outline-none text-white caret-accent"
              autoFocus
            />
          </div>
        </div>

        {/* Status Bar */}
        <div className="px-4 py-1 bg-zinc-900/30 border-t border-zinc-800 flex justify-between">
          <span className="text-[10px] text-muted/50 uppercase">UTF-8</span>
          <span className="text-[10px] text-muted/50 uppercase">Connected to localhost</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Terminal;
