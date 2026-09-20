'use client';

import { useSettings } from "@/context/SettingsContext";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Globe } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, toggleTheme, t, settings, toggleLanguage } = useSettings();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.projects, path: "/projects" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.contact, path: "/contact" },
    { name: t.nav.certificates, path: "/certificates" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`pointer-events-auto transition-all duration-300 w-full md:w-auto rounded-full px-4 md:px-5 py-2 md:py-2.5 border glass-effect shadow-lg flex items-center justify-between gap-3 md:gap-6 ${
          scrolled ? "border-border/30 bg-background/80" : "border-border/10 bg-background/40"
        }`}
      >
        <Link href="/" className="flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse group">
          <img 
            src={resolvedTheme === "dark" ? "/logoWhite.png" : "/logo.png"} 
            alt="Rabea Shaban Logo" 
            className="h-7 md:h-8 w-auto object-contain rounded-md group-hover:scale-105 transition-transform" 
          />
          <span className="font-bold text-sm md:text-base gradient-text font-display">
            {settings.language === 'ar' ? 'ربيع شعبان' : 'Rabea Shaban'}
          </span>
        </Link>
  
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 rtl:space-x-reverse">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
              {pathname === item.path && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}

          <div className="flex items-center gap-2 pl-2 rtl:pl-0 rtl:pr-2 border-l rtl:border-l-0 rtl:border-r border-border/30">
            {/* Quick Language Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all border border-border/40 bg-card/40"
              title={settings.language === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span>{settings.language === 'ar' ? 'EN' : 'عربي'}</span>
            </motion.button>

            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-border/40 bg-card/40 text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:border-primary/40 transition-colors duration-200 overflow-hidden"
              aria-label={t.nav.toggleTheme}
              title={resolvedTheme === "dark" ? (settings.language === 'ar' ? 'التحويل للوضع الفاتح' : 'Switch to Light Mode') : (settings.language === 'ar' ? 'التحويل للوضع الليلي' : 'Switch to Dark Mode')}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={resolvedTheme}
                  initial={{ y: -10, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-primary" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
  
        {/* Mobile Actions (Language & Theme) */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            type="button"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all border border-border/40 bg-card/40"
            aria-label="Toggle language"
          >
            <span>{settings.language === 'ar' ? 'EN' : 'عربي'}</span>
          </motion.button>

          <motion.button 
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={toggleTheme} 
            className="w-8 h-8 rounded-full flex items-center justify-center border border-border/40 bg-card/40 text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:border-primary/40 transition-colors duration-200 overflow-hidden"
            aria-label={t.nav.toggleTheme}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={resolvedTheme}
                initial={{ y: -10, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 10, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-primary" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
