import { skills } from "@/Data/skills";

export const verifiedSkills = skills.map(({ category, skills: items }) => ({
  category,
  skills: items,
}));

export const skillInventoryNote =
  "These technologies are listed in the portfolio as a skills inventory. No equal proficiency level is implied.";
