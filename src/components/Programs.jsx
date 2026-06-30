import React, { useRef } from "react";
import { BookOpen, Activity, Sparkles, Users, Leaf } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function Programs() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const initiatives = [
    {
      icon: <BookOpen size={16} className="text-brij-accent" />,
      title: "Education Support",
      desc: "Providing textbooks, computers, digital training, and aid to rural schools.",
    },
    {
      icon: <Activity size={16} className="text-brij-accent" />,
      title: "Healthcare Awareness",
      desc: "Organizing free health checkups, sanitation workshops, and distributing care kits.",
    },
    {
      icon: <Sparkles size={16} className="text-brij-accent" />,
      title: "Women Empowerment",
      desc: "Providing vocational training, sewing craft tools, and confidence circles.",
    },
    {
      icon: <Users size={16} className="text-brij-accent" />,
      title: "Cultural Heritage",
      desc: "Reviving rare Sanjhi stencil art, folk performances, and woodcarving stipends.",
    },
    {
      icon: <Users size={16} className="text-brij-accent" />,
      title: "Community Events",
      desc: "Hosting festivals, parenting seminars, and youth alignment campaigns.",
    },
    {
      icon: <Leaf size={16} className="text-brij-accent" />,
      title: "Environmental Awareness",
      desc: "Cleaning ancient stepwells (Kunds) and planting native trees in holy groves.",
    },
  ];

  return (
    <section id="programs" className="w-screen px-[8vw] py-12 md:py-16 flex items-center bg-transparent relative z-20 border-t border-white/5">
      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left text-white">
        
        {/* Header Block */}
        <div className="cinematic-reveal border-b border-white/10 pb-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brij-accent font-semibold block mb-1">
            Core Scope
          </span>
          <h2 className="text-2xl md:text-3xl font-sora font-semibold tracking-tight text-white">
            Programs & Initiatives
          </h2>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="cinematic-reveal bg-black/25 backdrop-blur-sm border border-white/20 p-5 rounded-sm flex flex-col justify-between hover:border-brij-accent/50 transition-editorial text-white w-full"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="p-2 bg-white/10 border border-white/10 rounded-sm">
                    {item.icon}
                  </div>
                  <span className="text-[10px] tracking-widest font-semibold uppercase text-white/40">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xs font-sora font-semibold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[11px] text-white/70 leading-relaxed font-inter">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
