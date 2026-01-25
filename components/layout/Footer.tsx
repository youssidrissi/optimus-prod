import Link from "next/link";

const services = [
  "Web Development",
  "App Development",
  "AI Solutions",
  "SaaS Development",
  "Digital Marketing",
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about#team" },
  { label: "Our Process", href: "/about#process" },
  { label: "Careers", href: "/about#careers" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/resources" },
  { label: "Insights", href: "/resources" },
  { label: "AI & Tech Articles", href: "/resources" },
  { label: "Book Consultation", href: "/book" },
];

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* gradient strip */}
      <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-pink-500" />

      <div className="bg-black/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white">
                  O
                </span>
                <span className="font-semibold text-white/90">Optimus Consulting</span>
              </div>

              <p className="mt-4 text-sm text-white/60">
                A top-tier global consulting, SaaS, and AI engineering partner for complex and high-budget projects.
              </p>

              <div className="mt-6 space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-2">✉️ contact@optimusconsulting.com</div>
                <div className="flex items-center gap-2">📞 +1 (555) 123-4567</div>
                <div className="flex items-center gap-2">📍 San Francisco, CA</div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white/90">Services</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/65">
                {services.map((s) => (
                  <li key={s} className="hover:text-white">{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white/90">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/65">
                {company.map((c) => (
                  <li key={c.href}>
                    <Link className="hover:text-white" href={c.href}>
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white/90">Resources</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/65">
                {resources.map((r) => (
                  <li key={r.href}>
                    <Link className="hover:text-white" href={r.href}>
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3 text-white/70">
                <a className="hover:text-white" href="#" aria-label="Twitter">𝕏</a>
                <a className="hover:text-white" href="#" aria-label="LinkedIn">in</a>
                <a className="hover:text-white" href="#" aria-label="GitHub">⌁</a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/55">
            © 2026 Optimus Consulting Agency. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
