'use client';

import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-30"></div>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            Get in Touch
          </span>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We would love to hear from you. Let&apos;s discuss your project and how we can help.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'contact@optimusconsulting.com',
                    href: 'mailto:contact@optimusconsulting.com',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+1 (555) 123-4567',
                    href: 'tel:+15551234567',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'San Francisco, CA',
                    href: '#',
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <Icon className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                          {item.label}
                        </p>
                        <a
                          href={item.href}
                          className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Business Hours
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Monday - Friday: 9:00 AM - 6:00 PM PST
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-blue-600"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-blue-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-blue-600"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-blue-600 resize-none"
                    placeholder="Tell us more about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
