import Image from "next/image";
import {
  Database,
  Download,
  ExternalLink,
  Globe,
  Layers3,
  Monitor,
} from "lucide-react";

export const metadata = {
  title: { absolute: "Rabea Shaban | Digital CV" },
  description:
    "Explore Rabea Shaban's professional information and download his Frontend, Backend, or Full Stack Developer CV.",
  alternates: { canonical: "https://rabea-shaban.com/cv" },
  openGraph: {
    title: "Rabea Shaban | Digital CV",
    description:
      "Explore Rabea Shaban's professional information and download his Frontend, Backend, or Full Stack Developer CV.",
    url: "https://rabea-shaban.com/cv",
    type: "profile",
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
          <p className="cv-title">Software Developer</p>
          <p className="cv-specialization">AI-based Software Development</p>
        </header>

        <section className="cv-personal" aria-labelledby="personal-heading">
          <h2 id="personal-heading">Personal Information</h2>
          <p><strong>Date of Birth:</strong> June 2, 2002</p>
          <p><strong>Education:</strong> Management Information Systems — 2024</p>
          <p><strong>English Level:</strong> A2</p>
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
