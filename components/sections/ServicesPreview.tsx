'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface Service {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 'web-development',
    titleKey: 'servicesGrid.webDevelopment',
    descKey: 'servicesGrid.webDevelopmentDesc',
    icon: '🌐',
  },
  {
    id: 'app-development',
    titleKey: 'servicesGrid.appDevelopment',
    descKey: 'servicesGrid.appDevelopmentDesc',
    icon: '📱',
  },
  {
    id: 'ai-solutions',
    titleKey: 'servicesGrid.aiSolutions',
    descKey: 'servicesGrid.aiSolutionsDesc',
    icon: '🤖',
  },
  {
    id: 'saas-development',
    titleKey: 'servicesGrid.saasDevelopment',
    descKey: 'servicesGrid.saasDevelopmentDesc',
    icon: '☁️',
  },
  {
    id: 'digital-marketing',
    titleKey: 'servicesGrid.digitalMarketing',
    descKey: 'servicesGrid.digitalMarketingDesc',
    icon: '📊',
  },
  {
    id: 'consulting',
    titleKey: 'servicesGrid.consulting',
    descKey: 'servicesGrid.consultingDesc',
    icon: '💡',
  },
];

export function ServicesPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
            {t('servicesGrid.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('hero.cta')}
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <div className="group h-full bg-white/[0.05] rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 p-6">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  {t(service.descKey)}
                </p>
                <div className="flex items-center text-blue-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  {t('servicesGrid.learnMore')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl grad text-white font-semibold shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition text-sm"
          >
            {t('caseStudies.ctaButton')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
