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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            A few examples of the impact we've created for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study) => (
            <Link key={study.id} href={`/case-studies/${study.id}`}>
              <div className="group h-full bg-white/[0.05] rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {study.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white/50">
                    {study.client}
                  </p>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl grad text-white font-semibold shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition text-sm"
          >
            See All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
