import Image from "next/image";
import {
  Database,
  Download,
  ExternalLink,
  Globe,
  Layers3,
  Monitor,
} from "lucide-react";

const shareTitle = "Rabea Shaban Ibrahim | Software Engineer";
const shareDescription =
  "Software Engineer specializing in Full-Stack MERN, React.js, and Next.js. Explore Rabea's education and tailored CVs.";
const shareImageAlt =
  "Rabea Shaban Ibrahim — Software Engineer and Full-Stack MERN Developer";

export const metadata = {
  title: { absolute: shareTitle },
  description: shareDescription,
  alternates: { canonical: "https://www.rabea-shaban.com/cv" },
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    url: "https://www.rabea-shaban.com/cv",
    siteName: "Rabea Shaban",
    type: "profile",
    images: [
      {
        url: "/cv/opengraph-image",
        width: 1200,
        height: 630,
        alt: shareImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: ["/cv/twitter-image"],
    creator: "@rabea_sh_elzayat",
  },
};

const cvs = [
  {
    title: "Frontend Developer",
    subtitle: "React · Next.js · TypeScript",
    href: "/cv/frontend.pdf",
    icon: Monitor,
    color: "frontend",
  },
  {
    title: "Backend Developer",
    subtitle: "Node.js · Express.js · MongoDB",
    href: "/cv/backend.pdf",
    icon: Database,
    color: "backend",
  },
  {
    title: "Full Stack Developer",
    subtitle: "Frontend + Backend",
    href: "/cv/fullstack.pdf",
    icon: Layers3,
    color: "fullstack",
  },
];

const socials = [
  { label: "Personal Website", href: "https://rabea-shaban.com", icon: Globe },
  { label: "GitHub", href: "https://github.com/rabea-shaban", icon: null },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rabea-sh-elzayat",
    icon: null,
  },
];

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="cv-social-brand-icon">
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.88 2.02 3.39 1.43.1-.73.4-1.23.71-1.51-2.48-.28-5.08-1.24-5.08-5.51 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.28-2.6 5.23-5.09 5.5.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="cv-whatsapp-icon">
      <path
        d="M16 3.25A12.35 12.35 0 0 0 5.4 21.95L4 28l6.2-1.62A12.35 12.35 0 1 0 16 3.25Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12.1 10.2c-.3-.7-.65-.72-.95-.73h-.8c-.28 0-.73.1-1.11.52-.38.43-1.46 1.43-1.46 3.48s1.5 4.03 1.7 4.3c.2.28 2.9 4.64 7.17 6.32 3.55 1.4 4.28 1.12 5.05 1.05.77-.07 2.48-1.02 2.83-2 .35-.98.35-1.81.25-1.99-.1-.18-.38-.28-.8-.49-.42-.21-2.48-1.22-2.86-1.36-.38-.14-.66-.21-.94.21-.28.42-1.08 1.36-1.32 1.64-.24.28-.49.32-.9.1-.42-.2-1.77-.65-3.37-2.07-1.25-1.1-2.1-2.47-2.34-2.9-.24-.41-.03-.64.18-.84.19-.18.42-.48.63-.72.21-.24.28-.42.42-.7.14-.28.07-.53-.03-.74-.1-.21-.92-2.29-1.25-3.08Z"
        fill="currentColor"
        transform="translate(2 0) scale(.86)"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="cv-email-icon">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="cv-linkedin-icon">
      <path
        fill="currentColor"
        d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.99V9h2.94v9.45ZM6.46 7.71a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4Zm12 10.74h-2.93v-4.59c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.67H9.3V9h2.82v1.29h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.52 1.95 3.52 4.48v5.2Z"
      />
    </svg>
  );
}

export default function CvPage() {
  return (
    <main className="cv-page">
      <div className="cv-container">
        <header className="cv-hero">
          <Image
            className="cv-portrait"
            src="/cv/portrait.webp"
            alt="Rabea Shaban Ibrahim in a black suit"
            width={184}
            height={184}
            priority
          />
          <h1>Rabea Shaban Ibrahim</h1>
          <p className="cv-title">
            Software Engineer | Full-Stack MERN Developer | React.js &amp; Next.js
          </p>
          <p className="cv-specialization">
            Digilians Specialized Diploma · AI-based Software Development
          </p>
        </header>

        <nav className="cv-contact" aria-label="Direct contact">
          <a
            className="cv-contact-link cv-whatsapp"
            href="https://wa.me/201156807072"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="cv-contact-icon"><WhatsAppIcon /></span>
            <span className="cv-contact-copy">
              <span className="cv-contact-label">WhatsApp</span>
              <span className="cv-contact-value" dir="ltr">+20 115 680 7072</span>
            </span>
            <ExternalLink className="cv-contact-external" aria-hidden="true" />
          </a>
          <a className="cv-contact-link cv-email" href="mailto:rabea.elzayate@gmail.com">
            <span className="cv-contact-icon"><EmailIcon /></span>
            <span className="cv-contact-copy">
              <span className="cv-contact-label">Email</span>
              <span className="cv-contact-value">rabea.elzayate@gmail.com</span>
            </span>
          </a>
        </nav>

        <section className="cv-personal" aria-labelledby="about-heading">
          <h2 id="about-heading">About Me</h2>
          <p>
            I’m a Software Engineer focused on full-stack web development with
            the MERN stack, React.js, and Next.js.
          </p>
        </section>

        <section className="cv-section cv-education" aria-labelledby="education-heading">
          <div className="cv-divider" />
          <h2 id="education-heading">Education &amp; Training</h2>
          <div className="cv-education-list">
            <article className="cv-education-card">
              <h3>AI-Based Software Development Specialized Diploma</h3>
              <p>Digilians Initiative · Dec 2025 – Sep 2026</p>
            </article>
            <article className="cv-education-card">
              <h3>Bachelor of Management Information Systems</h3>
              <p>Higher Institute of Technology, Management and Information – Minya · 2020 – 2024</p>
            </article>
          </div>
        </section>

        <section className="cv-select" aria-labelledby="cv-heading">
          <div className="cv-divider" />
          <h2 id="cv-heading">Choose Your CV</h2>
          <div className="cv-list">
            {cvs.map(({ title, subtitle, href, icon: Icon, color }) => (
              <article className="cv-card" key={title}>
                <a
                  className="cv-download"
                  href={href}
                  download
                  aria-label={`Download ${title} CV as PDF`}
                >
                  <Download aria-hidden="true" />
                </a>
                <a
                  className="cv-card-copy"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${title} CV PDF in a new tab`}
                >
                  <span className="cv-card-title">{title}</span>
                  <span className="cv-card-subtitle">{subtitle}</span>
                </a>
                <Icon className={`cv-role-icon ${color}`} aria-hidden="true" />
              </article>
            ))}
          </div>
          <p className="cv-hint">View or download the CV that best matches your needs.</p>
        </section>

        <nav className="cv-socials" aria-label="Social links">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              className="cv-social"
              href={href}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cv-social-icon">
                {Icon ? <Icon aria-hidden="true" /> : label === "GitHub" ? <GithubIcon /> : <LinkedInIcon />}
              </span>
              <span className="cv-social-label">{label}</span>
              <span className="cv-social-url">
                {label === "Personal Website"
                  ? "rabea-shaban.com"
                  : label === "GitHub"
                    ? "github.com/rabea-shaban"
                    : "linkedin.com/in/rabea-sh-elzayat"}
                <ExternalLink aria-hidden="true" />
              </span>
            </a>
          ))}
        </nav>

      </div>
    </main>
  );
}
