import React, { useRef } from "react";
import { Sparkles, Users, HeartHandshake, ArrowRight } from "lucide-react";
import { useCinematicReveal } from "../../hooks/useCinematicReveal";
import GrainyBackground from "../common/GrainyBackground";

export default function WomenEmpowerment() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const cards = [
    {
      icon: <Sparkles size={18} className="text-[#B67A2A]" />,
      title: "Our Programs",
      items: [
        "Skill development",
        "Entrepreneurship support",
        "Vocational training",
        "Digital literacy",
        "Financial awareness",
        "Leadership development"
      ],
    },
    {
      icon: <Users size={18} className="text-[#B67A2A]" />,
      title: "Our Goal",
      items: [
        "To empower women with education, skills, confidence, and financial independence."
      ],
    },
    {
      icon: <HeartHandshake size={18} className="text-[#B67A2A]" />,
      title: "How You Can Help",
      items: [
        "Become a volunteer",
        "Sponsor a project",
        "Partner through CSR",
        "Donate & spread awareness"
      ],
    },
  ];

  return (
    <section id="empowerment" className="w-screen py-28 px-[8vw] lg:py-36 flex items-center bg-transparent relative z-20 border-t border-[#D8C6A8] overflow-hidden">
      
      <GrainyBackground 
        id="grainy-paper-empowerment" 
        bgClass="bg-[#F2E8D6]" 
        opacityClass="opacity-[0.05]" 
        matrixValue="0.03" 
      />

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start w-full">
          
          {/* Left Column: Summary Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="cinematic-reveal">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-2">
                Empowerment & Unity
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-semibold tracking-tight leading-tight text-[#2E2E2E]">
                Empowering Women,<br />Strengthening Communities
              </h2>
            </div>
            
            <p className="cinematic-reveal text-sm font-sora font-semibold text-[#2E2E2E] leading-relaxed">
              Women play a vital role in social and economic development. Our programs focus on creating opportunities that promote independence, leadership, confidence, and financial security through education, vocational skills, and entrepreneurship.
            </p>

            <p className="cinematic-reveal text-[13px] text-[#4E4E4E] leading-relaxed font-inter font-normal">
              At Brij Bhoomi Foundation, we believe that empowering women transforms entire communities. Through education, vocational training, healthcare awareness, and self-help initiatives, we help women build confidence, become financially independent, and create a better future for their families.
            </p>

            <div className="cinematic-reveal pt-4">
              <a
                href="#donate-cta"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#2E2E2E]/30 text-[#2E2E2E] text-[10px] font-inter font-semibold uppercase tracking-widest hover:text-brij-accent hover:border-brij-accent transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] rounded-[2px]"
              >
                Learn More <ArrowRight size={12} />
              </a>
            </div>
          </div>
          
          {/* Right Column: 3 Pillars Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:mt-4">
            {cards.map((card, idx) => (
              <div key={idx} className="cinematic-reveal premium-card p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="p-3 bg-[#F2E8D6] border border-[#D8C6A8]/50 rounded-[10px] w-fit shadow-sm transition-transform duration-300 hover:scale-105">
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-sora font-semibold text-[#2E2E2E] tracking-wide">
                    {card.title}
                  </h3>
                  <ul className="space-y-2">
                    {card.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs text-[#3E3E3E] leading-relaxed flex items-start gap-2 font-inter font-normal">
                        <span className="w-1.5 h-1.5 bg-[#B67A2A] mt-1.5 flex-shrink-0 rounded-full animate-pulse" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}
