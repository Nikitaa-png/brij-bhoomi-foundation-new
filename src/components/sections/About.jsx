import React, { useRef } from "react";
import { Compass, Shield, Leaf, Lightbulb, Users, Award, ArrowRight } from "lucide-react";
import { useCinematicReveal } from "../../hooks/useCinematicReveal";
import GrainyBackground from "../common/GrainyBackground";

export default function About() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const pillars = [
    {
      icon: <Compass size={22} className="text-[#B67A2A]" />,
      title: "Compassion",
      desc: "Serving humanity with empathy, respect, and dignity.",
    },
    {
      icon: <Shield size={22} className="text-[#B67A2A]" />,
      title: "Integrity",
      desc: "Maintaining complete transparency, ethics, and accountability in every project.",
    },
    {
      icon: <Leaf size={22} className="text-[#B67A2A]" />,
      title: "Sustainability",
      desc: "Creating long-term solutions that generate lasting social impact.",
    },
    {
      icon: <Lightbulb size={22} className="text-[#B67A2A]" />,
      title: "Innovation",
      desc: "Using modern technology and innovative thinking to maximize development outcomes.",
    },
    {
      icon: <Users size={22} className="text-[#B67A2A]" />,
      title: "Collaboration",
      desc: "Working together with communities, volunteers, government bodies, educational institutions, and CSR partners.",
    },
    {
      icon: <Award size={22} className="text-[#B67A2A]" />,
      title: "Excellence",
      desc: "Continuously improving the quality, effectiveness, and impact of every initiative.",
    },
  ];

  return (
    <>
      {/* About Page Hero */}
      <section className="w-full h-[40vh] min-h-[320px] pt-[80px] md:pt-[96px] flex items-center justify-start bg-[#FAF7F0] relative overflow-hidden z-20 px-[8vw]">
        <div className="absolute inset-0 z-0">
          <img
            src="/about image/About us/IMG-20210706-WA0633.jpg"
            alt="Historical stepwell filled with clean water at Brij Bhoomi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35 z-10 pointer-events-none" />
        </div>
        <div className="relative w-full max-w-none text-left text-white z-20 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block cinematic-reveal">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-semibold tracking-tight leading-none text-white cinematic-reveal">
            About Us
          </h1>
          <p className="text-xs md:text-sm font-light text-white/80 leading-relaxed font-inter max-w-xl cinematic-reveal">
            Learn about our journey, our values, and our commitment to sustainable community development.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section id="about" className="w-screen py-20 px-[8vw] lg:py-24 flex items-center bg-transparent relative z-20 border-t border-[#1f1a14]/5 overflow-hidden">
        
        <GrainyBackground 
          id="grainy-paper-noise" 
          bgClass="bg-[#FAF7F0]" 
          opacityClass="opacity-[0.055]" 
          matrixValue="0.04" 
        />
   
        {/* Widescreen Content Wrapper */}
        <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
          
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start w-full">
            
            {/* Left Column: About Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="cinematic-reveal">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-2">
                  About Us
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-semibold tracking-tight leading-tight text-[#1f1a14]">
                  About<br />Brij Bhoomi Foundation
                </h2>
              </div>
              
              <p className="cinematic-reveal text-sm font-semibold text-[#1f1a14] leading-relaxed font-inter">
                Empowering Lives. Strengthening Communities. Creating a Sustainable Future.
              </p>
              <p className="cinematic-reveal text-[13px] text-[#3c372f] leading-relaxed font-inter font-normal">
                Brij Bhoomi Foundation is a non-profit organization dedicated to transforming lives through sustainable social development initiatives. We work with communities, volunteers, institutions, and corporate partners to create meaningful and long-lasting impact in education, healthcare, environmental conservation, women empowerment, rural development, youth development, and humanitarian support.
              </p>
              <p className="cinematic-reveal text-[13px] text-[#3c372f] leading-relaxed font-inter font-normal">
                Our belief is simple: every individual deserves equal opportunities, dignity, quality education, accessible healthcare, and a sustainable future. Through innovative programs, strategic partnerships, and community participation, we aim to build stronger, healthier, and self-reliant communities across India.
              </p>

              {/* About Us Page Image */}
              <div className="cinematic-reveal my-6 overflow-hidden rounded-[12px] border border-[#D8C6A8]/50 shadow-sm relative group h-[220px]">
                <img 
                  src="/about image/About us/1 (92).JPG" 
                  alt="Community meeting under a tree in Brij village" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
   
              {/* Our Story Block */}
              <div className="cinematic-reveal pt-5 border-t border-[#1f1a14]/15 space-y-3.5">
                <h3 className="text-sm font-sora font-semibold text-[#1f1a14] uppercase tracking-wider">Our Story</h3>
                <p className="text-[13px] text-[#3c372f] leading-relaxed font-inter font-normal">
                  Brij Bhoomi Foundation was established with the vision of creating positive social transformation through compassion, innovation, and collective action.
                </p>
                <p className="text-[13px] text-[#3c372f] leading-relaxed font-inter font-normal">
                  We recognized that many communities continue to face challenges such as limited access to quality education, healthcare services, employment opportunities, environmental degradation, and social inequality. Instead of providing only temporary solutions, our approach focuses on building sustainable systems that empower people to become self-reliant.
                </p>
                <p className="text-[13px] text-[#3c372f] leading-relaxed font-inter font-normal">
                  Every initiative undertaken by our foundation is designed to create measurable impact while promoting transparency, accountability, and community ownership.
                </p>

                {/* Our Story Page Image */}
                <div className="cinematic-reveal my-6 overflow-hidden rounded-[12px] border border-[#D8C6A8]/50 shadow-sm relative group h-[220px]">
                  <img 
                    src="/about image/About us/IMG_20180621_081702.jpg" 
                    alt="Volunteers clearing historical stepwell (Kund) debris" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
   
              <div className="cinematic-reveal pt-4">
                <a
                  href="#programs"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#1f1a14]/30 text-[#1f1a14] text-[10px] font-inter font-semibold uppercase tracking-widest hover:text-brij-accent hover:border-brij-accent transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] rounded-[2px]"
                >
                  Learn More About Us <ArrowRight size={12} />
                </a>
              </div>
            </div>
            
            {/* Right Column: Photo Mosaic + 6 Pillars */}
            <div className="lg:col-span-7 space-y-6 w-full lg:mt-4">

              {/* Photo mosaic grid */}
              <div className="cinematic-reveal grid grid-cols-3 gap-3 w-full">
                <div className="col-span-2 overflow-hidden rounded-[12px] border border-[#D8C6A8]/50 h-52">
                  <img src="/about image/About us/IMG-20210706-WA0633.jpg" alt="Brij Bhoomi Foundation community event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-[12px] border border-[#D8C6A8]/50 h-52">
                  <img src="/about image/About us/IMG_8593.JPG" alt="Stepwell restoration work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-[12px] border border-[#D8C6A8]/50 h-40">
                  <img src="/about image/About us/IMG20180911113315.jpg" alt="Women vocational training workshop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-[12px] border border-[#D8C6A8]/50 h-40">
                  <img src="/about image/About us/IMG-20210803-WA0511.jpg" alt="Tree plantation drive" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="overflow-hidden rounded-[12px] border border-[#D8C6A8]/50 h-40">
                  <img src="/about image/About us/IMG_20171224_130312.jpg" alt="Community gathering and awareness program" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
              </div>

              {/* Pillars grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="cinematic-reveal premium-card p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="p-3 bg-[#F2E8D6] border border-[#D8C6A8]/50 rounded-[10px] w-fit shadow-sm transition-transform duration-300 hover:scale-105">
                      {pillar.icon}
                    </div>
                    <h3 className="text-sm font-sora font-semibold text-[#1f1a14] tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#5c5449] leading-relaxed font-inter font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            </div>
   
          </div>
          
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-screen py-20 px-[8vw] bg-[#FAF7F0] relative z-20 border-t border-[#1f1a14]/5 overflow-hidden">
        <GrainyBackground 
          id="grainy-paper-what-we-do" 
          bgClass="bg-[#FAF7F0]" 
          opacityClass="opacity-[0.055]" 
          matrixValue="0.04" 
        />
        <div className="w-full max-w-none text-left relative z-10">
          
          <div className="cinematic-reveal border-b border-[#1f1a14]/15 pb-6 mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-2">
              Our Initiatives
            </span>
            <h2 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight text-[#1f1a14]">
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              {
                title: "Quality Education",
                desc: "Empowering rural youth and children with interactive education, resource centers, and mentorship programs.",
                img: "/about image/About us/16388271_10154343354257825_8117666055153194570_n.jpg",
                alt: "Volunteer tutoring children in classroom setting"
              },
              {
                title: "Environmental Conservation",
                desc: "Promoting biodiversity, tree planting drives, and organic farming models to preserve the local landscape.",
                img: "/about image/About us/IMG-20210803-WA0511.jpg",
                alt: "Volunteers planting trees in village area"
              },
              {
                title: "Heritage Restoration",
                desc: "Restoring historic water bodies, temple tanks, and cultural stepwells (Kunds) to enable rainwater harvesting.",
                img: "/about image/About us/IMG_8593.JPG",
                alt: "Clean water in a beautifully restored historical stepwell"
              },
              {
                title: "Women Empowerment",
                desc: "Creating self-reliance through vocational courses, tailoring workshops, and local craft development.",
                img: "/about image/About us/IMG20180911113315.jpg",
                alt: "Women working on sewing machines in vocational training room"
              }
            ].map((area, idx) => (
              <div key={idx} className="cinematic-reveal premium-card overflow-hidden hover:shadow-lg transition-all duration-500 flex flex-col justify-between">
                <div className="h-44 overflow-hidden relative border-b border-[#D8C6A8]/20 bg-[#F2E8D6]/35">
                  <img
                    src={area.img}
                    alt={area.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-sm font-sora font-semibold text-[#1f1a14] tracking-wide">
                      {area.title}
                    </h3>
                    <p className="text-xs text-[#5c5449] leading-relaxed font-inter font-normal">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Commitment & Mission Section */}
      <section className="w-screen py-20 px-[8vw] bg-[#FAF7F0] relative z-20 border-t border-[#1f1a14]/5 overflow-hidden">
        <GrainyBackground 
          id="grainy-paper-commitment-mission" 
          bgClass="bg-[#FAF7F0]" 
          opacityClass="opacity-[0.055]" 
          matrixValue="0.04" 
        />
        <div className="w-full max-w-none text-left relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start w-full">
            
            {/* Our Commitment Column */}
            <div className="space-y-6">
              <div className="cinematic-reveal">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-2">
                  Our Values
                </span>
                <h2 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight text-[#1f1a14]">
                  Our Commitment
                </h2>
              </div>
              <p className="cinematic-reveal text-[13px] text-[#3c372f] leading-relaxed font-inter font-normal">
                Every donation, every volunteer, every partnership, and every project contributes to creating a stronger society. We remain committed to delivering measurable impact while ensuring transparency, accountability, and responsible utilization of every resource entrusted to us.
              </p>
              <div className="cinematic-reveal overflow-hidden rounded-[12px] border border-[#D8C6A8]/50 shadow-sm relative group h-[260px] w-full">
                <img 
                  src="/about image/About us/IMG_20170128_104417.jpg" 
                  alt="Women gathered in a circle discussing community welfare" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Join Our Mission Column */}
            <div className="space-y-6">
              <div className="cinematic-reveal">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-2">
                  Get Involved
                </span>
                <h2 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight text-[#1f1a14]">
                  Join Our Mission
                </h2>
              </div>
              <p className="cinematic-reveal text-[13px] text-[#3c372f] leading-relaxed font-inter font-normal">
                Whether you are an individual, volunteer, donor, corporate organization, educational institution, or government body, your contribution can help transform lives. Together, we can create opportunities, empower communities, and build a brighter future for generations to come.
              </p>
              <div className="cinematic-reveal overflow-hidden rounded-[12px] border border-[#D8C6A8]/50 shadow-sm relative group h-[260px] w-full">
                <img 
                  src="/about image/About us/IMG_8668.JPG" 
                  alt="Brij Bhoomi Foundation volunteers and community members celebrating stepwell restoration" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
          
        </div>
      </section>
    </>
  );
}
