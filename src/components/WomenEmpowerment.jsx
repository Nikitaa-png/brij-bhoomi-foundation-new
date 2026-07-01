import React, { useRef } from "react";
import { Sparkles, Users, HeartHandshake, ArrowRight } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function WomenEmpowerment() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const cards = [
    {
      icon: <Sparkles size={18} className="text-[#B67A2A]" />,
      title: "Women Empowerment",
      items: ["Skill development", "Awareness programs", "Leadership & confidence"],
    },
    {
      icon: <Users size={18} className="text-[#B67A2A]" />,
      title: "Community Events",
      items: ["Cultural programs", "Health camps", "Educational workshops"],
    },
    {
      icon: <HeartHandshake size={18} className="text-[#B67A2A]" />,
      title: "How You Can Help",
      items: ["Become a volunteer", "Sponsor a workshop", "Donate & spread awareness"],
    },
  ];

  return (
    <section id="empowerment" className="w-screen py-20 px-[8vw] flex items-center bg-[#F2E8D6] relative z-20 border-t border-[#D8C6A8] overflow-hidden">
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-empowerment" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.03 0" />
          </filter>
        </defs>
      </svg>

      {/* Warm Background layer */}
      <div className="absolute inset-0 bg-[#F2E8D6] overflow-hidden z-0 pointer-events-none">
        {/* Soft Grainy Paper Noise Overlay (3% opacity) */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ filter: "url(#grainy-paper-empowerment)" }} />
      </div>

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start w-full">
          
          {/* Left Column: Summary Text (col-span-5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="cinematic-reveal">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#B67A2A] font-semibold block mb-2 font-sora">
                Empowerment & Unity
              </span>
              <h2 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight leading-tight text-[#2E2E2E]">
                Empowering Women,<br />Strengthening Communities
              </h2>
            </div>
            
            <p className="cinematic-reveal text-[13px] font-sora font-semibold text-[#2E2E2E] leading-relaxed">
              Creating opportunities through education, skill development, leadership, and financial independence.
            </p>

            <p className="cinematic-reveal text-xs text-[#2E2E2E] leading-relaxed font-inter font-light">
              At Brij Bhoomi Foundation, we believe that empowering women transforms entire communities. Through education, vocational training, healthcare awareness, and self-help initiatives, we help women build confidence, become financially independent, and create a better future for their families.
            </p>

            <div className="cinematic-reveal pt-2">
              <a
                href="#donate-cta"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-transparent border border-[#2E2E2E]/30 text-[#2E2E2E] text-[10px] font-semibold uppercase tracking-wider hover:text-brij-accent hover:border-brij-accent transition-editorial rounded-sm"
              >
                Learn More <ArrowRight size={11} />
              </a>
            </div>
          </div>
          
          {/* Right Column: 3 Pillars Cards (col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:mt-8">
            {cards.map((card, idx) => (
              <div key={idx} className="cinematic-reveal space-y-3.5 bg-[#FCFAF5] border border-[#D8C6A8] p-5 rounded-sm shadow-[0_4px_15px_rgba(0,0,0,0.01)]">
                <div className="p-2.5 bg-[#F2E8D6] border border-[#D8C6A8] rounded-sm w-fit">
                  {card.icon}
                </div>
                <h3 className="text-xs font-sora font-semibold text-[#2E2E2E] tracking-wide">
                  {card.title}
                </h3>
                <ul className="space-y-1.5">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-[10px] text-[#2E2E2E] leading-relaxed flex items-start gap-1 font-inter font-light">
                      <span className="w-1.5 h-1.5 bg-[#B67A2A] mt-1.5 flex-shrink-0 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}
