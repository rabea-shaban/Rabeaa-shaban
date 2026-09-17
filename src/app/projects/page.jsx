import ProjectsView from "@/views/ProjectsView";

export const metadata = {
  title: "Projects Showcase | معرض المشروعات - ربيع شعبان",
  description:
    "Explore production projects and web applications built by Rabea Shaban including EduSphere (E-Learning & WebRTC SaaS), Sa2yanti, AGRSUP E-Commerce, and Cloud REST APIs. استكشف أحدث تطبيقات الويب والأنظمة البرمجية التي طورها ربيع شعبان.",
  keywords: [
    "Rabea Shaban Projects",
    "مشاريع ربيع شعبان",
    "EduSphere SaaS",
    "منصة تعليمية سحابية",
    "Sa2yanti app",
    "تطبيق صيانتي",
    "AGRSUP e-commerce",
    "متجر زراعي",
    "React projects",
    "Next.js showcase",
    "Node.js portfolio projects"
  ],
  alternates: {
    canonical: "https://www.rabea-shaban.com/projects",
    languages: {
      "en": "https://www.rabea-shaban.com/en/projects",
      "ar": "https://www.rabea-shaban.com/ar/projects",
      "x-default": "https://www.rabea-shaban.com/projects",
    },
  },
  openGraph: {
    title: "Projects Showcase | معرض المشروعات | Rabea Shaban",
    description:
      "A comprehensive portfolio of web applications, enterprise SaaS platforms, e-commerce stores, and cloud backend APIs. معرض المشروعات والتطبيقات الحديثة.",
    url: "https://www.rabea-shaban.com/projects",
    locale: "en_US",
    alternateLocale: ["ar_AR", "ar_EG", "ar_SA"],
    images: ["/og-image.jpg"],
  },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
