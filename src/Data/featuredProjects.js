import { projects } from "./projects";

// Export the 4 featured Full-Stack platforms for the homepage spotlight
export const featuredProjects = projects.filter((p) => p.featured);
