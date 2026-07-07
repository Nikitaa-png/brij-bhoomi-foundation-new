import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.brijbhoomifoundation.org";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

/**
 * Sets document <title>, meta description, canonical, OG/Twitter tags,
 * and injects page-specific JSON-LD schema — all without a helmet library.
 */
export default function PageMeta({ title, description, canonical, schema }) {
  const { pathname } = useLocation();
  const url = canonical || `${BASE_URL}${pathname}`;
  const fullTitle = title
    ? `${title} | Brij Bhoomi Foundation`
    : "Brij Bhoomi Foundation | NGO for Education, Healthcare & Community Development";

  useEffect(() => {
    // Title
    document.title = fullTitle;

    const set = (sel, attr, val) => {
      let el = document.querySelector(sel);
      if (!el) {
        el = document.createElement("meta");
        if (sel.includes("[name=")) el.setAttribute("name", sel.match(/name="([^"]+)"/)[1]);
        if (sel.includes("[property=")) el.setAttribute("property", sel.match(/property="([^"]+)"/)[1]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, val);
    };

    set('meta[name="description"]',         "content", description || "");
    set('meta[name="robots"]',               "content", "index, follow");

    // Canonical
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = url;

    // OG
    set('meta[property="og:title"]',       "content", fullTitle);
    set('meta[property="og:description"]', "content", description || "");
    set('meta[property="og:url"]',         "content", url);
    set('meta[property="og:image"]',       "content", DEFAULT_IMAGE);
    set('meta[property="og:type"]',        "content", "website");

    // Twitter
    set('meta[name="twitter:title"]',       "content", fullTitle);
    set('meta[name="twitter:description"]', "content", description || "");
    set('meta[name="twitter:image"]',       "content", DEFAULT_IMAGE);

    // Schema injection
    const SCHEMA_ID = "page-schema";
    let existing = document.getElementById(SCHEMA_ID);
    if (schema) {
      if (!existing) {
        existing = document.createElement("script");
        existing.id = SCHEMA_ID;
        existing.type = "application/ld+json";
        document.head.appendChild(existing);
      }
      existing.textContent = JSON.stringify(schema);
    } else if (existing) {
      existing.remove();
    }

    return () => {
      // Cleanup schema on unmount
      const s = document.getElementById(SCHEMA_ID);
      if (s) s.remove();
    };
  }, [pathname, fullTitle, description, url, schema]);

  return null;
}
