import React from "react";
import { Compass, BookOpen, Users, Leaf, ArrowRight } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Compass size={22} className="text-brij-accent" />,
      title: "Cultural Preservation",
      desc: "Safeguarding Sanjhi art, traditional crafts, and spiritual heritage.",
    },
    {
      icon: <BookOpen size={22} className="text-brij-accent" />,
      title: "Education & Empowerment",
      desc: "Providing knowledge, skills, and resources to empower every individual.",
    },
    {
      icon: <Users size={22} className="text-brij-accent" />,
      title: "Community Development",
      desc: "Building stronger communities through education, awareness & support.",
    },
    {
      icon: <Leaf size={22} className="text-brij-accent" />,
      title: "Environmental Care",
      desc: "Promoting eco-friendly practices and preserving our sacred environment.",
    },
  ];

  return (
    <section id="about" className="w-screen py-20 px-[8vw] flex items-center bg-transparent relative z-20 border-t border-white/5">
      {/* Widescreen Content Wrapper */}
      <div className="w-full max-w-none text-left text-white">
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start w-full">
          
          {/* Left Column: About Summary (col-span-5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="cinematic-reveal">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brij-accent font-semibold block mb-2">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight leading-tight text-white">
                About<br />Brij Bhoomi Foundation
              </h2>
            </div>
            
            <p className="cinematic-reveal text-xs text-white/70 leading-relaxed font-inter">
              We are a non-profit organization working at the intersection of culture, education, environment, and social welfare. Our efforts are rooted in the values of compassion, service, and community upliftment.
            </p>

            <div className="cinematic-reveal pt-2">
              <a
                href="#programs"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-transparent border border-white/30 text-white text-[10px] font-semibold uppercase tracking-wider hover:text-brij-accent hover:border-brij-accent transition-editorial rounded-sm"
              >
                Learn More About Us <ArrowRight size={11} />
              </a>
            </div>
          </div>
          
          {/* Right Column: 4 Pillars Row (col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full lg:mt-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="cinematic-reveal space-y-3.5">
                <div className="p-2.5 bg-white/5 border border-white/10 rounded-sm w-fit">
                  {pillar.icon}
                </div>
                <h3 className="text-xs font-sora font-semibold text-white tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-[10px] text-white/60 leading-relaxed font-inter font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}
