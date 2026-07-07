import React from "react";
import Impact from "../components/sections/Impact";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://www.brijbhoomifoundation.org/impact",
  "name": "Our Impact | Brij Bhoomi Foundation",
  "description": "10,000+ lives impacted, 2,500+ students supported, 15,000+ trees planted, 1,200+ women empowered. See the measurable social impact of Brij Bhoomi Foundation.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "Our Impact", "item": "https://www.brijbhoomifoundation.org/impact" }
    ]
  }
};

export default function ImpactPage() {
  return (
    <>
      <PageMeta
        title="Our Impact"
        description="10,000+ lives impacted, 2,500+ students supported, 15,000+ trees planted, 1,200+ women empowered. See the real, measurable impact of Brij Bhoomi Foundation across India."
        schema={schema}
      />
      <Impact />
    </>
  );
}
