import ServicesView from "@/views/ServicesView";

export const metadata = {
  title: "Services & Engineering Solutions",
  description:
    "Expert freelance software engineering services by Rabea Shaban: Full Stack MERN Apps, Frontend React/Next.js UI, Node.js REST APIs, AWS Cloud Deployment, Docker, and Kubernetes.",
  keywords: [
    "Hire Full Stack Developer",
    "Hire React Engineer",
    "MERN Stack Freelancer",
    "Node.js REST API Development",
    "AWS Deployment Service",
    "Docker Containerization",
    "Kubernetes Orchestration"
  ],
  alternates: {
    canonical: "https://rabea-shaban.vercel.app/services",
  },
  openGraph: {
    title: "Services & Solutions | Rabea Shaban",
    description:
      "Expert engineering services from database architecture and full-stack building to containerized deployments, Kubernetes orchestration, and cloud solutions.",
    url: "https://rabea-shaban.vercel.app/services",
    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
