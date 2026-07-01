import React, { useRef } from "react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function VolunteerCTA() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  return (
    <section id="volunteer-cta" className="w-screen px-[8vw] py-24 flex items-center bg-[#F2E8D6] relative z-20 border-t border-[#D8C6A8] overflow-hidden">
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-volunteer" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.03 0" />
          </filter>
        </defs>
      </svg>

      {/* Warm Background layer */}
      <div className="absolute inset-0 bg-[#F2E8D6] overflow-hidden z-0 pointer-events-none">
        {/* Soft Grainy Paper Noise Overlay (3% opacity) */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ filter: "url(#grainy-paper-volunteer)" }} />
      </div>

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Tag */}
        <span className="cinematic-reveal text-[10px] uppercase tracking-[0.3em] text-[#B67A2A] font-semibold mb-4 block font-sora">
          Shape the Future
        </span>

        {/* Heading */}
        <h2 className="cinematic-reveal text-3xl md:text-5xl font-sora font-semibold tracking-tight leading-tight mb-4 text-[#2E2E2E]">
          Become a Catalyst for Ground Action
        </h2>

        {/* Description */}
        <p className="cinematic-reveal text-xs md:text-sm text-[#2E2E2E] max-w-xl leading-relaxed mb-8 font-inter font-light">
          The restoration of Brij starts with active hands. Join our passionate network of field volunteers cleaning ancient reservoirs, planting native woodlands, and teaching rural children.
        </p>

        {/* CTAs */}
        <div className="cinematic-reveal flex flex-col sm:flex-row gap-4 justify-start items-center w-full sm:w-auto">
          <button
            onClick={() => alert("Volunteer registration form opening soon.")}
            className="px-6 py-2.5 bg-[#8B6F47] text-white text-xs font-semibold uppercase tracking-wider border border-[#8B6F47] hover:bg-[#1F1F1F] hover:border-[#1F1F1F] hover:text-white transition-editorial rounded-sm w-full sm:w-auto"
          >
            Register as Volunteer
          </button>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-transparent border border-[#2E2E2E]/30 text-[#2E2E2E] text-xs font-semibold uppercase tracking-wider hover:text-[#B67A2A] hover:border-[#B67A2A] transition-editorial rounded-sm w-full sm:w-auto text-center"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}
