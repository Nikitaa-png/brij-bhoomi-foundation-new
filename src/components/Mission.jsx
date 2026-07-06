import React, { useRef } from "react";
import { Compass, Eye, ShieldCheck, Users } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function Mission() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  return (
    <section id="mission" className="w-screen px-[8vw] py-28 lg:py-36 flex items-center bg-[#F2E8D6] relative z-20 border-t border-[#D8C6A8] overflow-hidden">
      
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
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay animate-drift-texture" style={{ filter: "url(#grainy-paper-mission)" }} />
      </div>

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Editorial Heading */}
        <div className="cinematic-reveal border-b border-[#D8C6A8] pb-6 mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-2">
            Core Intent
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-semibold tracking-tight text-[#2E2E2E]">
            Mission & Vision
          </h2>
        </div>

        {/* Cards Row (with large whitespace, rounded 16px corners, and tactile shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* Mission Card (Slightly lighter than the #F2E8D6 background) */}
          <div 
            className="cinematic-reveal flex flex-col sm:flex-row gap-6 items-start bg-[#FCFAF5] p-8 md:p-10 border border-[#D8C6A8]/70 rounded-[16px] w-full transition-editorial hover:-translate-y-1 hover:shadow-lg"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.02)" }}
          >
            <div className="p-3.5 bg-[#F2E8D6] border border-[#D8C6A8]/60 text-[#B67A2A] rounded-full flex-shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
              <Compass size={20} />
            </div>
            <div>
              <h4 className="text-base font-sora font-semibold text-[#2E2E2E] mb-3">Our Mission</h4>
              <p className="text-xs md:text-[13px] text-[#4E4E4E] leading-relaxed font-inter font-normal">
                Our mission is to create sustainable social impact by implementing community-driven development programs, promoting education, improving healthcare accessibility, empowering women and youth, protecting the environment, and fostering partnerships that contribute to long-term national development.
              </p>
            </div>
          </div>
          
          {/* Vision Card (Slightly lighter than the #F2E8D6 background) */}
          <div 
            className="cinematic-reveal flex flex-col sm:flex-row gap-6 items-start bg-[#FCFAF5] p-8 md:p-10 border border-[#D8C6A8]/70 rounded-[16px] w-full transition-editorial hover:-translate-y-1 hover:shadow-lg"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.02)" }}
          >
            <div className="p-3.5 bg-[#F2E8D6] border border-[#D8C6A8]/60 text-[#B67A2A] rounded-full flex-shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
              <Eye size={20} />
            </div>
            <div>
              <h4 className="text-base font-sora font-semibold text-[#2E2E2E] mb-3">Our Vision</h4>
              <p className="text-xs md:text-[13px] text-[#4E4E4E] leading-relaxed font-inter font-normal">
                To build an inclusive, empowered, and sustainable society where every individual has access to education, healthcare, equal opportunities, and a better quality of life regardless of their background.
              </p>
            </div>
          </div>

          {/* Commitment Card */}
          <div 
            className="cinematic-reveal flex flex-col sm:flex-row gap-6 items-start bg-[#FCFAF5] p-8 md:p-10 border border-[#D8C6A8]/70 rounded-[16px] w-full transition-editorial hover:-translate-y-1 hover:shadow-lg"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.02)" }}
          >
            <div className="p-3.5 bg-[#F2E8D6] border border-[#D8C6A8]/60 text-[#B67A2A] rounded-full flex-shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-base font-sora font-semibold text-[#2E2E2E] mb-3">Our Commitment</h4>
              <p className="text-xs md:text-[13px] text-[#4E4E4E] leading-relaxed font-inter font-normal">
                Every donation, every volunteer, every partnership, and every project contributes to creating a stronger society. We remain committed to delivering measurable impact while ensuring transparency, accountability, and responsible utilization of every resource entrusted to us.
              </p>
            </div>
          </div>

          {/* Join Our Mission Card */}
          <div 
            className="cinematic-reveal flex flex-col sm:flex-row gap-6 items-start bg-[#FCFAF5] p-8 md:p-10 border border-[#D8C6A8]/70 rounded-[16px] w-full transition-editorial hover:-translate-y-1 hover:shadow-lg"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.02)" }}
          >
            <div className="p-3.5 bg-[#F2E8D6] border border-[#D8C6A8]/60 text-[#B67A2A] rounded-full flex-shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
              <Users size={20} />
            </div>
            <div>
              <h4 className="text-base font-sora font-semibold text-[#2E2E2E] mb-3">Join Our Mission</h4>
              <p className="text-xs md:text-[13px] text-[#4E4E4E] leading-relaxed font-inter font-normal">
                Whether you are an individual, volunteer, donor, corporate organization, educational institution, or government body, your contribution can help transform lives. Together, we can create opportunities, empower communities, and build a brighter future for generations to come.
              </p>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
