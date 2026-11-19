import { projects } from "@/Data/projects";

export type VerifiedProject = {
  name: string;
  nameAr?: string;
  type?: string;
  typeAr?: string;
  description?: string;
  descriptionAr?: string;
  technologies?: string[];
  features?: string[];
  featuresAr?: string[];
  featured?: boolean;
  source: string;
  demo: string;
  role: string;
  status: string;
};

const isSafeProjectUrl = (value: unknown): value is string => {
  if (typeof value !== "string") return false;
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
};

const portfolioProjects: VerifiedProject[] = projects.map((project) => ({
  name: project.title,
  nameAr: project.titleAr,
  type: project.projectType,
  typeAr: project.projectTypeAr,
  description: project.description,
  descriptionAr: project.descriptionAr,
  technologies: project.technologies || project.tech || [],
  features: project.features || [],
  featuresAr: project.featuresAr || [],
  featured: project.featured === true,
  source: isSafeProjectUrl(project.github) ? project.github : "Unavailable",
  demo: isSafeProjectUrl(project.demo) ? project.demo : "Unavailable",
  role: "Project portfolio lists this as Rabea's work; a more specific role is not documented.",
  status: "Status not specified in the portfolio.",
}));

const additionalPortfolioProjects: VerifiedProject[] = [
  {
    name: "Crime Prediction System",
    type: "Academic graduation project",
    description: "A graduation project using React and Firebase; the portfolio records an Excellent grade.",
    technologies: ["React", "Firebase"],
    role: "Individual contribution is not documented.",
    source: "Unavailable",
    demo: "Unavailable",
    status: "Academic project; current maintenance status is not specified.",
  },
  {
    name: "AGRSUP E-Commerce",
    type: "Training project completed during DEPI",
    description: "An agricultural supplies e-commerce platform built as part of the .NET Full Stack Developer training program.",
    technologies: [".NET Core", "React", "SQL Server", "REST APIs", "Stripe"],
    role: "Developed in a training program; a more specific individual contribution is not documented.",
    source: "Unavailable",
    demo: "Unavailable",
    status: "Status not specified in the portfolio.",
  },
];

export const verifiedProjects: VerifiedProject[] = [...portfolioProjects, ...additionalPortfolioProjects];
