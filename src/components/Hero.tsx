import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const roles = ["Creative", "Fullstack", "Founder", "Scholar"];

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [showSpline, setShowSpline] = useState(false);
  const ROBOT_SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

  useEffect(() => {
    // Delay Spline loading to prioritize content rendering
    const splineTimer = setTimeout(() => setShowSpline(true), 1000);

    // GSAP Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.to(".name-reveal", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.1,
      stagger: 0.1
    })
    .to(".blur-in", {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1,
      stagger: 0.1
    }, "-=0.8");

    // Role Cycling
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(splineTimer);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-bg">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        {showSpline && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <SplineScene 
              scene={ROBOT_SCENE_URL}
              className="w-full h-full"
            />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl pointer-events-none">


        <h1 
          ref={nameRef}
          className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 opacity-0 translate-y-[50px] drop-shadow-2xl will-change-transform transform-gpu"
        >
          DEVENDRA KUMAR
        </h1>

        <div className="mb-8 h-8 flex items-center justify-center gap-2 text-lg md:text-xl font-light text-muted">
          <span>A</span>
          <div className="relative w-28 md:w-32 inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute left-0 right-0 font-display italic text-text-primary"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span>architecting for the next generation.</span>
        </div>

        <p className="blur-in text-sm md:text-base text-muted max-w-xl mx-auto mb-8 opacity-0 translate-y-5 drop-shadow-lg leading-relaxed">
          Full-Stack Developer with experience at Tata Steel Utilities. Architecting secure, cloud-ready systems and data-driven dashboards that deliver enterprise-grade insights.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
          <a 
            href="#work"
            className="group relative bg-text-primary text-bg rounded-full text-sm px-8 py-4 font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <span className="relative z-10">See Works</span>
            <div className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </a>
          
          <a 
            href="mailto:devenjsr@gmail.com"
            className="group relative border-2 border-stroke bg-bg/50 backdrop-blur-sm text-text-primary rounded-full text-sm px-8 py-4 font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <span className="relative z-10">Reach out...</span>
            <div className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none z-10">
        <span className="text-[10px] text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-12 bg-stroke/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
