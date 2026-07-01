import React, { useRef } from "react";
import { UserPlus, Heart, Award, Share2, ShieldAlert } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function HowYouCanHelp() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const ways = [
    {
      icon: <UserPlus size={16} className="text-[#B67A2A]" />,
      title: "Become a Volunteer",
      desc: "Join our ground teams in Mathura and Vrindavan to clean stepwells, plant groves, and teach youth.",
      image: "/eco_volunteers.png",
    },
    {
      icon: <Heart size={16} className="text-[#B67A2A]" />,
      title: "Donate",
      desc: "Sponsor a child's school kit, fund an artisan's vocational setup, or plant native saplings.",
      image: "/children_education.png",
    },
    {
      icon: <Award size={16} className="text-[#B67A2A]" />,
      title: "Sponsor an Event",
      desc: "Directly underwrite local health checkup camps, block-print workshops, or cultural performances.",
      image: "/cultural_performance.png",
    },
    {
      icon: <Share2 size={16} className="text-[#B67A2A]" />,
      title: "Spread Awareness",
      desc: "Share Brij Bhoomi's preservation campaigns online to advocate for ecological and artistic legacy.",
      image: "/phone_awareness.png",
    },
    {
      icon: <ShieldAlert size={16} className="text-[#B67A2A]" />,
      title: "Partner With Us",
      desc: "Align your institution, university, or corporate CSR program to drive scale and structural support.",
      image: "/handshake_partner.png",
    },
  ];

  return (
    <section id="volunteer" className="w-screen py-24 px-[8vw] flex items-center bg-[#FAF7F0] relative z-20 border-t border-[#D8C6A8] overflow-hidden">
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-help" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.04 0" />
          </filter>
        </defs>
      </svg>

      {/* Background layer */}
      <div className="absolute inset-0 bg-[#FAF7F0] overflow-hidden z-0 pointer-events-none">
        {/* Drifting Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.055] mix-blend-overlay" style={{ filter: "url(#grainy-paper-help)" }} />
      </div>

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Editorial Heading */}
        <div className="cinematic-reveal border-b border-[#D8C6A8] pb-6 mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B67A2A] font-semibold block mb-1.5 font-sora">
            Get Involved
          </span>
          <h2 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight text-[#1F1F1F] mb-4">
            How You Can Help
          </h2>
          <p className="text-xs text-[#555555] leading-relaxed max-w-xl font-inter font-light">
            Every action, no matter how small, contributes to preserving our heritage and empowering communities. Here are meaningful ways you can support our mission.
          </p>
        </div>

        {/* 5 Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center relative z-10">
          {ways.map((way, idx) => (
            <div
              key={idx}
              className="cinematic-reveal grid grid-cols-1 sm:grid-cols-12 rounded-[12px] overflow-hidden border border-[#D8C6A8] bg-[#FCFAF5] shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-md transition-editorial w-full min-h-[180px]"
            >
              {/* Left Side: Content Block (col-span-7) */}
              <div className="sm:col-span-7 p-6 flex flex-col justify-center space-y-2.5 bg-[#FCFAF5]">
                <div className="w-9 h-9 rounded-full border border-[#D8C6A8] bg-[#FAF7F0] flex items-center justify-center text-[#B67A2A] mb-1">
                  {way.icon}
                </div>
                <h3 className="text-xs font-sora font-semibold text-[#1F1F1F]">
                  {way.title}
                </h3>
                <div className="w-6 h-[1px] bg-[#B67A2A]"></div>
                <p className="text-[10px] text-[#555555] leading-relaxed font-inter font-light">
                  {way.desc}
                </p>
              </div>

              {/* Right Side: Solid Photo (col-span-5) */}
              <div className="sm:col-span-5 h-44 sm:h-full relative overflow-hidden">
                <img
                  src={way.image}
                  alt={way.title}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
