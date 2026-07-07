import React, { useRef } from "react";
import { useCinematicReveal } from "../../hooks/useCinematicReveal";
import GrainyBackground from "../common/GrainyBackground";
import FaqAccordion from "../common/FaqAccordion";
import { generalFaqs } from "../../data/faqs";

export default function FAQ() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": generalFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="faq" className="w-screen px-[8vw] py-28 lg:py-36 flex items-center relative z-20 border-t border-[#D8C6A8] overflow-hidden text-left bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <GrainyBackground 
        id="grainy-paper-faq" 
        bgClass="bg-[#FCFAF5]" 
        opacityClass="opacity-[0.04]" 
        matrixValue="0.03" 
      />

      <div ref={containerRef} className="w-full max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Header Block */}
        <div className="space-y-4">
          <span className="cinematic-reveal text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold mb-4 block">
            Frequently Asked Questions (FAQs)
          </span>
          <h2 className="cinematic-reveal text-3xl md:text-4xl font-sora font-semibold tracking-tight text-[#2E2E2E] leading-tight mb-2">
            Find Answers to Common Questions
          </h2>
          <p className="cinematic-reveal text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal max-w-3xl">
            Whether you want to volunteer, donate, partner with us, or learn more about our work, we've answered some of the most frequently asked questions below.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <FaqAccordion 
          items={generalFaqs} 
          showCategory={true} 
          gridClass="grid grid-cols-1 lg:grid-cols-2 gap-6" 
        />

        {/* Still Have Questions CTA */}
        <div className="cinematic-reveal bg-[#8B6F47] text-white p-8 md:p-12 rounded-[24px] border border-[#8B6F47]/20 shadow-lg text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/80 font-sora font-semibold block">
              Still Have Questions?
            </span>
            <h3 className="text-xl font-sora font-semibold text-white leading-tight">
              We're here to help.
            </h3>
            <p className="text-xs text-white/80 font-inter font-normal">
              If you couldn't find the answer you were looking for, feel free to get in touch with our team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-white text-[#8B6F47] text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 rounded-[3px] shadow-md hover:scale-[1.04] active:scale-[0.97]"
            >
              📩 Contact Us
            </a>
            <a
              href="#donate-cta"
              className="px-5 py-2.5 bg-transparent border border-white text-white text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] font-medium hover:scale-[1.04] active:scale-[0.97]"
            >
              ❤️ Donate Now
            </a>
            <a
              href="#volunteer-cta"
              className="px-5 py-2.5 bg-transparent border border-white text-white text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] font-medium hover:scale-[1.04] active:scale-[0.97]"
            >
              🤝 Become a Volunteer
            </a>
            <button
              onClick={() => alert("Subscribing to newsletter updates...")}
              className="px-5 py-2.5 bg-transparent border border-white text-white text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] font-medium hover:scale-[1.04] active:scale-[0.97]"
            >
              📰 Subscribe to Newsletter
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
