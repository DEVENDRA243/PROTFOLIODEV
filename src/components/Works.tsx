import React from 'react';
import ProjectCard from './ui/ProjectCard';
import PerspectiveRoomBox from './ui/perspective-room-box';

interface ProjectItem {
  id: number;
  indexTag: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  fallbackImage: string;
  tags: string[];
  href: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    indexTag: "01",
    title: "Family Hub",
    category: "HealthTech / Full-Stack",
    description: "Centralized smart healthcare and vitals management platform designed for families and clinical records.",
    imageSrc: "/HUB.png",
    fallbackImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    href: "https://family-health-hub-navy.vercel.app/login",
  },
  {
    id: 2,
    indexTag: "02",
    title: "Ocean Odyssey",
    category: "Interactive 3D / WebGL",
    description: "Immersive marine conservation and aquatic exploration platform featuring real-time 3D shaders and fluid physics.",
    imageSrc: "/OCEAN.png",
    fallbackImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop&q=80",
    tags: ["Three.js", "React", "WebGL", "Framer Motion"],
    href: "https://ocean-live.vercel.app/",
  },
  {
    id: 3,
    indexTag: "03",
    title: "AI Malware Guard",
    category: "Cybersecurity / Deep Learning",
    description: "Deep learning malware detection engine classifying byte-sequence anomalies and malicious execution fingerprints.",
    imageSrc: "/classification_OG.webp",
    fallbackImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    tags: ["Python", "PyTorch", "FastAPI", "Cybersecurity"],
    href: "https://malware-classification.onrender.com/",
  },
  {
    id: 4,
    indexTag: "04",
    title: "AI Finance Advisor",
    category: "Fintech / Predictive Analytics",
    description: "Intelligent portfolio optimization and return analytics powered by machine learning algorithms.",
    imageSrc: "/AI_FINANCE.png",
    fallbackImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
    tags: ["Streamlit", "Python", "Data Science", "Pandas"],
    href: "https://finance--management.streamlit.app/",
  },
  {
    id: 5,
    indexTag: "05",
    title: "Hardware Price Engine",
    category: "Valuation & Regression ML",
    description: "Algorithmic hardware valuation engine predicting market prices across global computer component specifications.",
    imageSrc: "/LP_PREDICT.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80",
    tags: ["Python", "Scikit-Learn", "Regression", "UI"],
    href: "https://laptoppricepredictss.streamlit.app/",
  },
];

const Works: React.FC = () => {
  return (
    <section id="work" className="bg-[#ebebea] text-[#111111] py-16 md:py-24 px-4 md:px-8 border-t-2 border-[#111111] relative overflow-hidden">
      {/* 3D Perspective Room Box Background */}
      <PerspectiveRoomBox opacity={0.13} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b-2 border-[#111111]">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border-2 border-[#111111] rounded-full px-3 py-1 mb-4 shadow-[2px_2px_0px_#111111]">
              <span className="w-2 h-2 rounded-full bg-[#5fb57a]" />
              <span className="font-display text-xs font-black uppercase tracking-wider text-[#111111]">
                Catalog // 02
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#111111]">
              SELECTED <span className="text-[#5fb57a] underline decoration-[#111111] decoration-4">WORKS</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm md:text-base font-medium text-[#444444] leading-relaxed">
              Production web applications, full-stack microservices, and machine learning pipelines architected with scalability, speed, and precision.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
