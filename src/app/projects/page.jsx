import ProjectsView from "@/views/ProjectsView";

export const metadata = {
  title: "Projects Showcase",
  description:
    "Explore production projects and web applications built by Rabea Shaban including EduSphere (E-Learning & WebRTC SaaS), Sa2yanti, AGRSUP E-Commerce, and Cloud REST APIs.",
  keywords: [
    "Rabea Shaban Projects",
    "EduSphere SaaS",
    "Sa2yanti app",
    "AGRSUP e-commerce",
    "React projects",
    "Next.js showcase",
    "Node.js portfolio projects"
  ],
  alternates: {
    canonical: "https://rabea-shaban.vercel.app/projects",
  },
  openGraph: {
    title: "Projects Showcase | Rabea Shaban",
    description:
      "A comprehensive portfolio of web applications, enterprise SaaS platforms, e-commerce stores, and cloud backend APIs.",
    url: "https://rabea-shaban.vercel.app/projects",
    images: ["/og-image.jpg"],
  },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
