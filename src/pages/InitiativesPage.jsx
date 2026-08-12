import React from "react";
import Initiatives from "../components/sections/Initiatives";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://www.brijbhoomifoundation.org/initiatives",
  "name": "Our Initiatives | Brij Bhoomi Foundation",
  "description": "Discover Brij Bhoomi Foundation's key initiatives: Swachatha Abhiyaan, Naari Shakti Ko Pranaam, Shri Rudra Gurukul, Shri Rudra Gaushala, Shri Rudra Ashray Sewa Sadan, and Covid Helpline-19.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "Our Initiatives", "item": "https://www.brijbhoomifoundation.org/initiatives" }
    ]
  }
};

export default function InitiativesPage() {
  return (
    <>
      <PageMeta
        title="Our Initiatives"
        description="Discover Brij Bhoomi Foundation's key initiatives: Swachatha Abhiyaan, Naari Shakti Ko Pranaam, Shri Rudra Gurukul, Shri Rudra Gaushala, Shri Rudra Ashray Sewa Sadan, and Covid Helpline-19."
        schema={schema}
      />
      
      {/* Initiatives Page Hero */}
      <section className="w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.35/1] max-h-[450px] min-h-[320px] pt-[80px] md:pt-[96px] flex items-center justify-start bg-[#FAF7F0] relative overflow-hidden z-20 px-[8vw]">
        <div className="absolute inset-0 z-0">
          <img
            src="/about image/About us/IMG_20180223_113303.jpg"
            alt="Brij Bhoomi Foundation Initiatives banner"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35 z-10 pointer-events-none" />
        </div>
        <div className="relative w-full max-w-none text-left text-white z-20 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block cinematic-reveal">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-semibold tracking-tight leading-none text-white cinematic-reveal">
            Our Initiatives
          </h1>
          <p className="text-xs md:text-sm font-light text-white/80 leading-relaxed font-inter max-w-xl cinematic-reveal">
            Empowering communities, preserving heritage, and building a sustainable future.
          </p>
        </div>
      </section>

      <Initiatives />
    </>
  );
}
