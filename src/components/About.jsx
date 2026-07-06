import React, { useRef } from "react";
import { Compass, Shield, Leaf, Lightbulb, Users, Award, ArrowRight } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function About() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const pillars = [
    {
      icon: <Compass size={22} className="text-[#B67A2A]" />,
      title: "Compassion",
      desc: "Serving humanity with empathy, respect, and dignity.",
    },
    {
      icon: <Shield size={22} className="text-[#B67A2A]" />,
      title: "Integrity",
      desc: "Maintaining complete transparency, ethics, and accountability in every project.",
    },
    {
      icon: <Leaf size={22} className="text-[#B67A2A]" />,
      title: "Sustainability",
      desc: "Creating long-term solutions that generate lasting social impact.",
    },
    {
      icon: <Lightbulb size={22} className="text-[#B67A2A]" />,
      title: "Innovation",
      desc: "Using modern technology and innovative thinking to maximize development outcomes.",
    },
    {
      icon: <Users size={22} className="text-[#B67A2A]" />,
      title: "Collaboration",
      desc: "Working together with communities, volunteers, government bodies, educational institutions, and CSR partners.",
    },
    {
      icon: <Award size={22} className="text-[#B67A2A]" />,
      title: "Excellence",
      desc: "Continuously improving the quality, effectiveness, and impact of every initiative.",
    },
  ];

  return (
    <section id="about" className="w-screen py-28 px-[8vw] lg:py-36 flex items-center bg-[#FAF7F0] relative z-20 border-t border-[#1f1a14]/5 overflow-hidden">
      
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
        <div className="absolute inset-0 opacity-[0.055] mix-blend-overlay animate-drift-texture" style={{ filter: "url(#grainy-paper-noise)" }} />
      </div>
 
      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start w-full">
          
          {/* Left Column: About Summary (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="cinematic-reveal">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-2">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-semibold tracking-tight leading-tight text-[#1f1a14]">
                About<br />Brij Bhoomi Foundation
              </h2>
            </div>
            
            <p className="cinematic-reveal text-sm font-semibold text-[#1f1a14] leading-relaxed font-inter">
              Empowering Lives. Strengthening Communities. Creating a Sustainable Future.
            </p>
            <p className="cinematic-reveal text-[13px] text-[#3c372f] leading-relaxed font-inter font-normal">
              Brij Bhoomi Foundation is a non-profit organization dedicated to transforming lives through sustainable social development initiatives. We work with communities, volunteers, institutions, and corporate partners to create meaningful and long-lasting impact in education, healthcare, environmental conservation, women empowerment, rural development, youth development, and humanitarian support.
            </p>
            <p className="cinematic-reveal text-[13px] text-[#3c372f] leading-relaxed font-inter font-normal">
              Our belief is simple: every individual deserves equal opportunities, dignity, quality education, accessible healthcare, and a sustainable future. Through innovative programs, strategic partnerships, and community participation, we aim to build stronger, healthier, and self-reliant communities across India.
            </p>
 
            {/* Our Story Block */}
            <div className="cinematic-reveal pt-5 border-t border-[#1f1a14]/15 space-y-3.5">
              <h3 className="text-sm font-sora font-semibold text-[#1f1a14] uppercase tracking-wider">Our Story</h3>
              <p className="text-[13px] text-[#3c372f] leading-relaxed font-inter font-normal">
                Brij Bhoomi Foundation was established with the vision of creating positive social transformation through compassion, innovation, and collective action.
              </p>
              <p className="text-[13px] text-[#3c372f] leading-relaxed font-inter font-normal">
                We recognized that many communities continue to face challenges such as limited access to quality education, healthcare services, employment opportunities, environmental degradation, and social inequality. Instead of providing only temporary solutions, our approach focuses on building sustainable systems that empower people to become self-reliant.
              </p>
              <p className="text-[13px] text-[#3c372f] leading-relaxed font-inter font-normal">
                Every initiative undertaken by our foundation is designed to create measurable impact while promoting transparency, accountability, and community ownership.
              </p>
            </div>
 
            <div className="cinematic-reveal pt-4">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#1f1a14]/30 text-[#1f1a14] text-[10px] font-inter font-semibold uppercase tracking-widest hover:text-brij-accent hover:border-brij-accent transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] rounded-[2px]"
              >
                Learn More About Us <ArrowRight size={12} />
              </a>
            </div>
          </div>
          
          {/* Right Column: 6 Pillars Row (col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:mt-4">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="cinematic-reveal premium-card p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="p-3 bg-[#F2E8D6] border border-[#D8C6A8]/50 rounded-[10px] w-fit shadow-sm transition-transform duration-300 hover:scale-105">
                    {pillar.icon}
                  </div>
                  <h3 className="text-sm font-sora font-semibold text-[#1f1a14] tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#5c5449] leading-relaxed font-inter font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
 
        </div>
        
      </div>
    </section>
  );
}
