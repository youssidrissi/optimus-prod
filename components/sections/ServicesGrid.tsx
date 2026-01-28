import Link from "next/link";
import { ArrowRight, Brain, Code2, Megaphone, Rocket, Shield, TrendingUp } from "lucide-react";

const services = [
  { title: "Web Development", desc: "Custom websites and web applications", Icon: Code2, slug: "web-development" },
  { title: "App Development", desc: "iOS, Android, and cross-platform apps", Icon: Rocket, slug: "app-development" },
  { title: "AI Solutions", desc: "Machine learning and AI integration", Icon: Brain, slug: "ai-solutions" },
  { title: "SaaS Development", desc: "Scalable cloud-based platforms", Icon: TrendingUp, slug: "saas-development" },
  { title: "Digital Marketing", desc: "SEO, PPC, and growth strategies", Icon: Megaphone, slug: "digital-marketing" },
  { title: "Consulting", desc: "Strategic digital transformation", Icon: Shield, slug: "tech-consulting" },
];

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-white">Our Services</h2>
        <p className="mt-3 text-white/65">
          Comprehensive digital solutions tailored to your enterprise needs
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl bg-white/[0.05] border border-white/10 p-6 hover:border-blue-400/30 transition">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <s.Icon className="h-6 w-6 text-blue-400" />
            </div>

            <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-white/60">{s.desc}</p>

            <Link
              href={`/services/${s.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
