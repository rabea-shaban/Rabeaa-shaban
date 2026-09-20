import ContactView from "@/views/ContactView";

export const metadata = {
  title: "Contact Me | تواصل مع ربيع شعبان (الزيات)",
  description:
    "Get in touch with Rabea Shaban (ربيع شعبان / ربيع الزيات) for full-time software engineering roles, contract consulting, and freelance project development. Email: rabea.elzayate@gmail.com, WhatsApp: +201156807072.",
  keywords: [
    "Contact Rabea Shaban",
    "rabea shaban",
    "rabea-shaban",
    "ربيع شعبان",
    "ربيع الزيات",
    "ربيع شعبان الزيات",
    "rabea elzayate",
    "rabea elzayat",
    "rabea sh elzayat",
    "rabea sh el-zayat",
    "تواصل مع ربيع شعبان",
    "تواصل مع ربيع الزيات",
    "Hire Full Stack Engineer",
    "توظيف مهندس برمجيات",
    "Software Engineer WhatsApp Number",
    "رقم واتساب مهندس برمجيات",
    "Software Engineer Contact Egypt",
    "rabea.elzayate@gmail.com",
    "Freelance Developer Contact",
    "استشارات برمجية للشركات والناشئة"
  ],
  alternates: {
    canonical: "https://www.rabea-shaban.com/contact",
    languages: {
      "en": "https://www.rabea-shaban.com/en/contact",
      "ar": "https://www.rabea-shaban.com/ar/contact",
      "x-default": "https://www.rabea-shaban.com/contact",
    },
  },
  openGraph: {
    title: "Contact Me | تواصل معي | Rabea Shaban - Full Stack Software Engineer",
    description:
      "Send a direct message or connect on LinkedIn, GitHub, WhatsApp, or Email for software engineering projects and full-time hiring. تواصل معي مباشرة.",
    url: "https://www.rabea-shaban.com/contact",
    locale: "en_US",
    alternateLocale: ["ar_AR", "ar_EG", "ar_SA"],
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
