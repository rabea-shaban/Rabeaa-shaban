export async function GET() {
  const baseUrl = "https://rabea-shaban.vercel.app";
  const currentDate = new Date().toISOString();

  const pages = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "1.0",
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/projects`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: `${baseUrl}/certificates`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.8",
    },
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${page.loc}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${page.loc}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${page.loc}" />
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xmlContent, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
