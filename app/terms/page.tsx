'use client';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full">
            <span className="text-blue-300 text-sm font-semibold">Legal</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">
            Terms of Service
          </h1>
          <p className="text-base text-white/70">
            Everything you need to know
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-white/80 space-y-8 text-base leading-relaxed">
          <p>
            By using this website, you agree to be bound by these terms. If you don't agree with them, please don't use our site.
          </p>
          <p>
            All content on this site—including text, code, and designs—is owned by Optimus Consulting or our partners. You're welcome to view and read it, but you can't copy, modify, or distribute it without permission.
          </p>
          <p>
            We make no warranties about this website or its content. It's provided "as is." We're not responsible for any damages from your use of the site or materials on it.
          </p>
          <p>
            We may update these terms anytime. Your continued use of the site means you accept the updates.
          </p>
          <p>
            Questions? Contact us at contact@optimusconsulting.com.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Questions About Our Terms?</h2>
          <p className="text-white/85 mb-8 max-w-2xl mx-auto">
            Contact us if you have any concerns or questions about our terms of service
          </p>
          <a href="mailto:contact@optimusconsulting.com" className="inline-flex items-center gap-2 rounded-xl grad px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
