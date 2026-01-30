'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function CaseStudiesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              {t('caseStudies.badge')}
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">
              {t('caseStudies.title')}
            </h1>
            <p className="text-base text-white/70 max-w-2xl mx-auto">
              {t('caseStudies.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white/75 space-y-6 text-base leading-relaxed">
            <p>
              {t('caseStudies.content1')}
            </p>
            <p>
              {t('caseStudies.content2')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            {t('caseStudies.ctaTitle')}
          </h2>
          <p className="text-base text-white/75 mb-6">
            {t('caseStudies.ctaDescription')}
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg grad text-white font-semibold hover:shadow-purple-500/20 transition-all text-sm"
          >
            {t('caseStudies.ctaButton')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
