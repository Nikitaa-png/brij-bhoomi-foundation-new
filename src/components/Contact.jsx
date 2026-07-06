import React, { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function Contact() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out. We will get back to you shortly.");
  };

  return (
    <section id="contact" className="w-screen px-[8vw] py-28 lg:py-36 flex items-center bg-[#F2E8D6] relative z-20 border-t border-[#D8C6A8] overflow-hidden">
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-contact" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.03 0" />
          </filter>
        </defs>
      </svg>

      {/* Warm Background layer */}
      <div className="absolute inset-0 bg-[#F2E8D6] overflow-hidden z-0 pointer-events-none">
        {/* Soft Grainy Paper Noise Overlay (3% opacity) */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay animate-drift-texture" style={{ filter: "url(#grainy-paper-contact)" }} />
      </div>

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left relative z-10">
        
        {/* Header Block */}
        <div className="cinematic-reveal border-b border-[#D8C6A8] pb-6 mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-semibold tracking-tight text-[#2E2E2E]">
            Connect With Us
          </h2>
        </div>

        {/* Dual Column Widescreen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 w-full">
          
          {/* Left Column: Contact Details */}
          <div className="cinematic-reveal lg:col-span-6 space-y-6">
            <p className="text-xs md:text-sm text-[#4E4E4E] leading-relaxed font-inter font-normal">
              Have questions about our initiatives, volunteer opportunities, or donation transparency? Reach out to our field office in Vrindavan. We welcome collaborations with cultural scholars, ecologists, and philanthropists.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3 items-start">
                <div className="p-2.5 bg-[#F2E8D6] border border-[#D8C6A8] text-[#B67A2A] rounded-sm mt-0.5">
                  <MapPin size={14} />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-[#2E2E2E] uppercase tracking-wider mb-1.5 font-sora">
                    Field Office Address
                  </h4>
                  <p className="text-xs md:text-[13px] text-[#4E4E4E] leading-relaxed font-inter font-normal">
                    Brij Bhoomi Foundation, near Raman Reti,<br />
                    Vrindavan, Mathura District, UP, 281121, India
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2.5 bg-[#F2E8D6] border border-[#D8C6A8] text-[#B67A2A] rounded-sm mt-0.5">
                  <Phone size={14} />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-[#2E2E2E] uppercase tracking-wider mb-1.5 font-sora">
                    Phone Inquiry
                  </h4>
                  <p className="text-xs md:text-[13px] text-[#4E4E4E] font-inter font-normal">
                    +91 565 244 1088 (Office Hours)
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2.5 bg-[#F2E8D6] border border-[#D8C6A8] text-[#B67A2A] rounded-sm mt-0.5">
                  <Mail size={14} />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-[#2E2E2E] uppercase tracking-wider mb-1.5 font-sora">
                    Email Correspondence
                  </h4>
                  <p className="text-xs md:text-[13px] text-[#2E2E2E] hover:text-[#B67A2A] transition-editorial font-inter font-normal">
                    <a href="mailto:info@brijbhoomifoundation.org">info@brijbhoomifoundation.org</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (FCFAF5 Card) */}
          <div
            className="cinematic-reveal lg:col-span-6 premium-card p-8 w-full"
          >
            <h4 className="text-xs font-semibold text-[#2E2E2E] uppercase tracking-wider mb-4 font-sora">
              Send an Inquiry
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white border border-[#D8C6A8] text-xs text-[#2E2E2E] placeholder-[#555555]/55 focus:outline-none focus:border-[#B67A2A] focus:ring-1 focus:ring-[#B67A2A]/40 transition-all duration-300 rounded-[3px]"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 bg-white border border-[#D8C6A8] text-xs text-[#2E2E2E] placeholder-[#555555]/55 focus:outline-none focus:border-[#B67A2A] focus:ring-1 focus:ring-[#B67A2A]/40 transition-all duration-300 rounded-[3px]"
              />
              <textarea
                placeholder="Your message..."
                required
                rows={3}
                className="w-full px-4 py-3 bg-white border border-[#D8C6A8] text-xs text-[#2E2E2E] placeholder-[#555555]/55 focus:outline-none focus:border-[#B67A2A] focus:ring-1 focus:ring-[#B67A2A]/40 transition-all duration-300 rounded-[3px] resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#8B6F47] text-white text-[11px] font-inter font-semibold uppercase tracking-widest border border-[#8B6F47] hover:bg-[#1F1F1F] hover:border-[#1F1F1F] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 rounded-[3px] hover:scale-[1.03] active:scale-[0.98] shadow-sm"
              >
                Send Message <Send size={11} />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
