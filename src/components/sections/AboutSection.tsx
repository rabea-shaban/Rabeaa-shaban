'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import profilePhoto from '@/Img/rabea.jpg';

const highlightedSkills = [
  'Full Stack Software Engineer', 'MERN Stack', 'React.js', 'Node.js', 'TypeScript',
  'Next.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication', 'AWS Cloud',
  'Docker', 'Kubernetes', 'Helm', 'Terraform', 'GitHub Actions', 'Linux', 'DevOps',
  'Clean Architecture', 'Software Engineering'
];

export const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden">
      {/* 1. Header with Layered 3D Watermark Typography */}
      <SectionHeading
        badge="INTRODUCTION"
        title="About Me"
        watermark="About Me"
        subtitle="Full Stack Software Engineer specializing in building modern, scalable web applications using the MERN Stack. Passionate about Cloud Computing, DevOps, and creating secure, production-ready software."
        size="large"
      />

      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Text Bio Column (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 space-y-5 text-muted-foreground text-sm leading-relaxed"
          >
            <div className="p-8 glass-effect rounded-3xl border border-border/50 shadow-xl space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                <h3 className="text-xl font-bold font-display text-foreground">Get to Know Me</h3>
              </div>

              <p>
                I'm <strong className="text-foreground">Rabea Shaban</strong>, a Full Stack Software Engineer based in Minya, Egypt. I graduated in 2024 with a Bachelor's degree in Management Information Systems (MIS), earning an <strong className="text-primary font-bold">Excellent grade</strong>.
              </p>

              <p>
                I specialize in developing end-to-end web applications using <strong className="text-foreground">MongoDB, Express.js, React.js, Node.js, Next.js, and TypeScript</strong>. My experience includes designing responsive user interfaces, building secure RESTful APIs, implementing JWT authentication, and creating maintainable applications following clean architecture principles.
              </p>

              <p>
                Alongside Full Stack development, I'm expanding my expertise in <strong className="text-foreground">Cloud Computing and DevOps</strong>. I work with <strong className="text-foreground">Docker</strong> for containerization, <strong className="text-foreground">Kubernetes and Helm</strong> for container orchestration, <strong className="text-foreground">Terraform</strong> for Infrastructure as Code (IaC), <strong className="text-foreground">GitHub Actions</strong> for CI/CD automation, and AWS and Linux as part of modern cloud-native development.
              </p>

              <p>
                I completed the <strong className="text-foreground">Digilians AI-Based Software Development Specialized Diploma</strong> at the Egyptian Military Academy in Heliopolis, Cairo, organized by MCIT, advancing my expertise in Software Engineering, Cloud Computing, Artificial Intelligence, and DevOps through intensive hands-on training.
              </p>

              {/* Highlighted Skills Pills */}
              <div className="pt-4 space-y-3 border-t border-border/30">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">HIGHLIGHTED SKILLS:</h4>
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
          </motion.div>

          {/* Photo Column (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-border/60 bg-card shadow-2xl">
                <img
                  src={typeof profilePhoto === 'string' ? profilePhoto : (profilePhoto as any)?.src || '/rabea.jpg'}
                  alt="Rabea Shaban"
                  className="w-full h-auto object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
