import React from 'react';
import MascotPortfolioHero from './ui/mascot-portfolio-hero';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full bg-[#ebebea] text-[#111111] overflow-hidden pt-16 md:pt-20">
      <MascotPortfolioHero
        height="calc(100svh - 4.5rem)"
        minHeight="560px"
        index="01/26"
        discipline="Full-Stack Dev"
        tagline="Systems & Code"
        reel={["Tata Steel Alum", "Building @ 2026"]}
        year="2026"
        initials="DK"
        badge="Hire me"
        line2="PORTFOLIO"
        line3="DEVENDRA"
        word="DEV"
        verticalTag="SYSTEMS"
        bracketed="K"
        seekingLabel="Status*"
        seeking="Open to Roles"
        href="mailto:devenjsr@gmail.com"
        services={[
          "Full-Stack Engineering",
          "Cloud & Distributed Systems",
          "Data & ML Pipelines",
          "Interactive Web Architecture",
        ]}
        greetings={[
          "Hi! I'm Devendra.",
          "Full-stack engineer & Tata Steel alum.",
          "Let's architect something bold!",
          "Open to high-impact software roles.",
          "Okay, you can stop poking me :)",
        ]}
        skin="#f7cfb0"
        beanie="#1d1d1f"
        shirt="#18181a"
        tag="#b98158"
        accent="#5fb57a"
        paper="#ebebea"
        ink="#111111"
      />
    </section>
  );
};

export default Hero;
