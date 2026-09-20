import ServicesView from "@/views/ServicesView";

export const metadata = {
  title: "Services & Solutions | خدمات واستشارات ربيع شعبان",
  description:
    "Software engineering and freelance consulting services by Rabea Shaban (ربيع شعبان / ربيع الزيات): Full-Stack MERN Web Apps, Next.js UI, Scalable REST APIs, AWS Cloud Architecture, and Docker & Kubernetes DevOps.",
  keywords: [
    "Services Rabea Shaban",
    "rabea shaban",
    "rabea-shaban",
    "ربيع شعبان",
    "ربيع الزيات",
    "ربيع شعبان الزيات",
    "rabea elzayate",
    "rabea elzayat",
    "rabea sh elzayat",
    "خدمات ربيع شعبان",
    "خدمات ربيع الزيات",
    "استشارات ربيع شعبان البرمجية",
    "Hire Full Stack Developer",
    "توظيف مطور برمجيات",
    "خدمات تطوير المواقع",
    "Hire React Engineer Egypt",
    "MERN Stack Freelancer",
    "Node.js REST API Development Service",
    "AWS Cloud Deployment Service",
    "Docker Containerization Consulting",
    "Kubernetes Orchestration",
    "Custom Web App Development",
    "استشارات DevOps مصر والسعودية",
    "برمجة تطبيقات سحابية",
    "بناء منصات التجارة الإلكترونية و SaaS"
  ],
  alternates: {
    canonical: "https://www.rabea-shaban.com/services",
    languages: {
      "en": "https://www.rabea-shaban.com/en/services",
      "ar": "https://www.rabea-shaban.com/ar/services",
      "x-default": "https://www.rabea-shaban.com/services",
    },
  },
  openGraph: {
    title: "Services & Solutions | الخدمات والحلول البرمجية | Rabea Shaban",
    description:
      "Expert engineering services from database architecture and full-stack building to containerized deployments, Kubernetes orchestration, and cloud solutions. خدمات برمجية احترافية.",
    url: "https://www.rabea-shaban.com/services",
    locale: "en_US",
    alternateLocale: ["ar_AR", "ar_EG", "ar_SA"],
    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
