import React from "react";

export default function GrainyBackground({ 
  id = "grainy-paper", 
  bgClass = "bg-[#FAF7F0]", 
  opacityClass = "opacity-[0.055]", 
  matrixValue = "0.04" 
}) {
  return (
    <>
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0" aria-hidden="true">
        <defs>
          <filter id={id} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values={`0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 ${matrixValue} 0`} />
          </filter>
        </defs>
      </svg>

      {/* Background layer */}
      <div className={`absolute inset-0 ${bgClass} overflow-hidden z-0 pointer-events-none`}>
        {/* Slow Drifting Grainy Noise Overlay */}
        <div 
          className={`absolute inset-0 ${opacityClass} mix-blend-overlay animate-drift-texture`} 
          style={{ filter: `url(#${id})` }} 
        />
      </div>
    </>
  );
}
