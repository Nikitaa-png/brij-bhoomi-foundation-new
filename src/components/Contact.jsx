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
    <section id="contact" className="w-screen px-[8vw] py-12 md:py-16 flex items-center bg-transparent relative z-20 border-t border-white/5">
      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none text-left text-white">
        
        {/* Header Block */}
        <div className="cinematic-reveal border-b border-white/10 pb-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brij-accent font-semibold block mb-1">
            Get In Touch
          </span>
          <h2 className="text-2xl md:text-3xl font-sora font-semibold tracking-tight text-white">
            Connect With Us
          </h2>
        </div>

        {/* Dual Column Widescreen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full">
          
          {/* Left Column: Contact Details */}
          <div className="cinematic-reveal lg:col-span-6 space-y-6">
            <p className="text-xs text-white/80 leading-relaxed font-inter">
              Have questions about our initiatives, volunteer opportunities, or donation transparency? Reach out to our field office in Vrindavan. We welcome collaborations with cultural scholars, ecologists, and philanthropists.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-white/10 border border-white/10 text-brij-accent rounded-sm mt-0.5">
                  <MapPin size={14} />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-white uppercase tracking-wider mb-0.5">
                    Field Office Address
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed font-inter">
                    Brij Bhoomi Foundation, near Raman Reti,<br />
                    Vrindavan, Mathura District, UP, 281121, India
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 bg-white/10 border border-white/10 text-brij-accent rounded-sm mt-0.5">
                  <Phone size={14} />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-white uppercase tracking-wider mb-0.5">
                    Phone Inquiry
                  </h4>
                  <p className="text-xs text-white/70">
                    +91 565 244 1088 (Office Hours)
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 bg-white/10 border border-white/10 text-brij-accent rounded-sm mt-0.5">
                  <Mail size={14} />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-white uppercase tracking-wider mb-0.5">
                    Email Correspondence
                  </h4>
                  <p className="text-xs text-white/70 hover:text-brij-accent transition-editorial">
                    <a href="mailto:info@brijbhoomifoundation.org">info@brijbhoomifoundation.org</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Dark Glass) */}
          <div className="cinematic-reveal lg:col-span-6 bg-black/25 backdrop-blur-sm p-5 border border-white/20 rounded-sm w-full">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Send an Inquiry
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 bg-white/5 border border-white/20 text-xs text-white placeholder-white/50 focus:outline-none focus:border-brij-accent transition-editorial rounded-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-3 py-2 bg-white/5 border border-white/20 text-xs text-white placeholder-white/50 focus:outline-none focus:border-brij-accent transition-editorial rounded-sm"
              />
              <textarea
                placeholder="Your message..."
                required
                rows={3}
                className="w-full px-3 py-2 bg-white/5 border border-white/20 text-xs text-white placeholder-white/50 focus:outline-none focus:border-brij-accent transition-editorial rounded-sm resize-none"
              />
              <button
                type="submit"
                className="w-full py-2 bg-white text-black text-[10px] font-semibold uppercase tracking-wider border border-white hover:bg-transparent hover:text-white transition-editorial flex items-center justify-center gap-1.5 rounded-sm"
              >
                Send Message <Send size={10} />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
