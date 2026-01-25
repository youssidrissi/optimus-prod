const stats = [
  { value: "35+", label: "Expert Team Members" },
  { value: "200+", label: "Projects Delivered" },
  { value: "€50M+", label: "Client Value Generated" },
  { value: "15+", label: "Years Combined Experience" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16">
      <div className="card soft-shadow rounded-2xl px-6 py-10">
        <p className="mx-auto max-w-3xl text-center text-white/70">
          A top-tier global consulting, SaaS, and AI engineering partner for
          <span className="text-white/90"> complex and high-budget projects</span>
        </p>

        <div className="mt-10 grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold text-white/90 md:text-5xl">
                <span className="gradient-text">{s.value}</span>
              </div>
              <div className="mt-2 text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
