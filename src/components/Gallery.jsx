import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const images = [
    {
      src: "/community_workshop.png",
      title: "Women's Skill Development",
      category: "Women Empowerment",
      gridClass: "md:col-span-7 h-[280px]",
    },
    {
      src: "/brij_kund.png",
      title: "Kund Restoration Project",
      category: "Ecological Restoration",
      gridClass: "md:col-span-5 h-[220px] md:mt-12",
    },
    {
      src: "/children_education.png",
      title: "Rural Education Initiative",
      category: "Youth Empowerment",
      gridClass: "md:col-span-5 h-[220px] md:-mt-8",
    },
    {
      src: "/eco_volunteers.png",
      title: "Community Afforestation Drive",
      category: "Ecological Restoration",
      gridClass: "md:col-span-7 h-[280px]",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = document.querySelectorAll(".gsap-gallery-item");
      items.forEach((item) => {
        const img = item.querySelector("img");
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            end: "bottom 40%",
            scrub: 1,
          },
        });

        tl.fromTo(
          img,
          { scale: 1.12 },
          { scale: 1, ease: "power1.out" }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" className="w-screen px-[8vw] py-24 flex items-center bg-[#FAF7F0] relative z-20 border-t border-[#1f1a14]/5 overflow-hidden">
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-gallery" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.04 0" />
          </filter>
        </defs>
      </svg>

      {/* Static Background layer */}
      <div className="absolute inset-0 bg-[#FAF7F0] overflow-hidden z-0 pointer-events-none">
        {/* Slow Drifting Grainy Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.055] mix-blend-overlay" style={{ filter: "url(#grainy-paper-gallery)" }} />
      </div>

      {/* Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Header Block */}
        <div className="cinematic-reveal border-b border-[#1f1a14]/10 pb-6 mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B67A2A] font-semibold block mb-1.5 font-sora">
            Visual Record
          </span>
          <h2 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight text-[#1f1a14]">
            Glimpses of Our Ground Action
          </h2>
        </div>

        {/* Asymmetrical Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start w-full">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`cinematic-reveal gsap-gallery-item relative overflow-hidden bg-white/5 border border-white/10 rounded-sm ${img.gridClass} w-full group`}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-editorial duration-700 pointer-events-none opacity-80 group-hover:opacity-100"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-editorial flex flex-col justify-end p-4">
                <span className="text-[9px] tracking-widest uppercase font-semibold text-[#B67A2A] mb-0.5">
                  {img.category}
                </span>
                <h4 className="text-sm font-sora font-semibold text-white">
                  {img.title}
                </h4>
              </div>

              {/* Tag indicator */}
              <div className="absolute top-3 left-3 bg-black/80 border border-white/10 py-0.5 px-2 rounded-sm group-hover:opacity-0 transition-editorial">
                <span className="text-[8px] uppercase tracking-wider text-white font-medium">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
