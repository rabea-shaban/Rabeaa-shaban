import AboutView from "@/views/AboutView";

export const metadata = {
  title: "About Me",
  description:
    "Learn more about Rabea Shaban (ربيع شعبان), Full Stack Software Engineer. Graduated with a Bachelor's degree in Management Information Systems (MIS) with an Excellent grade (Imtiyaz). Enrolled in Egyptian Military Academy AI-Based Software Diploma.",
  keywords: [
    "About Rabea Shaban",
    "ربيع شعبان bio",
    "MIS Excellent grade",
    "Full Stack Software Engineer background",
    "Egyptian Military Academy Digitans",
    "Meta Front-End Developer",
    "DEPI MCIT",
    "NTI Egypt"
  ],
  alternates: {
    canonical: "https://rabea-shaban.vercel.app/about",
  },
  openGraph: {
    title: "About Me | Rabea Shaban - Full Stack Software Engineer",
    description:
      "Passionate Software Engineer holding a Bachelor's degree in MIS (Excellent grade) and professional certificates from Meta and AWS.",
    url: "https://rabea-shaban.vercel.app/about",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
