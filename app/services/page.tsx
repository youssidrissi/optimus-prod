'use client';

import Link from 'next/link';
import { ArrowRight, Code2, Smartphone, Brain, Cloud, Zap, TrendingUp } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Build scalable, high-performance web applications with modern technologies.',
    icon: <Code2 className="w-8 h-8" />,
    features: [
      'Next.js & React',
      'Node.js Backend',
      'Database Design',
      'API Integration',
      'Performance Optimization',
      'SEO Optimization',
    ],
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Create native and cross-platform mobile applications for iOS and Android.',
    icon: <Smartphone className="w-8 h-8" />,
    features: [
      'React Native',
      'Flutter',
      'Native iOS/Android',
      'Cross-platform Solutions',
      'App Store Optimization',
      'Push Notifications',
    ],
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Implement machine learning and AI-powered solutions to transform your business.',
    icon: <Brain className="w-8 h-8" />,
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Data Science',
      'AI Integration',
    ],
  },
  {
    id: 'saas-development',
    title: 'SaaS Development',
    description: 'Build and scale subscription-based software products with enterprise features.',
    icon: <Cloud className="w-8 h-8" />,
    features: [
      'Multi-tenant Architecture',
      'Payment Integration',
      'User Management',
      'Analytics Dashboard',
      'Scalable Infrastructure',
      'Security & Compliance',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Drive growth with data-driven digital marketing strategies and campaigns.',
    icon: <TrendingUp className="w-8 h-8" />,
    features: [
      'SEO Strategy',
      'Content Marketing',
      'Social Media Marketing',
      'PPC Campaigns',
      'Email Marketing',
      'Analytics & Reporting',
    ],
  },
  {
    id: 'tech-consulting',
    title: 'Tech Consulting',
    description: 'Get expert guidance on digital transformation and technology strategy.',
    icon: <Zap className="w-8 h-8" />,
    features: [
      'Technology Audit',
      'Digital Strategy',
      'Architecture Design',
      'Team Scaling',
      'Process Optimization',
      'Technology Selection',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-30"></div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            What We Offer
          </span>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your business needs. We specialize in delivering innovative technology solutions across multiple industries.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <div className="group h-full bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-600 transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
                  <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </Link>
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
          <p className="text-lg text-blue-100 mb-8">
            Let&apos;s discuss which services are right for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
