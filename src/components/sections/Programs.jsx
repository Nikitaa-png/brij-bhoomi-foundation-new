import React, { useRef } from "react";
import { BookOpen, Heart, Users, Leaf, Home, Award, ShieldAlert, Landmark, Handshake } from "lucide-react";
import { useCinematicReveal } from "../../hooks/useCinematicReveal";
import GrainyBackground from "../common/GrainyBackground";
import { programsDetailList } from "../../data/programs";

const getIcon = (name) => {
  switch (name) {
    case "BookOpen":    return <BookOpen size={18} className="text-brij-accent" />;
    case "Heart":       return <Heart size={18} className="text-brij-accent" />;
    case "Users":       return <Users size={18} className="text-brij-accent" />;
    case "Leaf":        return <Leaf size={18} className="text-brij-accent" />;
    case "Home":        return <Home size={18} className="text-brij-accent" />;
    case "Award":       return <Award size={18} className="text-brij-accent" />;
    case "ShieldAlert": return <ShieldAlert size={18} className="text-brij-accent" />;
    case "Landmark":    return <Landmark size={18} className="text-brij-accent" />;
    case "Handshake":   return <Handshake size={18} className="text-brij-accent" />;
    default:            return <Award size={18} className="text-brij-accent" />;
  }
};

export default function Programs() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  return (
    <section id="programs" className="w-screen py-28 px-[8vw] lg:py-36 flex items-center bg-transparent relative z-20 border-t border-[#1f1a14]/5 overflow-hidden">
      
      <GrainyBackground 
        id="grainy-paper-programs" 
        bgClass="bg-[#FAF7F0]" 
        opacityClass="opacity-[0.055]" 
        matrixValue="0.04" 
      />

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Header Block */}
        <div className="cinematic-reveal space-y-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block">
            Our Initiatives
          </span>
          <h2 className="text-3xl md:text-5xl font-sora font-semibold tracking-tight leading-tight text-[#1F1F1F]">
            Welfare Initiatives & Strategic Focus Areas
          </h2>
          <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal max-w-3xl">
            Brij Bhoomi Foundation conducts target-oriented initiatives in coordination with local volunteers, corporate alignments, and administrative bodies. Each section below highlights a core focus area.
          </p>
        </div>

        {/* Programs Listing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
          {programsDetailList.map((card, idx) => (
            <div 
              key={idx} 
              className="cinematic-reveal premium-card overflow-hidden hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="h-[240px] overflow-hidden relative border-b border-[#D8C6A8]/30">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 border border-[#D8C6A8]/50 rounded-full flex items-center gap-2 shadow-sm">
                    {getIcon(card.iconName)}
                    <span className="text-[10px] font-sora font-semibold text-[#8B6F47] uppercase tracking-wider">{card.title.split(" ")[0]}</span>
                  </div>
                </div>
                
                <div className="p-8 space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-sora font-semibold text-[#2E2E2E] leading-snug">{card.title}</h3>
                    <p className="text-xs text-[#B67A2A] font-inter font-semibold uppercase tracking-wider">{card.subtitle}</p>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">{card.desc}</p>
                  
                  {/* Scope points */}
                  <div className="pt-2 border-t border-[#D8C6A8]/20 space-y-2">
                    <span className="text-[9px] uppercase tracking-wider text-[#B67A2A] font-sora font-bold">Key Project Scope:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                      {card.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-[11px] text-[#555555] flex items-center gap-2 font-inter font-normal">
                          <span className="w-1.5 h-1.5 bg-[#B67A2A] rounded-full flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="p-8 pt-3 border-t border-[#D8C6A8]/20 bg-[#FAF7F0]/30 space-y-4">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#2E2E2E] font-sora font-bold">Initiative Goal:</span>
                  <p className="text-xs text-[#555555] italic leading-relaxed font-inter font-normal">{card.goal}</p>
                </div>
                <a
                  href={card.ctaHref}
                  className="w-full block text-center py-3 bg-[#FAF7F0] border border-[#D8C6A8] hover:border-[#8B6F47] text-[#8B6F47] text-[11px] font-inter font-bold uppercase tracking-widest rounded-[3px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {card.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
