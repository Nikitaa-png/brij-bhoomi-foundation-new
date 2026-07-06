import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, BookOpen, Heart, Leaf, Home, Award, ShieldAlert, Landmark, Handshake, ArrowRight } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const stats = [
    {
      value: 10000,
      suffix: "+",
      label: "Lives Impacted",
      desc: "Individuals supported through community outreach programs.",
      icon: <Users size={18} />,
    },
    {
      value: 2500,
      suffix: "+",
      label: "Students Benefited",
      desc: "Children receiving scholarships, learning materials, and digital training.",
      icon: <BookOpen size={18} />,
    },
    {
      value: 5000,
      suffix: "+",
      label: "Medical Beneficiaries",
      desc: "Vulnerable individuals accessing free camps and medical help.",
      icon: <Heart size={18} />,
    },
    {
      value: 15000,
      suffix: "+",
      label: "Trees Planted",
      desc: "Native saplings planted to restore green cover and sacred groves.",
      icon: <Leaf size={18} />,
    },
    {
      value: 1200,
      suffix: "+",
      label: "Women Empowered",
      desc: "Women receiving vocational training and entrepreneurship grants.",
      icon: <Users size={18} />,
    },
    {
      value: 500,
      suffix: "+",
      label: "Active Volunteers",
      desc: "Dedicated citizens driving ground operations across regions.",
      icon: <Users size={18} />,
    },
    {
      value: 25,
      suffix: "+",
      label: "CSR Partnerships",
      desc: "Corporate alignments supporting structural social development.",
      icon: <Handshake size={18} />,
    },
    {
      value: 100,
      suffix: "+",
      label: "Community Projects",
      desc: "Grass-roots programs completed in education, water, and conservation.",
      icon: <Landmark size={18} />,
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
    <section id="impact" className="w-screen px-[8vw] py-28 lg:py-36 bg-[#F2E8D6] relative z-20 border-t border-[#D8C6A8] overflow-hidden">
      
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
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay animate-drift-texture" style={{ filter: "url(#grainy-paper-impact)" }} />
      </div>

      {/* 1. Top Section: Split Column Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">
        
        {/* Left Side: Content Column (col-span-7) */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Hero Section Header */}
          <div className="space-y-4">
            <div className="cinematic-reveal">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#2E2E2E] font-sora block">BRIJ BHOOMI</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#B67A2A] font-semibold block -mt-0.5">FOUNDATION</span>
            </div>

            <h2 className="cinematic-reveal text-4xl md:text-5xl font-sora font-semibold tracking-tight leading-tight text-[#2E2E2E]">
              Our Impact
            </h2>

            <p className="cinematic-reveal text-sm font-semibold text-[#B67A2A] leading-relaxed font-inter">
              Creating Measurable Change. Inspiring Hope. Building Stronger Communities.
            </p>
            
            <p className="cinematic-reveal text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
              At Brij Bhoomi Foundation, impact is not measured only by numbers—it is reflected in the lives we transform, the communities we empower, and the sustainable change we create. Every initiative is designed to deliver long-term social, economic, and environmental benefits while maintaining complete transparency and accountability. Our work aligns with the United Nations Sustainable Development Goals (SDGs) and supports India's vision of inclusive growth and sustainable development.
            </p>
          </div>

          {/* Our Impact Philosophy */}
          <div className="cinematic-reveal premium-card p-6 flex flex-col justify-between">
            <h3 className="text-sm font-sora font-semibold text-[#2E2E2E] mb-3">Our Impact Philosophy</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              We believe that true development is achieved when individuals become self-reliant, communities become stronger, and future generations inherit a healthier, more equitable world. Every project undertaken by Brij Bhoomi Foundation focuses on sustainable community development, education accessibility, quality healthcare, women empowerment, environmental sustainability, youth leadership, rural transformation, and humanitarian support.
            </p>
          </div>

          {/* Impact Areas */}
          <div className="cinematic-reveal space-y-4">
            <h3 className="text-sm font-sora font-semibold text-[#2E2E2E] border-b border-[#D8C6A8] pb-2">Impact Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { 
                  title: "Education Impact", 
                  points: ["Scholarships for deserving students", "School infrastructure support", "Digital learning initiatives", "Career guidance programs", "Skill development workshops", "Educational resource distribution"], 
                  goal: "Creating an educated and empowered generation." 
                },
                { 
                  title: "Healthcare Impact", 
                  points: ["Free medical camps", "Preventive healthcare awareness", "Blood donation drives", "Women's health initiatives", "Child healthcare support", "Medical assistance programs"], 
                  goal: "Building healthier and stronger communities." 
                },
                { 
                  title: "Women Empowerment Impact", 
                  points: ["Skill development", "Entrepreneurship training", "Financial literacy", "Digital education", "Leadership workshops", "Employment support"], 
                  goal: "Promoting financial independence and equal opportunities." 
                },
                { 
                  title: "Environmental Impact", 
                  points: ["Tree plantation campaigns", "Water conservation", "Waste management", "Plastic-free awareness", "Biodiversity conservation", "Climate education"], 
                  goal: "Creating environmentally responsible communities." 
                },
                { 
                  title: "Rural Development Impact", 
                  points: ["Clean drinking water projects", "Sanitation initiatives", "Agricultural awareness", "Community infrastructure", "Skill development", "Village empowerment"], 
                  goal: "Building self-reliant and sustainable villages." 
                }
              ].map((area, idx) => (
                <div key={idx} className="premium-card p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="text-sm font-sora font-semibold text-[#2E2E2E]">{area.title}</h4>
                    <ul className="space-y-1.5">
                      {area.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs text-[#555555] flex items-start gap-2 font-inter font-normal">
                          <span className="w-1.5 h-1.5 bg-[#B67A2A] mt-1.5 flex-shrink-0 rounded-full" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D8C6A8]/30">
                    <span className="text-[9px] uppercase tracking-wider text-[#B67A2A] font-sora font-bold block mb-0.5">Goal</span>
                    <p className="text-xs text-[#1F1F1F] font-inter font-semibold">{area.goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Image Column (col-span-5, Sticky) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start space-y-6">
          
          <div className="group overflow-hidden rounded-[16px] border border-[#D8C6A8]/70 shadow-sm h-[260px] relative">
            <img
              src="/hands_holding_plant.png"
              alt="Nature Conservation"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-[#D8C6A8]/50 px-3.5 py-1.5 rounded-full">
              <span className="text-[9px] font-sora font-semibold text-[#8B6F47] uppercase tracking-widest">Conservation</span>
            </div>
          </div>
          
          <div className="group overflow-hidden rounded-[16px] border border-[#D8C6A8]/70 shadow-sm h-[260px] relative">
            <img
              src="/children_education.png"
              alt="Education Impact"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-[#D8C6A8]/50 px-3.5 py-1.5 rounded-full">
              <span className="text-[9px] font-sora font-semibold text-[#8B6F47] uppercase tracking-widest">Education</span>
            </div>
          </div>
          
          <div className="group overflow-hidden rounded-[16px] border border-[#D8C6A8]/70 shadow-sm h-[260px] relative">
            <img
              src="/artisan_woman.png"
              alt="Women Empowerment"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-[#D8C6A8]/50 px-3.5 py-1.5 rounded-full">
              <span className="text-[9px] font-sora font-semibold text-[#8B6F47] uppercase tracking-widest">Empowerment</span>
            </div>
          </div>

          <div className="group overflow-hidden rounded-[16px] border border-[#D8C6A8]/70 shadow-sm h-[260px] relative">
            <img
              src="/brij_kund.png"
              alt="Rural Development"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-[#D8C6A8]/50 px-3.5 py-1.5 rounded-full">
              <span className="text-[9px] font-sora font-semibold text-[#8B6F47] uppercase tracking-widest">Rural Development</span>
            </div>
          </div>

        </div>

      </div>

      {/* 2. Bottom Section: Full Width Content Dashboard */}
      <div className="w-full relative z-10 space-y-16 text-left border-t border-[#D8C6A8] pt-16">
        
        {/* Impact Statistics */}
        <div className="cinematic-reveal space-y-6">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Impact Statistics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="premium-card p-6 flex flex-col justify-between text-[#2E2E2E] hover:shadow-lg transition-all duration-500 w-full"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.01)" }}
              >
                <div className="flex gap-4 items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#8B6F47] text-white flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="flex items-baseline text-[#2E2E2E] leading-none">
                      <span
                        className="stat-counter text-3xl font-sora font-semibold tracking-tight text-[#2E2E2E]"
                        data-target={stat.value}
                      >
                        0
                      </span>
                      <span className="text-xl font-sora font-semibold text-[#2E2E2E] ml-0.5">
                        {stat.suffix}
                      </span>
                    </div>
                    <h4 className="text-xs font-sora font-semibold text-[#2E2E2E] mt-1">
                      {stat.label}
                    </h4>
                  </div>
                </div>
                <p className="text-[11px] text-[#555555] leading-relaxed pt-3 border-t border-[#D8C6A8]/45 font-inter font-normal">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="cinematic-reveal space-y-6 pt-4">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Success Stories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { 
                title: "Transforming Education", 
                desc: "A rural student who lacked access to quality educational resources successfully continued higher education after receiving academic support, mentorship, and scholarship assistance through our educational initiatives." 
              },
              { 
                title: "Improving Healthcare", 
                desc: "Medical camps organized by the foundation have provided preventive healthcare services, health screenings, and awareness programs to underserved communities, improving access to essential healthcare." 
              },
              { 
                title: "Empowering Women", 
                desc: "Women participating in vocational training and entrepreneurship programs have established sustainable livelihoods, contributing to greater financial independence and community development." 
              },
              { 
                title: "Protecting the Environment", 
                desc: "Tree plantation campaigns and environmental awareness programs have encouraged community participation in creating greener and cleaner surroundings." 
              }
            ].map((story, idx) => (
              <div key={idx} className="premium-card p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-500">
                <div className="space-y-3">
                  <h4 className="text-sm font-sora font-semibold text-[#2E2E2E]">{story.title}</h4>
                  <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal flex-grow">{story.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainable Development Goals (SDGs) */}
        <div className="cinematic-reveal premium-card p-8 rounded-[16px] space-y-4">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Sustainable Development Goals (SDGs)</h3>
          <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
            Our initiatives contribute to the following United Nations Sustainable Development Goals:
          </p>
          <div className="flex flex-wrap gap-2.5 pt-2">
            {[
              "SDG 1 – No Poverty",
              "SDG 2 – Zero Hunger",
              "SDG 3 – Good Health & Well-Being",
              "SDG 4 – Quality Education",
              "SDG 5 – Gender Equality",
              "SDG 6 – Clean Water & Sanitation",
              "SDG 8 – Decent Work & Economic Growth",
              "SDG 10 – Reduced Inequalities",
              "SDG 11 – Sustainable Cities & Communities",
              "SDG 13 – Climate Action",
              "SDG 15 – Life on Land",
              "SDG 17 – Partnerships for the Goals"
            ].map((sdg, idx) => (
              <span key={idx} className="px-3.5 py-1.5 bg-[#FAF7F0] border border-[#D8C6A8]/50 text-[10px] font-inter font-semibold text-[#8B6F47] rounded-full hover:scale-[1.03] duration-300 transition-transform shadow-sm cursor-default">
                {sdg}
              </span>
            ))}
          </div>
        </div>

        {/* Transparency & Accountability */}
        <div className="cinematic-reveal space-y-6 pt-4">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Transparency & Accountability</h3>
          <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
            Transparency is one of the core principles of Brij Bhoomi Foundation. We ensure that every contribution is utilized responsibly through:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              "Regular Financial Reporting",
              "Annual Impact Reports",
              "Project Monitoring & Evaluation",
              "Donor Transparency",
              "Ethical Governance",
              "CSR Compliance",
              "Independent Audits"
            ].map((item, idx) => (
              <div key={idx} className="p-4 premium-card text-center flex items-center justify-center hover:shadow-md transition-all duration-300 min-h-[72px]">
                <span className="text-xs font-inter font-semibold text-[#2E2E2E] leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="cinematic-reveal space-y-6 pt-4">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Brij Bhoomi Foundation is making a meaningful difference by addressing real community needs with professionalism and compassion.",
              "Their commitment to transparency, sustainability, and long-term development is truly commendable.",
              "Partnering with Brij Bhoomi Foundation has allowed us to create measurable and lasting social impact."
            ].map((quote, idx) => (
              <blockquote key={idx} className="p-7 premium-card flex flex-col justify-between hover:shadow-lg italic font-normal text-[#1F1F1F] rounded-[16px]">
                <p className="text-xs md:text-sm font-sora leading-relaxed">
                  "{quote}"
                </p>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Our Promise & Final Call-to-Action */}
        <div className="cinematic-reveal bg-[#8B6F47] text-white p-8 md:p-12 rounded-[24px] border border-[#8B6F47]/20 shadow-lg text-center md:text-left max-w-5xl mx-auto">
          <h3 className="text-lg font-sora font-semibold mb-3">Our Promise</h3>
          <p className="text-xs md:text-sm text-white/90 leading-relaxed font-inter mb-8">
            Every donation, every volunteer hour, and every partnership contributes to creating a stronger, healthier, and more inclusive society. We remain committed to maximizing social impact while ensuring transparency, accountability, and sustainable development.
          </p>
          <div className="border-t border-white/20 pt-8 text-center">
            <h4 className="text-2xl md:text-3xl font-sora font-semibold mb-3 tracking-tight">Together, Let's Build a Better Tomorrow</h4>
            <p className="text-xs text-white/80 leading-relaxed font-inter mb-6 max-w-xl mx-auto">
              Your support can transform lives, strengthen communities, and create opportunities for future generations.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#donate-cta" className="px-6 py-3 bg-white text-[#8B6F47] text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-[3px] font-medium shadow-md hover:scale-[1.04] active:scale-[0.97]">
                Donate
              </a>
              <a href="#volunteer-cta" className="px-6 py-3 bg-transparent border border-white text-white text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] font-medium hover:scale-[1.04] active:scale-[0.97]">
                Volunteer
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
