'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  watermark?: string;
  subtitle?: string;
  className?: string;
  align?: 'center' | 'left' | 'right';
  size?: 'normal' | 'large' | 'xl';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  watermark,
  subtitle,
  className = '',
  align = 'center',
  size = 'large',
}) => {
  const bgText = watermark || title;

  const alignClasses = {
    center: 'text-center items-center justify-center',
    left: 'text-left items-start justify-start',
    right: 'text-right items-end justify-end',
  }[align];

  const sizeClasses = {
    normal: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black',
    large: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black',
    xl: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black',
  }[size];

  const watermarkSizeClasses = {
    normal: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
    large: 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl',
    xl: 'text-7xl sm:text-8xl md:text-9xl lg:text-[10.5rem]',
  }[size];

  return (
    <div className={`relative w-full overflow-hidden py-8 sm:py-12 flex flex-col ${alignClasses} ${className}`}>
      {/* 1. Ambient Background Glow & Minimalist Vector Curves */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
        {/* Soft Radial Center Glow */}
        <div className="absolute w-[500px] sm:w-[650px] h-[250px] sm:h-[350px] rounded-full bg-primary/10 dark:bg-primary/5 blur-[100px] -top-8 pointer-events-none" />

        {/* Minimal Curved Graphic Lines matching reference image */}
        <svg
          className="absolute w-full max-w-4xl h-44 sm:h-56 text-primary/30 overflow-visible pointer-events-none opacity-40 dark:opacity-25"
          viewBox="0 0 1000 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top subtle curve */}
          <path
            d="M50,200 C250,20 750,240 950,40"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="5 5"
          />
          {/* Bottom curve */}
          <path
            d="M0,130 Q350,-10 700,150 T1000,90"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Decorative nodes */}
          <circle cx="120" cy="165" r="3.5" className="fill-primary" />
          <circle cx="880" cy="60" r="3.5" className="fill-primary" />
        </svg>
      </div>

      {/* 2. Top Pill Badge (e.g. INTRODUCTION) */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative z-20 mb-3 sm:mb-4"
        >
          <div className="inline-flex items-center px-4 sm:px-5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-primary border border-primary/30 bg-primary/10 backdrop-blur-md shadow-sm">
            {badge}
          </div>
        </motion.div>
      )}

      {/* 3. Main Stage: Perfect Centered Watermark in Back + Sharp Heading in Front */}
      <div className="relative w-full flex items-center justify-center py-2 sm:py-3">
        {/* Giant Watermark Backdrop Layer - Centered with inset-0 */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-visible"
          aria-hidden="true"
        >
          <span className={`font-black font-display leading-none whitespace-nowrap select-none pointer-events-none watermark-backdrop-text text-center ${watermarkSizeClasses}`}>
            {bgText}
          </span>
        </div>

        {/* Sharp High-Contrast Foreground Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
          className={`relative z-10 font-black font-display tracking-tight leading-none text-center floating-heading-text ${sizeClasses}`}
        >
          {title}
        </motion.h2>
      </div>

      {/* 4. Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative z-10 mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 text-center"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
