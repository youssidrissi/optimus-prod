import Link from "next/link";

const nav = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass soft-shadow flex h-16 items-center justify-between rounded-2xl px-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white">
              O
            </span>
            <span className="font-semibold text-white/90">Optimus Consulting</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-sm text-white/70 hover:text-white"
              >
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Fake theme toggle icon */}
            <button
              aria-label="Theme"
              className="hidden md:grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
              type="button"
            >
              ☼
            </button>

            <Link
              href="/book"
              className="rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/10"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
