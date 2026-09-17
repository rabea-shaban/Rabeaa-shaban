'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowLeft, ExternalLink, Github, Linkedin, Mail, Phone, Mouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import Timeline from "@/components/Timeline";
import ScrollProgress from "@/components/ScrollProgress";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import { featuredProjects } from "@/Data/featuredProjects";
import { timelineData } from "@/Data/timelineData";
import profilePic from "@/Img/Picsart_25-01-21_11-09-34-893.jpg";
import { useSEO } from "@/hooks/useSEO";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/context/SettingsContext";

const HomeView = () => {
  const { t, settings, isRtl } = useSettings();
  const isAr = settings.language === 'ar';

  useSEO({
    title: isAr ? "مهندس برمجيات وتطوير ويب شامل" : "Full Stack Software Engineer",
    description: isAr 
      ? "ربيع شعبان - مهندس برمجيات وتطوير ويب شامل متخصص في React و Next.js و Node.js و Express و MongoDB وهندسة DevOps السحابية."
      : "Rabea Shaban - Full Stack Software Engineer. I build scalable, secure, and high-performance web applications using React, Next.js, Node.js, Express, MongoDB, and Cloud DevOps.",
    keywords: "Full Stack Software Engineer, MERN Stack, React Developer, Node.js Developer, Web Development Portfolio, Egypt Developer, ربيع شعبان"
  });

  const socialLinks = [
    { icon: Github, href: "https://github.com/rabea-shaban", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/rabea-sh-elzayat", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rabea.elzayate@gmail.com", label: "Email" },
    { icon: Phone, href: "https://wa.me/201156807072", label: "WhatsApp" },
  ];

  return (
    <div className="pt-24 min-h-screen relative bg-background overflow-hidden">
      <ScrollProgress />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="text-center max-w-4xl mx-auto space-y-6 flex flex-col items-center">
          
          {/* Centered Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <img
              src={profilePic.src || profilePic}
              alt="Rabea Shaban Profile"
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-background shadow-2xl"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight leading-tight"
          >
            {t.home.greeting} <span className="gradient-text">{isAr ? "ربيع شعبان" : "Rabea Shaban"}</span>
          </motion.h1>

          {/* Subtitle & Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-2"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display">
              {t.home.role}
            </h2>
            <div className="inline-block px-4 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
              {t.home.pill}
            </div>
          </motion.div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            {t.home.bio}
          </motion.p>

          {/* Core Page CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-3 pt-2"
          >
            <Button asChild size="lg" className="group shadow-lg bg-primary text-primary-foreground font-bold hover:opacity-90">
              <Link href="/projects">
                {t.common.viewProjects}
                {isRtl ? (
                  <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                )}
              </Link>
            </Button>

            <Button variant="outline" asChild size="lg" className="group glass-effect border-border/50 hover:bg-primary/10">
              <a href="https://flowcv.com/resume/a7n0o85l8o65" target="_blank" rel="noopener noreferrer">
                {t.common.downloadResume}
                <ArrowDown className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Button>

            <Button variant="outline" asChild size="lg" className="group glass-effect border-border/50 hover:bg-primary/10">
              <Link href="/contact">
                {t.common.contactMe}
                <Mail className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0" />
              </Link>
            </Button>
          </motion.div>

          {/* Social Icon Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-3 pt-2"
          >
            {socialLinks.map((link, idx) => {
              const IconComp = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass-effect border border-border/50 hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground hover:scale-110"
                  aria-label={link.label}
                >
                  <IconComp className="w-4 h-4" />
                </a>
              );
            })}
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="pt-6 text-muted-foreground/60 flex flex-col items-center gap-1"
          >
            <Mouse className="w-5 h-5 text-primary/70" />
          </motion.div>
        </div>
      </section>

      {/* Professional Journey Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={t.home.timelineBadge}
          title={t.home.timelineTitle}
          watermark={t.home.timelineWatermark}
          subtitle={t.home.timelineSubtitle}
          size="normal"
        />
        <Timeline items={timelineData} />
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-muted/20 border-y border-border/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t.home.projectsBadge}
            title={t.home.projectsTitle}
            watermark={t.home.projectsWatermark}
            subtitle={t.home.projectsSubtitle}
            size="normal"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-effect rounded-2xl p-6 border border-border/40 hover:border-primary/40 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {project.img && (
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-muted">
                      <img
                        src={typeof project.img === 'string' ? project.img : project.img.src || project.img}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                </div>
                <div className="pt-4 border-t border-border/30 flex justify-between items-center">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies?.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 text-[10px] font-bold rounded bg-primary/10 text-primary border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-primary hover:scale-110 transition-transform">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="shadow-[0_4px_20px_rgba(255,180,0,0.2)]">
              <Link href="/projects">
                {t.home.viewAllProjects}
                {isRtl ? (
                  <ArrowLeft className="w-4 h-4 mr-2" />
                ) : (
                  <ArrowRight className="w-4 h-4 ml-2" />
                )}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Currently Learning Section */}
      <CurrentlyLearning />

      {/* Ready to Start CTA Section */}
      <section className="py-24 bg-muted/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 glass-effect rounded-3xl border border-border/40 shadow-xl"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-5xl font-display">
              {isAr ? "هل أنت مستعد لبدء مشروعك القادم؟" : "Ready to Start Your Project?"}
            </h2>
            <p className="mb-8 max-w-lg mx-auto text-md md:text-lg text-muted-foreground leading-relaxed">
              {isAr
                ? "دعنا نتعاون لتحويل أفكارك إلى واقع رقمي مبهر بتطبيقات ويب حديثة، بنى تحتية سحابية موثوقة، وأداء استثنائي."
                : "Let's work together to bring your ideas to life with modern web technologies, containerized deployments, and clean cloud setups."}
            </p>
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/contact">
                {t.common.contactMe}
                {isRtl ? (
                  <ArrowLeft className="w-4 h-4 mr-2" />
                ) : (
                  <ArrowRight className="w-4 h-4 ml-2" />
                )}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
