import React from 'react';
import { Layers, Terminal, Database, Cloud, Cpu } from 'lucide-react';
import PerspectiveRoomBox from './ui/perspective-room-box';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  tag: string;
  skills: { name: string; level?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: <Layers className="w-5 h-5 text-[#111111]" />,
    tag: "01 // UI & WEB",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3" },
      { name: "Framer Motion" },
      { name: "Three.js / WebGL" },
    ],
  },
  {
    title: "Core Languages",
    icon: <Terminal className="w-5 h-5 text-[#111111]" />,
    tag: "02 // SYNTAX",
    skills: [
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "Python" },
      { name: "Java" },
      { name: "SQL" },
    ],
  },
  {
    title: "Backend & Systems",
    icon: <Cpu className="w-5 h-5 text-[#111111]" />,
    tag: "03 // SERVERS",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Flask" },
      { name: "FastAPI" },
      { name: "RESTful Architecture" },
      { name: "Microservices" },
    ],
  },
  {
    title: "Data & Cloud Infrastructure",
    icon: <Database className="w-5 h-5 text-[#111111]" />,
    tag: "04 // PERSISTENCE",
    skills: [
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "Google Firebase" },
      { name: "Google Cloud Platform" },
      { name: "Data Warehousing" },
    ],
  },
  {
    title: "DevOps & Engineering Tools",
    icon: <Cloud className="w-5 h-5 text-[#111111]" />,
    tag: "05 // PIPELINE",
    skills: [
      { name: "Git & GitHub" },
      { name: "Docker" },
      { name: "Vercel / Render" },
      { name: "CI/CD Workflows" },
      { name: "Linux / Shell" },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-[#ebebea] text-[#111111] py-16 md:py-24 px-4 md:px-8 border-t-2 border-[#111111] relative overflow-hidden">
      {/* 3D Perspective Room Box Background */}
      <PerspectiveRoomBox opacity={0.13} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b-2 border-[#111111]">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border-2 border-[#111111] rounded-full px-3 py-1 mb-4 shadow-[2px_2px_0px_#111111]">
              <span className="w-2 h-2 rounded-full bg-[#5fb57a]" />
              <span className="font-display text-xs font-black uppercase tracking-wider text-[#111111]">
                Stack // 04
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#111111]">
              TECHNICAL <span className="text-[#5fb57a] underline decoration-[#111111] decoration-4">EXPERTISE</span>
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm md:text-base font-medium text-[#444444] leading-relaxed">
            Battle-tested technologies and architectural tools leveraged across enterprise environments at Tata Steel Utilities and production startups.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`bg-white border-2 border-[#111111] rounded-2xl md:rounded-3xl p-6 shadow-[5px_5px_0px_#111111] hover:shadow-[7px_7px_0px_#5fb57a] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                idx === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b-2 border-[#111111]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#5fb57a] border border-[#111111] flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <h3 className="font-display text-base md:text-lg font-black uppercase tracking-tight text-[#111111]">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#555555] uppercase">
                    {cat.tag}
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 bg-[#ebebea] text-[#111111] border border-[#111111] rounded-full px-3 py-1 font-sans text-xs font-bold uppercase tracking-wide hover:bg-[#5fb57a] hover:scale-105 transition-all cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-dashed border-[#111111]/30 flex items-center justify-between text-[11px] font-mono text-[#666666]">
                <span>{cat.skills.length} modules</span>
                <span className="text-[#5fb57a] font-black font-sans uppercase">Verified 2026</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
