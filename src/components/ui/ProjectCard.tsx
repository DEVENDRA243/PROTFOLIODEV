import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export interface ProjectCardProps {
  id?: number | string;
  indexTag?: string;
  title: string;
  category?: string;
  description?: string;
  imageSrc?: string;
  fallbackImage?: string;
  tags?: string[];
  href?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  indexTag = "01",
  title,
  category = "Full-Stack Project",
  description = "",
  imageSrc = "",
  fallbackImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
  tags = ["TypeScript", "React", "Cloud"],
  href = "#",
}) => {
  const [imgSrc, setImgSrc] = useState(imageSrc || fallbackImage);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackImage) {
      setHasError(true);
      setImgSrc(fallbackImage);
    }
  };

  return (
    <article className="w-full max-w-[360px] md:max-w-[380px] bg-white border-2 border-[#111111] rounded-2xl md:rounded-3xl overflow-hidden shadow-[5px_5px_0px_#111111] hover:shadow-[7px_7px_0px_#5fb57a] hover:-translate-y-1.5 hover:-translate-x-0.5 transition-all duration-300 flex flex-col group">
      {/* Top Banner / Index Tag */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b-2 border-[#111111] bg-[#f7f7f6]">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center bg-[#5fb57a] text-[#111111] border border-[#111111] font-display text-[11px] font-black px-2 py-0.5 rounded-full">
            {indexTag}
          </span>
          <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#111111]">
            {category}
          </span>
        </div>
        <Sparkles className="w-3.5 h-3.5 text-[#111111] opacity-60 group-hover:rotate-45 transition-transform duration-300" />
      </div>

      {/* Thumbnail */}
      <div className="relative w-full h-48 overflow-hidden border-b-2 border-[#111111] bg-[#111111]">
        <img
          src={imgSrc}
          alt={title}
          onError={handleError}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-black text-[#111111] uppercase tracking-tight mb-2 group-hover:text-[#3b8751] transition-colors">
            {title}
          </h3>
          <p className="font-sans text-xs md:text-sm text-[#555555] leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
        </div>

        <div>
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-sans text-[10px] font-bold uppercase px-2.5 py-0.5 bg-[#ebebea] text-[#111111] border border-[#111111] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-between bg-[#5fb57a] text-[#111111] border-2 border-[#111111] rounded-full px-4 py-2.5 font-display text-xs font-black uppercase tracking-wider hover:bg-[#111111] hover:text-[#ebebea] transition-all duration-200 group/btn"
          >
            <span>Launch Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
