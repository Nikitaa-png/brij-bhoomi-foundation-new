import React, { useRef } from "react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function DonationCTA() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  return (
    <section id="donate-cta" className="w-screen px-[8vw] py-12 md:py-16 flex items-center bg-transparent relative z-20 border-t border-white/5">
      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left text-white">
        
        {/* Tag */}
        <span className="cinematic-reveal text-[10px] uppercase tracking-[0.3em] text-brij-accent font-semibold mb-4 block">
          Make a Difference
        </span>

        {/* Heading */}
        <h2 className="cinematic-reveal text-3xl md:text-5xl font-sora font-semibold tracking-tight leading-tight mb-4 text-white">
          Your Support Can Change Lives
        </h2>

        {/* Description */}
        <p className="cinematic-reveal text-sm md:text-base font-light text-white/80 max-w-xl leading-relaxed mb-8 tracking-wide font-inter">
          100% of your contributions fund direct field operations. Help us restore sacred water reservoirs (Kunds), print vocational guides for women, and supply books to village children.
        </p>

        {/* CTAs */}
        <div className="cinematic-reveal flex flex-col sm:flex-row gap-4 justify-start items-center w-full sm:w-auto">
          <button
            onClick={() => alert("Donation gateway integration coming soon.")}
            className="px-6 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-wider border border-white hover:bg-transparent hover:text-white transition-editorial rounded-sm w-full sm:w-auto"
          >
            Donate Now
          </button>
          <button
            onClick={() => alert("Event sponsorship options opening shortly.")}
            className="px-6 py-2.5 bg-transparent border border-white text-white text-xs font-semibold uppercase tracking-wider hover:text-brij-accent hover:border-brij-accent transition-editorial rounded-sm w-full sm:w-auto text-center"
          >
            Sponsor an Event
          </button>
        </div>

      </div>
    </section>
  );
}
