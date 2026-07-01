import React, { useRef } from "react";
import { Compass, Eye } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function Mission() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  return (
    <section id="mission" className="w-screen px-[8vw] py-24 flex items-center bg-[#F2E8D6] relative z-20 border-t border-[#D8C6A8] overflow-hidden">
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-mission" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.03 0" />
          </filter>
        </defs>
      </svg>

      {/* Warm Background layer */}
      <div className="absolute inset-0 bg-[#F2E8D6] overflow-hidden z-0 pointer-events-none">
        {/* Soft Grainy Paper Noise Overlay (3% opacity) */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ filter: "url(#grainy-paper-mission)" }} />
      </div>

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Editorial Heading */}
        <div className="cinematic-reveal border-b border-[#D8C6A8] pb-6 mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B67A2A] font-semibold block mb-1.5 font-sora">
            Core Intent
          </span>
          <h2 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight text-[#2E2E2E]">
            Mission & Vision
          </h2>
        </div>

        {/* Cards Row (with large whitespace, rounded 20px corners, and soft shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* Mission Card (Slightly lighter than the #F2E8D6 background) */}
          <div 
            className="cinematic-reveal flex flex-col sm:flex-row gap-6 items-start bg-[#FCFAF5] p-8 md:p-10 border border-[#D8C6A8] rounded-[20px] w-full transition-editorial hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
          >
            <div className="p-3.5 bg-[#F2E8D6] border border-[#D8C6A8] text-[#B67A2A] rounded-full flex-shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.015)]">
              <Compass size={20} />
            </div>
            <div>
              <h4 className="text-base font-sora font-semibold text-[#2E2E2E] mb-3">Our Mission</h4>
              <p className="text-xs text-[#2E2E2E] leading-relaxed font-inter font-light">
                To protect, preserve, and promote the unique cultural, artistic, and natural heritage of the Brij region, while simultaneously enabling sustainable socio-economic opportunities through community-led empowerment programs.
              </p>
            </div>
          </div>
          
          {/* Vision Card (Slightly lighter than the #F2E8D6 background) */}
          <div 
            className="cinematic-reveal flex flex-col sm:flex-row gap-6 items-start bg-[#FCFAF5] p-8 md:p-10 border border-[#D8C6A8] rounded-[20px] w-full transition-editorial hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
          >
            <div className="p-3.5 bg-[#F2E8D6] border border-[#D8C6A8] text-[#B67A2A] rounded-full flex-shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.015)]">
              <Eye size={20} />
            </div>
            <div>
              <h4 className="text-base font-sora font-semibold text-[#2E2E2E] mb-3">Our Vision</h4>
              <p className="text-xs text-[#2E2E2E] leading-relaxed font-inter font-light">
                To nurture a vibrant, self-reliant Brij region where traditional culture, nature, and community thrive together in harmony, fostering local pride and providing sustainable pathways of growth.
              </p>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
