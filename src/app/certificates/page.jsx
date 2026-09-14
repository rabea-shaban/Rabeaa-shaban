import CertificatesView from "@/views/CertificatesView";

export const metadata = {
  title: "Certificates & Credentials",
  description:
    "Verified technical credentials and degrees of Rabea Shaban: AWS Academy Cloud Foundations, Meta Front-End Developer Specialization, MIS Bachelor's Degree (Excellent Grade), ITI, Udacity, and DEPI MCIT.",
  keywords: [
    "Rabea Shaban Certificates",
    "AWS Academy Cloud Foundations",
    "Meta Front-End Developer Certificate",
    "MIS Bachelor Degree Excellent",
    "Mahara-Tech ITI",
    "Udacity MCIT"
  ],
  alternates: {
    canonical: "https://rabea-shaban.vercel.app/certificates",
  },
  openGraph: {
    title: "Certificates & Credentials | Rabea Shaban",
    description:
      "Browse through official academic degrees, professional specializations, cloud certifications, and technical achievements.",
    url: "https://rabea-shaban.vercel.app/certificates",
    images: ["/og-image.jpg"],
  },
};

export default function CertificatesPage() {
  return <CertificatesView />;
}
