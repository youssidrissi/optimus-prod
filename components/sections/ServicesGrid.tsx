import Link from "next/link";

const services = [
  { title: "Web Development", desc: "Custom websites and web applications", icon: "<>" },
  { title: "App Development", desc: "iOS, Android, and cross-platform apps", icon: "🚀" },
  { title: "AI Solutions", desc: "Machine learning and AI integration", icon: "🧠" },
  { title: "SaaS Development", desc: "Scalable cloud-based platforms", icon: "📈" },
  { title: "Digital Marketing", desc: "SEO, PPC, and growth strategies", icon: "✨" },
  { title: "Consulting", desc: "Strategic digital transformation", icon: "🛡️" },
];

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold">Our Services</h2>
        <p className="mt-3 text-white/65">
          Comprehensive digital solutions tailored to your enterprise needs
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="card soft-shadow rounded-2xl p-6">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white">
              {s.icon}
            </div>

            <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-white/60">{s.desc}</p>

            <Link
              href="/services"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              Learn more <span>→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
