import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(0, 85, 254, 0.12)',
  borderColor = 'rgba(0, 85, 254, 0.3)',
  glowEdge = false,
  edgeColor = 'blue', // 'blue' | 'lime' | 'cyan'
  onClick,
  ...props
}) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const edgeGradients = {
    blue: 'from-blue-500/80 via-indigo-500/40 to-transparent',
    lime: 'from-[#D4F038]/80 via-emerald-500/40 to-transparent',
    cyan: 'from-cyan-500/80 via-blue-500/40 to-transparent'
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative rounded-3xl overflow-hidden hud-bento-card group transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Top Subtle Edge Glow Line */}
      {glowEdge && (
        <div 
          className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r ${edgeGradients[edgeColor] || edgeGradients.blue} pointer-events-none z-20`} 
        />
      )}

      {/* Dynamic Mouse Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      {/* Dynamic Border Illumination */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-0"
        style={{
          opacity,
          border: `1px solid ${borderColor}`,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
