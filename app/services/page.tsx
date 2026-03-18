'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ServicesGrid from '@/components/sections/ServicesGrid';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full">
            <span className="text-blue-300 text-sm font-semibold">Our Services</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">
            Build better, faster
          </h1>
          <p className="text-base text-white/70">
            Strategy, design, engineering, and support—all under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/75 text-base leading-relaxed">
                We don't just build—we partner. From initial strategy to full deployment, we're with you every step. Custom software. AI solutions. Product launches. We've done it all, and we know what works.
              </p>
            </div>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 mt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Let's talk about your project</h2>
          <p className="text-white/75 mb-6 max-w-2xl mx-auto text-sm">We'll figure out the best approach and timeline together.</p>
          <Link href="/book" className="inline-flex items-center gap-2 rounded-xl grad px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition text-sm">
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
