import React from "react";
import DonationCTA from "../components/sections/DonationCTA";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "name": "Donate to Brij Bhoomi Foundation",
  "description": "Support education, healthcare, women empowerment, and environmental conservation in India. Donations eligible for 80G tax exemption.",
  "recipient": {
    "@type": "NGO",
    "name": "Brij Bhoomi Foundation",
    "url": "https://www.brijbhoomifoundation.org/"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "Donate", "item": "https://www.brijbhoomifoundation.org/donate" }
    ]
  }
};

export default function DonatePage() {
  return (
    <>
      <PageMeta
        title="Donate"
        description="Donate to Brij Bhoomi Foundation and support education, healthcare, women empowerment, and environmental programs in India. Secure online donations with 80G tax exemption."
        schema={schema}
      />
      <DonationCTA />
    </>
  );
}
