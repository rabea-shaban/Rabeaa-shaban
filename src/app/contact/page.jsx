import ContactView from "@/views/ContactView";

export const metadata = {
  title: "Contact Rabea Shaban | تواصل معي - توظيف مهندس برمجيات وطلب الاستشارات - ربيع شعبان",
  description:
    "Get in touch with Rabea Shaban (ربيع شعبان) for full-time software engineering roles, contract consulting, freelance project development, and technical collaboration. Email: rabea.elzayate@gmail.com, WhatsApp: +201156807072. تواصل لطلب الخدمات البرمجية وعروض التوظيف المباشرة.",
  keywords: [
    "Contact Rabea Shaban",
    "تواصل مع ربيع شعبان",
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
