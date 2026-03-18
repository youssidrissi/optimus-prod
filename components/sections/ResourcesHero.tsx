'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesHero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
            Knowledge Base
          </span>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-500 bg-clip-text text-transparent mb-6 leading-tight">
            Resources
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light">
            Insights, articles, and thought leadership
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-300 text-lg leading-relaxed">
          <p>
            Stay updated with the latest trends in technology, AI, and digital transformation through our comprehensive resource library.
          </p>
          <p>
            Our team regularly publishes articles, whitepapers, and guides to help businesses navigate the digital landscape and make informed technology decisions.
          </p>
          <p>
            Subscribe to our newsletter to receive the latest insights and updates directly in your inbox.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10">
            Schedule a consultation to discuss your project
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}