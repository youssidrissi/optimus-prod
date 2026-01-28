'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              Our Work
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">
              See what we have built
            </h1>
            <p className="text-base text-white/70 max-w-2xl mx-auto">
              Projects that scaled. Companies that grew. Results that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white/75 space-y-6 text-base leading-relaxed">
            <p>
              We've delivered 200+ projects that generated real impact. Here's a sample of what we've done across finance, healthcare, retail, and tech.
            </p>
            <p>
              From a fintech startup that hit profitability in year two, to a healthcare platform serving 500K+ users, to an enterprise retailer that doubled revenue—these aren't hypotheticals. They're what happens when strategy meets great engineering.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Your project could be next
          </h2>
          <p className="text-base text-white/75 mb-6">
            Let's talk about what we can build together.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg grad text-white font-semibold hover:shadow-purple-500/20 transition-all text-sm"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
