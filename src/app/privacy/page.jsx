import PrivacyView from "@/views/PrivacyView";

export const metadata = {
  title: "Privacy Policy & Data Deletion | Rabea Shaban",
  description:
    "Privacy Policy and User Data Deletion instructions for Rabea Shaban's website (rabea-shaban.com) and WhatsApp Business API integration.",
  alternates: {
    canonical: "https://www.rabea-shaban.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Rabea Shaban",
    description:
      "Privacy Policy and User Data Deletion instructions for Rabea Shaban's website and WhatsApp Business API integration.",
    url: "https://www.rabea-shaban.com/privacy",
    locale: "en_US",
  },
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
