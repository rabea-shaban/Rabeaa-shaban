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
  metadataBase: new URL("https://www.rabea-shaban.com"),
  title: {
    default: "Rabea Shaban | Full Stack Software Engineer | MERN Stack",
    template: "%s | Rabea Shaban",
  },
  description:
    "Rabea Shaban — Full Stack Software Engineer specializing in MERN Stack, React.js, Next.js, Node.js, TypeScript, MongoDB, and AWS.",
  keywords: [
    "Rabea Shaban",
    "ربيع شعبان",
    "Rabea Shaban Software Engineer",
    "Rabea Shaban Developer",
    "Rabea Shaban Full Stack Developer",
    "Rabea Shaban MERN Stack Developer",
    "Rabea Shaban React Developer",
    "Rabea Shaban Next.js Developer",
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "MongoDB Developer",
    "AWS Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer"
  ],
  authors: [{ name: "Rabea Shaban", url: "https://www.rabea-shaban.com" }],
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
    canonical: "https://www.rabea-shaban.com",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rabea-shaban.com",
    siteName: "Rabea Shaban",
    title: "Rabea Shaban | Full Stack Software Engineer | MERN Stack",
    description:
      "Rabea Shaban — Full Stack Software Engineer specializing in MERN Stack, React.js, Next.js, Node.js, TypeScript, MongoDB, and AWS.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rabea Shaban (ربيع شعبان) — Full Stack Software Engineer",
      },
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Rabea Shaban (ربيع شعبان) Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabea Shaban | Full Stack Software Engineer | MERN Stack",
    description:
      "Rabea Shaban — Full Stack Software Engineer specializing in MERN Stack, React.js, Next.js, Node.js, TypeScript, MongoDB, and AWS.",
    images: ["/opengraph-image"],
    creator: "@rabea_sh_elzayat",
  },
  verification: {
    google: [
      "vnqIpYUy_6-cc_4ZxpTWULbpWGTnJdDtOVTada2zUhc",
      "nNlwGk53zi-tWlVHmfwrF4yAgkzMN9n_lZji1_cAk9Y"
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.rabea-shaban.com/#person",
      "name": "Rabea Shaban",
      "alternateName": "ربيع شعبان",
      "jobTitle": "Full Stack Software Engineer",
      "url": "https://www.rabea-shaban.com/",
      "image": "https://www.rabea-shaban.com/profile.jpg",
      "description": "Rabea Shaban is a Full Stack Software Engineer specializing in MERN Stack, React.js, Next.js, Node.js, TypeScript, MongoDB, and AWS.",
      "inLanguage": ["en", "ar"],
      "sameAs": [
        "https://github.com/rabea-shaban",
        "https://linkedin.com/in/rabea-sh-elzayat",
        "https://instagram.com/rabea_sh_elzayat",
        "https://upwork.com/freelancers/~01d2bd68b7d6e8fbce",
        "https://mostaql.com/u/rabea_elzayat"
      ],
      "knowsAbout": [
        "Full Stack Web Development",
        "MERN Stack",
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "REST APIs",
        "System Design",
        "DevOps"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.rabea-shaban.com/#website",
      "url": "https://www.rabea-shaban.com/",
      "name": "Rabea Shaban",
      "alternateName": "ربيع شعبان",
      "description": "Rabea Shaban personal portfolio — Full Stack Software Engineer specializing in MERN Stack and modern web technologies.",
      "inLanguage": ["en", "ar"],
      "publisher": {
        "@id": "https://www.rabea-shaban.com/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.rabea-shaban.com/#profilepage",
      "url": "https://www.rabea-shaban.com/",
      "name": "Rabea Shaban | Full Stack Software Engineer | MERN Stack",
      "mainEntity": {
        "@id": "https://www.rabea-shaban.com/#person"
      }
    }
  ]
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
