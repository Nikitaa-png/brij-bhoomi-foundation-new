import React from "react";
import Mission from "../components/sections/Mission";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://www.brijbhoomifoundation.org/vision-mission",
  "name": "Vision & Mission | Brij Bhoomi Foundation",
  "description": "Our mission is to create sustainable social impact. Our vision is an inclusive society where every individual has access to education, healthcare, and equal opportunities.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "Vision & Mission", "item": "https://www.brijbhoomifoundation.org/vision-mission" }
    ]
  }
};

export default function VisionMissionPage() {
  return (
    <>
      <PageMeta
        title="Vision & Mission"
        description="Brij Bhoomi Foundation's mission is to create sustainable social impact through community-driven programs. Our vision is an inclusive, empowered society for every individual in India."
        schema={schema}
      />
      <Mission />
    </>
  );
}
