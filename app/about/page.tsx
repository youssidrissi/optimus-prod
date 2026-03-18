'use client';

import Link from 'next/link';
import { ArrowRight, Users, Briefcase, Award, Zap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full">
            <span className="text-blue-300 text-sm font-semibold">{t('about.badge')}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">
            {t('about.title')}
          </h1>
          <p className="text-base text-white/70">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 text-center hover:border-blue-400/30 transition">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('about.experts')}</h3>
              <p className="text-white/70 text-sm">{t('about.expertsDesc')}</p>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 text-center hover:border-blue-400/30 transition">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('about.enterprise')}</h3>
              <p className="text-white/70 text-sm">{t('about.enterpriseDesc')}</p>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 text-center hover:border-blue-400/30 transition">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('about.projectsDelivered')}</h3>
              <p className="text-white/70 text-sm">{t('about.projectsDeliveredDesc')}</p>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 text-center hover:border-blue-400/30 transition">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('about.impact')}</h3>
              <p className="text-white/70 text-sm">{t('about.impactDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-6 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">{t('about.cta')}</h2>
          <p className="text-white/75 mb-6 max-w-2xl mx-auto text-sm">
            {t('about.ctaDescription')}
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-xl grad px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition text-sm"
          >
            {t('about.ctaButton')} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
