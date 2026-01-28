import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="mt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto rounded-2xl py-10 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Let's build something great
        </h2>
        <p className="text-sm sm:text-base text-white/90 mb-6 max-w-2xl mx-auto">
          We'd love to hear about your project. Let's explore how we can help.
        </p>
        <Link
          href="/book"
          className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-white text-blue-600 font-semibold text-sm hover:bg-gray-100 transition-colors"
        >
          Start Your Project
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
