import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCinematicReveal } from "../../hooks/useCinematicReveal";
import GrainyBackground from "../common/GrainyBackground";
import { tabs, images } from "../../data/gallery";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

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
  }, [activeFilter]);

  const filteredImages = activeFilter === "ALL"
    ? images
    : images.filter(img => img.category === activeFilter);

  const isFiltered = activeFilter !== "ALL";

  return (
    <section id="gallery" className="w-screen px-[8vw] py-28 lg:py-36 flex items-center bg-transparent relative z-20 border-t border-[#1f1a14]/5 overflow-hidden">
      
      <GrainyBackground 
        id="grainy-paper-gallery" 
        bgClass="bg-[#FAF7F0]" 
        opacityClass="opacity-[0.055]" 
        matrixValue="0.04" 
      />

      {/* Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Header Block */}
        <div className="cinematic-reveal mb-12 max-w-xl space-y-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#B67A2A]"></span> GALLERY
          </span>
          <h2 className="text-4xl md:text-5xl font-sora font-semibold tracking-tight text-[#1f1a14] leading-tight mb-4">
            Visual Record<br />
            Glimpses of Our<br />
            Ground Action
          </h2>
          <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
            Every picture tells a story of hope, compassion, and change.
            These moments reflect our journey of empowering communities
            and creating a better tomorrow.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="cinematic-reveal flex flex-wrap gap-x-6 gap-y-3 mb-10 border-b border-[#1f1a14]/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`text-[10px] uppercase tracking-widest font-sora font-semibold transition-all duration-300 pb-2.5 relative cursor-pointer ${
                activeFilter === tab
                  ? "text-[#B67A2A] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#B67A2A]"
                  : "text-[#555555]/60 hover:text-[#1f1a14]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Container */}
        <div className={isFiltered
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          : "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full"
        }>
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className={`cinematic-reveal gsap-gallery-item relative overflow-hidden bg-black/5 border border-[#1f1a14]/10 rounded-[16px] shadow-sm ${
                isFiltered ? "h-[280px] w-full" : img.gridClass
              } w-full group hover:shadow-md transition-all duration-500`}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out pointer-events-none opacity-90 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5 rounded-[16px]">
                <span className="text-[9px] tracking-widest uppercase font-semibold text-[#B67A2A] mb-0.5">
                  {img.category}
                </span>
                <h4 className="text-xs md:text-sm font-sora font-semibold text-white">
                  {img.title}
                </h4>
              </div>

              {/* Tag indicator */}
              <div className="absolute top-4.5 left-4.5 bg-black/75 border border-white/10 py-1 px-2.5 rounded-full group-hover:opacity-0 transition-all duration-300">
                <span className="text-[8px] uppercase tracking-wider text-white font-semibold">
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
