import React, { useRef } from "react";
import { Sparkles, Users, HeartHandshake } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function WomenEmpowerment() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const cards = [
    {
      icon: <Sparkles size={16} className="text-brij-accent" />,
      title: "Women Empowerment",
      items: ["Skill development", "Awareness programs", "Leadership & confidence"],
    },
    {
      icon: <Users size={16} className="text-brij-accent" />,
      title: "Community Events",
      items: ["Cultural programs", "Health camps", "Educational workshops"],
    },
    {
      icon: <HeartHandshake size={16} className="text-brij-accent" />,
      title: "How You Can Help",
      items: ["Become a volunteer", "Sponsor a workshop", "Donate & spread awareness"],
    },
  ];

  return (
    <section id="empowerment" className="w-screen px-[8vw] py-12 md:py-16 flex items-center bg-transparent relative z-20 border-t border-white/5">
      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left text-white">
        
        {/* Intro Block */}
        <div className="cinematic-reveal border-b border-white/10 pb-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brij-accent font-semibold block mb-1">
            Empowerment & Unity
          </span>
          <h2 className="text-2xl md:text-3xl font-sora font-semibold tracking-tight text-white">
            Empowering Women, Strengthening Communities
          </h2>
        </div>

        <p className="cinematic-reveal text-xs text-white/80 leading-relaxed mb-6 font-inter">
          We support women empowerment by creating awareness, encouraging participation, and organizing community events that help women gain confidence, knowledge, and opportunities. Through workshops, awareness drives, cultural programs, and local events, Brij Bhoomi Foundation works to build a stronger and more supportive community.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 w-full">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="cinematic-reveal bg-black/25 backdrop-blur-sm border border-white/20 p-5 rounded-sm flex flex-col justify-between text-white w-full"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-white/10 border border-white/10 rounded-sm flex-shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="text-xs font-sora font-semibold text-white">
                    {card.title}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-[11px] text-white/85 flex items-start gap-1">
                      <span className="w-1 h-1 bg-brij-accent mt-1.5 flex-shrink-0 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="cinematic-reveal text-left">
          <a
            href="#donate-cta"
            className="inline-block px-6 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-wider border border-white hover:bg-transparent hover:text-white transition-editorial rounded-sm text-center"
          >
            Support Women’s Empowerment
          </a>
        </div>
        
      </div>
    </section>
  );
}
