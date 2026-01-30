"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    { value: "35+", labelKey: "stats.experts" },
    { value: "200+", labelKey: "stats.projects" },
    { value: "€50M+", labelKey: "stats.clientValue" },
    { value: "15+", labelKey: "stats.experience" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 pt-16">
      <div className="card soft-shadow rounded-2xl px-6 py-10">
        <p className="mx-auto max-w-3xl text-center text-white/70">
          {t('stats.description')}
        </p>

        <div className="mt-10 grid gap-10 text-center sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.labelKey}>
              <div className="text-4xl font-extrabold md:text-5xl">
                <span className="gradient-text">{s.value}</span>
              </div>
              <div className="mt-2 text-sm text-white/60">{t(s.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
