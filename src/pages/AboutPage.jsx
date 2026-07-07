import React from "react";
import About from "../components/sections/About";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.brijbhoomifoundation.org/about#webpage",
  "url": "https://www.brijbhoomifoundation.org/about",
  "name": "About Brij Bhoomi Foundation",
  "description": "Learn about Brij Bhoomi Foundation — our story, values, and the team driving sustainable social development across India.",
  "isPartOf": { "@id": "https://www.brijbhoomifoundation.org/#website" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.brijbhoomifoundation.org/about" }
    ]
  }
};

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Brij Bhoomi Foundation is a registered non-profit NGO in Vrindavan, Mathura, dedicated to education, healthcare, women empowerment, and sustainable community development across India."
        schema={schema}
      />
      <About />
    </>
  );
}
