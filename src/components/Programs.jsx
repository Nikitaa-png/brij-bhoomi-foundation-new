import React, { useRef } from "react";
import { BookOpen, Heart, Users, Home, Leaf, Award, ShieldAlert, Landmark, Handshake, ArrowRight } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function Programs() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const items = [
    {
      title: "Education for Every Child",
      subtitle: "Quality Education Creates Stronger Futures",
      desc: "Education is the foundation of a progressive society. Brij Bhoomi Foundation works to ensure that every child, regardless of financial background, has access to quality education and learning opportunities.",
      points: [
        "Scholarships for deserving students",
        "Digital learning initiatives",
        "School infrastructure support",
        "Smart classroom development",
        "Career guidance programs",
        "Library development",
        "Computer education",
        "Skill development workshops",
        "Educational awareness campaigns"
      ],
      goal: "To eliminate educational inequality by providing resources, opportunities, and guidance that help students build successful futures.",
      cta: "Support a Child's Education",
      ctaHref: "#donate-cta",
      image: "/children_education.png",
      icon: <BookOpen size={18} className="text-brij-accent" />,
    },
    {
      title: "Healthcare & Medical Assistance",
      subtitle: "Healthy Communities Build Strong Nations",
      desc: "Healthcare is a basic human right. We organize community healthcare programs to improve access to quality medical services.",
      points: [
        "Free medical camps",
        "Blood donation drives",
        "Health awareness campaigns",
        "Preventive healthcare programs",
        "Women's health initiatives",
        "Child healthcare support",
        "Mental health awareness",
        "Nutrition programs",
        "Medical assistance for underprivileged families"
      ],
      goal: "To improve public health through awareness, accessibility, prevention, and community participation.",
      cta: "Support Healthcare Programs",
      ctaHref: "#donate-cta",
      image: "/healthcare.png",
      icon: <Heart size={18} className="text-brij-accent" />,
    },
    {
      title: "Women Empowerment",
      subtitle: "Empowering Women to Build Stronger Communities",
      desc: "Women play a vital role in social and economic development. Our programs focus on creating opportunities that promote independence and leadership.",
      points: [
        "Skill development",
        "Entrepreneurship support",
        "Vocational training",
        "Digital literacy",
        "Financial awareness",
        "Leadership development",
        "Self-help group support",
        "Career counselling",
        "Legal awareness workshops"
      ],
      goal: "To empower women with education, skills, confidence, and financial independence.",
      cta: "Empower Women Today",
      ctaHref: "#donate-cta",
      image: "/artisan_woman.png",
      icon: <Users size={18} className="text-brij-accent" />,
    },
    {
      title: "Environmental Conservation",
      subtitle: "Protect Nature. Preserve the Future.",
      desc: "Environmental sustainability is essential for future generations. We actively promote ecological awareness and conservation efforts.",
      points: [
        "Tree plantation drives",
        "Water conservation",
        "Cleanliness campaigns",
        "Waste management awareness",
        "Plastic-free initiatives",
        "Biodiversity conservation",
        "Climate awareness campaigns",
        "Sustainable community practices"
      ],
      goal: "To create greener communities and promote environmental responsibility.",
      cta: "Join Our Green Mission",
      ctaHref: "#volunteer-cta",
      image: "/eco_volunteers.png",
      icon: <Leaf size={18} className="text-brij-accent" />,
    },
    {
      title: "Rural Development",
      subtitle: "Building Self-Reliant Villages",
      desc: "Strong villages create a stronger nation. Our rural development initiatives improve living conditions and economic opportunities.",
      points: [
        "Clean drinking water projects",
        "Sanitation awareness",
        "Community infrastructure",
        "Agricultural awareness",
        "Livelihood development",
        "Digital inclusion",
        "Village development initiatives",
        "Community leadership programs"
      ],
      goal: "To build sustainable rural communities with better infrastructure, education, healthcare, and employment opportunities.",
      cta: "Explore Rural Initiatives",
      ctaHref: "#contact",
      image: "/brij_kund.png",
      icon: <Home size={18} className="text-brij-accent" />,
    },
    {
      title: "Youth Development",
      subtitle: "Creating Tomorrow's Leaders",
      desc: "India's youth are its greatest strength. Our youth development initiatives encourage innovation, leadership, and employability.",
      points: [
        "Career counselling",
        "Entrepreneurship development",
        "Leadership training",
        "Innovation workshops",
        "Digital skills",
        "Internship opportunities",
        "Personality development",
        "Employment readiness"
      ],
      goal: "To prepare young people with the skills, confidence, and opportunities needed to lead and succeed.",
      cta: "Develop Skills Today",
      ctaHref: "#contact",
      image: "/cultural_performance.png",
      icon: <Award size={18} className="text-brij-accent" />,
    },
    {
      title: "Disaster Relief & Humanitarian Support",
      subtitle: "Helping Communities in Times of Crisis",
      desc: "During natural disasters and emergencies, Brij Bhoomi Foundation provides timely humanitarian assistance to affected communities.",
      points: [
        "Emergency food distribution",
        "Drinking water support",
        "Medical relief",
        "Shelter assistance",
        "Hygiene kits",
        "Clothing distribution",
        "Rehabilitation support",
        "Community recovery initiatives"
      ],
      goal: "To provide immediate relief while helping communities recover with dignity and resilience.",
      cta: "Support Relief Labors",
      ctaHref: "#donate-cta",
      image: "/community_workshop.png",
      icon: <ShieldAlert size={18} className="text-brij-accent" />,
    },
    {
      title: "Community Development",
      subtitle: "Working Together for Lasting Social Impact",
      desc: "Community participation is at the heart of everything we do. We bring people together to drive grass-roots engagement.",
      points: [
        "Awareness campaigns",
        "Social welfare initiatives",
        "Civic engagement",
        "Community leadership",
        "Volunteer programs",
        "Public health awareness",
        "Educational outreach",
        "Social inclusion initiatives"
      ],
      goal: "To foster cooperation and civic pride to construct healthier and highly inclusive neighborhoods.",
      cta: "Join Local Actions",
      ctaHref: "#volunteer-cta",
      image: "/sanjhi_art.png",
      icon: <Landmark size={18} className="text-brij-accent" />,
    },
    {
      title: "CSR Partnership Programs",
      subtitle: "Partner With Us to Create Greater Impact",
      desc: "We collaborate with corporations, educational institutions, government agencies, NGOs, and philanthropic organizations to implement impactful CSR initiatives.",
      points: [
        "Corporate Social Responsibility (CSR)",
        "Education Projects",
        "Healthcare Projects",
        "Environmental Sustainability",
        "Employee Volunteering",
        "Community Development",
        "Rural Development",
        "Skill Development"
      ],
      goal: "To scale up operations and structural solutions through legal and strategic corporate alignments.",
      cta: "Become a CSR Partner Today",
      ctaHref: "#csr-partnership",
      image: "/sacred_groves.png",
      icon: <Handshake size={18} className="text-brij-accent" />,
    },
  ];

  return (
    <section id="programs" className="w-screen py-28 px-[8vw] lg:py-36 flex items-center bg-[#FAF7F0] relative z-20 border-t border-[#1f1a14]/5 overflow-hidden">
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-programs" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.04 0" />
          </filter>
        </defs>
      </svg>

      {/* Background layer */}
      <div className="absolute inset-0 bg-[#FAF7F0] overflow-hidden z-0 pointer-events-none">
        {/* Drifting Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.055] mix-blend-overlay animate-drift-texture" style={{ filter: "url(#grainy-paper-programs)" }} />
      </div>

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Split Header Container (Symmetrical split as in the reference image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[20px] overflow-hidden border border-[#D8C6A8]/70 bg-[#F8F6F1] shadow-[0_8px_30px_rgba(0,0,0,0.02)] mb-16 min-h-[420px] relative z-10 hover:shadow-md transition-editorial">
          
          {/* Left Column: Text Content (col-span-7) */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 bg-[#FAF8F5]">
            <div className="cinematic-reveal flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block">
                What We Do
              </span>
              <div className="w-8 h-[1px] bg-[#B67A2A]"></div>
            </div>
            
            <h2 className="cinematic-reveal text-3xl md:text-5xl font-sora font-semibold tracking-tight text-[#1F1F1F] leading-tight">
              Programs &<br />Initiatives
            </h2>
            
            <p className="cinematic-reveal text-xs md:text-[13.5px] text-[#555555] leading-relaxed max-w-md font-inter font-normal">
              At Brij Bhoomi Foundation, every initiative is designed to create measurable social impact while empowering individuals, strengthening communities, and promoting sustainable development. Our programs address real-world challenges through education, healthcare, environmental conservation, women empowerment, youth development, disaster relief, and rural development.
            </p>

            <div className="cinematic-reveal pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B6F47] text-white text-[10px] font-inter font-semibold uppercase tracking-widest hover:bg-[#1F1F1F] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] rounded-[2px]"
              >
                Explore Our Programs <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Right Column: Solid Child Portrait (col-span-5) */}
          <div className="lg:col-span-5 h-72 lg:h-full min-h-[300px] relative overflow-hidden group">
            <img
              src="/smiling_child.png"
              alt="Smiling Child Portrait"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* 3 Columns Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="cinematic-reveal relative bg-white border border-[#D8C6A8]/70 rounded-[16px] overflow-hidden flex flex-col justify-between text-left h-full group hover:-translate-y-1 hover:shadow-lg transition-all duration-500 ease-out"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.02)" }}
            >
              {/* Card Image at Top */}
              <div className="h-52 w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Overlapping circle icon wrapper */}
              <div className="relative p-6 pt-8 flex-grow flex flex-col justify-between">
                <div className="absolute -top-5 left-5 p-2.5 bg-white border border-[#D8C6A8]/40 rounded-full shadow-sm flex items-center justify-center w-10 h-10 z-20 transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>

                <div className="space-y-4 flex-grow">
                  <div>
                    <h3 className="text-[15px] font-sora font-semibold text-[#1F1F1F] group-hover:text-brij-accent transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[10px] text-[#B67A2A] font-sora font-semibold tracking-wider uppercase block mt-1">
                      {item.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
                    {item.desc}
                  </p>
                  
                  {/* Points list */}
                  <ul className="space-y-2 pt-3 border-t border-[#D8C6A8]/20">
                    {item.points.map((pt, ptIdx) => (
                      <li key={ptIdx} className="text-xs text-[#555555] flex items-start gap-2 font-inter font-normal">
                        <span className="w-1.5 h-1.5 bg-[#B67A2A] mt-1.5 flex-shrink-0 rounded-full animate-pulse" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Goal Block */}
                  <div className="pt-3 border-t border-[#D8C6A8]/10">
                    <span className="text-[9px] uppercase tracking-wider text-[#B67A2A] font-sora font-bold block mb-1">
                      Our Goal
                    </span>
                    <p className="text-xs text-[#1F1F1F] font-inter font-medium leading-relaxed">
                      {item.goal}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-[#D8C6A8]/30">
                  <a
                    href={item.ctaHref || "#contact"}
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#8B6F47] hover:text-black transition-colors duration-300"
                  >
                    {item.cta || "Learn More"} <ArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Our Programs Matter Block */}
        <div className="cinematic-reveal mt-20 border-t border-[#D8C6A8] pt-12">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-medium block mb-2">
              Values & Purpose
            </span>
            <h3 className="text-xl md:text-2xl font-sora font-semibold text-[#1F1F1F] mb-6">
              Why Our Programs Matter
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed mb-8 font-inter font-normal">
              Every initiative is designed to deliver sustainable results, community ownership, and measurable growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Sustainable Development", desc: "Long-term solutions over temporary relief." },
                { title: "Measurable Social Impact", desc: "Operations tracked with transparent indices." },
                { title: "Community Participation", desc: "Uplifting locals through collaborative action." },
                { title: "Transparency & Accountability", desc: "Complete governance and audited reports." },
                { title: "Long-Term Empowerment", desc: "Fostering economic independence and resilience." },
                { title: "Inclusive Growth", desc: "Empowering every individual regardless of background." },
                { title: "Technology-Enabled Solutions", desc: "Leveraging modern digital tools for scaling impact." }
              ].map((val, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 bg-[#B67A2A] mt-2 flex-shrink-0 rounded-full" />
                  <div>
                    <h4 className="text-xs font-sora font-semibold text-[#1F1F1F] mb-1">
                      {val.title}
                    </h4>
                    <p className="text-[10px] text-[#555555] leading-relaxed font-inter font-normal">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Call to Action Block */}
        <div className="cinematic-reveal mt-20 bg-[#8B6F47] text-white p-8 md:p-12 rounded-[16px] text-center max-w-4xl mx-auto border border-[#8B6F47]/20 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/85 font-sora font-semibold block mb-3">
            Together We Can Make a Difference
          </span>
          <h3 className="text-2xl md:text-3xl font-sora font-semibold tracking-tight text-white mb-4">
            Join Brij Bhoomi Foundation in Building a Better Tomorrow
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed mb-8 font-inter font-normal">
            Whether you choose to donate, volunteer, partner with us, or spread awareness, your support helps transform lives and create stronger communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#donate-cta"
              className="px-6 py-2.5 bg-white text-[#8B6F47] text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-editorial rounded-sm w-full sm:w-auto text-center font-medium"
            >
              Donate Today
            </a>
            <a
              href="#volunteer-cta"
              className="px-6 py-2.5 bg-transparent border border-white text-white text-[10px] font-sora font-semibold uppercase tracking-wider hover:text-white/80 hover:border-white/80 transition-editorial rounded-sm w-full sm:w-auto text-center font-medium"
            >
              Volunteer Today
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
