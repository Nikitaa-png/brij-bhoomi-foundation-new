import React, { useState, useRef } from "react";
import { FileText, Download, ShieldCheck, Scale, Award, FileSpreadsheet, Lock, HelpCircle, ChevronDown, ChevronUp, CheckCircle, Info, ExternalLink } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function Transparency() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const coreReports = [
    {
      title: "Annual Reports",
      desc: "Overview of the Foundation’s achievements, program highlights, financial performance, community impact, volunteer contributions, CSR partnerships, and future roadmap.",
      cta: "Download Annual Reports",
      icon: <FileText className="text-[#8B6F47]" size={20} />,
      fileName: "Brij_Bhoomi_Annual_Report_FY25.pdf"
    },
    {
      title: "Financial Transparency",
      desc: "Income & Expenditure Statements, Balance Sheets, utilization statements, donation allocations, program costs, and project financial summaries.",
      cta: "View Financial Statements",
      icon: <FileSpreadsheet className="text-[#8B6F47]" size={20} />,
      fileName: "Brij_Bhoomi_Financial_Statements_FY25.pdf"
    },
    {
      title: "Audit Reports",
      desc: "Statutory audits, internal financial check reports, compliance audits, and auditor notes designed to assure public donor confidence and legal alignment.",
      cta: "Download Audit Reports",
      icon: <ShieldCheck className="text-[#8B6F47]" size={20} />,
      fileName: "Brij_Bhoomi_Auditor_Report_FY25.pdf"
    },
    {
      title: "Impact Reports",
      desc: "Measurable metrics detailing beneficiaries reached, educational results, medical camp outcomes, rural projects, and environmental initiatives.",
      cta: "View Impact Report",
      icon: <Award className="text-[#8B6F47]" size={20} />,
      fileName: "Brij_Bhoomi_Impact_Report_FY25.pdf"
    }
  ];

  const governanceTeam = [
    { role: "Board of Trustees", desc: "Our primary oversight body, guiding long-term social strategy and ethical targets." },
    { role: "Advisory Committee", desc: "Industry leaders, educators, and doctors shaping development models." },
    { role: "Executive Leadership", desc: "Day-to-day operators implementing campaigns and managing program funds." },
    { role: "Program Management Team", desc: "Grassroots directors coordinating field events and village work." },
    { role: "Compliance Team", desc: "Legal officers maintaining registrations, audits, and statutory protocols." },
    { role: "Volunteer Coordination Team", desc: "Connecting volunteer resources with regional project activities." }
  ];

  const complianceDocuments = [
    { doc: "Trust Registration", status: "Active & Registered under Indian Trust Act" },
    { doc: "PAN & TAN Documents", status: "Verified & Tax-compliant" },
    { doc: "12A Registration", status: "Granted by Income Tax Department" },
    { doc: "80G Tax Exemption", status: "Granted for tax benefit provisions to donors" },
    { doc: "CSR Eligibility Details", status: "Registered with MCA (Form CSR-1)" },
    { doc: "NGO DARPAN ID", status: "Registered with NITI Aayog portal" },
    { doc: "FCRA Compliance status", status: "Available if/where applicable" }
  ];

  const policies = [
    "Child Protection Policy",
    "Volunteer Policy",
    "Safeguarding Policy",
    "Anti-Harassment Policy",
    "Code of Ethics",
    "Anti-Corruption Policy",
    "Financial Management Policy",
    "Data Privacy Policy",
    "Conflict of Interest Policy",
    "Procurement Policy"
  ];

  const downloadCenter = [
    { label: "Annual Reports", type: "PDF Document" },
    { label: "Financial Statements", type: "PDF Document" },
    { label: "Audit Reports", type: "PDF Document" },
    { label: "Impact Reports", type: "PDF Document" },
    { label: "CSR Brochure", type: "PDF Document" },
    { label: "Volunteer Handbook", type: "PDF Document" },
    { label: "Organizational Profile", type: "PDF Document" },
    { label: "Partnership Deck", type: "PDF Document" },
    { label: "Policy Documents", type: "PDF Document" },
    { label: "Registration Certificates", type: "PDF Document" }
  ];

  const faqs = [
    {
      q: "How are donations utilized?",
      a: "Funds are allocated to approved programs based on organizational priorities and donor intent while maintaining transparency and accountability."
    },
    {
      q: "Can I request project reports?",
      a: "Yes. Donors and CSR partners may request project updates and impact reports, subject to organizational policies."
    },
    {
      q: "Are financial statements publicly available?",
      a: "Where appropriate and legally permissible, annual financial summaries and reports are published to promote transparency."
    },
    {
      q: "Does the Foundation undergo audits?",
      a: "Yes. Financial records are reviewed through applicable audit processes in accordance with governing laws and organizational requirements."
    }
  ];

  const triggerDownload = (fileName) => {
    alert(`Initiating download for: ${fileName} (Document Placeholder)`);
  };

  const transparencyFaqSchema = {
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
    <section id="transparency" className="w-screen py-28 px-[8vw] lg:py-36 bg-[#F2E8D6] relative z-20 border-t border-[#D8C6A8] overflow-hidden text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(transparencyFaqSchema) }}
      />
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-transparency" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.03 0" />
          </filter>
        </defs>
      </svg>

      {/* Warm Background layer */}
      <div className="absolute inset-0 bg-[#F2E8D6] overflow-hidden z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay animate-drift-texture" style={{ filter: "url(#grainy-paper-transparency)" }} />
      </div>

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
                      {report.icon}
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
              {downloadCenter.map((doc, idx) => (
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
          <div className="lg:col-span-5 space-y-6 cinematic-reveal flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-sora font-semibold text-[#2E2E2E] mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="premium-card overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full py-4 px-5 flex items-center justify-between text-left focus:outline-none hover:bg-[#F2E8D6]/20 transition-all duration-300"
                      >
                        <span className="text-[13px] font-sora font-semibold text-[#2E2E2E] flex items-center gap-2.5">
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
