export async function GET() {
  const baseUrl = "https://rabea-shaban.vercel.app";

  const robotsTxt = `# ===================================================
# Official robots.txt for Rabea Shaban Portfolio
# Full Stack Software Engineer - https://rabea-shaban.vercel.app
# ===================================================

# Global Search Engine Crawlers Rules
User-agent: *
Allow: /
Allow: /about
Allow: /projects
Allow: /services
Allow: /certificates
Allow: /contact
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Googlebot Rules
User-agent: Googlebot
Allow: /
Disallow: /api/

# Googlebot Image Crawler
User-agent: Googlebot-Image
Allow: /
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.webp$
Allow: /*.avif$

# Bingbot Rules
User-agent: Bingbot
Allow: /
Disallow: /api/

# Social Media Preview Crawlers
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

# Host Directive
Host: ${baseUrl}

# Sitemap Directives
Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
