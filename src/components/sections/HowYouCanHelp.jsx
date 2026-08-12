import React, { useRef } from "react";
import { Handshake, Target, ShieldCheck, Heart, BookOpen, Sparkles, Award, Globe, ClipboardList, BarChart3, Building, FileText, Calendar, Mail, CheckCircle } from "lucide-react";
import { useCinematicReveal } from "../../hooks/useCinematicReveal";
import GrainyBackground from "../common/GrainyBackground";
import { csrFocusAreas, partnershipModels } from "../../data/programs";

// Simple fallback for Users icon
function UsersIcon({ size, className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const getIcon = (name) => {
  switch (name) {
    case "BookOpen": return <BookOpen size={18} className="text-[#B67A2A]" />;
    case "Heart":    return <Heart size={18} className="text-[#B67A2A]" />;
    case "Sparkles": return <Sparkles size={18} className="text-[#B67A2A]" />;
    case "Users":    return <UsersIcon size={18} className="text-[#B67A2A]" />;
    case "Globe":    return <Globe size={18} className="text-[#B67A2A]" />;
    case "Award":    return <Award size={18} className="text-[#B67A2A]" />;
    default:         return <Award size={18} className="text-[#B67A2A]" />;
  }
};

export default function HowYouCanHelp() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  return (
    <section id="csr-partnership" className="w-screen py-28 px-[8vw] lg:py-36 flex items-center bg-transparent relative z-20 border-t border-[#D8C6A8] overflow-hidden text-left">
      
      <GrainyBackground 
        id="grainy-paper-help" 
        bgClass="bg-[#FAF7F0]" 
        opacityClass="opacity-[0.055]" 
        matrixValue="0.04" 
      />

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none relative z-10 space-y-20">
        
        {/* Hero Section */}
        <div className="max-w-3xl space-y-6">
          <span className="cinematic-reveal text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block">
            CSR PARTNERSHIP
          </span>
          <h2 className="cinematic-reveal text-3xl md:text-5xl font-sora font-semibold tracking-tight leading-tight text-[#1F1F1F]">
            Partner With Brij Bhoomi Foundation to Create Sustainable Social Impact
          </h2>
          <p className="cinematic-reveal text-sm font-semibold text-[#B67A2A] leading-relaxed font-inter">
            Transforming Corporate Social Responsibility into Meaningful Community Development
          </p>
          <p className="cinematic-reveal text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
            At Brij Bhoomi Foundation, we believe that sustainable development is achieved through strong partnerships between nonprofits, businesses, governments, and communities. We invite organizations, businesses, startups, educational institutions, philanthropic trusts, and government agencies to collaborate with us in delivering impactful Corporate Social Responsibility (CSR) initiatives that create measurable and long-term change. Together, we can build healthier communities, improve education, empower women, protect the environment, and strengthen rural India.
          </p>
        </div>

        {/* Why Partner With Us */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#1F1F1F]">WHY PARTNER WITH BRIJ BHOOMI FOUNDATION?</h3>
          <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal max-w-3xl">
            Today's businesses are expected to create value beyond profits. Partnering with Brij Bhoomi Foundation enables your organization to contribute toward sustainable development while fulfilling its social responsibility goals through professionally managed, transparent, and high-impact projects. Our team ensures every CSR initiative is planned, implemented, monitored, and reported with complete accountability.
          </p>
          
          {/* 2 Themed Partnership Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="group overflow-hidden rounded-[16px] border border-[#D8C6A8]/70 shadow-sm h-[320px] relative">
              <img
                src="/sacred_groves.png"
                alt="Environmental Sustainability CSR"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm border border-[#D8C6A8]/40 px-4 py-2 rounded-full shadow-sm">
                <span className="text-[10px] font-sora font-semibold text-[#8B6F47] uppercase tracking-widest">Environmental CSR</span>
              </div>
            </div>
            <div className="group overflow-hidden rounded-[16px] border border-[#D8C6A8]/70 shadow-sm h-[320px] relative">
              <img
                src="/community_workshop.png"
                alt="Community Empowerment CSR"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm border border-[#D8C6A8]/40 px-4 py-2 rounded-full shadow-sm">
                <span className="text-[10px] font-sora font-semibold text-[#8B6F47] uppercase tracking-widest">Community Development CSR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our CSR Focus Areas */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#1F1F1F]">Our CSR Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {csrFocusAreas.map((area, idx) => (
              <div 
                key={idx} 
                className="premium-card p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-[#F2E8D6] border border-[#D8C6A8]/50 rounded-[10px] w-fit shadow-sm transition-transform duration-300 hover:scale-105">
                    {getIcon(area.iconName)}
                  </div>
                  <h4 className="text-sm font-sora font-semibold text-[#1F1F1F]">{area.title}</h4>
                  <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSR Partnership Models */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#1F1F1F]">CSR Partnership Models</h3>
          <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal max-w-2xl">
            We offer flexible partnership models to suit your organization's CSR strategy:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipModels.map((model, idx) => (
              <div key={idx} className="premium-card p-6 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-sm font-sora font-semibold text-[#1F1F1F]">{model.title}</h4>
                  <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">{model.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ESG & Development Goal Alignments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-[#D8C6A8] pt-12">
          {/* ESG */}
          <div className="bg-[#FCFAF5] border border-[#D8C6A8] p-6 rounded-[20px] space-y-3.5 cinematic-reveal">
            <h3 className="text-lg font-sora font-semibold text-[#1F1F1F]">ESG & Sustainable Development Alignment</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              Our initiatives help organizations advance their Environmental, Social, and Governance (ESG) commitments by contributing to responsible business practices and sustainable community development. Projects can be mapped to key sustainability goals, enabling companies to demonstrate measurable social and environmental outcomes in their ESG reporting.
            </p>
          </div>

          {/* Goal Alignments */}
          <div className="bg-[#FCFAF5] border border-[#D8C6A8] p-6 rounded-[20px] space-y-3.5 cinematic-reveal">
            <h3 className="text-lg font-sora font-semibold text-[#1F1F1F]">Alignment with National & Global Development Goals</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              Our programs are designed to align with:
            </p>
            <ul className="space-y-1.5 pt-1">
              {[
                "Government of India CSR priorities under Schedule VII of the Companies Act, 2013 where applicable",
                "United Nations Sustainable Development Goals (SDGs)",
                "Environmental, Social & Governance (ESG) frameworks",
                "Community development priorities",
                "Inclusive and sustainable growth objectives"
              ].map((item, idx) => (
                <li key={idx} className="text-[10px] text-[#555555] flex items-start gap-1.5 font-inter font-normal">
                  <span className="w-1 h-1 bg-[#B67A2A] mt-1.5 flex-shrink-0 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What You Receive & Transparency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#D8C6A8] pt-12">
          {/* Deliverables */}
          <div className="space-y-4 cinematic-reveal">
            <h3 className="text-xl font-sora font-semibold text-[#1F1F1F]">What You Receive as a CSR Partner</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal mb-2">
              Every corporate partner receives professional project support including:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "CSR Project Planning",
                "Need Assessment Reports",
                "Baseline Surveys",
                "Project Implementation",
                "Regular Progress Updates",
                "Financial Transparency",
                "Impact Assessment",
                "Utilization Reports",
                "Photo & Video Documentation",
                "Beneficiary Stories",
                "CSR Impact Reports",
                "Completion Reports"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-[#FCFAF5] border border-[#D8C6A8] px-3.5 py-2 rounded-lg shadow-sm">
                  <ClipboardList size={12} className="text-[#B67A2A] flex-shrink-0" />
                  <span className="text-[9px] font-inter font-semibold text-[#1F1F1F] leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monitoring & Transparency */}
          <div className="space-y-4 bg-[#FCFAF5] border border-[#D8C6A8] p-6 rounded-[20px] cinematic-reveal">
            <h3 className="text-lg font-sora font-semibold text-[#1F1F1F]">Monitoring & Transparency</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal mb-4">
              Transparency is central to every partnership. We provide:
            </p>
            <div className="grid grid-cols-2 gap-3.5">
              {[
                "Detailed Project Reports",
                "Budget Utilization Statements",
                "Milestone Tracking",
                "Site Visit Coordination",
                "Third-Party Evaluation where applicable",
                "Outcome Measurement",
                "Social Impact Assessment"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#B67A2A] flex-shrink-0" />
                  <span className="text-[10px] text-[#3C372F] font-inter font-normal leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us & Who Can Partner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#D8C6A8] pt-12">
          {/* Why Choose Us */}
          <div className="space-y-4 cinematic-reveal">
            <h3 className="text-xl font-sora font-semibold text-[#1F1F1F]">Why Organizations Choose Us</h3>
            <div className="grid grid-cols-2 gap-3.5">
              {[
                "Transparent Governance",
                "Professional Project Management",
                "Experienced Team",
                "Community-Centered Approach",
                "Sustainable Development Focus",
                "Measurable Impact",
                "Timely Reporting",
                "Scalable CSR Programs",
                "Strong Volunteer Network",
                "Technology-Driven Operations"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-[#FCFAF5] border border-[#D8C6A8] px-3.5 py-2.5 rounded-lg shadow-sm">
                  <CheckCircle size={12} className="text-[#B67A2A] flex-shrink-0" />
                  <span className="text-[10px] font-inter font-semibold text-[#2E2E2E]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who Can Partner */}
          <div className="space-y-4 bg-[#FCFAF5] border border-[#D8C6A8] p-6 rounded-[20px] cinematic-reveal">
            <h3 className="text-lg font-sora font-semibold text-[#1F1F1F]">Who Can Partner With Us?</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal mb-3">
              We welcome collaborations from:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Corporate Organizations",
                "MSMEs & Startups",
                "Public Sector Enterprises",
                "Educational Institutions",
                "Hospitals",
                "Foundations & Trusts",
                "International Organizations",
                "Government Bodies",
                "Philanthropic Individuals",
                "Industry Associations"
              ].map((item, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-white border border-[#D8C6A8]/50 text-[9px] font-inter font-medium text-[#2E2E2E] rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="cinematic-reveal bg-[#8B6F47] text-white p-8 md:p-12 rounded-[24px] border border-[#8B6F47]/20 shadow-lg text-center max-w-4xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/80 font-sora font-semibold block mb-3">
            Let's Build Impact Together
          </span>
          <h3 className="text-2xl md:text-3xl font-sora font-semibold tracking-tight text-white mb-4">
            Together, We Can Create Lasting Change
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed mb-8 font-inter font-normal">
            A meaningful CSR partnership goes beyond compliance—it creates opportunities, strengthens communities, and leaves a lasting legacy. Whether your organization aims to support education, healthcare, environmental sustainability, women empowerment, or rural development, Brij Bhoomi Foundation is ready to collaborate in designing impactful, transparent, and scalable initiatives.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <button
              onClick={() => alert("Initiating CSR partnership application...")}
              className="px-6 py-3 bg-white text-[#8B6F47] text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-[3px] font-medium w-full sm:w-auto text-center shadow-md hover:scale-[1.04] active:scale-[0.97]"
            >
              🤝 Become a CSR Partner
            </button>
            <button
              onClick={() => alert("Downloading CSR Brochure...")}
              className="px-6 py-3 bg-transparent border border-white text-white text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] font-medium w-full sm:w-auto text-center hover:scale-[1.04] active:scale-[0.97]"
            >
              <FileText size={12} className="inline mr-1" /> Download CSR Brochure
            </button>
            <button
              onClick={() => alert("Opening meeting scheduler...")}
              className="px-6 py-3 bg-transparent border border-white text-white text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] font-medium w-full sm:w-auto text-center hover:scale-[1.04] active:scale-[0.97]"
            >
              <Calendar size={12} className="inline mr-1" /> Schedule a Meeting
            </button>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-white text-white text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] font-medium w-full sm:w-auto text-center hover:scale-[1.04] active:scale-[0.97]"
            >
              <Mail size={12} className="inline mr-1" /> Contact Our CSR Team
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
