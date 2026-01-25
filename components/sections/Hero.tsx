import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-white/80">
            <Sparkles className="h-4 w-4 text-blue-300" />
            Enterprise-Grade Digital Solutions
          </div>

          <h1 className="mt-7 text-5xl font-extrabold leading-[1.04] md:text-7xl">
            <span className="gradient-text">Transform Your</span>
            <br />
            <span className="text-white">Digital Future</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            A top-tier global consulting, SaaS, and AI engineering partner for complex and high-budget projects
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-xl grad px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/10"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3 font-semibold text-white/90 hover:bg-white/[0.09] transition"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
