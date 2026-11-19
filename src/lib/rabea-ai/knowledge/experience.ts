import { experience } from "@/Data/experience";

export const verifiedExperience = experience.map(({ title, period, description, skills }) => ({
  title,
  period,
  description,
  skills,
}));

export const availability = "Not confirmed in the portfolio.";
