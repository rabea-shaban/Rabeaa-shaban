'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Download,
  Briefcase,
  Globe,
  Instagram,
  CheckCircle2,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";

const ContactView = () => {
  useSEO({
    title: "Contact Me",
    description: "Get in touch with Rabea Shaban for freelance projects, technical consulting, full-time positions, or collaboration.",
    keywords: "Contact software engineer, Hire developer Egypt, Freelance MERN developer"
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMsg(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setErrorMsg("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/rabea-shaban", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/rabea-sh-elzayat", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/rabea_sh_elzayat", label: "Instagram" },
    { icon: Mail, href: "mailto:rabea.elzayate@gmail.com", label: "Email" },
    { icon: Phone, href: "https://wa.me/201156807072", label: "WhatsApp" },
    { icon: Briefcase, href: "https://upwork.com/freelancers/~01d2bd68b7d6e8fbce", label: "Upwork" },
    { icon: Briefcase, href: "https://mostaql.com/u/rabea_elzayat", label: "Mostaql" },
  ];

  return (
    <div className="pt-28 pb-20 relative bg-background overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3.5 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Let's Connect
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6 font-display">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a new project, freelance opportunity, or technical inquiry? Send a message and let me know how I can help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Info Column */}
          <div className="space-y-8">
            <div className="glass-effect rounded-3xl p-8 border border-border/40 space-y-6">
              <h2 className="text-2xl font-bold font-display">Contact Details</h2>
              <div className="space-y-4">
                <a href="mailto:rabea.elzayate@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-card/60 hover:bg-primary/10 transition-colors border border-border/30 group">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email Address</div>
                    <div className="text-sm font-bold text-foreground">rabea.elzayate@gmail.com</div>
                  </div>
                </a>

                <a href="https://wa.me/201156807072" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-card/60 hover:bg-primary/10 transition-colors border border-border/30 group">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">WhatsApp / Phone</div>
                    <div className="text-sm font-bold text-foreground">+20 115 680 7072</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/60 border border-border/30">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="text-sm font-bold text-foreground">Egypt (Remote / International)</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border/30">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Follow & Connect</h3>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((link, idx) => {
                    const IconComp = link.icon;
                    return (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl glass-effect border border-border/50 hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground"
                        aria-label={link.label}
                      >
                        <IconComp className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Resume Callout */}
            <div className="glass-effect rounded-3xl p-6 border border-border/40 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold font-display">Need my Resume?</h3>
                <p className="text-xs text-muted-foreground">Download my latest CV in PDF format</p>
              </div>
              <Button asChild className="shadow-md text-xs">
                <a href="https://flowcv.com/resume/a7n0o85l8o65" target="_blank" rel="noopener noreferrer">
                  Resume <Download className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Form Column */}
          <div className="glass-effect rounded-3xl p-8 md:p-10 border border-border/40 shadow-xl relative">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold font-display">Thank you!</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  Your message has been sent successfully. I will get back to you as soon as possible!
                </p>
                <Button variant="outline" size="sm" onClick={() => setFormSubmitted(false)} className="mt-4">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold font-display mb-6">Send a Message</h2>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-destructive/10 text-destructive text-xs font-semibold border border-destructive/20">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-foreground">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Rabea Shaban"
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card/60 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-foreground">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rabea@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card/60 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-foreground">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card/60 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-foreground">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me more about your project goals and timeline..."
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card/60 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <Button type="submit" disabled={loading} size="lg" className="w-full shadow-lg text-sm mt-2">
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
