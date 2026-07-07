import React from "react";
import Transparency from "../components/sections/Transparency";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://www.brijbhoomifoundation.org/transparency",
  "name": "Annual Reports & Transparency | Brij Bhoomi Foundation",
  "description": "Download annual reports, financial statements, audit reports, and impact documents. Brij Bhoomi Foundation is committed to complete transparency and ethical governance.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "Transparency", "item": "https://www.brijbhoomifoundation.org/transparency" }
    ]
  }
};

export default function TransparencyPage() {
  return (
    <>
      <PageMeta
        title="Annual Reports & Transparency"
        description="Download annual reports, financial statements, and audit reports. Brij Bhoomi Foundation maintains complete transparency with 80G, 12A, and CSR compliance documentation."
        schema={schema}
      />
      <Transparency />
    </>
  );
}
