'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Filter, Github, Search, X, Check, Code, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects } from "@/Data/projects";
import { useSEO } from "@/hooks/useSEO";

const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "Next.js", label: "Next.js" },
  { id: "React", label: "React" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "web-app", label: "Web Apps" },
  { id: "e-commerce", label: "E-Commerce" },
  { id: "website", label: "Websites" },
];

const ProjectsView = () => {
  useSEO({
    title: "Projects Showcase",
    description: "Explore web development and software engineering projects built by Rabea Shaban using Next.js, React, Node.js, and cloud tools.",
    keywords: "Full stack projects, EduSphere, Sa2yanti, AGRSUP, React showcase, Next.js applications"
  });

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const categories = Array.isArray(project.category) ? project.category : [project.category];
    const matchesCategory = selectedCategory === "all" || categories.includes(selectedCategory);
    
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 relative bg-background overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-primary/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3.5 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Selected Works
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6 font-display">Projects Showcase</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive portfolio of web applications, enterprise SaaS platforms, e-commerce stores, and cloud backend APIs.
          </p>
        </motion.div>

        {/* Filter Controls & Search */}
        <div className="mb-12 space-y-6">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects by title, technology, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-border/50 bg-card/60 glass-effect focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
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
            <h3 className="text-lg font-bold">No projects matched</h3>
            <p className="text-sm text-muted-foreground mt-1">Try tweaking your search term or filter category.</p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
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
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary/10">
                          <Sparkles className="w-10 h-10 text-primary/40" />
                        </div>
                      )}
                      {project.featured && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-bold shadow-md">
                          Featured
                        </span>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold">
                          View Project Details
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <h3
                        className="text-2xl font-bold font-display leading-tight mb-2 group-hover:text-primary transition-colors cursor-pointer"
                        onClick={() => setActiveProject(project)}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                        {project.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech?.slice(0, 4).map((t, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-0.5 text-[10px] font-bold rounded-md bg-primary/10 text-primary border border-primary/20">
                            {t}
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
                          Live Demo <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" size="sm" asChild className="glass-effect text-xs">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          Code <Github className="w-3.5 h-3.5 ml-1.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Project Detail Modal */}
        <Dialog open={!!activeProject} onOpenChange={() => setActiveProject(null)}>
          <DialogContent className="max-w-3xl glass-effect border border-border/50 max-h-[85vh] overflow-y-auto">
            {activeProject && (
              <div>
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-2xl font-bold font-display">{activeProject.title}</DialogTitle>
                  <p className="text-xs text-muted-foreground mt-1">{activeProject.description}</p>
                </DialogHeader>

                <div className="relative aspect-video rounded-xl overflow-hidden bg-muted/40 mb-6 border border-border/40">
                  {activeProject.img && (
                    <img
                      src={typeof activeProject.img === 'string' ? activeProject.img : activeProject.img.src || activeProject.img}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Key Features */}
                {activeProject.features && (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-3 font-display">Key Features</h4>
                    <ul className="space-y-2">
                      {activeProject.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical Challenges & Takeaways */}
                {activeProject.challenges && (
                  <div className="mb-4 p-4 rounded-xl bg-primary/5 border border-primary/15 text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground block mb-1">Architecture & Challenges:</strong>
                    {activeProject.challenges}
                  </div>
                )}

                <div className="flex justify-end gap-3 pt-4 border-t border-border/30 mt-6">
                  <Button variant="outline" onClick={() => setActiveProject(null)}>Close</Button>
                  {activeProject.demo && (
                    <Button asChild>
                      <a href={activeProject.demo} target="_blank" rel="noopener noreferrer">
                        Visit Live App <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProjectsView;
