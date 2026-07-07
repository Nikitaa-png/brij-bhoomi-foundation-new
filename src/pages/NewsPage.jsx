import React from "react";
import NewsBlog from "../components/sections/NewsBlog";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Brij Bhoomi Foundation News & Blog",
  "description": "Latest news, impact stories, press releases, and updates from Brij Bhoomi Foundation on education, healthcare, environment, and community development.",
  "url": "https://www.brijbhoomifoundation.org/news",
  "publisher": {
    "@type": "NGO",
    "name": "Brij Bhoomi Foundation"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "News & Blog", "item": "https://www.brijbhoomifoundation.org/news" }
    ]
  }
};

export default function NewsPage() {
  return (
    <>
      <PageMeta
        title="News & Blog"
        description="Read the latest news, impact stories, volunteer experiences, and updates from Brij Bhoomi Foundation. Stay informed about our education, healthcare, and community development work."
        schema={schema}
      />
      <NewsBlog />
    </>
  );
}
