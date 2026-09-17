'use client';

import React from 'react';
import { Sparkles, EyeOff } from 'lucide-react';
import { useSettings } from '@/context/SettingsContext';

export const AnimationToggle: React.FC = () => {
  const { settings, setAnimations } = useSettings();

  return (
    <div className="flex items-center justify-between p-3 bg-secondary/70 border border-border/40 rounded-xl">
      <div className="flex items-center gap-2.5">
        <div
          className={`p-2 rounded-lg ${
            settings.animations ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
          }`}
        >
          {settings.animations ? (
            <Sparkles className="w-4 h-4" />
          ) : (
            <EyeOff className="w-4 h-4" />
          )}
        </div>
        <div>
          <div className="text-xs font-semibold text-foreground">
            Motion & Animations
          </div>
          <div className="text-[11px] text-muted-foreground">
            {settings.animations ? 'Smooth interactive effects' : 'Reduced motion enabled'}
          </div>
        </div>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={settings.animations}
        onClick={() => setAnimations(!settings.animations)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
          settings.animations ? 'bg-primary' : 'bg-muted-foreground/30'
        }`}
        aria-label="Toggle animations"
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
            settings.animations ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
};

export default AnimationToggle;
