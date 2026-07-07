import React, { useRef } from "react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";
import PageMeta from "../components/common/PageMeta";

const sections = [
  { title: "Information We Collect", body: "We collect information you voluntarily provide when you contact us, donate, volunteer, or subscribe to our newsletter. This may include your name, email address, phone number, and message content." },
  { title: "How We Use Your Information", body: "We use your information to respond to inquiries, process donations, send updates about our programs, and improve our services. We do not sell or rent your personal information to third parties." },
  { title: "Data Security", body: "We implement appropriate security measures to protect your personal information. Donation transactions are processed through secure, encrypted payment gateways." },
  { title: "Cookies", body: "Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings." },
  { title: "Third-Party Links", body: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites." },
  { title: "Your Rights", body: "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@brijbhoomifoundation.org." },
  { title: "Changes to This Policy", body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date." },
  { title: "Contact Us", body: "If you have questions about this Privacy Policy, please contact us at info@brijbhoomifoundation.org or call +91 565 244 1088." },
];

export default function PrivacyPolicyPage() {
  const ref = useRef(null);
  useCinematicReveal(ref);

  return (
    <>
      <PageMeta
        title="Privacy Policy"
        description="Read the Privacy Policy of Brij Bhoomi Foundation. Learn how we collect, use, and protect your personal information when you donate, volunteer, or contact us."
      />
      <section className="w-full px-[8vw] py-28 lg:py-36 bg-[#FAF7F0] relative z-20 min-h-screen">
        <div ref={ref} className="max-w-3xl mx-auto space-y-10 text-[#2E2E2E]">
          <div className="cinematic-reveal">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-3">Legal</span>
            <h1 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-xs text-[#555] font-inter font-normal">Last updated: July 2026</p>
          </div>
          {sections.map((s) => (
            <div key={s.title} className="cinematic-reveal border-t border-[#D8C6A8] pt-6 space-y-2">
              <h2 className="text-base font-sora font-semibold text-[#2E2E2E]">{s.title}</h2>
              <p className="text-sm text-[#555] leading-relaxed font-inter font-normal">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
