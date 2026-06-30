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
    <section id="gallery" className="w-screen px-[8vw] py-12 md:py-16 flex items-center bg-transparent relative z-20 border-t border-white/5">
      {/* Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left text-white">
        
        {/* Header Block */}
        <div className="cinematic-reveal border-b border-white/10 pb-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brij-accent font-semibold block mb-1">
            Visual Record
          </span>
          <h2 className="text-2xl md:text-3xl font-sora font-semibold tracking-tight text-white">
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
                <span className="text-[9px] tracking-widest uppercase font-semibold text-brij-accent mb-0.5">
                  {img.category}
                </span>
                <h4 className="text-sm font-sora font-semibold text-white">
                  {img.title}
                </h4>
              </div>

              {/* Tag indicator */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 py-0.5 px-2 rounded-sm group-hover:opacity-0 transition-editorial">
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
