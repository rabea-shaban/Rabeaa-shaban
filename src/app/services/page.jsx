import ServicesView from "@/views/ServicesView";

export const metadata = {
  title: "Services & Solutions | الخدمات والحلول - ربيع شعبان",
  description:
    "Expert freelance software engineering services by Rabea Shaban: Full Stack MERN Apps, Frontend React/Next.js UI, Node.js REST APIs, AWS Cloud Deployment, Docker, and Kubernetes. خدمات هندسة برمجية شاملة وتطوير تطبيقات الويب والسحابة.",
  keywords: [
    "Hire Full Stack Developer",
    "توظيف مطور برمجيات",
    "خدمات تطوير المواقع",
    "Hire React Engineer",
    "MERN Stack Freelancer",
    "Node.js REST API Development",
    "AWS Deployment Service",
    "Docker Containerization",
    "Kubernetes Orchestration"
  ],
  alternates: {
    canonical: "https://rabea-shaban.vercel.app/services",
    languages: {
      "en": "https://rabea-shaban.vercel.app/services",
      "ar": "https://rabea-shaban.vercel.app/services",
      "x-default": "https://rabea-shaban.vercel.app/services",
    },
  },
  openGraph: {
    title: "Services & Solutions | الخدمات والحلول البرمجية | Rabea Shaban",
    description:
      "Expert engineering services from database architecture and full-stack building to containerized deployments, Kubernetes orchestration, and cloud solutions. خدمات برمجية احترافية.",
    url: "https://rabea-shaban.vercel.app/services",
    locale: "en_US",
    alternateLocale: ["ar_AR", "ar_EG", "ar_SA"],
    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
