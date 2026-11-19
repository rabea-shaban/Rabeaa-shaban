import { personal } from "./personal";
import { education, training, graduationProject } from "./education";
import { verifiedSkills, skillInventoryNote } from "./skills";
import { verifiedExperience, availability } from "./experience";
import { verifiedProjects } from "./projects";
import { verifiedCertifications, certificationNotes } from "./certifications";
import { publicContact } from "./contact";

export const knowledgeBase = {
  personal,
  education,
  training,
  graduationProject,
  skills: verifiedSkills,
  skillInventoryNote,
  experience: verifiedExperience,
  projects: verifiedProjects,
  certifications: verifiedCertifications,
  certificationNotes,
  availability,
  contact: publicContact,
};

export const serializedKnowledgeBase = JSON.stringify(knowledgeBase);
