import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileDock from "@/components/MobileDock";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CustomizationButton, CustomizationPanel } from "@/components/customization";

export const metadata = {
  metadataBase: new URL("https://rabea-shaban.vercel.app"),
  title: {
    default: "Rabea Shaban | ربيع شعبان - Full Stack Software Engineer",
    template: "%s | Rabea Shaban - Full Stack Software Engineer",
  },
  description:
    "Rabea Shaban (ربيع شعبان) - Full Stack Software Engineer specializing in MERN Stack, React, Next.js, Node.js, Express, MongoDB, AWS Cloud, Docker, Kubernetes, and Terraform. Building scalable, secure, and production-ready applications.",
  keywords: [
    "Rabea Shaban",
    "ربيع شعبان",
    "Full Stack Software Engineer",
    "Full Stack Developer Egypt",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Engineer",
    "AWS Cloud Specialist",
    "Docker & Kubernetes",
    "Terraform IaC",
    "DevOps Engineer",
    "Freelance Web Developer",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Rabea Shaban", url: "https://rabea-shaban.vercel.app" }],
  creator: "Rabea Shaban",
  publisher: "Rabea Shaban",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rabea-shaban.vercel.app",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rabea-shaban.vercel.app",
    siteName: "Rabea Shaban Portfolio",
    title: "Rabea Shaban | ربيع شعبان - Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer building high-performance web applications with React, Next.js, Node.js, MongoDB, AWS, Docker, and Kubernetes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rabea Shaban - Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabea Shaban | ربيع شعبان - Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer building high-performance web applications with React, Next.js, Node.js, MongoDB, AWS, Docker, and Kubernetes.",
    images: ["/og-image.jpg"],
    creator: "@rabea_sh_elzayat",
  },
  verification: {
    google: "nNlwGk53zi-tWlVHmfwrF4yAgkzMN9n_lZji1_cAk9Y",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rabea Shaban",
  "alternateName": "ربيع شعبان",
  "jobTitle": "Full Stack Software Engineer",
  "url": "https://rabea-shaban.vercel.app",
  "image": "https://rabea-shaban.vercel.app/logo.png",
  "sameAs": [
    "https://github.com/rabea-shaban",
    "https://linkedin.com/in/rabea-sh-elzayat",
    "https://instagram.com/rabea_sh_elzayat",
    "https://upwork.com/freelancers/~01d2bd68b7d6e8fbce",
    "https://mostaql.com/u/rabea_elzayat"
  ],
  "knowsAbout": [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL Server",
    "AWS",
    "Docker",
    "Kubernetes",
    "Helm",
    "Terraform",
    "GitHub Actions",
    "DevOps",
    "System Design"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance Software Engineering"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Higher Institute of Technology, Management and Information - Minya",
    "degree": "Bachelor's degree in Management Information Systems (MIS)"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground">
            <LoadingScreen />
            <Navbar />
            <MobileDock />
            <BackToTop />
            <FloatingContact />
            <CustomizationButton />
            <CustomizationPanel />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
