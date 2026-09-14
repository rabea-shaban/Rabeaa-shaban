export async function GET() {
  const xslContent = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap | Rabea Shaban Portfolio</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #0b0719;
            color: #e2e8f0;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            backdrop-filter: blur(10px);
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 20px;
            margin-bottom: 25px;
          }
          h1 {
            font-size: 24px;
            font-weight: 800;
            margin: 0;
            color: #8B27F2;
          }
          p.subtitle {
            font-size: 13px;
            color: #94a3b8;
            margin: 5px 0 0 0;
          }
          .badge {
            background: rgba(139, 39, 242, 0.15);
            color: #c084fc;
            border: 1px solid rgba(139, 39, 242, 0.3);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
          }
          th {
            text-align: left;
            padding: 12px 16px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #94a3b8;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          td {
            padding: 14px 16px;
            font-size: 13px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          tr:hover td {
            background: rgba(255, 255, 255, 0.02);
          }
          a {
            color: #38bdf8;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority {
            font-weight: bold;
            color: #34d399;
          }
          .freq {
            font-size: 11px;
            padding: 3px 8px;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.08);
            color: #cbd5e1;
          }
        </style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <div>
              <h1>XML Sitemap</h1>
              <p className="subtitle">Official Search Engine Index for Rabea Shaban Portfolio</p>
            </div>
            <div className="badge">
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> Pages Indexed
            </div>
          </div>
          
          <table>
            <thead>
              <tr>
                <th>URL Location</th>
                <th>Priority</th>
                <th>Change Freq</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}" target="_blank">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td className="priority">
                    <xsl:value-of select="sitemap:priority"/>
                  </td>
                  <td>
                    <span className="freq"><xsl:value-of select="sitemap:changefreq"/></span>
                  </td>
                  <td style="color: #94a3b8; font-size: 12px;">
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;

  return new Response(xslContent, {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
