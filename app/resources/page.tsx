'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full">
            <span className="text-blue-300 text-sm font-semibold">Learning Hub</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">
            Resources & Insights
          </h1>
          <p className="text-base text-white/70">
            Practical guides, articles, and thought leadership on building great digital products.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white/75 text-base leading-relaxed space-y-6">
            <p>
              Building great products isn't just about technology. It's about strategy, execution, and constantly learning what works. We share what we've learned from 200+ projects.
            </p>
            <p>
              From scaling advice to design patterns to technology decisions, our team publishes regularly on the topics that matter to product teams and founders.
            </p>
            <p>
              Subscribe to get the latest articles and insights sent directly to your inbox.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/85 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something extraordinary together
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-xl grad px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition"
          >
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}