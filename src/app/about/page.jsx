import AboutView from "@/views/AboutView";

export const metadata = {
  title: "About Me | من أنا - ربيع شعبان",
  description:
    "Learn more about Rabea Shaban (ربيع شعبان), Full Stack Software Engineer. Graduated with a Bachelor's degree in Management Information Systems (MIS) with an Excellent grade (Imtiyaz). Enrolled in Egyptian Military Academy AI-Based Software Diploma. نبذة تعريفية عن ربيع شعبان والمسيرة المهنية والأكاديمية.",
  keywords: [
    "About Rabea Shaban",
    "من هو ربيع شعبان",
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
    languages: {
      "en": "https://rabea-shaban.vercel.app/about",
      "ar": "https://rabea-shaban.vercel.app/about",
      "x-default": "https://rabea-shaban.vercel.app/about",
    },
  },
  openGraph: {
    title: "About Me | من أنا | Rabea Shaban - Full Stack Software Engineer",
    description:
      "Passionate Software Engineer holding a Bachelor's degree in MIS (Excellent grade) and professional certificates from Meta and AWS. مهندس برمجيات وتطوير ويب شامل.",
    url: "https://rabea-shaban.vercel.app/about",
    locale: "en_US",
    alternateLocale: ["ar_AR", "ar_EG", "ar_SA"],
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
