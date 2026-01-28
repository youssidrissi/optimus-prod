'use client';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full">
            <span className="text-blue-300 text-sm font-semibold">Legal</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">
            Privacy Policy
          </h1>
          <p className="text-base text-white/70">
            How we handle your data
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-white/80 space-y-8 text-base leading-relaxed">
          <p>
            We take your privacy seriously. This policy explains how we collect, use, and protect your information.
          </p>
          <p>
            We collect information when you contact us or request our services. This includes your name, email, and project details. We use this solely to respond to your inquiry and deliver the services you've requested.
          </p>
          <p>
            We don't sell, trade, or share your data with third parties. Period. Your information is secure with us.
          </p>
          <p>
            We use industry-standard security practices to protect your data from unauthorized access or disclosure.
          </p>
          <p>
            If you have questions about how we handle your information, contact us at contact@optimusconsulting.com.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Questions About Our Privacy Policy?</h2>
          <p className="text-white/85 mb-8 max-w-2xl mx-auto">
            Contact us if you have any concerns or questions
          </p>
          <a href="mailto:contact@optimusconsulting.com" className="inline-flex items-center gap-2 rounded-xl grad px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
