'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Sparkles } from 'lucide-react';
import { useSettings } from '@/context/SettingsContext';

export const CustomizationButton: React.FC = () => {
  const { togglePanel, isOpen, settings } = useSettings();

  const isRtl = settings.language === 'ar';

  return (
    <div
      className={`fixed top-24 sm:top-28 md:top-1/2 md:-translate-y-1/2 z-40 pointer-events-auto transition-all duration-300 ${
        isRtl ? 'left-3 md:left-5 right-auto' : 'right-3 md:right-5 left-auto'
      }`}
    >
      <motion.button
        type="button"
        onClick={togglePanel}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full glass-effect border border-primary/30 shadow-lg shadow-primary/20 hover:border-primary text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label="Customize website"
        aria-expanded={isOpen}
      >
        {/* Subtle pulsating glow ring */}
        <span className="absolute -inset-1 rounded-full bg-primary/20 blur-sm opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" />

        {/* Icon with smooth spinning motion on hover */}
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="relative z-10"
        >
          <Settings className="w-5 h-5 group-hover:text-primary transition-colors" />
        </motion.div>

        {/* Sparkle badge on top right */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
        </span>

        {/* Floating Tooltip on desktop */}
        <span
          className={`hidden lg:group-hover:flex absolute py-1 px-2.5 rounded-lg text-[11px] font-semibold tracking-wide whitespace-nowrap bg-background/95 text-foreground border border-border shadow-xl pointer-events-none transition-all duration-200 ${
            isRtl ? 'left-full ml-3' : 'right-full mr-3'
          }`}
        >
          {isRtl ? 'تخصيص الواجهة' : 'Customize Portfolio'}
        </span>
      </motion.button>
    </div>
  );
};

export default CustomizationButton;
