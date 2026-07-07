import React, { useRef } from "react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function TermsPage() {
  const ref = useRef(null);
  useCinematicReveal(ref);

  return (
    <section className="w-screen px-[8vw] py-28 lg:py-36 bg-[#FAF7F0] relative z-20 min-h-screen">
      <div ref={ref} className="max-w-3xl mx-auto space-y-10 text-[#2E2E2E]">
        <div className="cinematic-reveal">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-3">Legal</span>
          <h1 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight mb-4">Terms & Conditions</h1>
          <p className="text-xs text-[#555] font-inter font-normal">Last updated: July 2026</p>
        </div>

        {[
          { title: "Acceptance of Terms", body: "By accessing and using the Brij Bhoomi Foundation website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website." },
          { title: "Use of Website", body: "You may use this website for lawful purposes only. You must not use this site in any way that breaches applicable laws or regulations or that is fraudulent or harmful." },
          { title: "Donations", body: "All donations made through our website are voluntary. We will use donations in accordance with our organizational mission and objectives. Donation receipts will be provided as applicable." },
          { title: "Intellectual Property", body: "All content on this website, including text, images, logos, and graphics, is the property of Brij Bhoomi Foundation and is protected by applicable intellectual property laws." },
          { title: "Disclaimer", body: "The information on this website is provided for general informational purposes only. We make no warranties about the completeness, reliability, or accuracy of this information." },
          { title: "Limitation of Liability", body: "Brij Bhoomi Foundation shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or its content." },
          { title: "External Links", body: "Our website may contain links to external sites. We are not responsible for the content or privacy practices of those sites." },
          { title: "Changes to Terms", body: "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website." },
          { title: "Governing Law", body: "These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Mathura, Uttar Pradesh." },
          { title: "Contact", body: "For questions about these Terms, please contact us at info@brijbhoomifoundation.org." },
        ].map((s) => (
          <div key={s.title} className="cinematic-reveal border-t border-[#D8C6A8] pt-6 space-y-2">
            <h2 className="text-base font-sora font-semibold text-[#2E2E2E]">{s.title}</h2>
            <p className="text-sm text-[#555] leading-relaxed font-inter font-normal">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
