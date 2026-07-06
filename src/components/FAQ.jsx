import React, { useState, useRef } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function FAQ() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    // About
    {
      category: "About Us",
      q: "What is Brij Bhoomi Foundation?",
      a: "Brij Bhoomi Foundation is a non-profit organization dedicated to creating sustainable social impact through initiatives in education, healthcare, women empowerment, environmental conservation, rural development, youth development, and humanitarian support."
    },
    {
      category: "About Us",
      q: "Where does the Foundation work?",
      a: "Our programs are designed to serve communities across India through collaborations with local communities, volunteers, institutions, corporate partners, and government agencies."
    },
    {
      category: "About Us",
      q: "Is Brij Bhoomi Foundation a registered NGO?",
      a: "The Foundation operates in accordance with applicable laws and regulations. Registration details and compliance documents will be available in the Transparency section."
    },
    // Donations
    {
      category: "Donations",
      q: "How can I donate?",
      a: "You can contribute securely through our online donation platform using available payment methods such as UPI, debit/credit cards, net banking, or bank transfer."
    },
    {
      category: "Donations",
      q: "Is my donation secure?",
      a: "Yes. All online donations are processed through secure payment gateways to ensure safe and protected transactions."
    },
    {
      category: "Donations",
      q: "Will I receive a donation receipt?",
      a: "Yes. A receipt will be shared after a successful donation. If applicable, tax-related documents will also be provided."
    },
    {
      category: "Donations",
      q: "Can I make recurring donations?",
      a: "Yes. Monthly or recurring donations can be enabled where supported."
    },
    // Volunteering
    {
      category: "Volunteering",
      q: "Who can volunteer?",
      a: "Anyone passionate about creating positive social impact can volunteer, including students, professionals, educators, healthcare workers, retirees, and corporate employees."
    },
    {
      category: "Volunteering",
      q: "Do I need previous experience?",
      a: "No. Training and guidance are provided based on the selected volunteer role."
    },
    {
      category: "Volunteering",
      q: "Can I volunteer remotely?",
      a: "Yes. We offer both on-site and remote volunteering opportunities depending on the project."
    },
    {
      category: "Volunteering",
      q: "Will I receive a volunteer certificate?",
      a: "Yes. Active volunteers receive a certificate upon successful completion of their volunteering period or assigned project."
    },
    // CSR & Partnerships
    {
      category: "CSR",
      q: "Can organizations partner with Brij Bhoomi Foundation?",
      a: "Yes. We welcome partnerships with corporate organizations, educational institutions, NGOs, government bodies, and philanthropic organizations."
    },
    {
      category: "CSR",
      q: "Do you support CSR projects?",
      a: "Yes. We collaborate with organizations to implement impactful Corporate Social Responsibility (CSR) initiatives aligned with community needs and sustainable development goals."
    },
    // Transparency & Governance
    {
      category: "Transparency",
      q: "How are donations utilized?",
      a: "Every contribution is allocated responsibly toward approved programs and initiatives while maintaining transparency and accountability."
    },
    {
      category: "Transparency",
      q: "Do you publish annual reports?",
      a: "Yes. Annual reports, impact reports, and other relevant documents will be available in the Transparency section."
    },
    {
      category: "Transparency",
      q: "Does the Foundation undergo audits?",
      a: "Financial records are reviewed through applicable audit processes in accordance with governing laws and organizational policies."
    },
    // Programs
    {
      category: "Programs",
      q: "What areas do you work in?",
      a: "Our initiatives focus on Education, Healthcare, Women Empowerment, Environmental Conservation, Rural Development, Youth Development, Disaster Relief, and Community Development."
    },
    {
      category: "Programs",
      q: "Can I sponsor a specific project?",
      a: "Yes. Depending on availability, donors and partners may choose to support specific programs or initiatives."
    },
    // Contact
    {
      category: "Contact",
      q: "How can I contact Brij Bhoomi Foundation?",
      a: "You can reach us through the Contact Us page, email, or phone during official working hours."
    },
    {
      category: "Contact",
      q: "How can I stay updated?",
      a: "Follow us on social media and subscribe to our newsletter to receive updates on events, campaigns, impact stories, and volunteer opportunities."
    }
  ];

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="faq" className="w-screen px-[8vw] py-28 lg:py-36 flex items-center bg-[#FCFAF5] relative z-20 border-t border-[#D8C6A8] overflow-hidden text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-faq" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.03 0" />
          </filter>
        </defs>
      </svg>

      {/* Warm Background layer */}
      <div className="absolute inset-0 bg-[#FCFAF5] overflow-hidden z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay animate-drift-texture" style={{ filter: "url(#grainy-paper-faq)" }} />
      </div>

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

        {/* FAQ Accordion Grid - 2 columns on desktop for space optimization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="cinematic-reveal premium-card overflow-hidden hover:shadow-md transition-all duration-350"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-4 px-5 flex items-center justify-between text-left gap-4 hover:bg-[#F2E8D6]/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[8px] uppercase tracking-wider bg-[#8B6F47]/10 text-[#8B6F47] px-2.5 py-0.5 rounded-full font-sora font-bold w-max flex-shrink-0">
                      {faq.category}
                    </span>
                    <span className="text-[13px] font-sora font-semibold text-[#1F1F1F] leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <div className="text-[#B67A2A] flex-shrink-0">
                    {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                  </div>
                </button>

                {/* Answer Body */}
                <div
                  className={`transition-all duration-350 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-[#D8C6A8]/50" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="p-5 text-xs text-[#555555] leading-relaxed font-inter font-normal">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

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
