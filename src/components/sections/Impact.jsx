import React, { useEffect, useRef } from "react";
import { Users, BookOpen, Heart, Leaf, Handshake, Landmark } from "lucide-react";
import gsap from "gsap";
import { useCinematicReveal } from "../../hooks/useCinematicReveal";
import GrainyBackground from "../common/GrainyBackground";
import { impactStats, successStories, sdgs, transparencyPoints, testimonials } from "../../data/impact";

const getIcon = (name) => {
  switch (name) {
    case "Users":     return <Users size={18} />;
    case "BookOpen":  return <BookOpen size={18} />;
    case "Heart":     return <Heart size={18} />;
    case "Leaf":      return <Leaf size={18} />;
    case "Handshake": return <Handshake size={18} />;
    case "Landmark":  return <Landmark size={18} />;
    default:          return <Users size={18} />;
  }
};

export default function Impact() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

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
            duration: 2.2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="impact" className="w-screen py-28 px-[8vw] lg:py-36 bg-transparent relative z-20 border-t border-[#D8C6A8] overflow-hidden">
      
      <GrainyBackground 
        id="grainy-paper-impact" 
        bgClass="bg-[#FCFAF5]" 
        opacityClass="opacity-[0.04]" 
        matrixValue="0.03" 
      />

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none relative z-10 space-y-20">
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start w-full">
          
          {/* Left Side: Text Column (col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="cinematic-reveal">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-2">
                WELFARE INITIATIVES & STRATEGIC FOCUS AREAS
              </span>
              <h2 className="text-3xl md:text-5xl font-sora font-semibold tracking-tight leading-tight text-[#2E2E2E]">
                OUR IMPACT
              </h2>
            </div>
            
            <p className="cinematic-reveal text-sm font-semibold text-[#B67A2A] leading-relaxed font-inter">
              Creating Measurable & Sustainable Change
            </p>
            <p className="cinematic-reveal text-xs md:text-sm font-semibold text-[#555555] leading-relaxed font-inter">
              Empowering Lives. Preserving Environment. Strengthening Communities.
            </p>
            <p className="cinematic-reveal text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
              At Brij Bhoomi Foundation, we believe that sustainable development is achieved when communities are empowered with resources, opportunities, and skills. Our focus is not only on delivering immediate aid but on creating long-term, structural solutions. Through our education, healthcare, environmental conservation, women empowerment, rural development, and youth initiatives, we have supported thousands of lives, helped families build livelihoods, restored sacred stepwells, and created opportunities for younger generations.
            </p>
            <p className="cinematic-reveal text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
              Every initiative is planned and implemented in cooperation with local communities, ensuring high accountability and sustainable outcomes. We measure success by the positive transformations in the communities we serve.
            </p>

            {/* Our Methodology */}
            <div className="cinematic-reveal pt-5 border-t border-[#D8C6A8]/45 space-y-3.5">
              <h3 className="text-sm font-sora font-semibold text-[#2E2E2E] uppercase tracking-wider">Our Methodology</h3>
              <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
                To maximize the effectiveness of our social development programs, we follow a structured, three-step methodology:
              </p>
              <div className="space-y-3">
                {[
                  { step: "1. Need Assessment & Community Co-design", desc: "Before initiating any program, our team conducts baseline surveys and baseline needs assessments to understand specific community requirements. We co-design initiatives with community leaders to ensure relevance and long-term ownership." },
                  { step: "2. Transparent & Technology-Driven Execution", desc: "We utilize modern management tools and project tracking software to monitor implementation. Standard protocols guarantee that resources are managed efficiently, transparently, and cost-effectively." },
                  { step: "3. Independent Audits & Impact Evaluation", desc: "Independent evaluators regularly review our operations to measure social outcomes. We verify achievements against baseline data to optimize our programs and share report findings with donors and partners." }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-xs font-sora font-semibold text-[#2E2E2E]">{item.step}</h4>
                    <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ground Action Block */}
            <div className="cinematic-reveal pt-5 border-t border-[#D8C6A8]/45 space-y-3.5">
              <h3 className="text-sm font-sora font-semibold text-[#2E2E2E] uppercase tracking-wider">Ground Action</h3>
              <p className="text-xs md:text-sm font-semibold text-[#555555] leading-relaxed font-inter">
                Every picture tells a story of hope, compassion, and change.
              </p>
              <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
                These moments reflect our journey of empowering communities and creating a better tomorrow.
              </p>
            </div>

            {/* Driving Change Block */}
            <div className="cinematic-reveal pt-5 border-t border-[#D8C6A8]/45 space-y-3.5">
              <h3 className="text-sm font-sora font-semibold text-[#2E2E2E] uppercase tracking-wider">Driving Change Through Community Action</h3>
              <p className="text-xs md:text-sm font-semibold text-[#555555] leading-relaxed font-inter">
                Every Event Inspires Awareness. Every Campaign Creates Impact.
              </p>
              <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
                At Brij Bhoomi Foundation, our events and campaigns are designed to educate, inspire, and mobilize communities toward meaningful social change. From awareness drives and medical camps to environmental initiatives and youth programs, every event strengthens our mission of building a healthier, more inclusive, and sustainable society. We believe that collective participation creates lasting impact—and every individual has the power to make a difference.
              </p>
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
              {impactStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="premium-card p-6 flex flex-col justify-between text-[#2E2E2E] hover:shadow-lg transition-all duration-500 w-full"
                  style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.01)" }}
                >
                  <div className="flex gap-4 items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#8B6F47] text-white flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
                      {getIcon(stat.iconName)}
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
              {successStories.map((story, idx) => (
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
              {sdgs.map((sdg, idx) => (
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
              {transparencyPoints.map((item, idx) => (
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
              {testimonials.map((quote, idx) => (
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
      </div>
    </section>
  );
}
