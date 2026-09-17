import HomeView from "@/views/HomeView";

export const metadata = {
  title: "Rabea Shaban | ربيع شعبان - Senior Full Stack Software Engineer (MERN, Next.js, Cloud & AI)",
  description:
    "Official Portfolio of Rabea Shaban (ربيع شعبان) - Senior Full Stack Software Engineer & Cloud Solutions Architect. Building high-performance, secure, and scalable web apps using React, Next.js, Node.js, MongoDB, AWS Cloud, Docker, Kubernetes & AI. Available for full-time engineering roles and global freelance projects. مهندس برمجيات وتطوير ويب شامل وخبير حلول سحابية.",
  keywords: [
    "Rabea Shaban",
    "ربيع شعبان",
    "Full Stack Software Engineer",
    "مهندس برمجيات",
    "مطور ويب شامل",
    "Hire Full Stack Developer",
    "توظيف مهندس برمجيات",
    "Senior React Developer Egypt",
    "Next.js 16 Specialist",
    "MERN Stack Architect",
    "Node.js Backend Engineer",
    "AWS Certified Cloud Practitioner",
    "Docker Kubernetes DevOps",
    "AI-Driven Web Development",
    "Remote Software Engineer Gulf",
    "مطور تطبيقات ويب مصر والسعودية",
    "مهندس حوسبة سحابية وديف أوبس",
    "خبير React و Next.js"
  ],
  alternates: {
    canonical: "https://www.rabea-shaban.com",
    languages: {
      "en": "https://www.rabea-shaban.com/en",
      "ar": "https://www.rabea-shaban.com/ar",
      "x-default": "https://www.rabea-shaban.com",
    },
  },
  openGraph: {
    title: "Rabea Shaban | ربيع شعبان - Senior Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in MERN Stack, Next.js, Node.js, AWS Cloud, Docker & Kubernetes, and AI Integrations. Ready for high-impact roles. مهندس برمجيات وتطوير ويب شامل.",
    url: "https://www.rabea-shaban.com",
    locale: "en_US",
    alternateLocale: ["ar_AR", "ar_EG", "ar_SA"],
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return <HomeView />;
}
