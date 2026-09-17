import AboutView from "@/views/AboutView";

export const metadata = {
  title: "About Rabea Shaban | من هو ربيع شعبان - المسيرة المهنية والأكاديمية وخريج مبادرة Digilians",
  description:
    "Meet Rabea Shaban (ربيع شعبان) - Senior Full Stack Software Engineer. MIS Bachelor's Degree with Distinction (91.3% / Imtiyaz) & Graduate of Egyptian Military Academy AI-Based Software Development Specialized Diploma (Digilians / MCIT). سيرة ذاتية ومؤهلات ربيع شعبان الأكاديمية والمهنية وخبرات التطوير السحابي.",
  keywords: [
    "About Rabea Shaban",
    "من هو ربيع شعبان",
    "سيرة ذاتية مهندس برمجيات",
    "Digilians Initiative Graduate",
    "خريج مبادرة الرواد الرقميون",
    "MIS Degree Distinction",
    "بكالوريوس نظم معلومات إدارية ممتاز",
    "Egyptian Military Academy Digilians",
    "Full Stack Engineer Qualifications",
    "Meta Front-End Developer Certified",
    "AWS Certified Cloud Practitioner",
    "DEPI MCIT Graduate",
    "خبرات ربيع شعبان البرمجية"
  ],
  alternates: {
    canonical: "https://www.rabea-shaban.com/about",
    languages: {
      "en": "https://www.rabea-shaban.com/en/about",
      "ar": "https://www.rabea-shaban.com/ar/about",
      "x-default": "https://www.rabea-shaban.com/about",
    },
  },
  openGraph: {
    title: "About Rabea Shaban | من أنا | Rabea Shaban - Full Stack Software Engineer",
    description:
      "Passionate Software Engineer holding a Bachelor's degree in MIS (Excellent grade) and AI-Based Software Development Specialized Diploma from Egyptian Military Academy (Digilians). مهندس برمجيات وتطوير ويب شامل.",
    url: "https://www.rabea-shaban.com/about",
    locale: "en_US",
    alternateLocale: ["ar_AR", "ar_EG", "ar_SA"],
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
