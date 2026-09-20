import ProjectsView from "@/views/ProjectsView";

export const metadata = {
  title: "Projects Showcase | سابقة أعمال ومشاريع ربيع شعبان",
  description:
    "Explore production web applications, SaaS platforms, and enterprise software engineered by Rabea Shaban (ربيع شعبان / ربيع الزيات) including EduSphere LMS, Sa2yanti Platform, and Cloud REST APIs with live demos and code.",
  keywords: [
    "Projects Rabea Shaban",
    "rabea shaban",
    "rabea-shaban",
    "ربيع شعبان",
    "ربيع الزيات",
    "ربيع شعبان الزيات",
    "rabea elzayate",
    "rabea elzayat",
    "rabea sh elzayat",
    "سابقة أعمال ربيع شعبان",
    "مشاريع ربيع شعبان",
    "مشاريع ربيع الزيات",
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
