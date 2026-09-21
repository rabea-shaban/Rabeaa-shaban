import CertificatesView from "@/views/CertificatesView";

export const metadata = {
  title: "Certificates & Credentials | Rabea Shaban — Full Stack Software Engineer",
  description:
    "Verified professional certifications and technical credentials earned by Rabea Shaban including AWS Certified Cloud Practitioner, Meta Front-End Developer, and MIS Degree.",
  keywords: [
    "Certificates Rabea Shaban",
    "Rabea Shaban",
    "ربيع شعبان",
    "AWS Certified Cloud Practitioner",
    "Meta Front-End Developer",
    "MIS Degree",
    "Digilians AI Diploma",
    "Software Engineering Credentials"
  ],
  alternates: {
    canonical: "https://www.rabea-shaban.com/certificates",
  },
  openGraph: {
    title: "Certificates & Credentials | Rabea Shaban — Full Stack Software Engineer",
    description:
      "Verified professional certifications and technical credentials earned by Rabea Shaban including AWS Certified Cloud Practitioner, Meta Front-End Developer, and MIS Degree.",
    url: "https://www.rabea-shaban.com/certificates",
    locale: "en_US",
    images: ["/opengraph-image", "/profile.jpg"],
  },
};

export default function CertificatesPage() {
  return <CertificatesView />;
}
