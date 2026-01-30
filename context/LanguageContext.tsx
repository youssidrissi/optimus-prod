'use client';

import { createContext, useContext, useState, ReactNode, useLayoutEffect } from 'react';

export type Language = 'en' | 'fr' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    const langToUse = (savedLanguage && ['en', 'fr', 'nl'].includes(savedLanguage)) 
      ? savedLanguage 
      : 'en';
    
    setLanguageState(langToUse);
    document.documentElement.lang = langToUse;
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  if (!mounted) return null;

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
