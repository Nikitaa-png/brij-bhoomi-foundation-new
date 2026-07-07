import React from "react";
import VolunteerCTA from "../components/sections/VolunteerCTA";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "VolunteerAction",
  "name": "Volunteer with Brij Bhoomi Foundation",
  "description": "Join as a volunteer in education, healthcare, environment, women empowerment, rural development, or digital programs. Open to students, professionals, and corporate teams.",
  "agent": {
    "@type": "NGO",
    "name": "Brij Bhoomi Foundation"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "Volunteer", "item": "https://www.brijbhoomifoundation.org/volunteer" }
    ]
  }
};

export default function VolunteerPage() {
  return (
    <>
      <PageMeta
        title="Volunteer"
        description="Become a volunteer with Brij Bhoomi Foundation. Join programs in education, healthcare, environment, women empowerment, and rural development. Open to students, professionals, and corporates."
        schema={schema}
      />
      <VolunteerCTA />
    </>
  );
}
