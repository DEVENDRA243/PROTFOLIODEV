import CyberSkillCard from './ui/cyber-skill-card';
import RotatingText from './ui/RotatingText';

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
    <section id="skills" className="pt-24 pb-4 relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-text uppercase tracking-tight mb-4 italic flex flex-wrap justify-center items-center gap-x-4">
            TECHNICAL 
            <RotatingText
              texts={['POWER', 'STACK', 'TOOLS', 'SKILLS']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A specialized collection of modern technologies and tools I use to build high-performance applications.
          </p>
        </div>

        {/* The Grid mapping the new Tech Stack cards */}
        <div className="flex flex-wrap gap-10 justify-center pt-10 pb-0 w-full">
          <CyberSkillCard title="Frontend" techStack={frontendStack} />
          <CyberSkillCard title="Core" techStack={coreLanguagesStack} />
          <CyberSkillCard title="Backend" techStack={backendStack} />
          <CyberSkillCard title="Databases" techStack={databaseStack} />
          <CyberSkillCard title="DevOps" techStack={devopsStack} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
