'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface ServiceDetail {
  id: string;
  detailsKey: string;
}

const servicesData: ServiceDetail[] = [
  { id: 'web-development', detailsKey: 'webDevelopment' },
  { id: 'app-development', detailsKey: 'appDevelopment' },
  { id: 'ai-solutions', detailsKey: 'aiSolutions' },
  { id: 'saas-development', detailsKey: 'saasDevelopment' },
  { id: 'digital-marketing', detailsKey: 'digitalMarketing' },
  { id: 'tech-consulting', detailsKey: 'consulting' },
];

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useTranslation();

  const serviceConfig = servicesData.find((s) => s.id === slug);

  if (!serviceConfig) {
    return (
      <div className="min-h-screen bg-[#050812] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold text-white mb-4">
            {t('serviceDetails.serviceNotFound')}
          </h1>
          <p className="text-white/70 mb-8">
            {t('serviceDetails.serviceNotFoundDesc')}
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg grad text-white font-semibold hover:shadow-purple-500/20 transition-all"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            {t('serviceDetails.backToServices')}
          </Link>
        </div>
      </div>
    );
  }

  const serviceKey = `serviceDetails.${serviceConfig.detailsKey}`;
  const service = t(serviceKey);

  // Type assertion to handle nested translations
  const serviceDetails = {
    title: t(`${serviceKey}.title`),
    category: t(`${serviceKey}.category`),
    description: t(`${serviceKey}.description`),
    keyFeaturesTitle: t(`${serviceKey}.keyFeaturesTitle`),
    keyFeatures: [
      t(`${serviceKey}.keyFeatures.0`),
      t(`${serviceKey}.keyFeatures.1`),
      t(`${serviceKey}.keyFeatures.2`),
      t(`${serviceKey}.keyFeatures.3`),
      t(`${serviceKey}.keyFeatures.4`),
      t(`${serviceKey}.keyFeatures.5`),
    ],
    whyChooseUsTitle: t(`${serviceKey}.whyChooseUsTitle`),
    whyChooseUs: [
      t(`${serviceKey}.whyChooseUs.0`),
      t(`${serviceKey}.whyChooseUs.1`),
      t(`${serviceKey}.whyChooseUs.2`),
      t(`${serviceKey}.whyChooseUs.3`),
      t(`${serviceKey}.whyChooseUs.4`),
      t(`${serviceKey}.whyChooseUs.5`),
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full">
            <span className="text-blue-300 text-sm font-semibold">{serviceDetails.category}</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            {serviceDetails.title}
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {serviceDetails.description}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {serviceDetails.keyFeaturesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDetails.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white/[0.05] border border-white/10 p-5 flex flex-col items-center text-center hover:border-blue-400/30 transition"
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-white/85 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {serviceDetails.whyChooseUsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceDetails.whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl bg-white/[0.05] border border-white/10 p-5 hover:border-blue-400/30 transition"
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-white/85 text-sm">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            {t('serviceDetails.readyToStart')}
          </h2>
          <p className="text-lg text-white/85 mb-8">
            {t('serviceDetails.letDiscuss')}
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg grad text-white font-semibold hover:shadow-purple-500/20 transition-all"
          >
            {t('serviceDetails.bookConsultation')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
