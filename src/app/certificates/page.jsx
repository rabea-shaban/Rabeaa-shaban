import CertificatesView from "@/views/CertificatesView";

export const metadata = {
  title: "Certificates & Credentials | الشهادات والاعتمادات - ربيع شعبان",
  description:
    "Verified technical credentials and degrees of Rabea Shaban: AWS Academy Cloud Foundations, Meta Front-End Developer Specialization, MIS Bachelor's Degree (Excellent Grade), ITI, Udacity, and DEPI MCIT. الشهادات المعتمدة والدرجات الأكاديمية.",
  keywords: [
    "Rabea Shaban Certificates",
    "شهادات ربيع شعبان",
    "AWS Academy Cloud Foundations",
    "Meta Front-End Developer Certificate",
    "شهادة مطور واجهات ميتا",
    "MIS Bachelor Degree Excellent",
    "بكالوريوس نظم معلومات ممتاز",
    "Mahara-Tech ITI",
    "Udacity MCIT"
  ],
  alternates: {
    canonical: "https://rabea-shaban.vercel.app/certificates",
    languages: {
      "en": "https://rabea-shaban.vercel.app/certificates",
      "ar": "https://rabea-shaban.vercel.app/certificates",
      "x-default": "https://rabea-shaban.vercel.app/certificates",
    },
  },
  openGraph: {
    title: "Certificates & Credentials | الشهادات والاعتمادات | Rabea Shaban",
    description:
      "Browse through official academic degrees, professional specializations, cloud certifications, and technical achievements. الشهادات التقنية والأكاديمية المعتمدة.",
    url: "https://rabea-shaban.vercel.app/certificates",
    locale: "en_US",
    alternateLocale: ["ar_AR", "ar_EG", "ar_SA"],
    images: ["/og-image.jpg"],
  },
};

export default function CertificatesPage() {
  return <CertificatesView />;
}
