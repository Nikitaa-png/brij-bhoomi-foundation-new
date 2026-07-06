import React, { useState, useRef } from "react";
import { Heart, BookOpen, ShieldCheck, HelpCircle, Users, CheckCircle, Info, Landmark, ChevronDown, ChevronUp } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function DonationCTA() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const impactCards = [
    {
      amount: "₹501",
      title: "Education Support",
      desc: "Help provide educational materials, books, and learning resources to children.",
      supports: ["School Supplies", "Learning Kits", "Educational Awareness"],
    },
    {
      amount: "₹1,001",
      title: "Healthcare Support",
      desc: "Support free medical camps and preventive healthcare initiatives.",
      supports: ["Medical Checkups", "Essential Medicines", "Health Awareness"],
    },
    {
      amount: "₹2,501",
      title: "Women Empowerment",
      desc: "Help women gain vocational skills, digital literacy, and financial independence.",
      supports: ["Skill Development", "Entrepreneurship Training", "Leadership Programs"],
    },
    {
      amount: "₹5,001",
      title: "Rural Development",
      desc: "Support clean water, sanitation, and infrastructure development in rural communities.",
      supports: ["Community Projects", "Clean Water", "Village Development"],
    },
    {
      amount: "₹10,001+",
      title: "Transform Lives",
      desc: "Become a major contributor and help us expand multiple social initiatives across India.",
      supports: ["Multi-sector Projects", "Community Development", "Long-term Sustainable Impact"],
    },
  ];

  const waysToGive = [
    {
      title: "One-Time Donation",
      desc: "Support any ongoing initiative with a single contribution.",
    },
    {
      title: "Monthly Giving",
      desc: "Become a monthly donor and create continuous impact throughout the year.",
    },
    {
      title: "Sponsor a Project",
      desc: "Fund an entire education, healthcare, environmental, or rural development initiative.",
    },
    {
      title: "Corporate CSR Partnership",
      desc: "Partner with Brij Bhoomi Foundation to implement high-impact Corporate Social Responsibility (CSR) programs.",
    },
  ];

  const faqs = [
    {
      q: "Is my donation secure?",
      a: "Yes. We use trusted and secure payment gateways to protect every transaction.",
    },
    {
      q: "Where does my donation go?",
      a: "Your donation is allocated to education, healthcare, environmental initiatives, women empowerment, rural development, disaster relief, and other approved programs based on organizational priorities and donor intent.",
    },
    {
      q: "Will I receive a donation receipt?",
      a: "Yes. A receipt will be issued after successful payment for your records and, where applicable, tax purposes.",
    },
    {
      q: "Can I make recurring donations?",
      a: "Yes. You can choose monthly, quarterly, or annual recurring contributions if enabled.",
    },
    {
      q: "Can companies donate through CSR?",
      a: "Absolutely. We actively collaborate with corporate organizations under their CSR initiatives and strategic partnerships.",
    },
  ];

  const donationSchema = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    "recipient": {
      "@type": "NGO",
      "name": "Brij Bhoomi Foundation",
      "url": "https://www.brijbhoomifoundation.org/"
    },
    "description": "Donate securely to support Brij Bhoomi Foundation education, healthcare, and environmental conservation projects with 80G tax exemption benefits."
  };

  return (
    <section id="donate-cta" className="w-screen px-[8vw] py-28 lg:py-36 bg-[#FAF7F0] relative z-20 border-t border-[#1f1a14]/10 overflow-hidden text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donationSchema) }}
      />
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-donation" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.04 0" />
          </filter>
        </defs>
      </svg>

      {/* Static Background layer */}
      <div className="absolute inset-0 bg-[#FAF7F0] overflow-hidden z-0 pointer-events-none">
        {/* Slow Drifting Grainy Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.055] mix-blend-overlay animate-drift-texture" style={{ filter: "url(#grainy-paper-donation)" }} />
      </div>

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none relative z-10 space-y-20">
        
        {/* Hero Section */}
        <div className="max-w-3xl space-y-6">
          <span className="cinematic-reveal text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block">
            Donate
          </span>
          <h2 className="cinematic-reveal text-3xl md:text-5xl font-sora font-semibold tracking-tight leading-tight text-[#1f1a14]">
            Your Contribution Can Change Lives
          </h2>
          <p className="cinematic-reveal text-sm font-semibold text-[#B67A2A] leading-relaxed font-inter">
            Every Donation Creates Hope. Every Contribution Builds a Better Tomorrow.
          </p>
          <p className="cinematic-reveal text-xs md:text-sm text-[#3c372f] leading-relaxed font-inter font-normal">
            At Brij Bhoomi Foundation, every contribution directly supports initiatives that improve education, healthcare, women empowerment, environmental conservation, rural development, youth development, and humanitarian relief. Whether you donate once or become a monthly supporter, your generosity helps us create sustainable and measurable social impact. Together, we can transform lives and build stronger communities.
          </p>
        </div>

        {/* Why Donate */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#1f1a14]">Why Donate?</h3>
          <p className="text-xs md:text-sm text-[#555555] font-inter font-normal">
            Every donation—big or small—brings us closer to a more inclusive and compassionate society. Your contribution helps us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Provide quality education to underprivileged children.",
              "Organize free healthcare and medical camps.",
              "Empower women through education and skill development.",
              "Support environmental conservation initiatives.",
              "Improve rural communities.",
              "Respond during disasters and humanitarian emergencies.",
              "Create sustainable livelihood opportunities.",
              "Expand community development projects."
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#B67A2A] mt-2 flex-shrink-0 rounded-full" />
                <span className="text-xs md:text-sm text-[#3C372F] font-inter font-normal leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Choose Your Impact */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#1f1a14]">Choose Your Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {impactCards.map((card, idx) => (
              <div 
                key={idx} 
                className="premium-card p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-500"
              >
                <div className="space-y-4">
                  <span className="text-2xl font-sora font-bold text-[#8B6F47]">{card.amount}</span>
                  <div>
                    <h4 className="text-sm font-sora font-semibold text-[#1f1a14]">{card.title}</h4>
                    <p className="text-xs text-[#555555] mt-1 leading-relaxed font-inter font-normal">{card.desc}</p>
                  </div>
                  <ul className="space-y-1.5 pt-2 border-t border-[#D8C6A8]/20">
                    {card.supports.map((item, sIdx) => (
                      <li key={sIdx} className="text-xs text-[#555555] flex items-center gap-2 font-inter font-normal">
                        <span className="w-1.5 h-1.5 bg-[#B67A2A] rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => alert(`Initiating donation for ${card.title}`)}
                  className="mt-6 w-full py-3 bg-[#8B6F47] text-white text-[11px] font-inter font-semibold uppercase tracking-widest hover:bg-black rounded-[3px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-sm"
                >
                  Select & Give
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Other Ways to Give & In-Kind */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#D8C6A8] pt-12">
          {/* Left Column: Other Ways to Give (col-span-7) */}
          <div className="lg:col-span-7 space-y-6 cinematic-reveal">
            <h3 className="text-xl font-sora font-semibold text-[#1f1a14]">Other Ways to Give</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {waysToGive.map((way, idx) => (
                <div key={idx} className="premium-card p-6 flex flex-col justify-between hover:shadow-md transition-all duration-500">
                  <div className="space-y-2">
                    <h4 className="text-sm font-sora font-semibold text-[#1f1a14]">{way.title}</h4>
                    <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">{way.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: In-Kind Donations (col-span-5) */}
          <div className="lg:col-span-5 premium-card p-8 space-y-4 cinematic-reveal">
            <h3 className="text-lg font-sora font-semibold text-[#1f1a14]">In-Kind Donations</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              Support through physical donations:
            </p>
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              {[
                "Educational Materials",
                "Medical Equipment",
                "Books",
                "Computers",
                "Food Supplies",
                "Clothing",
                "Hygiene Kits",
                "Essential Resources"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle size={12} className="text-[#B67A2A] flex-shrink-0" />
                  <span className="text-xs text-[#3C372F] font-inter font-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Donation Transparency & Secure Payments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#D8C6A8] pt-12">
          {/* Transparency */}
          <div className="space-y-4 cinematic-reveal">
            <h3 className="text-xl font-sora font-semibold text-[#1f1a14]">Donation Transparency</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal mb-2">
              We believe transparency builds trust. Every contribution is utilized responsibly through:
            </p>
            <div className="grid grid-cols-2 gap-3.5">
              {[
                "Financial Accountability",
                "Regular Project Updates",
                "Annual Reports",
                "Donor Acknowledgement",
                "Transparent Fund Utilization",
                "Ethical Governance"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 premium-card px-4 py-3 rounded-lg hover:shadow-md transition-shadow">
                  <ShieldCheck size={14} className="text-[#B67A2A] flex-shrink-0" />
                  <span className="text-xs font-inter font-semibold text-[#1f1a14]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secure Payments */}
          <div className="space-y-4 premium-card p-8 cinematic-reveal">
            <h3 className="text-lg font-sora font-semibold text-[#1f1a14]">Secure Payment Options</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal mb-4">
              Donate securely using our integrated trust gateways:
            </p>
            <div className="grid grid-cols-3 gap-2.5 text-center">
              {[
                "UPI",
                "Credit Cards",
                "Debit Cards",
                "Net Banking",
                "NEFT / RTGS",
                "Bank Transfer"
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-white border border-[#D8C6A8]/50 rounded-[4px] text-xs font-inter font-semibold text-[#1f1a14] shadow-sm hover:scale-[1.03] transition-transform duration-300 flex items-center justify-center cursor-default">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#888] italic font-inter font-normal leading-relaxed pt-2">
              * International Donations subject to applicable regulations, if enabled.
            </p>
          </div>
        </div>

        {/* Tax Benefits Note */}
        <div className="cinematic-reveal bg-[#FAF7F0] border border-[#D8C6A8]/60 border-l-4 border-l-[#B67A2A] p-6 rounded-r-[16px] flex gap-4 items-start shadow-sm max-w-4xl transition-all duration-300">
          <Info size={18} className="text-[#B67A2A] mt-0.5 flex-shrink-0" />
          <div className="space-y-2">
            <h4 className="text-xs font-sora font-semibold text-[#1f1a14]">Tax Benefits Note</h4>
            <p className="text-[11px] text-[#555555] leading-relaxed font-inter font-normal">
              If the Foundation is registered under the applicable provisions of the Income Tax Act, 1961 such as Section 80G, eligible donors may claim tax benefits as per Indian tax laws. Tax benefits are available only if the Foundation has the necessary registrations and subject to prevailing laws.
            </p>
          </div>
        </div>

        {/* Side-by-side: FAQs & Final CTA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-t border-[#D8C6A8] pt-12">
          
          {/* Frequently Asked Questions (col-span-5) */}
          <div className="lg:col-span-5 space-y-6 cinematic-reveal flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-sora font-semibold text-[#1f1a14] mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="premium-card overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full py-4 px-5 flex items-center justify-between text-left focus:outline-none hover:bg-[#F2E8D6]/20 transition-all duration-300"
                      >
                        <span className="text-[13px] font-sora font-semibold text-[#1f1a14] flex items-center gap-2.5">
                          <HelpCircle size={14} className="text-[#B67A2A] flex-shrink-0" />
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp size={14} className="text-[#555] flex-shrink-0" />
                        ) : (
                          <ChevronDown size={14} className="text-[#555] flex-shrink-0" />
                        )}
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-[200px] border-t border-[#D8C6A8]/50 py-4 px-5" : "max-h-0 overflow-hidden"
                        }`}
                      >
                        <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Final Call to Action (col-span-7) */}
          <div className="lg:col-span-7 bg-[#8B6F47] text-white p-8 md:p-12 rounded-[24px] border border-[#8B6F47]/20 shadow-lg text-center md:text-left flex flex-col justify-between cinematic-reveal">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/80 font-sora font-semibold block">
                Become a Changemaker
              </span>
              <h3 className="text-xl md:text-2xl font-sora font-semibold tracking-tight text-white leading-tight">
                Together, We Can Build a Better Future
              </h3>
              <p className="text-xs text-white/80 leading-relaxed font-inter font-normal">
                Every act of kindness creates a ripple effect. Your support enables us to empower children, strengthen families, protect the environment, uplift communities, and create lasting change.
              </p>
              <span className="text-xs md:text-sm font-sora italic text-white/95 block font-medium pt-1">
                Donate Today. Empower Tomorrow.
              </span>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-8 justify-center md:justify-start">
              <button
                onClick={() => alert("Redirecting to secure Donation Portal...")}
                className="px-5 py-2.5 bg-white text-[#8B6F47] text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 rounded-[3px] shadow-md hover:scale-[1.04] active:scale-[0.97]"
              >
                ❤️ Donate Now
              </button>
              <button
                onClick={() => alert("Initiating monthly recurring donation setup...")}
                className="px-5 py-2.5 bg-transparent border border-white text-white text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] hover:scale-[1.04] active:scale-[0.97]"
              >
                🤝 Become Monthly Donor
              </button>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-transparent border border-white text-white text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] font-medium hover:scale-[1.04] active:scale-[0.97]"
              >
                🏢 Partner Through CSR
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-transparent border border-white text-white text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] font-medium hover:scale-[1.04] active:scale-[0.97]"
              >
                📞 Contact Our Team
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
