import React from 'react';
import { ExternalLink } from 'lucide-react';
import ElectricBorder from './ElectricBorder';

interface ProjectCardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description = "", imageSrc = "", href = "#" }) => {
  return (
    <div className="w-[320px] h-[340px] transition-transform duration-300 scale-90 sm:scale-100 origin-center group">
      <ElectricBorder
        color="#7df9ff"
        borderRadius={24}
        className="w-full h-full"
      >
        <div className="relative h-full w-full bg-[#0a0a0a] border border-white/10 overflow-hidden rounded-[24px] flex flex-col transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          {/* Contained Thumbnail at Top */}
          <div className="w-full h-[140px] overflow-hidden border-b border-white/5 bg-[#050505]">
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              className={`w-full h-full select-none transition-transform duration-500 hover:scale-105 ${title === "Family Hub" ? "object-contain p-4" : "object-cover"
                }`}
            />
          </div>

          {/* Content Below Thumbnail */}
          <div className="flex-1 flex flex-col p-5 text-left">
            <div className="mb-2">
              <h3 className="text-lg font-bold text-white mb-1 tracking-tight font-display">
                {title}
              </h3>
              <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                {description}
              </p>
            </div>

            {/* CTA Button closer to content */}
            <div className="mt-4 w-full">
              <a
                href={href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-black py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/90 active:scale-[0.98] transition-all shadow-xl text-sm"
              >
                Live
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </ElectricBorder>
    </div>
  );
};

export default ProjectCard;
