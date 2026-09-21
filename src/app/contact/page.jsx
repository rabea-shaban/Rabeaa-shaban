import ContactView from "@/views/ContactView";

export const metadata = {
  title: "Contact | Rabea Shaban — Full Stack Software Engineer",
  description:
    "Get in touch with Rabea Shaban for full-stack software development projects, technical consulting, and engineering inquiries.",
  keywords: [
    "Contact Rabea Shaban",
    "Rabea Shaban",
    "ربيع شعبان",
    "Hire Full Stack Software Engineer",
    "Software Engineering Inquiries",
    "Freelance Web Developer Contact"
  ],
  alternates: {
    canonical: "https://www.rabea-shaban.com/contact",
  },
  openGraph: {
    title: "Contact | Rabea Shaban — Full Stack Software Engineer",
    description:
      "Get in touch with Rabea Shaban for full-stack software development projects, technical consulting, and engineering inquiries.",
    url: "https://www.rabea-shaban.com/contact",
    locale: "en_US",
    images: ["/opengraph-image", "/profile.jpg"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
