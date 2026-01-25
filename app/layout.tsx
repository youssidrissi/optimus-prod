import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Optimus Consulting",
  description: "A top-tier global consulting, SaaS, and AI engineering partner.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050812] text-white">
        {/* Background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10 page-glow" />

        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
