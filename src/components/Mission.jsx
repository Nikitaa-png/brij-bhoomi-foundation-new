import React from "react";
import { Compass, Eye } from "lucide-react";

export default function Mission() {
  return (
    <section id="mission" className="w-screen px-[8vw] py-12 md:py-16 flex items-center bg-transparent relative z-20 border-t border-white/5">
      {/* Widescreen Content Wrapper */}
      <div className="w-full max-w-none text-left text-white">
        
        {/* Editorial Heading */}
        <div className="cinematic-reveal border-b border-white/10 pb-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brij-accent font-semibold block mb-1">
            Core Intent
          </span>
          <h2 className="text-2xl md:text-3xl font-sora font-semibold tracking-tight text-white">
            Mission & Vision
          </h2>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 w-full">
          {/* Mission */}
          <div className="cinematic-reveal flex gap-4 items-start bg-black/25 backdrop-blur-sm p-6 border border-white/20 rounded-sm w-full">
            <div className="p-2 bg-white/10 border border-white/10 text-brij-accent rounded-sm flex-shrink-0 mt-1">
              <Compass size={18} />
            </div>
            <div>
              <h4 className="text-sm font-sora font-semibold text-white mb-2">Our Mission</h4>
              <p className="text-xs text-white/70 leading-relaxed font-inter">
                To protect, preserve, and promote the unique cultural, artistic, and natural heritage of the Brij region, while simultaneously enabling sustainable socio-economic opportunities through community-led empowerment programs.
              </p>
            </div>
          </div>
          
          {/* Vision */}
          <div className="cinematic-reveal flex gap-4 items-start bg-black/25 backdrop-blur-sm p-6 border border-white/20 rounded-sm w-full">
            <div className="p-2 bg-white/10 border border-white/10 text-brij-accent rounded-sm flex-shrink-0 mt-1">
              <Eye size={18} />
            </div>
            <div>
              <h4 className="text-sm font-sora font-semibold text-white mb-2">Our Vision</h4>
              <p className="text-xs text-white/70 leading-relaxed font-inter">
                To nurture a vibrant, self-reliant Brij region where traditional culture, nature, and community thrive together in harmony, fostering local pride and providing sustainable pathways of growth.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
