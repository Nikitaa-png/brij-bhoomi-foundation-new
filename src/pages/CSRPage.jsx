import React from "react";
import HowYouCanHelp from "../components/sections/HowYouCanHelp";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://www.brijbhoomifoundation.org/csr-partnership",
  "name": "CSR Partnership | Brij Bhoomi Foundation",
  "description": "Partner with Brij Bhoomi Foundation for CSR projects in education, healthcare, environment, and rural development. Aligned with Schedule VII, SDGs, and ESG frameworks.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "CSR Partnership", "item": "https://www.brijbhoomifoundation.org/csr-partnership" }
    ]
  }
};

export default function CSRPage() {
  return (
    <>
      <PageMeta
        title="CSR Partnership"
        description="Partner with Brij Bhoomi Foundation for impactful CSR programs. We offer project sponsorship, employee volunteering, and infrastructure development aligned with Schedule VII and SDGs."
        schema={schema}
      />
      <HowYouCanHelp />
    </>
  );
}
