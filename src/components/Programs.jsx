import React, { useRef } from "react";
import { BookOpen, Heart, Users, Leaf, ArrowRight } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function Programs() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const items = [
    {
      title: "Education For All",
      desc: "Providing quality education and resources to underprivileged children in rural areas.",
      image: "/children_education.png",
      icon: <BookOpen size={18} className="text-brij-accent" />,
    },
    {
      title: "Healthcare Support",
      desc: "Improving access to healthcare through medical camps, health awareness and support.",
      image: "/healthcare.png",
      icon: <Heart size={18} className="text-brij-accent" />,
    },
    {
      title: "Women Empowerment",
      desc: "Empowering women with skills, knowledge and opportunities for a better tomorrow.",
      image: "/artisan_woman.png",
      icon: <Users size={18} className="text-brij-accent" />,
    },
    {
      title: "Community Development",
      desc: "Working with communities to create sustainable and long-lasting change.",
      image: "/eco_volunteers.png",
      icon: <Leaf size={18} className="text-brij-accent" />,
    },
  ];

  return (
    <section id="programs" className="w-screen py-24 px-[8vw] flex items-center bg-[#FAF7F0] relative z-20 border-t border-[#1f1a14]/5 overflow-hidden">
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-programs" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.04 0" />
          </filter>
        </defs>
      </svg>

      {/* Background layer */}
      <div className="absolute inset-0 bg-[#FAF7F0] overflow-hidden z-0 pointer-events-none">
        {/* Drifting Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.055] mix-blend-overlay animate-drift-texture" style={{ filter: "url(#grainy-paper-programs)" }} />
      </div>

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Split Header Container (Symmetrical split as in the reference image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[20px] overflow-hidden border border-[#D8C6A8] bg-[#F8F6F1] shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-12 min-h-[420px] relative z-10">
          
          {/* Left Column: Text Content (col-span-7) */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-5 bg-[#FAF8F5]">
            <div className="cinematic-reveal flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#B67A2A] font-semibold block font-sora">
                What We Do
              </span>
              <div className="w-8 h-[1px] bg-[#B67A2A]"></div>
            </div>
            
            <h2 className="cinematic-reveal text-3xl md:text-5xl font-sora font-semibold tracking-tight text-[#1F1F1F] leading-tight">
              Programs &<br />Initiatives
            </h2>
            
            <p className="cinematic-reveal text-xs text-[#555555] leading-relaxed max-w-md font-inter font-light">
              We work across communities to uplift lives through meaningful programs focused on education, healthcare, empowerment and sustainable development.
            </p>

            <div className="cinematic-reveal pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#8B6F47] text-white text-[10px] font-semibold uppercase tracking-wider hover:bg-[#1F1F1F] transition-editorial rounded-sm"
              >
                Explore Our Programs <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Right Column: Solid Child Portrait (col-span-5) */}
          <div className="lg:col-span-5 h-72 lg:h-full min-h-[300px] relative overflow-hidden">
            <img
              src="/smiling_child.png"
              alt="Smiling Child Portrait"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="cinematic-reveal relative bg-white border border-[#D8C6A8] rounded-[10px] overflow-hidden flex flex-col justify-between text-left h-full group hover:shadow-md transition-editorial"
            >
              {/* Card Image at Top */}
              <div className="h-40 w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlapping circle icon wrapper */}
              <div className="relative p-6 pt-8 flex-grow flex flex-col justify-between">
                <div className="absolute -top-5 left-5 p-2.5 bg-white border border-[#D8C6A8]/40 rounded-full shadow-sm flex items-center justify-center w-10 h-10 z-20">
                  {item.icon}
                </div>

                <div className="space-y-2 flex-grow">
                  <h3 className="text-xs font-sora font-semibold text-[#1F1F1F] group-hover:text-brij-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-[#555555] leading-relaxed font-inter font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D8C6A8]/30">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#8B6F47] hover:text-black transition-colors"
                  >
                    Learn More <ArrowRight size={10} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Bottom Action */}
        <div className="flex justify-center mt-12 cinematic-reveal">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-transparent border border-[#1f1a14]/25 text-[#1f1a14] text-[10px] font-semibold uppercase tracking-wider hover:bg-[#1f1a14] hover:text-white transition-editorial rounded-sm"
          >
            View All Initiatives <ArrowRight size={12} />
          </a>
        </div>
        
      </div>
    </section>
  );
}
