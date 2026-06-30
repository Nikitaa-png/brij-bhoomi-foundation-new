import React, { useRef } from "react";
import { UserPlus, Heart, Award, Share2, ShieldAlert } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function HowYouCanHelp() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const ways = [
    {
      icon: <UserPlus size={16} className="text-brij-accent" />,
      title: "Become a Volunteer",
      desc: "Join our ground teams in Mathura and Vrindavan to clean stepwells, plant groves, and teach youth.",
    },
    {
      icon: <Heart size={16} className="text-brij-accent" />,
      title: "Donate",
      desc: "Sponsor a child's school kit, fund an artisan's vocational setup, or plant native saplings.",
    },
    {
      icon: <Award size={16} className="text-brij-accent" />,
      title: "Sponsor an Event",
      desc: "Directly underwrite local health checkup camps, block-print workshops, or cultural performances.",
    },
    {
      icon: <Share2 size={16} className="text-brij-accent" />,
      title: "Spread Awareness",
      desc: "Share Brij Bhoomi's preservation campaigns online to advocate for ecological and artistic legacy.",
    },
    {
      icon: <ShieldAlert size={16} className="text-brij-accent" />,
      title: "Partner With Us",
      desc: "Align your institution, university, or corporate CSR program to drive scale and structural support.",
    },
  ];

  return (
    <section id="volunteer" className="w-screen px-[8vw] py-12 md:py-16 flex items-center bg-transparent relative z-20 border-t border-white/5">
      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left text-white">
        
        {/* Header Block */}
        <div className="cinematic-reveal border-b border-white/10 pb-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brij-accent font-semibold block mb-1">
            Get Involved
          </span>
          <h2 className="text-2xl md:text-3xl font-sora font-semibold tracking-tight text-white">
            How You Can Help
          </h2>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center">
          {ways.map((way, idx) => (
            <div
              key={idx}
              className={`cinematic-reveal bg-black/25 backdrop-blur-sm border border-white/20 p-5 rounded-sm flex flex-col justify-between text-white hover:border-brij-accent/40 transition-editorial w-full ${
                idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-white/10 border border-white/10 rounded-sm">
                    {way.icon}
                  </div>
                  <h3 className="text-xs font-sora font-semibold text-white">
                    {way.title}
                  </h3>
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed font-inter">
                  {way.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
