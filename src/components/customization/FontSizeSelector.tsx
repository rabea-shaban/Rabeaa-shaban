'use client';

import React from 'react';
import { useSettings, FontSize } from '@/context/SettingsContext';

export const FontSizeSelector: React.FC = () => {
  const { settings, setFontSize } = useSettings();

  const options: { id: FontSize; label: string; iconSize: string }[] = [
    { id: 'small', label: 'Small', iconSize: 'text-xs' },
    { id: 'medium', label: 'Medium', iconSize: 'text-sm font-bold' },
    { id: 'large', label: 'Large', iconSize: 'text-base font-extrabold' },
  ];

  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
        <span>Typography Scale</span>
        <span className="text-[11px] font-normal text-primary capitalize">
          {settings.fontSize}
        </span>
      </label>
      <div className="grid grid-cols-3 gap-2 p-1 bg-secondary/70 border border-border/40 rounded-xl">
        {options.map((option) => {
          const isActive = settings.fontSize === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setFontSize(option.id)}
              className={`flex flex-col items-center justify-center gap-0.5 py-1.5 px-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-background text-foreground shadow-sm border border-border/50 font-bold'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/40'
              }`}
              aria-label={`Select ${option.label} font size`}
            >
              <span className={`${option.iconSize} ${isActive ? 'text-primary' : ''}`}>
                A
              </span>
              <span className="text-[10px] font-medium">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FontSizeSelector;
