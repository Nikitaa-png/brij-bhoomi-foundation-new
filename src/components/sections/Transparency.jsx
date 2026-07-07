import React, { useRef } from "react";
import { FileText, FileSpreadsheet, ShieldCheck, Award, Download, CheckCircle, Scale } from "lucide-react";
import { useCinematicReveal } from "../../hooks/useCinematicReveal";
import GrainyBackground from "../common/GrainyBackground";
import FaqAccordion from "../common/FaqAccordion";
import { coreReports, governanceTeam, complianceDocuments, policies, downloadCenterList } from "../../data/transparency";
import { transparencyFaqs } from "../../data/faqs";

const getIcon = (name) => {
  switch (name) {
    case "FileText":        return <FileText className="text-[#8B6F47]" size={20} />;
    case "FileSpreadsheet": return <FileSpreadsheet className="text-[#8B6F47]" size={20} />;
    case "ShieldCheck":     return <ShieldCheck className="text-[#8B6F47]" size={20} />;
    case "Award":           return <Award className="text-[#8B6F47]" size={20} />;
    default:                return <FileText className="text-[#8B6F47]" size={20} />;
  }
};

export default function Transparency() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const triggerDownload = (fileName) => {
    alert(`Initiating download for: ${fileName} (Document Placeholder)`);
  };

  const transparencyFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": transparencyFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="transparency" className="w-screen py-28 px-[8vw] lg:py-36 bg-transparent relative z-20 border-t border-[#D8C6A8] overflow-hidden text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(transparencyFaqSchema) }}
      />
      
      <GrainyBackground 
        id="grainy-paper-transparency" 
        bgClass="bg-[#F2E8D6]" 
        opacityClass="opacity-[0.05]" 
        matrixValue="0.03" 
      />

      {/* Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none relative z-10 space-y-20">
        
        {/* Hero Section */}
        <div className="max-w-3xl space-y-6">
          <span className="cinematic-reveal text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block">
            Annual Reports & Transparency
          </span>
          <h2 className="cinematic-reveal text-3xl md:text-5xl font-sora font-semibold tracking-tight leading-tight text-[#2E2E2E]">
            Transparency Builds Trust. Accountability Creates Lasting Impact.
          </h2>
          <p className="cinematic-reveal text-sm font-semibold text-[#B67A2A] leading-relaxed font-inter">
            Committed to Responsible Governance, Ethical Practices & Complete Financial Transparency
          </p>
          <p className="cinematic-reveal text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
            At Brij Bhoomi Foundation, transparency is one of our strongest commitments. Every donation, partnership, volunteer contribution, and CSR collaboration is managed with integrity, accountability, and responsible governance. We believe that trust is earned through openness. That’s why we share reports, financial statements, impact updates, governance policies, and organizational documents to keep our stakeholders informed.
          </p>
        </div>

        {/* Commitment Principles */}
        <div className="cinematic-reveal grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-[#D8C6A8] pt-12">
          <div className="col-span-full mb-4">
            <span className="text-[10px] uppercase tracking-wider text-[#B67A2A] font-sora font-bold">Our Principles</span>
            <h3 className="text-xl font-sora font-semibold text-[#2E2E2E] mt-1">Our Commitment to Transparency</h3>
          </div>
          {[
            { title: "Transparency", desc: "Open publishing of operations, audit metrics, and program statistics." },
            { title: "Accountability", desc: "Taking full structural responsibility for the delivery and utilization of program resources." },
            { title: "Ethical Governance", desc: "Rigorous standards of leadership and advisory board oversight across campaigns." },
            { title: "Responsible Finance", desc: "Strategic fund usage focused heavily on programmatic impact vs administration." },
            { title: "Community Focus", desc: "Encouraging village and local stakeholder participation in welfare designs." },
            { title: "Sustainable Growth", desc: "Following long-term conservation and educational enhancement blueprints." }
          ].map((pr, idx) => (
            <div key={idx} className="premium-card p-6 flex flex-col justify-between">
              <h4 className="text-[13px] font-sora font-semibold text-[#2E2E2E]">{pr.title}</h4>
              <p className="text-xs text-[#555555] font-inter font-normal leading-relaxed">{pr.desc}</p>
            </div>
          ))}
        </div>

        {/* Reports Grid */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Available Documents & Audits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreReports.map((report, idx) => (
              <div 
                key={idx}
                className="premium-card p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-500"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#FAF7F0] border border-[#D8C6A8]/50 rounded-full shadow-sm">
                      {getIcon(report.iconName)}
                    </div>
                    <h4 className="text-[14px] font-sora font-semibold text-[#2E2E2E]">{report.title}</h4>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">{report.desc}</p>
                </div>
                <button
                  onClick={() => triggerDownload(report.fileName)}
                  className="mt-6 flex items-center justify-center gap-2 py-3 bg-[#FAF7F0] border border-[#D8C6A8] hover:border-[#8B6F47] text-[#8B6F47] text-[11px] font-inter font-bold uppercase tracking-widest rounded-[3px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-sm"
                >
                  <Download size={12} className="transition-transform duration-300 group-hover:translate-y-0.5" /> {report.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Governance & Compliance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#D8C6A8] pt-12">
          {/* Governance */}
          <div className="lg:col-span-6 space-y-6 cinematic-reveal">
            <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Governance</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              Brij Bhoomi Foundation follows a structured governance framework that supports ethical decision-making and responsible leadership:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {governanceTeam.map((team, idx) => (
                <div key={idx} className="premium-card p-5 flex flex-col justify-between hover:shadow-sm transition-all duration-300">
                  <h4 className="text-xs font-sora font-semibold text-[#2E2E2E] flex items-center gap-1.5">
                    <Scale size={12} className="text-[#B67A2A] flex-shrink-0" />
                    {team.role}
                  </h4>
                  <p className="text-[10px] text-[#555555] leading-relaxed font-inter font-normal mt-2">{team.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Compliance */}
          <div className="lg:col-span-6 space-y-6 cinematic-reveal">
            <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Legal Compliance</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              We maintain registrations and certificates under governing laws to ensure donor compliance and tax benefits:
            </p>
            <div className="premium-card p-6 flex flex-col justify-between h-auto space-y-4">
              <div className="space-y-3">
                {complianceDocuments.map((doc, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 border-b border-[#D8C6A8]/30 last:border-0">
                    <span className="text-[11px] font-sora font-semibold text-[#2E2E2E]">{doc.doc}</span>
                    <span className="text-[10px] text-[#8B6F47] font-inter font-semibold bg-[#FAF7F0] px-2.5 py-0.5 rounded border border-[#D8C6A8]/30">{doc.status}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <button
                  onClick={() => triggerDownload("Brij_Bhoomi_Compliance_Packet.zip")}
                  className="w-full py-3 bg-[#8B6F47] hover:bg-black text-white text-[11px] font-inter font-semibold uppercase tracking-widest rounded-[3px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md"
                >
                  📥 Download Compliance Documents
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Policies & Download Center Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#D8C6A8] pt-12">
          {/* Policies & Guidelines */}
          <div className="lg:col-span-5 space-y-4 cinematic-reveal">
            <h3 className="text-lg font-sora font-semibold text-[#2E2E2E]">Policies & Guidelines</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              Our operations are subject to standard guidelines designed to ensure safety and ethical service delivery:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {policies.map((policy, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle size={12} className="text-[#B67A2A] flex-shrink-0" />
                  <span className="text-xs text-[#3C372F] font-inter font-medium leading-tight">{policy}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Center */}
          <div className="lg:col-span-7 space-y-4 cinematic-reveal">
            <h3 className="text-lg font-sora font-semibold text-[#2E2E2E]">Download Center</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              Provide easy access to important documents and institutional resources:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {downloadCenterList.map((doc, idx) => (
                <div 
                  key={idx}
                  onClick={() => triggerDownload(`${doc.label.replace(/\s+/g, "_")}.pdf`)}
                  className="p-4 premium-card hover:border-[#8B6F47] shadow-sm hover:shadow cursor-pointer transition-all duration-300 flex items-center justify-between hover:scale-[1.03]"
                >
                  <div className="space-y-0.5">
                    <h4 className="text-[10px] font-sora font-semibold text-[#2E2E2E] leading-tight">{doc.label}</h4>
                    <span className="text-[8px] text-[#888] font-inter font-normal uppercase tracking-wider">{doc.type}</span>
                  </div>
                  <Download size={11} className="text-[#8B6F47] flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side-by-side: FAQs & Final CTA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-t border-[#D8C6A8] pt-12">
          
          {/* Frequently Asked Questions (col-span-5) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-sora font-semibold text-[#2E2E2E] mb-4">Frequently Asked Questions</h3>
              <FaqAccordion items={transparencyFaqs} iconStyle="chevron" />
            </div>
          </div>

          {/* Final Call to Action (col-span-7) */}
          <div className="lg:col-span-7 bg-[#8B6F47] text-white p-8 md:p-12 rounded-[24px] border border-[#8B6F47]/20 shadow-lg text-center md:text-left flex flex-col justify-between cinematic-reveal">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/80 font-sora font-semibold block">
                Our Promise
              </span>
              <h3 className="text-xl md:text-2xl font-sora font-semibold tracking-tight text-white leading-tight">
                We believe every stakeholder deserves honesty, transparency, and measurable results.
              </h3>
              <p className="text-xs text-white/80 leading-relaxed font-inter font-normal">
                By maintaining high standards of governance and accountability, Brij Bhoomi Foundation ensures that every contribution becomes a catalyst for positive social change.
              </p>
              <span className="text-xs md:text-sm font-sora italic text-white/95 block font-medium pt-1">
                Trust. Transparency. Transformation.
              </span>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-8 justify-center md:justify-start">
              <button
                onClick={() => triggerDownload("Brij_Bhoomi_Annual_Report_FY25.pdf")}
                className="px-5 py-2.5 bg-white text-[#8B6F47] text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 rounded-[3px] shadow-md hover:scale-[1.04] active:scale-[0.97]"
              >
                📥 Download Annual Report
              </button>
              <button
                onClick={() => triggerDownload("Brij_Bhoomi_Financial_Statements_FY25.pdf")}
                className="px-5 py-2.5 bg-transparent border border-white text-white text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] hover:scale-[1.04] active:scale-[0.97]"
              >
                📊 View Financial Reports
              </button>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-transparent border border-white text-white text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] font-medium hover:scale-[1.04] active:scale-[0.97]"
              >
                🤝 Partner With Us
              </a>
              <a
                href="#donate-cta"
                className="px-5 py-2.5 bg-transparent border border-white text-white text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] font-medium hover:scale-[1.04] active:scale-[0.97]"
              >
                ❤️ Donate With Confidence
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
