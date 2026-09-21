export async function GET() {
  const baseUrl = "https://www.rabea-shaban.com";
  const currentDate = new Date().toISOString();

  const routes = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    { path: "/about", priority: "0.9", changefreq: "weekly" },
    { path: "/projects", priority: "0.9", changefreq: "weekly" },
    { path: "/services", priority: "0.8", changefreq: "weekly" },
    { path: "/certificates", priority: "0.9", changefreq: "weekly" },
    { path: "/contact", priority: "0.8", changefreq: "monthly" },
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${baseUrl}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
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
