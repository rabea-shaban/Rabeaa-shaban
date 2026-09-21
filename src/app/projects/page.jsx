import ProjectsView from "@/views/ProjectsView";

export const metadata = {
  title: "Projects | Rabea Shaban — Full Stack Software Engineer",
  description:
    "Featured software engineering projects and full stack web applications built by Rabea Shaban using React, Next.js, Node.js, Express, MongoDB, TypeScript, and AWS.",
  keywords: [
    "Projects Rabea Shaban",
    "Rabea Shaban",
    "ربيع شعبان",
    "EduSphere",
    "Pharmacy POS",
    "Zein Hub",
    "Sy2antek",
    "MERN Stack Projects",
    "Full Stack Software Engineer",
    "Next.js Projects",
    "React Applications",
    "Node.js APIs"
  ],
  alternates: {
    canonical: "https://www.rabea-shaban.com/projects",
  },
  openGraph: {
    title: "Projects | Rabea Shaban — Full Stack Software Engineer",
    description:
      "Featured software engineering projects and full stack web applications built by Rabea Shaban using React, Next.js, Node.js, Express, MongoDB, TypeScript, and AWS.",
    url: "https://www.rabea-shaban.com/projects",
    locale: "en_US",
    images: ["/opengraph-image", "/profile.jpg"],
  },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
