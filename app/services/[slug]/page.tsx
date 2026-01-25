'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  keyFeatures: string[];
  whyChooseUs: string[];
}

const servicesData: Record<string, ServiceDetail> = {
  'web-development': {
    id: 'web-development',
    title: 'Custom Website Development',
    category: 'Web Development',
    description:
      'Tailored website solutions built from the ground up to match your unique business requirements and brand identity.',
    keyFeatures: [
      'Custom design and user experience',
      'Responsive and mobile-first approach',
      'SEO-optimized architecture',
      'Performance optimization',
      'Content management integration',
      'E-commerce capabilities',
    ],
    whyChooseUs: [
      'Complete control over functionality and design',
      'Scalable architecture for future growth',
      'Optimized for search engines and conversions',
      'Fast loading times and excellent performance',
      'Seamless user experience across all devices',
      'Integration with your existing tools and workflows',
    ],
  },
  'app-development': {
    id: 'app-development',
    title: 'Mobile App Development',
    category: 'App Development',
    description:
      'Native and cross-platform mobile applications that engage users and drive business growth.',
    keyFeatures: [
      'iOS and Android development',
      'Native performance',
      'Intuitive user interfaces',
      'Push notifications',
      'Offline capabilities',
      'App store optimization',
    ],
    whyChooseUs: [
      'Direct customer engagement',
      'Increased brand visibility',
      'Monetization opportunities',
      'Fast loading times and excellent performance',
      'Seamless user experience across all devices',
      'Integration with your existing tools and workflows',
    ],
  },
  'ai-solutions': {
    id: 'ai-solutions',
    title: 'AI Strategy & Consulting',
    category: 'AI & Advanced Technologies',
    description:
      'Strategic AI consulting to identify opportunities and create roadmaps for AI transformation.',
    keyFeatures: [
      'AI readiness assessment',
      'Use case identification',
      'ROI analysis',
      'Technology selection',
      'Implementation roadmap',
      'Risk assessment',
    ],
    whyChooseUs: [
      'Clear AI strategy',
      'Reduced implementation risks',
      'Competitive analysis',
      'Change management',
      'Ethics and governance',
      'Competitive analysis',
    ],
  },
  'saas-development': {
    id: 'saas-development',
    title: 'SaaS Product Development',
    category: 'SaaS & Complex Systems',
    description:
      'End-to-end SaaS product development from concept to launch and beyond.',
    keyFeatures: [
      'Product strategy',
      'UI/UX design',
      'Full-stack development',
      'Multi-tenancy',
      'Payment integration',
      'Analytics and reporting',
    ],
    whyChooseUs: [
      'Complete product solution',
      'Scalable architecture',
      'Faster market entry',
      'Recurring revenue model',
      'Reduced infrastructure costs',
      'Global accessibility',
    ],
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'Digital Strategy',
    category: 'Digital Marketing',
    description:
      'Comprehensive digital marketing strategies that drive growth and maximize ROI.',
    keyFeatures: [
      'Market analysis',
      'Competitor research',
      'Audience targeting',
      'Channel planning',
      'Content strategy',
      'Budget allocation',
    ],
    whyChooseUs: [
      'Clear marketing direction',
      'Improved ROI',
      'Competitive advantage',
      'Better resource allocation',
      'Measurable results',
      'Sustainable growth',
    ],
  },
  'tech-consulting': {
    id: 'tech-consulting',
    title: 'Technology Consulting',
    category: 'Tech Consulting',
    description:
      'Expert guidance on digital transformation and technology strategy.',
    keyFeatures: [
      'Technology audit',
      'Digital strategy',
      'Architecture design',
      'Team scaling',
      'Process optimization',
      'Technology selection',
    ],
    whyChooseUs: [
      'Expert guidance',
      'Proven methodologies',
      'Industry best practices',
      'Risk mitigation',
      'Cost optimization',
      'Future-proof solutions',
    ],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-30"></div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            {service.category}
          </span>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-lg p-6"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let&apos;s discuss how we can help transform your business
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Book a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
