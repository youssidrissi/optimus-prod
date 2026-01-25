'use client';

import Link from 'next/link';
import { ArrowRight, Users, Target, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-30"></div>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Optimus Consulting
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We are a top-tier global consulting, SaaS, and AI engineering partner for complex and high-budget projects
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Team of 35+ Experts</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Engineers, developers, AI specialists, and marketing professionals</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise Focus</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Specialized in complex, high-budget projects</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">200+ Projects</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Successfully delivered across various industries</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">€50M+ Value</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Generated for our clients through digital solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Learn More About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Vision & Mission' },
              { title: 'Our Team' },
              { title: 'Our Process' },
              { title: 'Careers' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-blue-600 transition-colors"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {item.title}
                </h3>
                <Link href="#" className="text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 font-semibold flex items-center gap-2">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let&apos;s discuss how we can help transform your business
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
