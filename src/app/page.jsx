import HomeView from "@/views/HomeView";

export const metadata = {
  title: "Rabea Shaban | Full Stack Software Engineer | MERN Stack",
  description:
    "Rabea Shaban — Full Stack Software Engineer specializing in MERN Stack, React.js, Next.js, Node.js, TypeScript, MongoDB, and AWS.",
  keywords: [
    "Rabea Shaban",
    "ربيع شعبان",
    "Rabea Shaban Software Engineer",
    "Rabea Shaban Developer",
    "Rabea Shaban Full Stack Developer",
    "Rabea Shaban MERN Stack Developer",
    "Rabea Shaban React Developer",
    "Rabea Shaban Next.js Developer",
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "MongoDB Developer",
    "AWS Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer"
  ],
  alternates: {
    canonical: "https://www.rabea-shaban.com",
  },
  openGraph: {
    title: "Rabea Shaban | Full Stack Software Engineer | MERN Stack",
    description:
      "Rabea Shaban — Full Stack Software Engineer specializing in MERN Stack, React.js, Next.js, Node.js, TypeScript, MongoDB, and AWS.",
    url: "https://www.rabea-shaban.com",
    locale: "en_US",
    images: ["/opengraph-image", "/profile.jpg"],
  },
};

export default function HomePage() {
  return <HomeView />;
}
