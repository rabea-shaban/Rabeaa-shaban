export async function GET() {
  const baseUrl = "https://www.rabea-shaban.com";
  const currentDate = new Date().toISOString();

  const routes = [
    { path: "", priority: "1.0", changefreq: "daily" },
    { path: "/about", priority: "0.9", changefreq: "weekly" },
    { path: "/projects", priority: "0.9", changefreq: "weekly" },
    { path: "/services", priority: "0.8", changefreq: "weekly" },
    { path: "/certificates", priority: "0.9", changefreq: "weekly" },
    { path: "/contact", priority: "0.8", changefreq: "monthly" },
  ];

  const pages = routes.map((r) => {
    const cleanPath = r.path;
    const pageUrl = `${baseUrl}${cleanPath || "/"}`;
    const enUrl = `${baseUrl}/en${cleanPath}`;
    const arUrl = `${baseUrl}/ar${cleanPath}`;

    return {
      loc: pageUrl,
      enLoc: enUrl,
      arLoc: arUrl,
      defaultLoc: pageUrl,
      lastmod: currentDate,
      changefreq: r.changefreq,
      priority: r.priority,
    };
  });

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${page.enLoc}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${page.arLoc}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${page.defaultLoc}" />
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
