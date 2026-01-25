"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Sun } from "lucide-react";

const nav = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const serviceMega = [
  {
    heading: "AI & Intelligence",
    items: [
      { title: "Generative AI Development", desc: "LLMs, GPT-4, Gemini integration", href: "/services/ai#generative" },
      { title: "Custom AI Agents", desc: "Automation bots", href: "/services/ai#agents" },
      { title: "Predictive Analytics & Data Science", desc: "Advanced analytics", href: "/services/ai#data" },
      { title: "Computer Vision Solutions", desc: "Image & video AI", href: "/services/ai#cv" },
    ],
  },
  {
    heading: "Web & SaaS Engineering",
    items: [
      { title: "Custom SaaS Architecture", desc: "Scalable platforms", href: "/services/saas#architecture" },
      { title: "Complex Web Applications", desc: "React/Vue/Angular", href: "/services/web#apps" },
      { title: "Cloud Infrastructure", desc: "AWS/Azure/Google Cloud", href: "/services/cloud#infra" },
      { title: "API & Microservices", desc: "RESTful & GraphQL", href: "/services/backend#microservices" },
    ],
  },
  {
    heading: "Mobile Ecosystems",
    items: [
      { title: "iOS Native Development", desc: "Swift & SwiftUI", href: "/services/mobile#ios" },
      { title: "Android Native Development", desc: "Kotlin & Jetpack", href: "/services/mobile#android" },
      { title: "Cross-Platform", desc: "Flutter/React Native", href: "/services/mobile#cross" },
    ],
  },
  {
    heading: "Growth & Consulting",
    items: [
      { title: "Digital Marketing Strategy", desc: "Data-driven growth", href: "/services/growth#strategy" },
      { title: "SEO & Technical Optimization", desc: "Search performance", href: "/services/growth#seo" },
      { title: "Brand Identity & UI/UX Design", desc: "Design systems", href: "/services/design#ux" },
      { title: "Tech Stack Consultation", desc: "Architecture advisory", href: "/services/consulting#stack" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

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
                Services
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
                    {serviceMega.map((col) => (
                      <div key={col.heading}>
                        <div className="text-sm font-semibold text-violet-400">
                          {col.heading}
                        </div>

                        <div className="mt-4 space-y-4">
                          {col.items.map((it) => (
                            <Link
                              key={it.title}
                              href={it.href}
                              onClick={() => setOpen(false)}
                              className="group block"
                            >
                              <div className="text-[15px] font-semibold text-white/90 group-hover:text-white transition">
                                {it.title}
                              </div>
                              <div className="mt-1 text-xs text-white/45 group-hover:text-white/55 transition">
                                {it.desc}
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
                  {i.label}
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Theme"
              className="hidden md:grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-white/80 hover:bg-white/[0.09] transition"
              type="button"
            >
              <Sun className="h-5 w-5" />
            </button>

            <Link
              href="/book"
              className="rounded-xl grad px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/10"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
