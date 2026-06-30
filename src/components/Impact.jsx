import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
  const containerRef = useRef(null);

  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "People Reached",
      desc: "Direct beneficiaries of local workshops, healthcare camps, and artisan grans.",
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
    <section id="impact" className="w-screen px-[8vw] py-12 md:py-16 flex items-center bg-transparent relative z-20 border-t border-white/5">
      {/* Content Wrapper (no container bg) */}
      <div ref={containerRef} className="w-full max-w-none text-left text-white">
        
        {/* Header Block */}
        <div className="cinematic-reveal border-b border-white/10 pb-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brij-accent font-semibold block mb-1">
            Our Footprint
          </span>
          <h2 className="text-2xl md:text-3xl font-sora font-semibold tracking-tight text-white">
            Real Measures of Local Impact
          </h2>
        </div>

        <p className="cinematic-reveal text-xs text-white/80 leading-relaxed mb-6 font-inter">
          We prioritize deep sustainable results over superficial metrics. Our milestones represent the hands-on progress made by our community and volunteers.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="cinematic-reveal bg-black/25 backdrop-blur-sm border border-white/20 p-4 rounded-sm flex flex-col justify-between text-white hover:border-brij-accent/40 transition-editorial w-full"
            >
              <div>
                <div className="flex items-baseline mb-2 text-white">
                  <span
                    className="stat-counter text-2xl font-sora font-semibold tracking-tight text-white"
                    data-target={stat.value}
                  >
                    0
                  </span>
                  <span className="text-lg font-sora font-semibold text-brij-accent">
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="text-xs font-sora font-semibold text-white mb-1">
                  {stat.label}
                </h3>
              </div>
              <p className="text-[10px] text-white/70 leading-relaxed pt-2.5 border-t border-white/10">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
