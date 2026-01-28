'use client';

import Link from 'next/link';
import { ArrowRight, Users, Briefcase, Award, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full">
            <span className="text-blue-300 text-sm font-semibold">Our Story</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">
            We solve problems that matter
          </h1>
          <p className="text-base text-white/70">
            35+ experts. 200+ projects. Real results for businesses that demand excellence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 text-center hover:border-blue-400/30 transition">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">35+ Experts</h3>
              <p className="text-white/70 text-sm">Engineers, developers, and AI specialists</p>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 text-center hover:border-blue-400/30 transition">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Enterprise Focus</h3>
              <p className="text-white/70 text-sm">Complex, high-budget projects</p>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 text-center hover:border-blue-400/30 transition">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">200+ Projects</h3>
              <p className="text-white/70 text-sm">Delivered across industries</p>
            </div>

            <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 text-center hover:border-blue-400/30 transition">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">€50M+ Value</h3>
              <p className="text-white/70 text-sm">Generated for clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white/75 text-base leading-relaxed space-y-6">
            <p>
              Optimus started with a simple belief: great technology should solve real business problems. Over the years, we've built a team of 35+ experts—engineers, designers, and strategists who genuinely care about outcomes.
            </p>
            <p>
              We've delivered 200+ projects across finance, healthcare, retail, and tech. But we don't measure success by project count. We measure it by the impact we create for our clients. A 30% revenue increase. A platform that serves millions. A business that scales.
            </p>
            <p>
              From strategy to launch to ongoing support, we're with you at every step. We ask the right questions. We challenge assumptions. We deliver solutions that work, not just look good on slides.
            </p>
            <p>
              That's what it means to work with Optimus.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-6 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Let's work together</h2>
          <p className="text-white/75 mb-6 max-w-2xl mx-auto text-sm">
            Tell us about your project. We'll share ideas and see if we're a good fit.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-xl grad px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition text-sm"
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
