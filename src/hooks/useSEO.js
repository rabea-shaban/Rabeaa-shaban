import { useEffect } from "react";
import { useSettings } from "@/context/SettingsContext";

export const useSEO = ({ title, description, keywords, canonicalUrl }) => {
  const { settings } = useSettings();
  const isAr = settings.language === 'ar';

  useEffect(() => {
    if (typeof document === 'undefined') return;

    // 1. Update Document Title
    if (title) {
      document.title = title.includes("Rabea Shaban") || title.includes("ربيع شعبان")
        ? title
        : (isAr ? `${title} | ربيع شعبان` : `${title} | Rabea Shaban`);
    }

    // Helper to create or update meta tag
    const setMetaTag = (attributeName, attributeValue, content) => {
      if (!content) return;
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Helper to create or update link tag
    const setLinkTag = (rel, href) => {
      if (!href) return;
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);

    // 3. OpenGraph Tags
    setMetaTag("property", "og:title", title ? (title.includes("Rabea Shaban") ? title : `${title} | Rabea Shaban`) : undefined);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:locale", isAr ? "ar_AR" : "en_US");
    setMetaTag("property", "og:site_name", "Rabea Shaban");

    // 4. Twitter Card Tags
    setMetaTag("name", "twitter:title", title ? (title.includes("Rabea Shaban") ? title : `${title} | Rabea Shaban`) : undefined);
    setMetaTag("name", "twitter:description", description);

    // 5. Canonical URL
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const currentBase = "https://www.rabea-shaban.com";
    const canonicalTarget = canonicalUrl || `${currentBase}${currentPath || '/'}`;

    setLinkTag("canonical", canonicalTarget);

    // 6. Sync HTML attributes
    document.documentElement.setAttribute("lang", isAr ? "ar" : "en");
    document.documentElement.setAttribute("dir", isAr ? "rtl" : "ltr");
  }, [title, description, keywords, canonicalUrl, isAr]);
};
