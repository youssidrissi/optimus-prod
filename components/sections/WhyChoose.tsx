import { Brain, Rocket, Shield, Users, Check } from "lucide-react";

const points = [
  "Team of 35 expert engineers, developers, and AI specialists",
  "Proven track record with 200+ successful projects",
  "Cutting-edge AI and technology integration",
  "Enterprise-grade security and scalability",
  "Agile development with transparent communication",
  "End-to-end support from strategy to deployment",
];

const cards = [
  { top: "35+", bottom: "Team Size", Icon: Users },
  { top: "100%", bottom: "Satisfaction", Icon: Shield },
  { top: "200+", bottom: "Projects", Icon: Rocket },
  { top: "AI", bottom: "Powered", Icon: Brain },
];

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-5xl font-extrabold leading-tight text-white">Why Choose Optimus?</h2>
          <p className="mt-4 text-white/65">
            We combine technical expertise, innovation, and enterprise-level trust to deliver exceptional results
          </p>

          <ul className="mt-8 space-y-4 text-white/75">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-[2px] grid h-6 w-6 place-items-center rounded-full bg-blue-500/15 text-blue-300">
                  <Check className="h-4 w-4" />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <div key={c.bottom} className="card soft-shadow rounded-2xl p-7">
              <c.Icon className="h-7 w-7 text-blue-400" />
              <div className="mt-5 text-4xl font-extrabold text-white">{c.top}</div>
              <div className="mt-2 text-sm text-white/60">{c.bottom}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
