'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import { useSettings, Language } from '@/context/SettingsContext';

export const LanguageSelector: React.FC = () => {
  const { settings, setLanguage } = useSettings();

  const options: { id: Language; label: string; subLabel: string }[] = [
    { id: 'en', label: 'English', subLabel: 'LTR' },
    { id: 'ar', label: 'العربية', subLabel: 'RTL' },
  ];

  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-primary" />
          <span>Language / اللغة</span>
        </span>
        <span className="text-[11px] font-normal text-primary">
          {settings.language === 'ar' ? 'العربية' : 'English'}
        </span>
      </label>
      <div className="grid grid-cols-2 gap-2 p-1 bg-secondary/70 border border-border/40 rounded-xl">
        {options.map((option) => {
          const isActive = settings.language === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setLanguage(option.id)}
              className={`flex items-center justify-between py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-background text-foreground shadow-sm border border-border/50 font-bold'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/40'
              }`}
              aria-label={`Switch language to ${option.label}`}
            >
              <span>{option.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground/60'}`}>
                {option.subLabel}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
