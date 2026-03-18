"use client";

import Link from "next/link";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { ChevronDown, Sun, Moon } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "@/hooks/useTranslation";

// Note: Labels will be translated dynamically via useTranslation hook
const nav = [
  { label: "services", href: "/services", hasDropdown: true, i18nKey: "nav.services" },
  { label: "caseStudies", href: "/case-studies", i18nKey: "nav.caseStudies" },
  { label: "about", href: "/about", i18nKey: "nav.about" },
  { label: "resources", href: "/resources", i18nKey: "nav.resources" },
  { label: "contact", href: "/contact", i18nKey: "nav.contact" },
];

const serviceMegaKeys = [
  {
    headingKey: "services.aiIntelligence",
    items: [
      { titleKey: "services.generativeAI", descKey: "services.generativeAIDesc", href: "/services/ai#generative" },
      { titleKey: "services.customAIAgents", descKey: "services.customAIAgentsDesc", href: "/services/ai#agents" },
      { titleKey: "services.predictiveAnalytics", descKey: "services.predictiveAnalyticsDesc", href: "/services/ai#data" },
      { titleKey: "services.computerVision", descKey: "services.computerVisionDesc", href: "/services/ai#cv" },
    ],
  },
  {
    headingKey: "services.webSaaS",
    items: [
      { titleKey: "services.customSaaS", descKey: "services.customSaaSDesc", href: "/services/saas#architecture" },
      { titleKey: "services.complexWeb", descKey: "services.complexWebDesc", href: "/services/web#apps" },
      { titleKey: "services.cloudInfra", descKey: "services.cloudInfraDesc", href: "/services/cloud#infra" },
      { titleKey: "services.apiMicroservices", descKey: "services.apiMicroservicesDesc", href: "/services/backend#microservices" },
    ],
  },
  {
    headingKey: "services.mobileEcosystems",
    items: [
      { titleKey: "services.iosNative", descKey: "services.iosNativeDesc", href: "/services/mobile#ios" },
      { titleKey: "services.androidNative", descKey: "services.androidNativeDesc", href: "/services/mobile#android" },
      { titleKey: "services.crossPlatform", descKey: "services.crossPlatformDesc", href: "/services/mobile#cross" },
    ],
  },
  {
    headingKey: "services.growthConsulting",
    items: [
      { titleKey: "services.digitalMarketing", descKey: "services.digitalMarketingDesc", href: "/services/growth#strategy" },
      { titleKey: "services.seoOptimization", descKey: "services.seoOptimizationDesc", href: "/services/growth#seo" },
      { titleKey: "services.brandIdentity", descKey: "services.brandIdentityDesc", href: "/services/design#ux" },
      { titleKey: "services.techConsultation", descKey: "services.techConsultationDesc", href: "/services/consulting#stack" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    // Check if dark mode is enabled on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // close on click outside + ESC
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass soft-shadow flex h-16 items-center justify-between rounded-2xl px-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl grad text-white font-semibold">
              O
            </span>
            <span className="font-semibold text-white/90">Optimus Consulting</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {/* Services (mega dropdown) */}
            <div
              ref={wrapRef}
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition"
                aria-haspopup="true"
                aria-expanded={open}
              >
                {t('nav.services')}
                <ChevronDown className={`h-4 w-4 opacity-70 transition ${open ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown panel */}
              <div
                className={[
                  "absolute left-1/2 top-[54px] -translate-x-1/2",
                  "w-[920px] max-w-[calc(100vw-2rem)]",
                  open ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1",
                  "transition duration-150",
                ].join(" ")}
              >
                <div
                  className={[
                    "rounded-2xl border border-white/10",
                    "bg-[#070B14]/95 backdrop-blur-xl",
                    "shadow-2xl shadow-black/40",
                    "p-6",
                  ].join(" ")}
                >
                  <div className="grid grid-cols-4 gap-10">
                    {serviceMegaKeys.map((col) => (
                      <div key={col.headingKey}>
                        <div className="text-sm font-semibold text-violet-400">
                          {t(col.headingKey)}
                        </div>

                        <div className="mt-4 space-y-4">
                          {col.items.map((it) => (
                            <Link
                              key={it.titleKey}
                              href={it.href}
                              onClick={() => setOpen(false)}
                              className="group block"
                            >
                              <div className="text-[15px] font-semibold text-white/90 group-hover:text-white transition">
                                {t(it.titleKey)}
                              </div>
                              <div className="mt-1 text-xs text-white/45 group-hover:text-white/55 transition">
                                {t(it.descKey)}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* bottom subtle gradient strip like screenshot vibe */}
                  <div className="mt-6 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500/70 via-fuchsia-500/70 to-violet-500/70" />
                </div>
              </div>
            </div>

            {/* other links */}
            {nav
              .filter((i) => !i.hasDropdown)
              .map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition"
                >
                  {t(i.i18nKey)}
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label={t('common.toggleTheme')}
              onClick={toggleTheme}
              className="hidden md:grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-white/80 hover:bg-white/[0.09] transition"
              type="button"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <Link
              href="/book"
              className="rounded-xl grad px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/10"
            >
              {t('nav.bookConsultation')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
