'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Filter, Github, Search, X, Check, Code, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects } from "@/Data/projects";
import { useSEO } from "@/hooks/useSEO";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/context/SettingsContext";

const ProjectsView = () => {
  const { t, settings, isRtl } = useSettings();
  const isAr = settings.language === 'ar';

  useSEO({
    title: isAr 
      ? "معرض المشروعات والأعمال البرمجية | سابقة أعمال ربيع شعبان" 
      : "Projects & Software Case Studies | Full Stack & Cloud Web Apps by Rabea Shaban",
    description: isAr
      ? "استعرض سابقة أعمال ومشاريع برمجية متكاملة تشمل منصات LMS التعليمية، أنظمة نقاط البيع وإدارة الصيدليات POS، مواقع الأعمال والشركات، وتطبيقات الويب الحديثة مع روابط المعاينة الحية وكود المصدر GitHub."
      : "Explore enterprise full-stack web applications, LMS education platforms, POS pharmacy systems, business websites, and digital portals built by Rabea Shaban with live previews and open GitHub repositories.",
    keywords: isAr
      ? "سابقة أعمال ربيع شعبان, مشاريع ويب حقيقية, منصة EduSphere, نظام Pharmacy POS, منصة Zein Hub, تطبيق صيانِتك, حدائق الراقي, صيدليات الزيات, حدائق الريان, منصة أثر, كود مصدر برمجيات, معرض أعمال Next.js و Node.js"
      : "Software Engineering Portfolio, EduSphere LMS, Pharmacy POS, Zein Hub, Sy2antek, Production Next.js Projects, MERN Stack Case Studies, Enterprise Web Apps, Full Stack GitHub Projects, React SaaS Apps"
  });

  const projectCategories = [
    { id: "all", label: isAr ? "جميع المشروعات" : "All Projects" },
    { id: "Next.js", label: "Next.js" },
    { id: "React", label: "React" },
    { id: "Full Stack", label: isAr ? "تطوير شامل" : "Full Stack" },
    { id: "web-app", label: isAr ? "تطبيقات ويب" : "Web Apps" },
    { id: "e-commerce", label: isAr ? "متاجر إلكترونية" : "E-Commerce" },
    { id: "website", label: isAr ? "مواقع ويب" : "Websites" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const categories = Array.isArray(project.category) ? project.category : [project.category];
    const matchesCategory = selectedCategory === "all" || categories.includes(selectedCategory);
    
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      project.title?.toLowerCase().includes(query) ||
      (project.titleAr && project.titleAr.toLowerCase().includes(query)) ||
      project.description?.toLowerCase().includes(query) ||
      (project.descriptionAr && project.descriptionAr.toLowerCase().includes(query)) ||
      project.tech?.some(t => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 relative bg-background overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-primary/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeading
          badge={t.projects.badge}
          title={t.projects.title}
          watermark={t.projects.watermark}
          subtitle={t.projects.subtitle}
          size="large"
        />

        {/* Filter Controls & Search */}
        <div className="mb-12 space-y-6">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className={`w-5 h-5 absolute top-1/2 -translate-y-1/2 text-muted-foreground ${isRtl ? 'right-3.5' : 'left-3.5'}`} />
            <input
              type="text"
              placeholder={isAr ? "ابحث عن مشروع بالاسم، التقنية، أو الكلمات المفتاحية..." : "Search projects by title, technology, or keywords..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full py-3 rounded-full border border-border/50 bg-card/60 glass-effect focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm ${
                isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className={`absolute top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground ${isRtl ? 'left-3.5' : 'right-3.5'}`}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {projectCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    isSelected
                      ? "bg-primary text-white shadow-[0_4px_15px_rgba(139,39,242,0.3)] scale-105"
                      : "glass-effect border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 glass-effect rounded-2xl border border-border/40 max-w-md mx-auto">
            <Layers className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-bold">{isAr ? "لم يتم العثور على مشروعات" : "No projects matched"}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {isAr ? "جرب تعديل كلمة البحث أو اختيار تصنيف آخر." : "Try tweaking your search term or filter category."}
            </p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => {
                const projectTitle = (isAr && project.titleAr) ? project.titleAr : project.title;
                const projectDesc = (isAr && project.descriptionAr) ? project.descriptionAr : project.description;

                return (
                  <motion.div
                    key={project.title + idx}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    className="glass-effect rounded-2xl border border-border/40 overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Project Image Header */}
                      <div
                        className="relative aspect-video bg-muted/30 overflow-hidden cursor-pointer"
                        onClick={() => setActiveProject(project)}
                      >
                        {project.img ? (
                          <img
                            src={typeof project.img === 'string' ? project.img : project.img.src || project.img}
                            alt={projectTitle}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-primary/10">
                            <Sparkles className="w-10 h-10 text-primary/40" />
                          </div>
                        )}
                        {project.featured && (
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-bold shadow-md">
                            {isAr ? "مشروع مميز" : "Featured"}
                          </span>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold">
                            {isAr ? "عرض التفاصيل الكاملة" : "View Project Details"}
                          </span>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-6">
                        <h3
                          className="text-2xl font-bold font-display leading-tight mb-2 group-hover:text-primary transition-colors cursor-pointer"
                          onClick={() => setActiveProject(project)}
                        >
                          {projectTitle}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                          {projectDesc}
                        </p>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech?.slice(0, 4).map((tech, tIdx) => (
                            <span key={tIdx} className="px-2.5 py-0.5 text-[10px] font-bold rounded-md bg-primary/10 text-primary border border-primary/20">
                              {tech}
                            </span>
                          ))}
                          {project.tech?.length > 4 && (
                            <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-muted text-muted-foreground">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions Footer */}
                    <div className="px-6 pb-6 pt-0 flex items-center gap-3 border-t border-border/20 pt-4 mt-auto">
                      {project.demo && (
                        <Button asChild size="sm" className="flex-1 shadow-sm text-xs">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            {t.common.liveDemo} <ExternalLink className="w-3.5 h-3.5 ml-1.5 rtl:mr-1.5 rtl:ml-0" />
                          </a>
                        </Button>
                      )}
                      {project.github && project.github !== "#" && (
                        <Button variant="outline" size="sm" asChild className="glass-effect text-xs">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            {t.common.sourceCode} <Github className="w-3.5 h-3.5 ml-1.5 rtl:mr-1.5 rtl:ml-0" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Project Details Modal Dialog */}
        <Dialog open={!!activeProject} onOpenChange={() => setActiveProject(null)}>
          {activeProject && (() => {
            const modalTitle = (isAr && activeProject.titleAr) ? activeProject.titleAr : activeProject.title;
            const modalDesc = (isAr && activeProject.descriptionAr) ? activeProject.descriptionAr : activeProject.description;
            const modalFeatures = (isAr && activeProject.featuresAr) ? activeProject.featuresAr : (activeProject.features || []);

            return (
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto glass-effect border border-border/50">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-display">{modalTitle}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  {activeProject.img && (
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted">
                      <img
                        src={typeof activeProject.img === 'string' ? activeProject.img : activeProject.img.src || activeProject.img}
                        alt={modalTitle}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed">{modalDesc}</p>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-foreground">{t.common.techStack}</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tech?.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {modalFeatures && modalFeatures.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-foreground">
                        {isAr ? "الميزات الرئيسية" : "Key Features"}
                      </h4>
                      <ul className="space-y-1.5">
                        {modalFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start text-xs text-muted-foreground">
                            <Check className="w-4 h-4 text-primary mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4 border-t border-border/30">
                    {activeProject.demo && (
                      <Button asChild size="lg" className="flex-1">
                        <a href={activeProject.demo} target="_blank" rel="noopener noreferrer">
                          {t.common.liveDemo} <ExternalLink className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0" />
                        </a>
                      </Button>
                    )}
                    {activeProject.github && activeProject.github !== "#" && (
                      <Button variant="outline" size="lg" asChild className="flex-1 glass-effect">
                        <a href={activeProject.github} target="_blank" rel="noopener noreferrer">
                          {t.common.sourceCode} <Github className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            );
          })()}
        </Dialog>
      </div>
    </div>
  );
};

export default ProjectsView;
