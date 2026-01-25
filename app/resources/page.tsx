'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-30"></div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">Knowledge Base</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Insights, articles, and thought leadership
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 bg-white dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Stay updated with the latest trends in technology, AI, and digital transformation through our comprehensive resource library.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Our team regularly publishes articles, whitepapers, and guides to help businesses navigate the digital landscape and make informed technology decisions.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Subscribe to our newsletter to receive the latest insights and updates directly in your inbox.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Schedule a consultation to discuss your project
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all"
          >
            Book a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}