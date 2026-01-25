'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-30"></div>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              Our Work
            </span>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful projects
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-gray-700 dark:text-gray-400 space-y-6 text-base leading-relaxed">
          <p>
            We have delivered over 200 successful projects for clients ranging from startups to Fortune 500 companies. Each project showcases our commitment to excellence and innovation.
          </p>
          <p>
            Our case studies demonstrate our expertise across various industries including finance, healthcare, retail, and technology. We take pride in solving complex challenges and delivering measurable business results.
          </p>
          <p>
            Contact us to learn more about how we have helped businesses like yours achieve their digital transformation goals.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Schedule a consultation to discuss your project
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
