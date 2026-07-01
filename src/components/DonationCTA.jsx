import React, { useRef } from "react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function DonationCTA() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  return (
    <section id="donate-cta" className="w-screen px-[8vw] py-24 flex items-center bg-[#FAF7F0] relative z-20 border-t border-[#1f1a14]/10 overflow-hidden">
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-donation" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.04 0" />
          </filter>
        </defs>
      </svg>

      {/* Static Background layer */}
      <div className="absolute inset-0 bg-[#FAF7F0] overflow-hidden z-0 pointer-events-none">
        {/* Slow Drifting Grainy Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.055] mix-blend-overlay" style={{ filter: "url(#grainy-paper-donation)" }} />
      </div>

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Tag */}
        <span className="cinematic-reveal text-[10px] uppercase tracking-[0.3em] text-[#B67A2A] font-semibold mb-4 block font-sora">
          Make a Difference
        </span>

        {/* Heading */}
        <h2 className="cinematic-reveal text-3xl md:text-5xl font-sora font-semibold tracking-tight leading-tight mb-4 text-[#1f1a14]">
          Your Support Can Change Lives
        </h2>

        {/* Description */}
        <p className="cinematic-reveal text-xs md:text-sm text-[#3c372f] max-w-xl leading-relaxed mb-8 font-inter font-light">
          100% of your contributions fund direct field operations. Help us restore sacred water reservoirs (Kunds), print vocational guides for women, and supply books to village children.
        </p>

        {/* CTAs */}
        <div className="cinematic-reveal flex flex-col sm:flex-row gap-4 justify-start items-center w-full sm:w-auto">
          <button
            onClick={() => alert("Donation gateway integration coming soon.")}
            className="px-6 py-2.5 bg-[#8B6F47] text-white text-xs font-semibold uppercase tracking-wider border border-[#8B6F47] hover:bg-[#1F1F1F] hover:border-[#1F1F1F] hover:text-white transition-editorial rounded-sm w-full sm:w-auto"
          >
            Donate Now
          </button>
          <button
            onClick={() => alert("Event sponsorship options opening shortly.")}
            className="px-6 py-2.5 bg-transparent border border-[#1f1a14]/30 text-[#1f1a14] text-xs font-semibold uppercase tracking-wider hover:text-[#B67A2A] hover:border-[#B67A2A] transition-editorial rounded-sm w-full sm:w-auto text-center"
          >
            Sponsor an Event
          </button>
        </div>

      </div>
    </section>
  );
}
