import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Design System — Kiruthika R",
  description: "A full fledged white label design system that scales with token-based architecture and is LLM compatible.",
};

export default function OneDesignSystemPage() {
  return (
    <main className="bg-white">

      {/* ── Nav bar ── */}
      <div className="flex items-center justify-between px-[80px] py-4 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
          <span>←</span> Go Back
        </Link>
        <span className="text-2xl font-bold uppercase tracking-widest">Portfolio</span>
      </div>

      {/* ── Hero ── */}
      <section className="px-[80px] pt-16 pb-20 border-b border-gray-100">
        <div className="flex gap-[80px] items-end">
          <div className="flex-1">
            <div className="w-full h-0.5 bg-black mb-2" />
            <p className="text-sm font-bold tracking-[0.12em] uppercase text-black mb-8">
              Design System Documentation
            </p>
            <h1 className="text-[72px] font-black uppercase leading-none tracking-tight text-black">
              One Design<br />System
            </h1>
          </div>
          <div className="flex-1 flex flex-col gap-6 pb-1">
            <div className="flex flex-wrap gap-6 text-xs">
              {["Component Libraries", "Style Libraries", "Scalable Framing", "DS Collaboration"].map((s) => (
                <span key={s} className="font-bold uppercase tracking-widest text-gray-500">{s}</span>
              ))}
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              Streamline product development efforts within the PAYTV project by building a robust, multi-brand design system governing consistency across all brands and channels in the PAYTV stack.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Duration</p>
                <p className="text-sm font-semibold">6–8 months</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Year</p>
                <p className="text-sm font-semibold">2024</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Role</p>
                <p className="text-sm font-semibold">Design Systems Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="w-full" style={{ background: "#eef1f8", height: 480, position: "relative" }}>
        <Image
          src="/projects/one-design-system.png"
          alt="One Design System"
          fill
          className="object-contain"
          sizes="100vw"
          priority
          loading="eager"
        />
      </div>

      {/* ── ONE / FOR WHO WHICH ── */}
      <section className="border-b border-gray-100">
        <Image
          src="/one-design-system/one-section.jpg"
          alt="ONE — for MFE developers and UI/UX Designers, who needs to design and build White-label capabilities"
          width={1280}
          height={500}
          className="w-full h-auto"
        />
      </section>

      {/* ── Tokens ── */}
      <section className="px-[80px] py-20 border-b border-gray-100">
        <Image
          src="/one-design-system/token-hierarchy.jpg"
          alt="Token hierarchy: Value → Base Token → Alias Token → Component Token, with Syncing to Code explanation"
          width={1280}
          height={803}
          className="w-full h-auto rounded-lg border border-gray-100"
        />
      </section>

      {/* ── Token types ── */}
      <section className="px-[80px] pb-20 border-b border-gray-100">
        <Image
          src="/one-design-system/token-docs.jpg"
          alt="Color Token, Typography Token and Component Typography Token documentation screens"
          width={1280}
          height={582}
          className="w-full h-auto rounded-lg"
        />
      </section>

      {/* ── Documentation / Jira ── */}
      <section className="px-[80px] py-20 border-b border-gray-100">
        <Image
          src="/one-design-system/docs-jira.jpg"
          alt="Documentation: Jira Kanban board with TO DO, IN PROGRESS and IN REVIEW columns"
          width={1280}
          height={928}
          className="w-full h-auto rounded-lg border border-gray-100"
        />
      </section>

      {/* ── Foundation ── */}
      <section className="px-[80px] py-20 border-b border-gray-100">
        <Image
          src="/one-design-system/foundation.jpg"
          alt="Foundation: Asset Mapping, Anatomy, and Do's and Don'ts"
          width={1280}
          height={701}
          className="w-full h-auto rounded-lg"
        />
      </section>

      {/* ── Icons ── */}
      <section className="px-[80px] py-20 border-b border-gray-100">
        <Image
          src="/one-design-system/icons-grid.png"
          alt="Icon library — check-circle component with outline and solid variants, ~300 icons"
          width={1288}
          height={781}
          className="w-full h-auto rounded-lg border border-gray-100"
        />
      </section>

      {/* ── Components ── */}
      <section className="px-[80px] py-20 border-b border-gray-100">
        <Image
          src="/one-design-system/components-grid.jpg"
          alt="Component library — Button component with solid, outline, text variants and component configuration panel, ~56 components"
          width={1288}
          height={943}
          className="w-full h-auto rounded-lg border border-gray-100"
        />
      </section>

      {/* ── Design Compositions ── */}
      <section className="px-[80px] py-20 border-b border-gray-100">
        <Image
          src="/one-design-system/compositions.jpg"
          alt="Design Compositions — shell component structure and telecom tariff card UI"
          width={1288}
          height={825}
          className="w-full h-auto rounded-lg border border-gray-100"
        />
      </section>

      {/* ── Challenges and Learnings ── */}
      <section className="px-[80px] py-20 border-b border-gray-100">
        <Image
          src="/one-design-system/challenges.jpg"
          alt="Challenges and Learnings: Consistency, Re-Skin Made Easy, Version Control, Reusability and Modularity"
          width={1280}
          height={433}
          className="w-full h-auto"
        />
      </section>

      {/* ── Footer nav ── */}
      <section className="px-[80px] py-12">
        <Link
          href="/"
          className="text-xs border border-black px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors"
        >
          ← All projects
        </Link>
      </section>

    </main>
  );
}
