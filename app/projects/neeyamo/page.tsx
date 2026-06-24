import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neeyamo — Design Portfolio",
  description: "Redesign of Neeyamo's B2B HRMS platform. Design discoveries, mood-boarding, conceptual thinking, design trends, user interviews, micro-interactions, prototyping.",
};

const workflows = ["Discovery", "UI Audit", "Design Trends Research", "Concepts", "Final UIs"];

export default function NeeyamoPage() {
  return (
    <main className="bg-white">

      {/* ── Go Back / Portfolio bar ── */}
      <div className="flex items-center justify-between px-[80px] py-4 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
          <span>←</span> Go Back
        </Link>
        <span className="text-2xl font-bold uppercase tracking-widest">Portfolio</span>
      </div>

      {/* ── Hero ── */}
      <section className="px-[80px] pt-16 pb-20 flex gap-[103px] items-end">
        {/* Left: tag + title */}
        <div className="flex-1 flex flex-col justify-between gap-8">
          <div>
            <div className="w-full h-0.5 bg-black mb-2" />
            <p className="text-sm font-bold tracking-[0.12em] uppercase text-black">
              Redesign — Responsive Design
            </p>
          </div>
          <h1 className="text-[56px] font-black uppercase leading-[1.1] text-[#303030]">
            Design With Trends
          </h1>
        </div>

        {/* Right: scope + description */}
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#303030]">UI Design</p>
            <p className="text-lg text-[#303030] leading-relaxed">
              Design discoveries, Mood-boarding, Conceptual Thinking, Design trends, User Interviews, Micro-Interactions, Prototyping.
            </p>
          </div>
          <p className="text-xl text-black leading-[1.8]">
            Neeyamo, a leading provider of HR Technology, HR Operations, and HR Process Consulting services, committed to help build stronger businesses.
          </p>
        </div>
      </section>

      {/* ── Screenshot gallery — 4 staggered columns ── */}
      <section className="relative w-full overflow-hidden" style={{ height: 805 }}>
        {/* faded-edge background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
        <div className="absolute inset-0">
          <Image src="/neeyamo/hero-bg.png" alt="" fill className="object-cover" />
        </div>
        {/* 4 screenshot cards */}
        <div className="absolute inset-0 flex gap-5 px-4 z-0">
          {/* col 1 — starts 132px down */}
          <div className="relative flex-1 mt-[132px] rounded-[30px] overflow-hidden shadow-lg" style={{ height: 542 }}>
            <Image src="/neeyamo/screen-1.png" alt="Neeyamo screen 1" fill className="object-cover" />
          </div>
          {/* col 2 — full height */}
          <div className="relative flex-1 rounded-none overflow-hidden shadow-lg" style={{ height: 805 }}>
            <Image src="/neeyamo/screen-2.png" alt="Neeyamo screen 2" fill className="object-cover" />
          </div>
          {/* col 3 — starts 87px down */}
          <div className="relative flex-1 mt-[87px] rounded-[30px] overflow-hidden shadow-lg" style={{ height: 632 }}>
            <Image src="/neeyamo/screen-3.png" alt="Neeyamo screen 3" fill className="object-cover" />
          </div>
          {/* col 4 — full height */}
          <div className="relative flex-1 overflow-hidden shadow-lg" style={{ height: 805 }}>
            <Image src="/neeyamo/screen-4.png" alt="Neeyamo screen 4" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ── Workflows ── */}
      <section className="px-[80px] pt-16 pb-10">
        <div className="w-full h-0.5 bg-black mb-10" />
        <h2 className="text-[32px] font-black uppercase text-[#303030] mb-10">Workflows</h2>
        <div className="flex flex-wrap gap-4">
          {workflows.map((w, i) => (
            <div
              key={w}
              className="px-10 py-[30px] rounded-2xl text-[#11293e] text-2xl font-semibold"
              style={{ background: i === 1 ? "#e6f4ff" : "#edf7ff" }}
            >
              {w}
            </div>
          ))}
        </div>
      </section>

      {/* ── Concepts: laptop + phone mockup ── */}
      <section className="px-[80px] py-16 border-b border-gray-100">
        <div className="relative w-full" style={{ height: 580 }}>
          {/* Scroll inside label */}
          <p className="absolute left-0 top-3 text-[#011b40] text-sm font-normal italic">Scroll inside</p>

          {/* Laptop mockup */}
          <div className="absolute left-[43px] top-0 w-[977px] h-[549px]">
            <Image src="/neeyamo/laptop-frame.png" alt="Laptop frame" fill className="object-contain pointer-events-none z-10 relative" />
            {/* scrollable content inside laptop screen */}
            <div className="absolute left-[120px] top-[12px] w-[741px] h-[487px] overflow-y-auto overflow-x-hidden">
              <div style={{ height: 2962, width: 741, position: "relative" }}>
                <Image src="/neeyamo/concept-web.png" alt="Neeyamo concept website" fill className="object-cover object-top" />
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="absolute right-0 top-7 w-[230px] h-[463px]">
            <div className="absolute inset-0 bg-black rounded-[50px] shadow-[0_0_50px_rgba(0,0,0,0.2)]" />
            <div className="absolute left-[15px] top-[54px] w-[200px] h-[359px] overflow-y-auto overflow-x-hidden">
              <div style={{ height: 2800, width: 200, position: "relative" }}>
                <Image src="/neeyamo/concept-mobile.png" alt="Neeyamo concept mobile" fill className="object-cover object-top" />
              </div>
            </div>
            <Image src="/neeyamo/phone-frame.png" alt="Phone frame" fill className="object-contain pointer-events-none z-10 relative" />
          </div>
        </div>
      </section>

      {/* ── Final Designs ── */}
      <section className="bg-[#f5faff] py-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-semibold text-[#0e2335]">Final Designs</h2>
          <p className="text-[#0b5ed7] text-lg mt-2">Scroll inside to view the complete UI</p>
        </div>

        {/* Web screens — full width scrollable */}
        <div className="px-[80px] flex flex-col gap-20">

          {/* Press & Media */}
          <div>
            <p className="text-white text-lg mb-3 bg-[#0b5ed7] inline-block px-3 py-1 rounded">Press and media Landing Page</p>
            <div className="w-full h-[1057px] overflow-y-auto overflow-x-hidden border border-[#e0ecff] rounded-xl">
              <div style={{ height: 6166, position: "relative", width: "100%" }}>
                <Image src="/neeyamo/final-pm-web.png" alt="Press and Media web page" fill className="object-cover object-top" />
              </div>
            </div>
          </div>

          {/* Events web */}
          <div>
            <p className="text-white text-lg mb-3 bg-[#0b5ed7] inline-block px-3 py-1 rounded">Events Landing Page</p>
            <div className="w-full h-[1057px] overflow-y-auto overflow-x-hidden border border-[#e0ecff] rounded-xl">
              <div style={{ height: 3456, position: "relative", width: "100%" }}>
                <Image src="/neeyamo/final-events-web.png" alt="Events web page" fill className="object-cover object-top" />
              </div>
            </div>
          </div>

          {/* 3 mobile screens */}
          <div className="flex gap-8">
            {[
              { src: "/neeyamo/final-csr-mobile.png", label: "CSR Landing Page", h: 5259 },
              { src: "/neeyamo/final-events-mobile.png", label: "Events Listing", h: 3435 },
              { src: "/neeyamo/final-contact-mobile.png", label: "Contact Us", h: 4096 },
            ].map((m) => (
              <div key={m.label} className="flex-1">
                <p className="text-white text-base mb-3 bg-[#0b5ed7] inline-block px-3 py-1 rounded">{m.label}</p>
                <div className="h-[833px] overflow-y-auto overflow-x-hidden border border-[#e0ecff] rounded-xl">
                  <div style={{ height: m.h, position: "relative", width: "100%" }}>
                    <Image src={m.src} alt={m.label} fill className="object-cover object-top" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Style Guide ── */}
      <section className="px-[80px] py-20">
        <div className="w-full h-0.5 bg-black mb-10" />
        <h2 className="text-[32px] font-black uppercase text-[#303030] mb-6">Style Guide</h2>
        <p className="text-[#061125] text-base leading-[2] max-w-4xl mb-16">
          During the revamp of the website we have curated few new colours, gradients and button styles referring to existing brand guidelines of the site. Whitespace was used generously to give prominence to the content and simple fonts like Avenir Next and Arial were used. To bring in the real life connection human imageries were added.
        </p>

        <div className="flex gap-6 items-start">
          {/* Typography — tall left column */}
          <div className="w-[574px] shrink-0">
            <div className="bg-[#0b5ed7] px-6 py-4">
              <p className="text-white text-lg font-bold">Typography</p>
            </div>
            <div className="border border-[#ececec] overflow-hidden" style={{ height: 1428 }}>
              <Image
                src="/neeyamo/style-typography.png"
                alt="Typography guide"
                width={574}
                height={1428}
                className="object-cover object-top w-full"
              />
            </div>
          </div>

          {/* Right column: colors + components */}
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <div className="bg-[#0b5ed7] px-6 py-4">
                <p className="text-white text-lg font-bold">Color Palette</p>
              </div>
              <div className="border border-[#ececec] overflow-hidden" style={{ height: 401 }}>
                <Image
                  src="/neeyamo/style-colors.png"
                  alt="Color palette"
                  width={657}
                  height={401}
                  className="object-cover object-top w-full"
                />
              </div>
            </div>
            <div>
              <div className="bg-[#0b5ed7] px-6 py-4">
                <p className="text-white text-lg font-bold">Components</p>
              </div>
              <div className="border border-[#ececec] overflow-hidden" style={{ height: 875 }}>
                <Image
                  src="/neeyamo/style-components.png"
                  alt="Components guide"
                  width={657}
                  height={875}
                  className="object-cover object-top w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Micro-Interactions ── */}
      <section className="px-[80px] py-20 border-t border-gray-100">
        <div className="w-full h-0.5 bg-black mb-10" />
        <h2 className="text-[32px] font-black uppercase text-[#303030] mb-8">Micro — Interactions</h2>
        <p className="text-base text-[#303030] leading-[2] max-w-5xl">
          Microinteractions are where the magic happens. I understand that the small details matter. From subtle hover animations to button transitions and form validation feedback, these micro-interactions not only provide a delightful user experience but also communicate functionality effectively. I excel in creating micro-interactions that surprise and delight users, making their journey through the interface smooth and enjoyable. All these micro-interaction/animations you see below were created in Figma using the smart animate feature right from the scratch.
        </p>
      </section>

      {/* ── Live Site ── */}
      <section className="relative py-20" style={{ background: "#edf7ff" }}>
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-semibold text-[#1e1e1e]">Live site</h2>
          <a
            href="https://www.neeyamo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-black underline"
          >
            https://www.neeyamo.com/
          </a>
        </div>

        <div className="px-[80px]">
          <p className="text-[#011b40] text-sm italic mb-4">Scroll inside</p>
          <div className="relative w-[977px] mx-auto h-[549px]">
            <Image src="/neeyamo/live-laptop-frame.png" alt="Laptop frame" fill className="object-contain pointer-events-none z-10 relative" />
            <div className="absolute left-[120px] top-[12px] w-[741px] h-[487px] overflow-y-auto overflow-x-hidden">
              <div style={{ height: 4163, width: 741, position: "relative" }}>
                <Image src="/neeyamo/live-homepage.png" alt="Neeyamo live homepage" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Inference closing ── */}
      <section className="py-20 text-center border-t border-gray-200">
        <div className="w-60 h-0.5 bg-black mx-auto mb-4" />
        <h3 className="text-[32px] font-black uppercase tracking-[0.16em] text-[#303030] mb-6">Inference</h3>
        <p className="text-base text-[#303030] leading-relaxed max-w-[730px] mx-auto">
          This project let me explore the latest UI trends and granted creative freedom to explore multiple design concepts.
        </p>
      </section>

    </main>
  );
}
