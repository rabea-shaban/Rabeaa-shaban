import AboutView from "@/views/AboutView";

export const metadata = {
  title: "About Me | Rabea Shaban — Full Stack Software Engineer",
  description:
    "Rabea Shaban (ربيع شعبان) is a Full Stack Software Engineer specializing in MERN Stack, React.js, Next.js, Node.js, TypeScript, MongoDB, and AWS.",
  keywords: [
    "About Rabea Shaban",
    "Rabea Shaban",
    "ربيع شعبان",
    "Rabea Shaban Software Engineer",
    "Rabea Shaban Developer",
    "Rabea Shaban Full Stack Developer",
    "Rabea Shaban MERN Stack Developer",
    "Full Stack Software Engineer",
    "MERN Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "AWS Developer"
  ],
  alternates: {
    canonical: "https://www.rabea-shaban.com/about",
  },
  openGraph: {
    title: "About Rabea Shaban | Full Stack Software Engineer",
    description:
      "Rabea Shaban (ربيع شعبان) is a Full Stack Software Engineer specializing in MERN Stack, React.js, Next.js, Node.js, TypeScript, MongoDB, and AWS.",
    url: "https://www.rabea-shaban.com/about",
    locale: "en_US",
    images: ["/opengraph-image", "/profile.jpg"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
