'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

import { translations, TranslationDict } from '@/translations/dictionary';

export type Theme = 'light' | 'dark' | 'system';
export type AccentColor = 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'yellow';
export type Language = 'en' | 'ar';
export type ButtonStyle = 'rounded' | 'medium' | 'sharp';
export type FontSize = 'small' | 'medium' | 'large';

export interface Settings {
  theme: Theme;
  accentColor: AccentColor;
  language: Language;
  buttonStyle: ButtonStyle;
  fontSize: FontSize;
  animations: boolean;
}

export const DEFAULT_SETTINGS: Settings = {
  theme: 'dark',
  accentColor: 'blue',
  language: 'en',
  buttonStyle: 'rounded',
  fontSize: 'medium',
  animations: true,
};

const SETTINGS_STORAGE_KEY = 'rabea_portfolio_settings';

interface SettingsContextType {
  settings: Settings;
  resolvedTheme: 'light' | 'dark';
  theme: 'light' | 'dark';
  isRtl: boolean;
  t: TranslationDict;
  setTheme: (theme: Theme) => void;
  setAccentColor: (accentColor: AccentColor) => void;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  setButtonStyle: (buttonStyle: ButtonStyle) => void;
  setFontSize: (fontSize: FontSize) => void;
  setAnimations: (animations: boolean) => void;
  resetSettings: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  togglePanel: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

// Accent colors color definition tokens (Light and Dark HSL values)
export const ACCENT_PRESETS = [
  { id: 'blue', name: 'Royal Blue', hex: '#3B66F5', lightHsl: '228 92% 58%', darkHsl: '217 91% 60%' },
  { id: 'purple', name: 'Cyber Violet', hex: '#8B27F2', lightHsl: '269 90% 55%', darkHsl: '270 95% 65%' },
  { id: 'green', name: 'Emerald', hex: '#10B981', lightHsl: '158 64% 45%', darkHsl: '150 100% 45%' },
  { id: 'orange', name: 'Coral Sunset', hex: '#F97316', lightHsl: '25 95% 53%', darkHsl: '27 96% 55%' },
  { id: 'red', name: 'Crimson', hex: '#F43F5E', lightHsl: '350 89% 55%', darkHsl: '350 92% 60%' },
  { id: 'yellow', name: 'Golden Amber', hex: '#FFB400', lightHsl: '43 100% 50%', darkHsl: '45 100% 50%' },
] as const;

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [systemIsDark, setSystemIsDark] = useState(false);

  // Initialize from localStorage safely after mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setSettings((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      console.warn('Failed to parse settings from localStorage', e);
    }

    // System dark mode listener
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setSystemIsDark(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setSystemIsDark(e.matches);
      mediaQuery.addEventListener('change', listener);
      setMounted(true);
      return () => mediaQuery.removeEventListener('change', listener);
    }
    setMounted(true);
  }, []);

  const resolvedTheme: 'light' | 'dark' =
    settings.theme === 'system' ? (systemIsDark ? 'dark' : 'light') : settings.theme;

  const isRtl = settings.language === 'ar';
  const t: TranslationDict = translations[settings.language] || translations.en;

  // Apply Settings to DOM attributes & CSS Variables whenever settings change
  useEffect(() => {
    if (!mounted || typeof document === 'undefined') return;

    const root = document.documentElement;

    // 1. Theme (light / dark)
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
    root.setAttribute('data-theme', resolvedTheme);

    // 2. Accent Color
    root.setAttribute('data-accent', settings.accentColor);

    // 3. Language & Direction
    root.setAttribute('lang', settings.language);
    root.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    // 4. Button Style (Radius)
    root.setAttribute('data-button-style', settings.buttonStyle);

    // 5. Font Size
    root.setAttribute('data-font-size', settings.fontSize);

    // 6. Animations
    root.setAttribute('data-animations', settings.animations ? 'true' : 'false');

    // Save to localStorage
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.warn('Failed to save settings to localStorage', e);
    }
  }, [settings, resolvedTheme, isRtl, mounted]);

  const updateSetting = useCallback(<K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const setTheme = useCallback((theme: Theme) => updateSetting('theme', theme), [updateSetting]);
  const setAccentColor = useCallback((accentColor: AccentColor) => updateSetting('accentColor', accentColor), [updateSetting]);
  const setLanguage = useCallback((language: Language) => updateSetting('language', language), [updateSetting]);
  const toggleLanguage = useCallback(() => {
    setSettings((prev) => ({
      ...prev,
      language: prev.language === 'ar' ? 'en' : 'ar',
    }));
  }, []);
  const setButtonStyle = useCallback((buttonStyle: ButtonStyle) => updateSetting('buttonStyle', buttonStyle), [updateSetting]);
  const setFontSize = useCallback((fontSize: FontSize) => updateSetting('fontSize', fontSize), [updateSetting]);
  const setAnimations = useCallback((animations: boolean) => updateSetting('animations', animations), [updateSetting]);

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(DEFAULT_SETTINGS));
    } catch (e) {
      console.warn('Failed to clear settings in localStorage', e);
    }
  }, []);

  const togglePanel = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        resolvedTheme,
        theme: resolvedTheme,
        isRtl,
        t,
        setTheme,
        setAccentColor,
        setLanguage,
        toggleLanguage,
        setButtonStyle,
        setFontSize,
        setAnimations,
        resetSettings,
        isOpen,
        setIsOpen,
        togglePanel,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

// Convenient useTranslation hook
export const useTranslation = () => {
  const context = useSettings();
  return {
    t: context.t,
    language: context.settings.language,
    isRtl: context.isRtl,
    setLanguage: context.setLanguage,
    toggleLanguage: context.toggleLanguage,
  };
};

// Backward-compatibility hook for any component using useTheme
export const useTheme = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    return {
      theme: 'dark',
      resolvedTheme: 'dark',
      toggleTheme: () => {},
      setTheme: () => {},
    };
  }
  return {
    theme: context.resolvedTheme,
    rawTheme: context.settings.theme,
    toggleTheme: () => context.setTheme(context.resolvedTheme === 'dark' ? 'light' : 'dark'),
    setTheme: context.setTheme,
  };
};

export default SettingsContext;
