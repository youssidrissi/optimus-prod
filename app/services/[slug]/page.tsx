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
      <div className="min-h-screen bg-[#050812] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold text-white mb-4">
            Service Not Found
          </h1>
          <p className="text-white/70 mb-8">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg grad text-white font-semibold hover:shadow-purple-500/20 transition-all"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full">
            <span className="text-blue-300 text-sm font-semibold">{service.category}</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            {service.title}
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {service.description}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.keyFeatures.map((feature, idx) => (
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
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whyChooseUs.map((reason, idx) => (
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/85 mb-8">
            Let&apos;s discuss how we can help transform your business
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg grad text-white font-semibold hover:shadow-purple-500/20 transition-all"
          >
            Book a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
