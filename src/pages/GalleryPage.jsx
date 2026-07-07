import React from "react";
import Gallery from "../components/sections/Gallery";
import PageMeta from "../components/common/PageMeta";

const schema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Brij Bhoomi Foundation Photo Gallery",
  "description": "Photo documentation of our community work in education, healthcare, women empowerment, environmental conservation, and rural development.",
  "url": "https://www.brijbhoomifoundation.org/gallery",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brijbhoomifoundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://www.brijbhoomifoundation.org/gallery" }
    ]
  }
};

export default function GalleryPage() {
  return (
    <>
      <PageMeta
        title="Gallery"
        description="Visual record of Brij Bhoomi Foundation's ground work — education programs, healthcare camps, tree plantation drives, women empowerment workshops, and community events."
        schema={schema}
      />
      <Gallery />
    </>
  );
}
