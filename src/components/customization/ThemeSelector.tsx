'use client';

import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useSettings, Theme } from '@/context/SettingsContext';

export const ThemeSelector: React.FC = () => {
  const { settings, setTheme } = useSettings();

  const options: { id: Theme; label: string; icon: React.ElementType }[] = [
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'dark', label: 'Dark', icon: Moon },
    { id: 'system', label: 'System', icon: Monitor },
  ];

  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
        <span>Appearance</span>
        <span className="text-[11px] font-normal text-primary lowercase capitalize">
          {settings.theme}
        </span>
      </label>
      <div className="grid grid-cols-3 gap-2 p-1 bg-secondary/70 border border-border/40 rounded-xl">
        {options.map((option) => {
          const Icon = option.icon;
          const isActive = settings.theme === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setTheme(option.id)}
              className={`relative flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-background text-foreground shadow-sm border border-border/50 font-bold'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/40'
              }`}
              aria-label={`Switch to ${option.label} theme`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-primary' : ''}`} />
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSelector;
