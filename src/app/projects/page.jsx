import ProjectsView from "@/views/ProjectsView";

export const metadata = {
  title: "Projects Showcase | معرض المشروعات والأعمال البرمجية - ربيع شعبان",
  description:
    "Explore production web applications, SaaS platforms, and enterprise software engineered by Rabea Shaban including EduSphere (WebRTC LMS SaaS), Sa2yanti Maintenance Platform, AGRSUP E-Commerce, and Cloud REST APIs with live demos and GitHub code. استعراض سابقة أعمال ربيع شعبان وتطبيقات Next.js و React و Node.js المتقدمة.",
  keywords: [
    "Rabea Shaban Projects",
    "سابقة أعمال ربيع شعبان",
    "EduSphere SaaS LMS",
    "منصة تعليمية سحابية",
    "Sa2yanti Web App",
    "تطبيق صيانتي لإدارة الخدمات",
    "AGRSUP E-Commerce Platform",
    "متجر زراعي إلكتروني",
    "Production Next.js Projects",
    "MERN Stack Portfolio Case Studies",
    "Enterprise Full Stack GitHub",
    "React Web Applications Egypt",
    "مشاريع برمجة وتطوير مواقع"
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
    title: "Projects Showcase | معرض المشروعات البرمجية | Rabea Shaban",
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
