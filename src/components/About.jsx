import React, { useRef } from "react";
import { Compass, BookOpen, Users, Leaf, ArrowRight } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function About() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const pillars = [
    {
      icon: <Compass size={22} className="text-[#B67A2A]" />,
      title: "Cultural Preservation",
      desc: "Safeguarding Sanjhi art, traditional crafts, and spiritual heritage.",
    },
    {
      icon: <BookOpen size={22} className="text-[#B67A2A]" />,
      title: "Education & Empowerment",
      desc: "Providing knowledge, skills, and resources to empower every individual.",
    },
    {
      icon: <Users size={22} className="text-[#B67A2A]" />,
      title: "Community Development",
      desc: "Building stronger communities through education, awareness & support.",
    },
    {
      icon: <Leaf size={22} className="text-[#B67A2A]" />,
      title: "Environmental Care",
      desc: "Promoting eco-friendly practices and preserving our sacred environment.",
    },
  ];

  return (
    <section id="about" className="w-screen py-20 px-[8vw] flex items-center bg-[#FAF7F0] relative z-20 border-t border-[#1f1a14]/5 overflow-hidden">
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.04 0" />
          </filter>
        </defs>
      </svg>

      {/* Static Background layer */}
      <div className="absolute inset-0 bg-[#FAF7F0] overflow-hidden z-0 pointer-events-none">
        {/* Slow Drifting Grainy Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.055] mix-blend-overlay" style={{ filter: "url(#grainy-paper-noise)" }} />
      </div>

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start w-full">
          
          {/* Left Column: About Summary (col-span-5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="cinematic-reveal">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#B67A2A] font-semibold block mb-2 font-sora">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight leading-tight text-[#1f1a14]">
                About<br />Brij Bhoomi Foundation
              </h2>
            </div>
            
            <p className="cinematic-reveal text-xs text-[#3c372f] leading-relaxed font-inter font-light">
              We are a non-profit organization working at the intersection of culture, education, environment, and social welfare. Our efforts are rooted in the values of compassion, service, and community upliftment.
            </p>

            <div className="cinematic-reveal pt-2">
              <a
                href="#programs"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-transparent border border-[#1f1a14]/30 text-[#1f1a14] text-[10px] font-semibold uppercase tracking-wider hover:text-brij-accent hover:border-brij-accent transition-editorial rounded-sm"
              >
                Learn More About Us <ArrowRight size={11} />
              </a>
            </div>
          </div>
          
          {/* Right Column: 4 Pillars Row (col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full lg:mt-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="cinematic-reveal space-y-3.5">
                <div className="p-2.5 bg-[#FCFAF5] border border-[#1f1a14]/10 rounded-sm w-fit">
                  {pillar.icon}
                </div>
                <h3 className="text-xs font-sora font-semibold text-[#1f1a14] tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-[10px] text-[#5c5449] leading-relaxed font-inter font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}
