import ContactView from "@/views/ContactView";

export const metadata = {
  title: "Contact Me | تواصل معي - ربيع شعبان",
  description:
    "Get in touch with Rabea Shaban (ربيع شعبان) for freelance projects, technical consulting, full-time positions, or collaboration. Email: rabea.elzayate@gmail.com, WhatsApp: +201156807072. تواصل مع ربيع شعبان لطلب الخدمات البرمجية والاستشارات التقنية.",
  keywords: [
    "Contact Rabea Shaban",
    "تواصل مع ربيع شعبان",
    "Hire Rabea Shaban",
    "توظيف ربيع شعبان",
    "Software Engineer Contact Egypt",
    "rabea.elzayate@gmail.com",
    "Freelance Developer Contact"
  ],
  alternates: {
    canonical: "https://rabea-shaban.vercel.app/contact",
    languages: {
      "en": "https://rabea-shaban.vercel.app/contact",
      "ar": "https://rabea-shaban.vercel.app/contact",
      "x-default": "https://rabea-shaban.vercel.app/contact",
    },
  },
  openGraph: {
    title: "Contact Me | تواصل معي | Rabea Shaban - Full Stack Software Engineer",
    description:
      "Send a direct message or connect on LinkedIn, GitHub, WhatsApp, or Email for software engineering projects and full-time hiring. تواصل معي مباشرة.",
    url: "https://rabea-shaban.vercel.app/contact",
    locale: "en_US",
    alternateLocale: ["ar_AR", "ar_EG", "ar_SA"],
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
