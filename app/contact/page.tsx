import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Kiruthika R",
  description: "Get in touch with Kiruthika, Product Designer and Architect.",
};

export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 pt-16 pb-16 border-b border-gray-200">
        <h1 className="text-[clamp(56px,8vw,120px)] font-bold uppercase leading-none tracking-tight mb-12">
          Let&apos;s Talk
        </h1>
        <div className="grid grid-cols-2 gap-12 items-end">
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something great.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:kthika.19@gmail.com"
              className="text-2xl font-semibold hover:underline"
            >
              kthika.19@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Links grid */}
      <section className="grid grid-cols-3 border-b border-gray-200">
        {[
          { label: "LinkedIn", sub: "Connect professionally", href: "https://www.linkedin.com/in/kiruthika-r-1801/", cta: "View Profile" },
          { label: "Behance", sub: "Visual work and case studies", href: "https://www.behance.net/kiruthika-r-1801", cta: "View Work" },
          { label: "Resume", sub: "Download my CV", href: "/resume.pdf", cta: "Download" },
        ].map((link, i) => (
          <a
            key={i}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`p-8 hover:bg-gray-50 transition-colors group ${i < 2 ? "border-r border-gray-200" : ""}`}
          >
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">{link.sub}</p>
            <p className="text-lg font-semibold mb-6">{link.label}</p>
            <span className="text-xs border border-black px-4 py-2 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
              {link.cta}
            </span>
          </a>
        ))}
      </section>

      {/* Availability */}
      <section className="px-6 py-16">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          <p className="text-sm text-gray-500">Available for freelance and full-time opportunities</p>
        </div>
      </section>
    </main>
  );
}
