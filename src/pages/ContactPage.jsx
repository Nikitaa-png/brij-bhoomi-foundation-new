import React from "react";
import Contact from "../components/sections/Contact";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://www.brijbhoomifoundation.org/contact",
  "name": "Contact Brij Bhoomi Foundation",
  "description": "Get in touch with Brij Bhoomi Foundation for volunteering, donations, CSR partnerships, or general inquiries.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.brijbhoomifoundation.org/contact" }
    ]
  }
};

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Contact Brij Bhoomi Foundation at our Vrindavan office. Reach us for volunteer registration, donation queries, CSR partnerships, or general information about our programs."
        schema={schema}
      />
      <Contact />
    </>
  );
}
