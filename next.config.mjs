/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: false,
  // Ensure maximum static site generation (SSG) pre-rendering for all content routes
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  // Redirect old vercel domain to custom domain
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rabea-shaban.vercel.app',
          },
        ],
        destination: 'https://www.rabea-shaban.com/:path*',
        permanent: true,
      },
    ];
  },
  // Security and Caching Headers for SSG Assets
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // Bilingual SEO rewrites for /ar and /en routes
  async rewrites() {
    return [
      {
        source: '/ar',
        destination: '/',
      },
      {
        source: '/en',
        destination: '/',
      },
      {
        source: '/ar/:path*',
        destination: '/:path*',
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
      },
    ];
  },
};

export default nextConfig;
