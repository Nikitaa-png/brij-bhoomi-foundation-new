import React from "react";
import Events from "../components/sections/Events";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "EventSeries",
  "name": "Brij Bhoomi Foundation Events & Campaigns",
  "description": "Community events including tree plantation drives, free health camps, education drives, and awareness campaigns in Mathura and Vrindavan.",
  "organizer": {
    "@type": "NGO",
    "name": "Brij Bhoomi Foundation",
    "url": "https://www.brijbhoomifoundation.org/"
  },
  "location": {
    "@type": "Place",
    "name": "Mathura / Vrindavan, Uttar Pradesh, India"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "Events", "item": "https://www.brijbhoomifoundation.org/events" }
    ]
  }
};

export default function EventsPage() {
  return (
    <>
      <PageMeta
        title="Events & Campaigns"
        description="Join Brij Bhoomi Foundation's community events — tree plantation drives, free health camps, education drives, blood donation camps, and awareness campaigns in Mathura and Vrindavan."
        schema={schema}
      />
      <Events />
    </>
  );
}
