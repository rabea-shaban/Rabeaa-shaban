'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Server, 
  Database, 
  Cloud, 
  Activity, 
  Wrench,
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  Sparkles,
  Award,
  CheckCircle2,
  BookOpen
} from "lucide-react";
import { experience } from "@/Data/experience";
import { skills } from "@/Data/skills";
import profilePhoto from "@/Img/rabea.jpg";
import { useSEO } from "@/hooks/useSEO";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/context/SettingsContext";

const highlightedSkills = [
  "Full Stack Software Engineer", "MERN Stack", "React.js", "Node.js", "TypeScript",
  "Next.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication", "AWS Cloud",
  "Docker", "Kubernetes", "Helm", "Terraform", "GitHub Actions", "Linux", "DevOps",
  "Clean Architecture", "Software Engineering"
];

const AboutView = () => {
  const { t, settings } = useSettings();
  const isAr = settings.language === 'ar';

  useSEO({
    title: isAr ? "من أنا | ربيع شعبان" : "About Me",
    description: isAr 
      ? "ربيع شعبان - مهندس برمجيات وتطوير ويب شامل مقيم في المنيا / القاهرة، مصر. حاصل على بكالوريوس نظم المعلومات الإدارية بتقدير ممتاز."
      : "Rabea Shaban - Full Stack Software Engineer based in Minya, Egypt. Bachelor's degree in MIS (Excellent grade). Passionate about Cloud Computing, DevOps, and modern software development.",
    keywords: "About Rabea Shaban, Software Engineer bio, MIS Excellent grade, MERN Stack, Next.js, Egyptian Military Academy, DEPI, NTI, Meta Certified, من أنا ربيع شعبان"
  });

  return (
    <div className="pt-28 pb-24 relative bg-background overflow-hidden min-h-screen">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Header */}
        <SectionHeading
          badge={t.about.badge}
          title={t.about.title}
          watermark={t.about.watermark}
          subtitle={t.about.subtitle}
          size="large"
        />

        {/* Get to Know Me Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-7 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold font-display text-foreground">{t.about.getKnowMe}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Text Bio Column (Left) */}
            <div className="lg:col-span-8 space-y-5 text-muted-foreground text-xs sm:text-sm leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p>{t.about.p4}</p>
              <p>{t.about.p5}</p>
              <p>{t.about.p6}</p>

              {/* Highlighted Skills Pills */}
              <div className="pt-4 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">{t.about.highlightedSkills}</h3>
                <div className="flex flex-wrap gap-2">
                  {highlightedSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo Column (Right) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group max-w-xs w-full">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-border/50 bg-card shadow-2xl">
                  <img
                    src={profilePhoto.src || profilePhoto}
                    alt="Rabea Shaban"
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Toolbox Section */}
        <section className="space-y-10">
          <SectionHeading
            badge={t.about.toolboxBadge}
            title={t.about.toolboxTitle}
            watermark={t.about.toolboxWatermark}
            subtitle={t.about.toolboxSubtitle}
            size="normal"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, idx) => {
              const IconComp = group.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="glass-effect rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold font-display text-foreground">{group.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-card/80 border border-border/50 text-xs font-medium text-foreground hover:border-primary/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Experience & Education 2-Column Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Experience Column (Left) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-7 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-bold font-display text-foreground">{t.about.experienceTitle}</h2>
            </div>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="glass-effect rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold font-display text-foreground">{exp.title}</h3>
                    <span className="px-3 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills?.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column (Right) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-7 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-bold font-display text-foreground">{t.about.educationTitle}</h2>
            </div>

            <div className="space-y-6">
              {/* Card 1: AI-Based Software Development Diploma */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all space-y-4 relative overflow-hidden"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0 mt-1">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-foreground">
                      {t.about.aiDiplomaTitle}
                    </h3>
                    <p className="text-xs font-semibold text-primary">
                      {t.about.aiDiplomaOrg}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.about.aiDiplomaLocation}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground border-t border-border/20 pt-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> 2026 - Present
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> Heliopolis, Cairo, Egypt
                  </span>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                  {t.common.currentlyEnrolled}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">
                    {t.common.currentlyEnrolled}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">
                    Egyptian Military Academy
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">
                    MCIT Professional Program
                  </span>
                </div>
              </motion.div>

              {/* Card 2: Bachelor of Management Information Systems (MIS) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-effect rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all space-y-4 relative overflow-hidden"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0 mt-1">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-foreground">
                      {t.about.bachelorTitle}
                    </h3>
                    <p className="text-xs font-semibold text-primary">
                      {t.about.bachelorOrg}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground border-t border-border/20 pt-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> Oct 2020 - Jul 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> Minya, Egypt
                  </span>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                  {t.about.bachelorGrade}
                </div>

                <div className="p-3 rounded-xl bg-primary/5 border border-primary/15 text-xs space-y-1">
                  <strong className="text-foreground block uppercase text-[10px] tracking-wider text-primary">{t.about.graduationProject}</strong>
                  <p className="text-muted-foreground font-medium">
                    {t.about.graduationProjectDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">
                    Top of Class Option
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">
                    Excellent Graduation Project Award
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default AboutView;
