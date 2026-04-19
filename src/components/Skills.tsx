import React from 'react';
import { TechStackComponent } from './ui/tech-stack';

const coreLanguagesStack = [
  { name: 'Java', url: '#', color: '#f89820' },
  { name: 'Python', url: '#', color: '#306998' },
  { name: 'JavaScript', url: '#', color: '#F7DF1E' },
  { name: 'TypeScript', url: '#', color: '#3178C6' },
];

const frontendStack = [
  { name: 'React', url: '#', color: '#61DAFB' },
  { name: 'Next.js', url: '#', color: '#FFFFFF' },
  { name: 'HTML/CSS', url: '#', color: '#E34F26' },
  { name: 'Tailwind CSS', url: '#', color: '#06B6D4' },
];

const backendStack = [
  { name: 'Flask', url: '#', color: '#FFFFFF' },
  { name: 'Node.js', url: '#', color: '#68A063' },
];

const databaseStack = [
  { name: 'PostgreSQL', url: '#', color: '#336791' },
  { name: 'SQL', url: '#', color: '#00758F' },
  { name: 'Supabase', url: '#', color: '#3ECF8E' },
  { name: 'Google Firebase', url: '#', color: '#FFCA28' },
];

const devopsStack = [
  { name: 'Git/GitHub', url: '#', color: '#F05032' },
  { name: 'Vercel', url: '#', color: '#000000' },
  { name: 'Google Cloud Platform', url: '#', color: '#4285F4' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-text uppercase tracking-wider mb-4">
            Technical <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Stacks</span>
          </h2>
          <div className="w-full h-[1px] bg-border relative">
            <div className="absolute left-0 top-0 h-full w-24 bg-accent/50" />
          </div>
        </div>

        {/* The Grid mapping the new Tech Stack cards */}
        <div className="flex flex-wrap gap-8 justify-center py-10 w-full">
          <TechStackComponent title="Frontend Engineering" techStack={frontendStack} />
          <TechStackComponent title="Core Languages" techStack={coreLanguagesStack} />
          <TechStackComponent title="Backend Engineering" techStack={backendStack} />
          <TechStackComponent title="Databases" techStack={databaseStack} />
          <TechStackComponent title="DevOps & Tools" techStack={devopsStack} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
