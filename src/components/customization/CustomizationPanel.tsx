'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Sliders, Sparkles } from 'lucide-react';
import { useSettings } from '@/context/SettingsContext';
import ThemeSelector from './ThemeSelector';
import AccentColorSelector from './AccentColorSelector';
import LanguageSelector from './LanguageSelector';
import ButtonStyleSelector from './ButtonStyleSelector';
import FontSizeSelector from './FontSizeSelector';
import AnimationToggle from './AnimationToggle';

export const CustomizationPanel: React.FC = () => {
  const { isOpen, setIsOpen, resetSettings, settings } = useSettings();
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Lock body scroll on small screens when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isRtl = settings.language === 'ar';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex justify-end" role="dialog" aria-modal="true" aria-label="Customization panel">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Side Drawer Panel */}
          <motion.div
            ref={panelRef}
            initial={{ x: isRtl ? '-100%' : '100%', opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: isRtl ? '-100%' : '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className={`relative w-full sm:max-w-md h-full bg-background/95 backdrop-blur-2xl border-l border-border/50 shadow-2xl flex flex-col justify-between overflow-hidden z-10 ${
              isRtl ? 'border-r border-l-0 left-0 right-auto' : 'right-0 left-auto'
            }`}
          >
            {/* Header */}
            <div className="p-5 border-b border-border/40 flex items-center justify-between bg-card/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold font-display text-foreground flex items-center gap-1.5">
                    <span>{isRtl ? 'تخصيص الواجهة' : 'Customize UI'}</span>
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {isRtl ? 'خصص شكل وتجربة الموقع كما تفضل' : 'Personalize your portfolio experience'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label="Close customization panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin">
              {/* 1. Appearance Theme */}
              <ThemeSelector />

              {/* 2. Accent Color */}
              <AccentColorSelector />

              {/* 3. Language & Direction */}
              <LanguageSelector />

              {/* 4. Button Corner Style */}
              <ButtonStyleSelector />

              {/* 5. Typography Scale */}
              <FontSizeSelector />

              {/* 6. Motion & Animations */}
              <AnimationToggle />
            </div>

            {/* Footer / Reset Action */}
            <div className="p-4 border-t border-border/40 bg-card/60 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={resetSettings}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                title="Reset all settings to default"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isRtl ? 'استعادة الافتراضي' : 'Reset Defaults'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs font-bold bg-primary text-primary-foreground rounded-lg shadow hover:opacity-90 transition-opacity"
              >
                {isRtl ? 'تم وحفظ' : 'Done & Save'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CustomizationPanel;
