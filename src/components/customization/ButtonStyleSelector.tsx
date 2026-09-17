'use client';

import React from 'react';
import { useSettings, ButtonStyle } from '@/context/SettingsContext';

export const ButtonStyleSelector: React.FC = () => {
  const { settings, setButtonStyle } = useSettings();

  const options: { id: ButtonStyle; label: string; previewRadius: string }[] = [
    { id: 'rounded', label: 'Rounded', previewRadius: 'rounded-full' },
    { id: 'medium', label: 'Medium', previewRadius: 'rounded-md' },
    { id: 'sharp', label: 'Sharp', previewRadius: 'rounded-none' },
  ];

  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
        <span>Button Corner Style</span>
        <span className="text-[11px] font-normal text-primary capitalize">
          {settings.buttonStyle}
        </span>
      </label>
      <div className="grid grid-cols-3 gap-2 p-1 bg-secondary/70 border border-border/40 rounded-xl">
        {options.map((option) => {
          const isActive = settings.buttonStyle === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setButtonStyle(option.id)}
              className={`flex flex-col items-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-background text-foreground shadow-sm border border-border/50 font-bold'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/40'
              }`}
              aria-label={`Select ${option.label} button style`}
            >
              <div
                className={`w-7 h-4 border-2 ${
                  isActive ? 'border-primary bg-primary/20' : 'border-muted-foreground/40 bg-muted/20'
                } ${option.previewRadius}`}
              />
              <span className="text-[11px]">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonStyleSelector;
