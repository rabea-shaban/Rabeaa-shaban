'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { useSettings, ACCENT_PRESETS, AccentColor } from '@/context/SettingsContext';

export const AccentColorSelector: React.FC = () => {
  const { settings, setAccentColor } = useSettings();

  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
        <span>Accent Color</span>
        <span className="text-[11px] font-normal text-primary capitalize">
          {ACCENT_PRESETS.find((p) => p.id === settings.accentColor)?.name || settings.accentColor}
        </span>
      </label>
      <div className="grid grid-cols-6 gap-2 p-1.5 bg-secondary/70 border border-border/40 rounded-xl">
        {ACCENT_PRESETS.map((color) => {
          const isActive = settings.accentColor === color.id;
          return (
            <button
              key={color.id}
              type="button"
              onClick={() => setAccentColor(color.id as AccentColor)}
              className={`group relative flex items-center justify-center h-9 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'ring-2 ring-offset-2 ring-offset-background ring-primary scale-105'
                  : 'hover:scale-105 opacity-85 hover:opacity-100'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
              aria-label={`Select ${color.name} accent color`}
            >
              {isActive && (
                <Check className="w-4 h-4 text-white drop-shadow-md stroke-[2.5]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AccentColorSelector;
