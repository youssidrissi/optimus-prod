import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <div className="soft-shadow rounded-2xl grad px-6 py-16 text-center">
        <h3 className="text-4xl font-extrabold text-white">Ready to Transform Your Business?</h3>
        <p className="mx-auto mt-4 max-w-2xl text-white/85">
          Let&apos;s discuss your project and create something extraordinary together
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#12162A] hover:bg-white/90 transition"
          >
            Schedule Your Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
