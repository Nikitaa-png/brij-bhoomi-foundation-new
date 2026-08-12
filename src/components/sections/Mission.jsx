import React, { useRef } from "react";
import { Compass, Eye, ShieldCheck, Users } from "lucide-react";
import { useCinematicReveal } from "../../hooks/useCinematicReveal";
import GrainyBackground from "../common/GrainyBackground";

export default function Mission() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  return (
    <section id="mission" className="w-screen px-[8vw] py-28 lg:py-36 flex items-center bg-transparent relative z-20 border-t border-[#D8C6A8] overflow-hidden">
      
      <GrainyBackground 
        id="grainy-paper-mission" 
        bgClass="bg-[#F2E8D6]" 
        opacityClass="opacity-[0.05]" 
        matrixValue="0.03" 
      />

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Editorial Heading */}
        <div className="cinematic-reveal border-b border-[#D8C6A8] pb-6 mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-2">
            Core Intent
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-semibold tracking-tight text-[#2E2E2E]">
            Mission & Vision
          </h2>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* Mission Card */}
          <div 
            className="cinematic-reveal flex flex-col sm:flex-row gap-6 items-start bg-[#FCFAF5] p-8 md:p-10 border border-[#D8C6A8]/70 rounded-[16px] w-full transition-editorial hover:-translate-y-1 hover:shadow-lg"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.02)" }}
          >
            <div className="p-3.5 bg-[#F2E8D6] border border-[#D8C6A8]/60 text-[#B67A2A] rounded-full flex-shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
              <Compass size={20} />
            </div>
            <div>
              <h4 className="text-base font-sora font-semibold text-[#2E2E2E] mb-3">Our Mission</h4>
              <p className="text-xs md:text-[13px] text-[#4E4E4E] leading-relaxed font-inter font-normal">
                <strong>To transform one million rural lives every five years through holistic development across Health, Education, Water & Sanitation and Economic Development by creating a scalable, replicable and community-centric model of sustainable development.</strong>
              </p>
            </div>
          </div>
          
          {/* Vision Card */}
          <div 
            className="cinematic-reveal flex flex-col sm:flex-row gap-6 items-start bg-[#FCFAF5] p-8 md:p-10 border border-[#D8C6A8]/70 rounded-[16px] w-full transition-editorial hover:-translate-y-1 hover:shadow-lg"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.02)" }}
          >
            <div className="p-3.5 bg-[#F2E8D6] border border-[#D8C6A8]/60 text-[#B67A2A] rounded-full flex-shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
              <Eye size={20} />
            </div>
            <div>
              <h4 className="text-base font-sora font-semibold text-[#2E2E2E] mb-3">Our Vision</h4>
              <p className="text-xs md:text-[13px] text-[#4E4E4E] leading-relaxed font-inter font-normal">
                <strong>An empowered India where communities are capable of transforming their own lives.</strong>
              </p>
              <p className="text-xs md:text-[13px] text-[#4E4E4E] leading-relaxed font-inter font-normal mt-3">
                Our vision is rural empowerment through best practices, modern technology and values.
              </p>
            </div>
          </div>

          {/* Commitment Card */}
          <div 
            className="cinematic-reveal flex flex-col sm:flex-row gap-6 items-start bg-[#FCFAF5] p-8 md:p-10 border border-[#D8C6A8]/70 rounded-[16px] w-full transition-editorial hover:-translate-y-1 hover:shadow-lg"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.02)" }}
          >
            <div className="p-3.5 bg-[#F2E8D6] border border-[#D8C6A8]/60 text-[#B67A2A] rounded-full flex-shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-base font-sora font-semibold text-[#2E2E2E] mb-3">Our Commitment</h4>
              <p className="text-xs md:text-[13px] text-[#4E4E4E] leading-relaxed font-inter font-normal">
                Every donation, every volunteer, every partnership, and every project contributes to creating a stronger society. We remain committed to delivering measurable impact while ensuring transparency, accountability, and responsible utilization of every resource entrusted to us.
              </p>
            </div>
          </div>

          {/* Join Our Mission Card */}
          <div 
            className="cinematic-reveal flex flex-col sm:flex-row gap-6 items-start bg-[#FCFAF5] p-8 md:p-10 border border-[#D8C6A8]/70 rounded-[16px] w-full transition-editorial hover:-translate-y-1 hover:shadow-lg"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.02)" }}
          >
            <div className="p-3.5 bg-[#F2E8D6] border border-[#D8C6A8]/60 text-[#B67A2A] rounded-full flex-shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
              <Users size={20} />
            </div>
            <div>
              <h4 className="text-base font-sora font-semibold text-[#2E2E2E] mb-3">Join Our Mission</h4>
              <p className="text-xs md:text-[13px] text-[#4E4E4E] leading-relaxed font-inter font-normal">
                Whether you are an individual, volunteer, donor, corporate organization, educational institution, or government body, your contribution can help transform lives. Together, we can create opportunities, empower communities, and build a brighter future for generations to come.
              </p>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
