"use client";

import Link from "next/link";
import { ArrowRight, Brain, Code2, Megaphone, Rocket, Shield, TrendingUp } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const services = [
  { titleKey: "servicesGrid.webDevelopment", descKey: "servicesGrid.webDevelopmentDesc", Icon: Code2, slug: "web-development" },
  { titleKey: "servicesGrid.appDevelopment", descKey: "servicesGrid.appDevelopmentDesc", Icon: Rocket, slug: "app-development" },
  { titleKey: "servicesGrid.aiSolutions", descKey: "servicesGrid.aiSolutionsDesc", Icon: Brain, slug: "ai-solutions" },
  { titleKey: "servicesGrid.saasDevelopment", descKey: "servicesGrid.saasDevelopmentDesc", Icon: TrendingUp, slug: "saas-development" },
  { titleKey: "servicesGrid.digitalMarketing", descKey: "servicesGrid.digitalMarketingDesc", Icon: Megaphone, slug: "digital-marketing" },
  { titleKey: "servicesGrid.consulting", descKey: "servicesGrid.consultingDesc", Icon: Shield, slug: "tech-consulting" },
];

export default function ServicesGrid() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-white">{t('servicesGrid.title')}</h2>
        <p className="mt-3 text-white/65">
          {t('servicesGrid.description')}
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.titleKey} className="rounded-xl bg-white/[0.05] border border-white/10 p-6 hover:border-blue-400/30 transition">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <s.Icon className="h-6 w-6 text-blue-400" />
            </div>

            <h3 className="mt-4 text-lg font-bold text-white">{t(s.titleKey)}</h3>
            <p className="mt-2 text-sm text-white/60">{t(s.descKey)}</p>

            <Link
              href={`/services/${s.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
            >
              {t('servicesGrid.learnMore')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
