import CertificatesView from "@/views/CertificatesView";

export const metadata = {
  title: "Certificates & Degrees | شهادات واعتمادات ربيع شعبان",
  description:
    "Official certifications and academic credentials of Rabea Shaban (ربيع شعبان / ربيع الزيات): AWS Certified Cloud Practitioner, Meta Front-End Developer, MIS Distinction Degree (91.3%), and Digilians AI Diploma.",
  keywords: [
    "Certificates Rabea Shaban",
    "rabea shaban",
    "rabea-shaban",
    "ربيع شعبان",
    "ربيع الزيات",
    "ربيع شعبان الزيات",
    "rabea elzayate",
    "rabea elzayat",
    "rabea sh elzayat",
    "شهادات ربيع شعبان",
    "شهادات ربيع الزيات",
    "AWS Certified Cloud Practitioner",
    "Meta Front-End Developer Certificate",
    "شهادة مطور واجهات ميتا",
    "Digilians AI Diploma MCIT",
    "شهادة مبادرة الرواد الرقميون",
    "MIS Bachelor Degree Excellent Grade",
    "بكالوريوس نظم معلومات امتياز",
    "Mahara-Tech ITI Certification",
    "Udacity MCIT Developer Track",
    "Verified Software Engineer Credentials"
  ],
  alternates: {
    canonical: "https://www.rabea-shaban.com/certificates",
    languages: {
      "en": "https://www.rabea-shaban.com/en/certificates",
      "ar": "https://www.rabea-shaban.com/ar/certificates",
      "x-default": "https://www.rabea-shaban.com/certificates",
    },
  },
  openGraph: {
    title: "Certificates & Credentials | الشهادات والاعتمادات | Rabea Shaban",
    description:
      "Browse through official academic degrees, professional specializations, cloud certifications, and technical achievements. الشهادات التقنية والأكاديمية المعتمدة.",
    url: "https://www.rabea-shaban.com/certificates",
    locale: "en_US",
    alternateLocale: ["ar_AR", "ar_EG", "ar_SA"],
    images: ["/og-image.jpg"],
  },
};

export default function CertificatesPage() {
  return <CertificatesView />;
}
