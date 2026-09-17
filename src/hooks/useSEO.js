import { useEffect } from "react";
import { useSettings } from "@/context/SettingsContext";

export const useSEO = ({ title, description, keywords, canonicalUrl }) => {
  const { settings } = useSettings();
  const isAr = settings.language === 'ar';

  useEffect(() => {
    if (typeof document === 'undefined') return;

    // 1. Update Document Title
    if (title) {
      document.title = isAr 
        ? `${title} | ربيع شعبان - مهندس برمجيات` 
        : `${title} | Rabea Shaban - Full Stack Software Engineer`;
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
    const setLinkTag = (rel, hreflang, href) => {
      if (!href) return;
      let link = hreflang 
        ? document.querySelector(`link[rel="${rel}"][hreflang="${hreflang}"]`)
        : document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        if (hreflang) link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag("http-equiv", "content-language", isAr ? "ar" : "en");

    // 3. OpenGraph Tags
    setMetaTag("property", "og:title", title ? (isAr ? `${title} | ربيع شعبان` : `${title} | Rabea Shaban`) : undefined);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:locale", isAr ? "ar_AR" : "en_US");
    setMetaTag("property", "og:site_name", isAr ? "معرض أعمال ربيع شعبان" : "Rabea Shaban Portfolio");

    // 4. Twitter Card Tags
    setMetaTag("name", "twitter:title", title ? (isAr ? `${title} | ربيع شعبان` : `${title} | Rabea Shaban`) : undefined);
    setMetaTag("name", "twitter:description", description);

    // 5. Canonical and Hreflang Alternates
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const cleanPath = currentPath.replace(/^\/(ar|en)/, '');
    const currentBase = "https://www.rabea-shaban.com";
    
    const canonicalTarget = canonicalUrl || `${currentBase}${currentPath}`;
    const enUrl = `${currentBase}/en${cleanPath}`;
    const arUrl = `${currentBase}/ar${cleanPath}`;
    const defaultUrl = `${currentBase}${cleanPath || '/'}`;

    setLinkTag("canonical", null, canonicalTarget);
    setLinkTag("alternate", "en", enUrl);
    setLinkTag("alternate", "ar", arUrl);
    setLinkTag("alternate", "x-default", defaultUrl);

    // 6. Sync HTML attributes
    document.documentElement.setAttribute("lang", isAr ? "ar" : "en");
    document.documentElement.setAttribute("dir", isAr ? "rtl" : "ltr");
  }, [title, description, keywords, canonicalUrl, isAr]);
};
