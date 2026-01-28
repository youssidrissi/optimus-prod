import { Users, Award, Zap, TrendingUp, Check } from "lucide-react";

const points = [
  "Team of 35+ experts in engineering, design, and strategy",
  "200+ successful projects across every industry",
  "We don't just build—we solve real problems",
  "Enterprise-grade security and scalability from day one",
  "True partnership, not just a vendor relationship",
  "Full support from your first idea to your first customers",
];

const cards = [
  { top: "35+", bottom: "Team Members", Icon: Users },
  { top: "200+", bottom: "Projects Delivered", Icon: Award },
  { top: "15+", bottom: "Years Combined", Icon: TrendingUp },
  { top: "€50M+", bottom: "Value Created", Icon: Zap },
];

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight text-white">Why work with us?</h2>
          <p className="mt-4 text-white/65">
            We combine technical expertise with genuine partnership to deliver exceptional results.
          </p>

          <ul className="mt-8 space-y-4 text-white/75">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-[2px] grid h-6 w-6 place-items-center rounded-full bg-blue-500/15 text-blue-300 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <div key={c.bottom} className="rounded-xl bg-white/[0.05] border border-white/10 p-6 hover:border-blue-400/30 transition">
              <c.Icon className="h-6 w-6 text-blue-400" />
              <div className="mt-4 text-3xl font-bold text-white">{c.top}</div>
              <div className="mt-2 text-sm text-white/60">{c.bottom}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
