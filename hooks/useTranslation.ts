import { useLanguage } from '@/context/LanguageContext';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';
import nl from '@/locales/nl.json';

type TranslationObject = typeof en;

const translations: Record<string, TranslationObject> = {
  en,
  fr,
  nl,
};

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { t, language };
}
