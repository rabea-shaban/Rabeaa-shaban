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
    default: "Rabea Shaban (ربيع شعبان / ربيع الزيات) | Full Stack Software Engineer",
    template: "%s | Rabea Shaban",
  },
  description:
    "Official Portfolio of Rabea Shaban (ربيع شعبان / ربيع الزيات - Rabea Elzayat / Rabea Sh Elzayat / rabea-shaban) - Senior Full Stack Software Engineer specializing in MERN Stack, React, Next.js, Node.js, Express, MongoDB, AWS Cloud, Docker, Kubernetes, and AI. مهندس برمجيات وتطوير ويب شامل.",
  keywords: [
    "rabea shaban",
    "rabea-shaban",
    "ربيع شعبان",
    "ربيع الزيات",
    "ربيع شعبان الزيات",
    "rabea elzayate",
    "rabea elzayat",
    "rabea sh elzayat",
    "rabea sh el-zayat",
    "rabea_sh_elzayat",
    "Rabea Shaban Elzayat",
    "موقع ربيع شعبان",
    "موقع ربيع الزيات",
    "معرض أعمال ربيع شعبان",
    "Full Stack Software Engineer",
    "مهندس برمجيات",
    "مطور ويب شامل",
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
    "Software Engineer Portfolio",
    "مطور React مصر",
    "مطور Next.js",
    "مهندس DevOps"
  ],
  authors: [{ name: "Rabea Shaban (ربيع شعبان / ربيع الزيات)", url: "https://www.rabea-shaban.com" }],
  creator: "Rabea Shaban (ربيع شعبان)",
  publisher: "Rabea Shaban (ربيع شعبان)",
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
    languages: {
      "en": "https://www.rabea-shaban.com/en",
      "ar": "https://www.rabea-shaban.com/ar",
      "x-default": "https://www.rabea-shaban.com",
    },
  },
  other: {
    "content-language": "en, ar",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    alternateLocale: ["ar_AR", "ar_EG", "ar_SA"],
    url: "https://www.rabea-shaban.com",
    siteName: "Rabea Shaban Portfolio | ربيع شعبان (ربيع الزيات)",
    title: "Rabea Shaban (ربيع شعبان / ربيع الزيات) - Senior Full Stack Software Engineer",
    description:
      "Official Portfolio of Rabea Shaban (ربيع شعبان / ربيع الزيات - Rabea Elzayat / rabea-shaban). Senior Full Stack Software Engineer building high-performance web applications with React, Next.js, Node.js, MongoDB, AWS, Docker, and Kubernetes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rabea Shaban | ربيع شعبان (ربيع الزيات) - Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabea Shaban (ربيع شعبان / ربيع الزيات) - Full Stack Software Engineer",
    description:
      "Official Portfolio of Rabea Shaban (ربيع شعبان / ربيع الزيات - Rabea Elzayat / rabea-shaban) - Full Stack Software Engineer building high-performance web applications.",
    images: ["/og-image.jpg"],
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
      "givenName": "Rabea",
      "familyName": "Shaban Elzayat",
      "additionalName": "Elzayat",
      "alternateName": [
        "ربيع شعبان",
        "ربيع الزيات",
        "ربيع شعبان الزيات",
        "rabea shaban",
        "rabea-shaban",
        "rabea elzayate",
        "rabea elzayat",
        "rabea sh elzayat",
        "rabea sh el-zayat",
        "rabea_sh_elzayat",
        "Rabea Shaban Elzayat",
        "Rabea Elzayate",
        "Rabea Elzayat",
        "Rabea Sh Elzayat"
      ],
      "jobTitle": "Senior Full Stack Software Engineer",
      "url": "https://www.rabea-shaban.com",
      "image": "https://www.rabea-shaban.com/logo.png",
      "description": "Rabea Shaban (ربيع شعبان / ربيع الزيات / Rabea Elzayat / Rabea Sh Elzayat / rabea-shaban) is a Senior Full Stack Software Engineer and Cloud DevOps Specialist specializing in MERN Stack, React, Next.js, Node.js, MongoDB, AWS Cloud, Docker, and Kubernetes.",
      "disambiguatingDescription": "Senior Full Stack Software Engineer & Cloud DevOps Specialist known as Rabea Shaban, Rabea Elzayat, and ربيع شعبان الزيات.",
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
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL Server",
        "AWS Cloud",
        "Docker",
        "Kubernetes",
        "Helm",
        "Terraform",
        "GitHub Actions",
        "DevOps",
        "AI-Driven Software Development",
        "System Design",
        "RESTful APIs"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance Software Engineering & Enterprise Consulting"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Egyptian Military Academy & MCIT",
          "description": "AI-Based Software Development Specialized Diploma (Digilians)"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Higher Institute of Technology, Management and Information - Minya",
          "description": "Bachelor's degree in Management Information Systems (MIS) - Excellent Grade"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.rabea-shaban.com/#website",
      "url": "https://www.rabea-shaban.com",
      "name": "Rabea Shaban Portfolio | معرض أعمال ربيع شعبان (ربيع الزيات)",
      "alternateName": [
        "rabea-shaban",
        "Rabea Shaban",
        "ربيع شعبان",
        "ربيع الزيات",
        "Rabea Elzayat",
        "Rabea Sh Elzayat"
      ],
      "description": "Official Professional Full Stack Software Engineer Portfolio & Showcase for Rabea Shaban (ربيع شعبان / ربيع الزيات)",
      "inLanguage": ["en", "ar"],
      "publisher": {
        "@id": "https://www.rabea-shaban.com/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.rabea-shaban.com/#profilepage",
      "url": "https://www.rabea-shaban.com",
      "name": "Rabea Shaban (ربيع شعبان) - Developer Profile",
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
