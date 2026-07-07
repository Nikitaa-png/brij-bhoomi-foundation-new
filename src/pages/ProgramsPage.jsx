import React from "react";
import Programs from "../components/sections/Programs";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://www.brijbhoomifoundation.org/programs",
  "name": "Programs & Initiatives | Brij Bhoomi Foundation",
  "description": "Explore our social development programs in education, healthcare, women empowerment, environmental conservation, rural development, youth development, and disaster relief.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "Programs", "item": "https://www.brijbhoomifoundation.org/programs" }
    ]
  }
};

export default function ProgramsPage() {
  return (
    <>
      <PageMeta
        title="Programs & Initiatives"
        description="Brij Bhoomi Foundation runs programs in education, healthcare, women empowerment, environmental conservation, rural development, youth development, and disaster relief across India."
        schema={schema}
      />
      <Programs />
    </>
  );
}
