import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "People Reached",
      desc: "Direct beneficiaries of local workshops, healthcare camps, and artisan grants.",
    },
    {
      value: 20,
      suffix: "+",
      label: "Events Organized",
      desc: "Community cleanups, cultural programs, and educational drives completed.",
    },
    {
      value: 50,
      suffix: "+",
      label: "Volunteers",
      desc: "Dedicated local and global individuals leading our ecological preservation work.",
    },
    {
      value: 10,
      suffix: "+",
      label: "Awareness Drives",
      desc: "Workshops emphasizing female empowerment and cultural heritage revival.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = document.querySelectorAll(".stat-counter");
      counters.forEach((counter) => {
        const targetVal = parseInt(counter.getAttribute("data-target"), 10);
        gsap.fromTo(
          counter,
          { textContent: 0 },
          {
            textContent: targetVal,
            duration: 1.8,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="impact" className="w-screen px-[8vw] py-24 flex items-center bg-[#F2E8D6] relative z-20 border-t border-[#D8C6A8] overflow-hidden">
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-impact" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.03 0" />
          </filter>
        </defs>
      </svg>

      {/* Warm Background layer */}
      <div className="absolute inset-0 bg-[#F2E8D6] overflow-hidden z-0 pointer-events-none">
        {/* Soft Grainy Paper Noise Overlay (3% opacity) */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ filter: "url(#grainy-paper-impact)" }} />
      </div>

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Header Block */}
        <div className="cinematic-reveal border-b border-[#D8C6A8] pb-6 mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B67A2A] font-semibold block mb-1.5 font-sora">
            Our Footprint
          </span>
          <h2 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight text-[#2E2E2E]">
            Real Measures of Local Impact
          </h2>
        </div>

        <p className="cinematic-reveal text-xs text-[#2E2E2E] leading-relaxed mb-6 font-inter font-light">
          We prioritize deep sustainable results over superficial metrics. Our milestones represent the hands-on progress made by our community and volunteers.
        </p>

        {/* Stats Grid (Rounded 20px corners, alt backgrounds, and soft shadows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="cinematic-reveal bg-[#FCFAF5] border border-[#D8C6A8] p-6 rounded-[20px] flex flex-col justify-between text-[#2E2E2E] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-editorial w-full"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
            >
              <div>
                <div className="flex items-baseline mb-2 text-[#2E2E2E]">
                  <span
                    className="stat-counter text-2xl font-sora font-semibold tracking-tight text-[#2E2E2E]"
                    data-target={stat.value}
                  >
                    0
                  </span>
                  <span className="text-lg font-sora font-semibold text-[#B67A2A]">
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="text-xs font-sora font-semibold text-[#2E2E2E] mb-1">
                  {stat.label}
                </h3>
              </div>
              <p className="text-[10px] text-[#555555] leading-relaxed pt-2.5 border-t border-[#D8C6A8]/45 font-inter font-light">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
