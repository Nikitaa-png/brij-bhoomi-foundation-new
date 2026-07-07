import React from "react";
import FAQ from "../components/sections/FAQ";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "FAQs | Brij Bhoomi Foundation",
  "url": "https://www.brijbhoomifoundation.org/faqs",
  "mainEntity": [
    { "@type": "Question", "name": "What is Brij Bhoomi Foundation?", "acceptedAnswer": { "@type": "Answer", "text": "Brij Bhoomi Foundation is a registered non-profit NGO dedicated to education, healthcare, women empowerment, environmental conservation, and rural development across India." } },
    { "@type": "Question", "name": "How can I donate?", "acceptedAnswer": { "@type": "Answer", "text": "You can donate securely through our online platform using UPI, debit/credit cards, net banking, or bank transfer." } },
    { "@type": "Question", "name": "Is my donation tax-exempt?", "acceptedAnswer": { "@type": "Answer", "text": "If the Foundation holds 80G registration, eligible donors may claim tax benefits as per Indian Income Tax laws." } },
    { "@type": "Question", "name": "Who can volunteer?", "acceptedAnswer": { "@type": "Answer", "text": "Anyone passionate about social impact can volunteer — students, professionals, doctors, teachers, retirees, and corporate employees are all welcome." } },
    { "@type": "Question", "name": "Can companies partner through CSR?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We actively collaborate with corporate organizations under their CSR initiatives aligned with Schedule VII of the Companies Act." } }
  ],
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "FAQs", "item": "https://www.brijbhoomifoundation.org/faqs" }
    ]
  }
};

export default function FAQsPage() {
  return (
    <>
      <PageMeta
        title="Frequently Asked Questions"
        description="Find answers about Brij Bhoomi Foundation — donations, volunteering, CSR partnerships, tax exemptions, and our programs in education, healthcare, and community development."
        schema={schema}
      />
      <FAQ />
    </>
  );
}
