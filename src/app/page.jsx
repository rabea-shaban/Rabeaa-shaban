import HomeView from "@/views/HomeView";

export const metadata = {
  title: "Rabea Shaban (ربيع شعبان / ربيع الزيات) - Senior Full Stack Software Engineer",
  description:
    "Official Portfolio of Rabea Shaban (ربيع شعبان / ربيع الزيات - Rabea Elzayate / Rabea Elzayat / Rabea Sh Elzayat / rabea-shaban) - Senior Full Stack Software Engineer & Cloud Architect. Building high-performance, secure, and scalable web apps using React, Next.js, Node.js, MongoDB, AWS Cloud, Docker, Kubernetes & AI. مهندس برمجيات وتطوير ويب شامل وخبير حلول سحابية.",
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
    title: "Rabea Shaban (ربيع شعبان / ربيع الزيات) - Senior Full Stack Software Engineer",
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
