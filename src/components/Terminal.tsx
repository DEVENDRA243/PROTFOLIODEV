'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal as TerminalIcon } from 'lucide-react'

interface TerminalProps {
  onClose: () => void;
}

export default function Terminal({ onClose }: TerminalProps) {
  const [history, setHistory] = useState<Array<{ command: string; output: string | React.ReactNode }>>([
    { command: '/welcome', output: `
████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     ██╗  ██╗   ██╗
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     ██║  ╚██╗ ██╔╝
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     ██║   ╚████╔╝ 
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     ██║    ╚██╔╝  
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗███████╗██║   
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝   

[SYSTEM INITIALIZED] - Portfolio Terminal v2.0
Welcome, Guest! Type help to see available commands.` },
  ])
  const [currentCommand, setCurrentCommand] = useState('')
  const [_, setHistoryIndex] = useState(-1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const projects_data = [
    { name: 'Family-Hub', url: 'https://family-health-hub-navy.vercel.app/login', desc: 'Smart Family Healthcare Hub' },
    { name: 'Ocean-Odyssey', url: 'https://ocean-live.vercel.app/', desc: 'Interactive Ocean Exploration' },
    { name: 'Malware-AI', url: 'https://malware-classification.onrender.com/', desc: 'AI Malware Classification System' },
    { name: 'Finance-Advisor', url: 'https://finance--management.streamlit.app/', desc: 'AI Financial Management Tool' },
  ];

  const commands = {
    'help': () => `
[AVAILABLE_COMMANDS]

about       Display personal information
projects    View project portfolio
skills      Show technical skills
contact     Show contact information
cd <name>   Open a project in a new tab
sudo        Try your luck
clear       Clear terminal screen
exit        Close terminal
help        Display this help message
    `,
    'about': () => `
Name: DEVENDRA KUMAR
Role: CS Student & Full-Stack Developer
Location: India
Status: Available for opportunities

Bio: Passionate about building intelligent systems and cinematic web experiences. 
Specialties: React, TypeScript, AI/ML, 3D Web Graphics, and System Architecture.
    `,
    'skills': () => `
[TECHNICAL SKILLS MATRIX]

Core Stack:
  React/Next.js         ████████████████████ 100%
  TypeScript            ████████████████████ 100%
  Python/AI/ML          ██████████████████   90%
  3D Web Graphics       █████████████████    85%

Frontend:
  Tailwind CSS          ████████████████████ 100%
  Three.js/Framer       ████████████████     80%
  UI/UX Design          ███████████████      75%

Backend & Systems:
  Node.js/Express       ██████████████████   90%
  PostgreSQL/MongoDB    ████████████████     85%
  System Architecture   ████████████████     80%
    `,
    'projects': () => {
      const output = projects_data.map((p, i) => `${i + 1}. ${p.name.padEnd(16)} | ${p.desc}`).join('\n');
      return `[PROJECT PORTFOLIO]\n\n${output}\n\nType 'cd <name>' to view a project.`;
    },
    'contact': () => `
[CONTACT INFORMATION]

📧 Email: devendra@example.com
🐙 GitHub: https://github.com/devendra
💼 LinkedIn: https://linkedin.com/in/devendra

Feel free to reach out for opportunities or collaborations!
    `,
    'sudo': () => `Nice try! Access Denied: User "guest" is not in the sudoers file.`,
    'exit': () => {
      onClose();
      return 'Closing session...';
    },
    'clear': () => {
      setHistory([]);
      return '';
    },
  }

  const handleCommand = (fullCmd: string) => {
    const trimmed = fullCmd.trim();
    if (!trimmed) return;

    const [cmd, ...args] = trimmed.toLowerCase().split(' ');
    let output: string | React.ReactNode = '';

    if (cmd === 'cd') {
      const target = args[0];
      const project = projects_data.find(p => p.name.toLowerCase() === target?.toLowerCase());
      if (project) {
        window.open(project.url, '_blank');
        output = `Navigating to ${project.name}...`;
      } else {
        output = `Error: Project "${target}" not found. Type 'projects' to see list.`;
      }
    } else if (commands[cmd as keyof typeof commands]) {
      output = commands[cmd as keyof typeof commands]();
    } else {
      output = `Command not found: ${cmd}. Type 'help' for assistance.`;
    }

    if (cmd !== 'clear' && cmd !== 'exit') {
      setHistory(prev => [...prev, { command: fullCmd, output }])
    }
    
    setCurrentCommand('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHistoryIndex(prev => {
        const newIndex = Math.min(prev + 1, history.length - 1)
        if (history.length > 0) {
          const pastCmd = history[history.length - 1 - newIndex]?.command;
          if (pastCmd && pastCmd !== '/welcome') {
             setCurrentCommand(pastCmd);
          }
        }
        return newIndex
      })
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHistoryIndex(prev => {
        const newIndex = Math.max(prev - 1, -1)
        if (newIndex === -1) {
          setCurrentCommand('');
        } else {
          const pastCmd = history[history.length - 1 - newIndex]?.command;
          if (pastCmd && pastCmd !== '/welcome') {
            setCurrentCommand(pastCmd);
          }
        }
        return newIndex
      })
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  useEffect(() => {
    const handleClick = () => inputRef.current?.focus()
    if (terminalRef.current) {
      terminalRef.current.addEventListener('click', handleClick)
    }
    return () => terminalRef.current?.removeEventListener('click', handleClick)
  }, [])

  const renderOutput = (output: string | React.ReactNode) => {
    if (typeof output !== 'string') return output;

    const urlRegex = /(https?:\/\/[^\s]+)/g
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
    
    let parts = output.split(urlRegex)
    parts = parts.flatMap(part => 
      urlRegex.test(part) ? [part] : part.split(emailRegex)
    )
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">
            {part}
          </a>
        )
      } else if (emailRegex.test(part)) {
        return (
          <a key={index} href={`mailto:${part}`} className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">
            {part}
          </a>
        )
      }
      return <span key={index}>{part}</span>
    })
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 md:p-8 bg-black/60 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-4xl h-[85vh] md:h-[600px] bg-black rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-green-500/30 flex flex-col font-mono"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-4 px-3 sm:px-4 py-3 bg-zinc-900 border-b border-zinc-800">
          <div className="flex gap-1.5 sm:gap-2">
            <div onClick={onClose} className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 text-[8px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-bold text-zinc-500 truncate px-2">
            <TerminalIcon size={12} className="text-green-500 flex-shrink-0" />
            <span className="truncate">devendra@system:~$ | Interactive Terminal</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
             <span className="flex items-center gap-1.5 text-[8px] sm:text-[10px] text-green-400/70">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="hidden xs:inline">ONLINE</span>
             </span>
          </div>
        </div>

        {/* Terminal Output */}
        <div 
          ref={terminalRef} 
          className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-black/95 cursor-text relative group"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#22c55e33 transparent'
          }}
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
          
          {history.map((entry, i) => ( entry.command !== '/welcome' ? (
            <div key={i} className="space-y-2 animate-in fade-in slide-in-from-left-2 duration-300">
              <div className="flex gap-2 text-xs sm:text-sm">
                <span className="text-green-500 font-bold whitespace-nowrap">guest@dk:~ $</span>
                <span className="text-white selection:bg-green-500/30 break-all">{entry.command}</span>
              </div>
              <div className="whitespace-pre-wrap overflow-x-auto text-zinc-400 pl-4 sm:pl-6 border-l border-white/5 leading-relaxed selection:bg-green-500/30 text-xs sm:text-sm custom-scrollbar">
                {renderOutput(entry.output)}
              </div>
            </div>
          ) : (
            <div key={i} className="whitespace-pre overflow-x-auto text-green-500 leading-none mb-8 animate-in zoom-in-95 duration-500 custom-scrollbar">
               <div className="text-[5px] xs:text-[7px] sm:text-[10px] md:text-xs font-bold leading-tight min-w-fit">
                  {renderOutput(entry.output)}
               </div>
            </div>
          )))}

          {/* Current Command Input */}
          <div className="flex gap-2 sm:gap-3 items-center pt-2 text-xs sm:text-sm">
            <span className="text-green-500 font-bold whitespace-nowrap">guest@dk:~ $</span>
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={e => setCurrentCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-white selection:bg-green-500/30 caret-green-500 min-w-0"
              autoFocus
              spellCheck="false"
            />
            <span className="text-green-500 animate-pulse font-bold">_</span>
          </div>

          {/* Auto-scroll anchor */}
          <div ref={bottomRef} className="h-4" />
        </div>
        
        {/* Terminal Footer */}
        <div className="bg-zinc-900/50 px-4 sm:px-6 py-2 text-[8px] sm:text-[10px] text-zinc-500 border-t border-zinc-800 flex justify-between items-center backdrop-blur-sm">
          <div className="flex gap-2 sm:gap-4">
            <span className="hover:text-zinc-400 transition-colors cursor-help">HELP: Type 'help'</span>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <span className="hidden sm:inline">HISTORY: Use ↑/↓</span>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
             <span className="text-green-500/30">v2.0.4-stable</span>
             <span className="px-1 py-0.5 rounded bg-zinc-800 text-[8px] sm:text-[9px]">UTF-8</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
