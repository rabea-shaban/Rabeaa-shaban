import HomeView from "@/views/HomeView";

export const metadata = {
  title: "Rabea Shaban | ربيع شعبان - Full Stack Software Engineer",
  description:
    "Rabea Shaban (ربيع شعبان) - Full Stack Software Engineer. I build scalable, secure, and high-performance web applications using React, Next.js, Node.js, Express, MongoDB, AWS Cloud, Docker, and Kubernetes. مهندس برمجيات وتطوير ويب شامل.",
  keywords: [
    "Rabea Shaban",
    "ربيع شعبان",
    "Full Stack Software Engineer",
    "مهندس برمجيات",
    "مطور ويب شامل",
    "MERN Stack Developer",
    "React Developer Egypt",
    "Next.js Developer",
    "Node.js Backend Developer",
    "AWS Cloud Specialist",
    "Docker & Kubernetes",
    "Software Portfolio"
  ],
  alternates: {
    canonical: "https://rabea-shaban.vercel.app",
    languages: {
      "en": "https://rabea-shaban.vercel.app",
      "ar": "https://rabea-shaban.vercel.app",
      "x-default": "https://rabea-shaban.vercel.app",
    },
  },
  openGraph: {
    title: "Rabea Shaban | ربيع شعبان - Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in MERN Stack, Next.js, Node.js, REST APIs, Microservices, and Cloud Infrastructure. مهندس برمجيات وتطوير ويب شامل.",
    url: "https://rabea-shaban.vercel.app",
    locale: "en_US",
    alternateLocale: ["ar_AR", "ar_EG", "ar_SA"],
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return <HomeView />;
}
