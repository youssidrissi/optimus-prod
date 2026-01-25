'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  client: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'fintech-mobile-app',
    title: 'FinTech Mobile App Transformation',
    category: 'Mobile Development',
    description: 'Developed a comprehensive mobile banking solution that increased user engagement by 340%.',
    client: 'SecureBank Inc.',
  },
  {
    id: 'retail-ecommerce',
    title: 'E-commerce Platform Modernization',
    category: 'Web Development',
    description: 'Rebuilt legacy e-commerce infrastructure with modern tech stack, 280% faster checkout.',
    client: 'RetailMax Group',
  },
  {
    id: 'healthcare-platform',
    title: 'Healthcare Data Management System',
    category: 'AI Solutions',
    description: 'Built AI-powered diagnostic support system reducing diagnosis time by 60%.',
    client: 'MediCare Solutions',
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study) => (
            <Link key={study.id} href={`/case-studies/${study.id}`}>
              <div className="group h-full bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-600 transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {study.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-500">
                    {study.client}
                  </p>
                  <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 dark:bg-blue-600 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
