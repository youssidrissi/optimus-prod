'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Build scalable, high-performance web applications with modern technologies.',
    icon: '🌐',
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Create native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Implement machine learning and AI-powered solutions to transform your business.',
    icon: '🤖',
  },
  {
    id: 'saas-development',
    title: 'SaaS Development',
    description: 'Build and scale subscription-based software products with enterprise features.',
    icon: '☁️',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Drive growth with data-driven digital marketing strategies and campaigns.',
    icon: '📊',
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    description: 'Get expert guidance on digital transformation and technology strategy.',
    icon: '💡',
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <div className="group h-full bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-600 transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 dark:bg-blue-600 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors"
          >
            Explore All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
