import ContactView from "@/views/ContactView";

export const metadata = {
  title: "Contact Me & Hire",
  description:
    "Get in touch with Rabea Shaban (ربيع شعبان) for freelance projects, technical consulting, full-time positions, or collaboration. Email: rabea.elzayate@gmail.com, WhatsApp: +201156807072.",
  keywords: [
    "Contact Rabea Shaban",
    "Hire Rabea Shaban",
    "Software Engineer Contact Egypt",
    "rabea.elzayate@gmail.com",
    "Freelance Developer Contact"
  ],
  alternates: {
    canonical: "https://rabea-shaban.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Me | Rabea Shaban - Full Stack Software Engineer",
    description:
      "Send a direct message or connect on LinkedIn, GitHub, WhatsApp, or Email for software engineering projects and full-time hiring.",
    url: "https://rabea-shaban.vercel.app/contact",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
