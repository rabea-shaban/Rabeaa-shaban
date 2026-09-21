import ServicesView from "@/views/ServicesView";

export const metadata = {
  title: "Services & Solutions | Rabea Shaban — Full Stack Software Engineer",
  description:
    "Professional software engineering services by Rabea Shaban: Full Stack Development, React & Next.js UI, Node.js REST APIs, Cloud Deployment, and DevOps.",
  keywords: [
    "Services Rabea Shaban",
    "Rabea Shaban",
    "ربيع شعبان",
    "Full Stack Development Services",
    "Frontend Development",
    "Backend Development",
    "REST API Development",
    "Cloud Deployment AWS",
    "Docker Containerization",
    "Kubernetes Orchestration"
  ],
  alternates: {
    canonical: "https://www.rabea-shaban.com/services",
  },
  openGraph: {
    title: "Services & Solutions | Rabea Shaban — Full Stack Software Engineer",
    description:
      "Professional software engineering services by Rabea Shaban: Full Stack Development, React & Next.js UI, Node.js REST APIs, Cloud Deployment, and DevOps.",
    url: "https://www.rabea-shaban.com/services",
    locale: "en_US",
    images: ["/opengraph-image", "/profile.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
