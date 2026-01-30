"use client";

import { Users, Award, Zap, TrendingUp, Check } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function WhyChoose() {
  const { t } = useTranslation();

  const points = [
    "whyChoose.point1",
    "whyChoose.point2",
    "whyChoose.point3",
    "whyChoose.point4",
    "whyChoose.point5",
    "whyChoose.point6",
  ];

  const cards = [
    { top: "35+", bottomKey: "about.experts", Icon: Users },
    { top: "200+", bottomKey: "about.projectsDelivered", Icon: Award },
    { top: "15+", bottomKey: "stats.experience", Icon: TrendingUp },
    { top: "€50M+", bottomKey: "stats.clientValue", Icon: Zap },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight text-white">{t('whyChoose.title')}</h2>
          <p className="mt-4 text-white/65">
            {t('whyChoose.subtitle')}
          </p>

          <ul className="mt-8 space-y-4 text-white/75">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-[2px] grid h-6 w-6 place-items-center rounded-full bg-blue-500/15 text-blue-300 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm">{t(p)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <div key={c.bottomKey} className="rounded-xl bg-white/[0.05] border border-white/10 p-6 hover:border-blue-400/30 transition">
              <c.Icon className="h-6 w-6 text-blue-400" />
              <div className="mt-4 text-3xl font-bold text-white">{c.top}</div>
              <div className="mt-2 text-sm text-white/60">{t(c.bottomKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
