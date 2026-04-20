import { motion } from 'framer-motion';
import RotatingText from './ui/RotatingText';
import ProjectCard from './ui/ProjectCard';
import type { CardStackItem } from '../types/projects';

const projects: CardStackItem[] = [
  {
    id: 1,
    title: "Family Hub",
    description: "Smart Family Healthcare Hub",
    imageSrc: "/HUB.png",
    href: "https://family-health-hub-navy.vercel.app/login",
  },
  {
    id: 2,
    title: "Ocean Odyssey",
    description: "Marine Exploration Platform",
    imageSrc: "/OCEAN.png",
    href: "https://ocean-live.vercel.app/",
  },
  {
    id: 3,
    title: "AI Malware Classification",
    description: "Intelligent Malware Analysis System",
    imageSrc: "/classification_OG.webp",
    href: "https://malware-classification.onrender.com/",
  },
  {
    id: 4,
    title: "AI Finance Advisor",
    description: "Smarter Decisions, Better Returns",
    imageSrc: "/AI_FINANCE.png",
    href: "https://finance--management.streamlit.app/",
  },
];

const Works: React.FC = () => {
  return (
    <section id="work" className="bg-bg py-12 md:py-16 px-6 md:px-10 lg:px-16 overflow-hidden transform-gpu will-change-transform">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-display mb-4 flex items-center gap-3">
                Featured 
                <RotatingText
                  texts={['projects', 'solutions', 'products', 'identities']}
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
              <p className="text-muted text-sm md:text-base max-w-sm">
                A selection of projects I've worked on, from concept to launch.
              </p>
            </div>


          </div>
        </motion.div>

        {/* Modern Project Grid */}
        <div className="flex flex-wrap gap-10 justify-center mt-12 w-full">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

