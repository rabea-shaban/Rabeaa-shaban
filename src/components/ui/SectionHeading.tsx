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
    normal: 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl',
    large: 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl',
    xl: 'text-5xl sm:text-7xl md:text-8xl lg:text-9xl',
  }[size];

  const watermarkSizeClasses = {
    normal: 'text-5xl sm:text-7xl md:text-8xl lg:text-9xl',
    large: 'text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem]',
    xl: 'text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem]',
  }[size];

  return (
    <div className={`relative w-full overflow-hidden py-8 sm:py-12 flex flex-col ${alignClasses} ${className}`}>
      {/* Subtle Background Decorative Lines & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-60">
        <div className="absolute w-[450px] sm:w-[650px] h-[250px] sm:h-[350px] rounded-full bg-primary/10 blur-[100px] -top-12 pointer-events-none" />
        
        {/* Curved decorative lines with nodes (matching design mockup) */}
        <svg
          className="absolute w-full max-w-4xl h-48 sm:h-64 text-primary/20 overflow-visible pointer-events-none"
          viewBox="0 0 900 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50,190 Q220,10 450,125 T850,50"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            className="opacity-40"
          />
          <path
            d="M100,50 C300,240 600,-20 820,190"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-30"
          />
          <circle cx="150" cy="175" r="3.5" className="fill-primary/60" />
          <circle cx="780" cy="55" r="3.5" className="fill-primary/60" />
          <circle cx="820" cy="190" r="2.5" className="fill-primary/40" />
        </svg>
      </div>

      {/* 1. Small Uppercase Pill Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative z-20 mb-3 sm:mb-4"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-primary border border-primary/25 bg-primary/10 backdrop-blur-md shadow-sm shadow-primary/10">
            {badge}
          </div>
        </motion.div>
      )}

      {/* 2. Main Title Container with Giant 3D Watermark Text Behind */}
      <div className="relative w-full flex items-center justify-center px-4">
        {/* Large Translucent Background Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className={`absolute inset-0 flex items-center justify-center font-black font-display tracking-tighter whitespace-nowrap select-none pointer-events-none watermark-backdrop-text ${watermarkSizeClasses}`}
          aria-hidden="true"
        >
          {bgText}
        </motion.div>

        {/* Sharp Floating Foreground Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
          className={`relative z-10 font-black font-display tracking-tight leading-none floating-heading-text ${sizeClasses}`}
        >
          {title}
        </motion.h2>
      </div>

      {/* 3. Optional Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 mt-5 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 text-center"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
