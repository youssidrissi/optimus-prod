'use client';

import { useLanguage, Language } from '@/context/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'nl', label: 'NL' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="flex gap-1 items-center rounded-xl border border-white/10 bg-white/[0.05] p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
            language === lang.code
              ? 'bg-white/15 text-white'
              : 'text-white/60 hover:text-white/80'
          }`}
          aria-label={`Switch to ${lang.label}`}
          title={t('common.toggleLanguage')}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
