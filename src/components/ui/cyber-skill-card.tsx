import React from 'react';
import styled from 'styled-components';

interface Tech {
  name: string;
  url: string;
  color: string;
}

interface CyberSkillCardProps {
  title: string;
  techStack: Tech[];
}

const CyberSkillCard: React.FC<CyberSkillCardProps> = ({ title, techStack }) => {
  return (
    <StyledWrapper>
      <div className="outer">
        <div className="dot" />
        <div className="card">
          <div className="ray" />

          <div className="content-area">
            <div className="full-title">{title}</div>

            <div className="tech-list">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="dot-indicator" style={{ backgroundColor: tech.color }} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="line topl" />
          <div className="line leftl" />
          <div className="line bottoml" />
          <div className="line rightl" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .outer {
    width: 320px;
    height: 340px;
    border-radius: 20px;
    padding: 1px;
    background: radial-gradient(circle 230px at 0% 0%, #ffffff33, #0c0d0d);
    position: relative;
    transition: all 0.3s ease;
    scale: 0.9;
  }

  @media (min-width: 640px) {
    .outer {
      scale: 1;
    }
  }

  .outer:hover {
    transform: translateY(-5px);
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%, 100% { top: 10%; right: 10%; }
    25% { top: 10%; right: calc(100% - 35px); }
    50% { top: calc(100% - 30px); right: calc(100% - 35px); }
    75% { top: calc(100% - 30px); right: 10%; }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 19px;
    border: solid 1px #202222;
    background: radial-gradient(circle 280px at 0% 0%, #151515, #0c0d0d);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .ray {
    width: 250px;
    height: 120px;
    border-radius: 100px;
    position: absolute;
    background-color: #ffffff;
    opacity: 0.05;
    box-shadow: 0 0 100px #fff;
    filter: blur(40px);
    transform-origin: 10%;
    top: -20%;
    left: -20%;
    transform: rotate(40deg);
    pointer-events: none;
  }

  .content-area {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 12% 12%; /* Keep content inside the decorative lines */
  }

  .card .text {
    font-weight: 900;
    font-size: 3.5rem;
    background: linear-gradient(180deg, #ffffff 0%, #333333 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    opacity: 0.15;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    letter-spacing: -2px;
  }

  .full-title {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 1.2rem;
    text-align: center;
    z-index: 3;
    background: linear-gradient(180deg, #ffffff 0%, #aaaaaa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    padding: 0 10px;
    z-index: 3;
    max-height: 120px;
    overflow-y: auto;
    scrollbar-width: none; /* Hide scrollbar for cleaner look */
  }

  .tech-list::-webkit-scrollbar {
    display: none;
  }

  .tech-item {
    display: flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 4px 10px;
    border-radius: 6px;
    color: #aaa;
    font-size: 0.75rem;
    font-weight: 600;
    transition: all 0.2s ease;
  }

  .tech-item:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.2);
  }

  .dot-indicator {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.03);
  }

  .topl {
    top: 10%;
    background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 70%);
  }
  .bottoml { bottom: 10%; }
  .leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 70%);
  }
  .rightl { right: 10%; width: 1px; height: 100%; }
`;

export default CyberSkillCard;
