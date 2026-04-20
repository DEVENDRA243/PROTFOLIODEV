import React from 'react';
import type { CSSProperties, ReactNode } from 'react';

function hexToRgba(hex: string, alpha: number = 1): string {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace('#', '');
  if (h.length === 3) {
    h = h
      .split('')
      .map(c => c + c)
      .join('');
  }
  const int = parseInt(h, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

interface ElectricBorderProps {
  children?: ReactNode;
  color?: string;
  borderRadius?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Simplified version that removes the animated electric lines 
 * but keeps the premium glow effect behind the container.
 */
const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = '#7df9ff',
  borderRadius = 24,
  className,
  style
}) => {
  return (
    <div
      className={`relative overflow-visible isolate ${className ?? ''}`}
      style={{ '--electric-border-color': color, borderRadius, ...style } as CSSProperties}
    >
      {/* Background Glow Layers */}
      <div className="absolute inset-0 rounded-[inherit] pointer-events-none z-0">
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{ border: `2px solid ${hexToRgba(color, 0.4)}`, filter: 'blur(1px)' }}
        />
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{ border: `2px solid ${color}`, filter: 'blur(4px)', opacity: 0.5 }}
        />
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none -z-[1] scale-110 opacity-20"
          style={{
            filter: 'blur(32px)',
            background: `linear-gradient(-30deg, ${color}, transparent, ${color})`
          }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative rounded-[inherit] z-[1] h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;
