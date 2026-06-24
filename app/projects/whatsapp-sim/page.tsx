import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FinalDesignsTabs } from "./FinalDesignsTabs";

export const metadata: Metadata = {
  title: "WhatsApp SIM — Design Portfolio",
  description: "A White label Design solution. To modernise and launch a range of new offerings and services to 44 million mobile telephone users, through the White Label approach.",
};

const processSteps = [
  "PI & Scrum Planning",
  "UX Research",
  "Lo-fi wireframes",
  "Visual Designs",
  "Design System Integration",
  "Brand Approvals",
  "Dev Handover",
  "UI & Usability Testing",
];

const brands = [
  {
    name: "NettoKOM",
    status: "IN PRODUCTION",
    statusColor: "#1a7a1a",
    statusBg: "#e6f5e6",
    users: "50 million users",
    desc: "Netto are grocery story SIM cards operating on the O2 mobile network.",
    accent: "#e5b800",
  },
  {
    name: "WhatsApp SIM",
    status: "shipped",
    statusColor: "#1a6b3a",
    statusBg: "#d4edda",
    users: "24 million users",
    desc: "An Innovative Sim card to use WhatsApp with free roaming worldwide.",
    accent: "#075e54",
  },
  {
    name: "ALDI TALK",
    status: "In design",
    statusColor: "#555",
    statusBg: "#eee",
    users: "30 million users",
    desc: "Aldi is a well-known supermarket selling SIM cards which operates on the O2 network.",
    accent: "#3a3a8c",
  },
  {
    name: "Blau",
    status: "In design",
    statusColor: "#555",
    statusBg: "#eee",
    users: "600K users",
    desc: "The brand blau offers discount tariff for calls within Germany and for calls outside Germany.",
    accent: "#0099d6",
  },
];

const challenges = [
  {
    title: "Cross collaboration",
    body: "Regular meetings between UX, UI, DS, UX writers and Content with Business and Product owners, Brand Managers across tribes.",
  },
  {
    title: "Avoid gaps between design and dev",
    body: "Constant alignment and embedding creative team from the blueprinting to production to avoid gaps during handover and development.",
  },
  {
    title: "Re-skin made easy",
    body: "With the Superset library using the ONE library, the new features can be blueprinted faster and library swapped on Figma to respective brands.",
  },
  {
    title: "Version Control",
    body: "Every design stage within a file was documented to communicate design progress and ensure dev has the most updated screens (before Figma introduced dev mode).",
  },
];

export default function WhatsAppSIMPage() {
  return (
    <main className="bg-white">

      {/* ── Go Back / Portfolio bar ── */}
      <div className="flex items-center justify-between px-[80px] py-4 border-b border-gray-800 bg-black">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:opacity-60 transition-opacity">
          <span>←</span> Go Back
        </Link>
        <span className="text-2xl font-bold uppercase tracking-widest text-white">Portfolio</span>
      </div>

      {/* ── Hero — black background ── */}
      <section className="bg-black px-[80px] pt-16 pb-20 flex gap-[80px] items-start">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-10">
          <div>
            <div className="w-full h-0.5 bg-white mb-3" />
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-white/70">
              UI and UX Design
            </p>
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-white/70 mt-1">
              Product Design
            </p>
          </div>
          <h1 className="text-[64px] font-black uppercase leading-[1.0] text-white">
            A White Label<br />Design Solution
          </h1>
          <p className="text-sm text-white/60 leading-[1.9] max-w-sm">
            To modernise and launch a range of new offerings and services to 44 million mobile telephone users, through the White Label approach.
          </p>
        </div>

        {/* Right */}
        <div className="flex-1 flex flex-col gap-8 pt-10">
          <div>
            <h2 className="text-[52px] font-black uppercase leading-[1.05] text-white">
              One<br />Design,<br />Ten<br />Brands
            </h2>
            <p className="text-sm text-white/60 leading-[1.9] mt-4 max-w-xs">
              A design solution that answers users and stakeholders from 10 different brands.
            </p>
          </div>

          {/* Brand colour chips */}
          <div className="flex gap-3 flex-wrap mt-4">
            {brands.map((b) => (
              <span
                key={b.name}
                className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                style={{ background: b.accent }}
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Stack ── */}
      <section className="px-[80px] py-16 bg-white">
        <div className="w-full h-0.5 bg-black mb-10" />
        <h2 className="text-[32px] font-black uppercase text-[#303030] mb-10">Brand Stack</h2>
        <div className="grid grid-cols-4 gap-5">
          {brands.map((b) => (
            <div
              key={b.name}
              className="rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 shadow-sm"
            >
              <span
                className="self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ color: b.statusColor, background: b.statusBg }}
              >
                {b.status}
              </span>
              <h3 className="text-xl font-black uppercase" style={{ color: b.accent }}>
                {b.name}
              </h3>
              <p className="text-sm text-[#303030] leading-relaxed flex-1">{b.desc}</p>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: b.accent }}>
                {b.users}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final Designs ── */}
      <section className="px-[80px] py-16 border-t border-gray-100">
        <div className="mb-10">
          <h2 className="text-[32px] font-black uppercase text-[#303030] mb-2">Final Designs</h2>
        </div>
        <FinalDesignsTabs />
      </section>

      {/* ── The Design Process ── */}
      <section className="bg-[#f5f5f5] px-[80px] py-16">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#303030] mb-12">
          The Design Process
        </h2>
        <div className="flex items-start">
          {processSteps.map((step, i) => (
            <div key={step} className="flex-1 flex flex-col items-center text-center">
              <div className="flex items-center w-full">
                {i > 0 && <div className="flex-1 h-px bg-gray-400" />}
                <div className="w-7 h-7 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                {i < processSteps.length - 1 && <div className="flex-1 h-px bg-gray-400" />}
              </div>
              <p className="text-[11px] text-[#303030] font-medium mt-3 leading-snug px-1">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESIGN CONTRIBUTIONS header ── */}
      <section className="px-[80px] pt-20 pb-4">
        <div className="w-full h-0.5 bg-black mb-6" />
        <h2 className="text-[32px] font-black uppercase text-[#303030]">Design Contributions</h2>
      </section>

      {/* ── 01 Payment Module ── */}
      <section className="px-[80px] py-16 border-t border-gray-100">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-[80px] font-black text-gray-100 leading-none select-none">01</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-1">
              optimised user navigation
            </p>
            <h3 className="text-[28px] font-black uppercase text-[#303030]">Payment Module</h3>
          </div>
        </div>

        {/* Text left + phone right */}
        <div className="flex gap-16 mb-14">
          {/* Text columns */}
          <div className="flex-1 grid grid-cols-2 gap-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Objective</p>
              <p className="text-sm text-[#303030] leading-[2]">
                The existing payment module redirects and takes the user away from the journey. To redefine the journey so the user doesn&apos;t lose track of the steps during checkout and help retain customers.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Rationale</p>
              <p className="text-sm text-[#303030] leading-[2]">
                When the flow is simplified with limiting the relevant information and an easy save card details option, not only it pushed selecting direct debit first but reduce the user time during checkout journey helping in conversion.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Solution</p>
              <p className="text-sm text-[#303030] leading-[2]">
                I had reworked with the architects to redefine the payment journey, that lets user setup auto-up for future purchases. And designed a component that lets retain the user within the flow and enter payment details in the same flow.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Feedback</p>
              <p className="text-sm text-[#303030] leading-[2]">
                The new proposal was tested and data showed 85% of new users chose to set up auto-up. The new design was also found to be legally compliant, improved retention rate and was adopted by other brand managers within the RAITT stack.
              </p>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="shrink-0 w-[220px]">
            <div className="relative w-[220px] h-[440px]">
              {/* Phone bezel */}
              <div className="absolute inset-0 bg-[#1a1a1a] rounded-[40px] shadow-[0_0_60px_rgba(0,0,0,0.15)]" />
              {/* Screen */}
              <div className="absolute left-[12px] top-[12px] right-[12px] bottom-[12px] rounded-[30px] overflow-hidden">
                <div style={{ height: 2774, position: "relative", width: "100%" }}>
                  <Image
                    src="/whatsapp-sim/img-109.jpeg"
                    alt="WhatsApp SIM app"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Auto Top-Up flow diagram */}
        <div className="mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 text-center">
            Auto Top-Up &amp; Recurring Payment — Payment Module
          </p>
          {/* Decision tree */}
          <div className="bg-[#fafafa] border border-gray-200 rounded-2xl p-8 overflow-x-auto">
            <div className="flex items-start gap-4 min-w-[900px]">
              {/* Node 1 */}
              <div className="flex flex-col items-center gap-2 shrink-0 w-40">
                <div className="w-36 px-3 py-3 border-2 border-gray-800 rotate-45 shrink-0" style={{ height: 56, width: 56, transform: "rotate(45deg)" }} />
                <div className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-center text-[11px] text-[#303030] leading-snug" style={{ marginTop: 10 }}>
                  Does Brand allow recurring payment top ups?
                </div>
              </div>
              <div className="flex flex-col gap-8 flex-1">
                {/* Yes branch */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center gap-1 mt-2">
                    <div className="w-8 h-px bg-gray-400" />
                    <span className="text-[10px] text-green-600 font-bold">Yes</span>
                    <div className="w-4 h-px bg-gray-400" />
                  </div>
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-center text-[11px] text-[#303030] leading-snug w-36">
                      Tariff with recurring costs?
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[10px] text-green-600 font-bold">Yes</span>
                      <div className="bg-[#e8f5e9] border border-green-300 rounded-lg px-3 py-2 text-[11px] text-center w-32">Case 3<br/>Select recurring payments</div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[10px] text-red-500 font-bold">No</span>
                      <div className="bg-[#fff3e0] border border-orange-200 rounded-lg px-3 py-2 text-[11px] text-center w-32">Case 1<br/>Select automatic top up</div>
                    </div>
                  </div>
                </div>
                {/* No branch */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-8 h-px bg-gray-400" />
                    <span className="text-[10px] text-red-500 font-bold">No</span>
                    <div className="w-4 h-px bg-gray-400" />
                  </div>
                  <div className="bg-[#fce4ec] border border-red-200 rounded-lg px-3 py-2 text-[11px] text-center w-40">
                    Case 2<br/>Select Euro / One-time payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment screens */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200">
          <div style={{ position: "relative", width: "100%", height: 450 }}>
            <Image
              src="/whatsapp-sim/img-096.jpeg"
              alt="Payment module screens"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ── 02 Design Iterations ── */}
      <section className="px-[80px] py-16 border-t border-gray-100">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-[80px] font-black text-gray-100 leading-none select-none">02</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-1">
              Design Iterations
            </p>
            <h3 className="text-[28px] font-black uppercase text-[#303030]">
              Placement of Mini Shopping-bag
            </h3>
          </div>
        </div>

        {/* Alignment call — 3 columns */}
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
          UX &amp; UI Alignment Call
        </p>
        <div className="grid grid-cols-3 gap-0 border border-gray-200 rounded-xl overflow-hidden mb-12">
          {[
            {
              label: "Open Topics",
              body: "UI + DS needs to make the rules for the centered/left-aligned design. Which other pages will display the Mini-Shopping-Cart? How is it designed so far by the UI Team? Should we differentiate 2 use cases: INLIFE AREA and SHOP AREA?",
            },
            {
              label: "Data Collected",
              body: "Layout of the page: 8 + 4 columns — Content + mini-shopping cart. Current decision from DS Team: always use 8/12 columns due to better readability. Inlife Journeys (SIM Barring/Settings) — Side Navigation + content, flows don't have the side-nav → 4+8 and then 8 centered.",
            },
            {
              label: "Key Decisions",
              body: "'Summary Page' will NEVER have the Mini-Shopping Cart. 'Select Payment Page' will ALWAYS have the Mini-Shopping Cart. Mini-Shopping/Summary Cart will be displayed only in cases of Purchase-Journeys (price-communication). WhatsApp SIM does not have any fees (on services).",
            },
          ].map((col, i) => (
            <div
              key={col.label}
              className={`p-6 ${i < 2 ? "border-r border-gray-200" : ""}`}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
                {col.label}
              </p>
              <p className="text-xs text-[#303030] leading-[2]">{col.body}</p>
            </div>
          ))}
        </div>

        {/* Competitor research */}
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
          Data Collected — Competitor Benchmarking
        </p>
        <div className="grid grid-cols-3 gap-6 mb-12">
          {[
            { src: "/whatsapp-sim/img-000.jpeg", label: "John Lewis", h: 1200 },
            { src: "/whatsapp-sim/img-011.jpeg", label: "Microsoft", h: 1200 },
            { src: "/whatsapp-sim/img-019.jpeg", label: "Zalando", h: 1200 },
          ].map((c) => (
            <div key={c.label}>
              <p className="text-xs text-[#303030] font-semibold mb-3">{c.label}</p>
              <div className="h-[400px] overflow-y-auto overflow-x-hidden rounded-xl border border-gray-200">
                <div style={{ height: c.h, position: "relative", width: "100%" }}>
                  <Image
                    src={c.src}
                    alt={`${c.label} competitor screen`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Change logs */}
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
          Change Log
        </p>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              log: "Change-Log — 1",
              note: "Pull up summary card with hidden CTAs within so the user doesn't miss the action when they scroll.",
              extra: "Extra real-estate with repeating CTAs and tariff information.",
            },
            {
              log: "Change-Log — 2",
              note: "Display summary as a card below the content and CTA group, with detailed price description.",
              extra: "Order summary now contains only the total amount rather repeating the bag content.",
            },
            {
              log: "Change-Log — 3",
              note: "The order summary containing the 'Place order' CTA is featured prominently at top and bottom of the screen to promote conversions and inline with the tried and tested Amazon checkout model.",
              extra: "The CTA is now near the Total to ensure compliance with Legal requirements. The Terms & Conditions are clearly visible and near the CTA.",
            },
          ].map((item) => (
            <div key={item.log} className="bg-[#f8f8f8] rounded-xl p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
                {item.log}
              </p>
              <p className="text-sm text-[#303030] leading-[1.9] mb-3">{item.note}</p>
              <p className="text-xs text-gray-500 leading-[1.9]">{item.extra}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03 Business Driven by Design ── */}
      <section className="px-[80px] py-16 border-t border-gray-100">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-[80px] font-black text-gray-100 leading-none select-none">03</span>
          <div>
            <h3 className="text-[28px] font-black uppercase text-[#303030]">
              Business Driven by Design
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 mb-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Tokens</p>
            <p className="text-sm text-[#303030] leading-[2] mb-8">
              We started with an audit of existing resources. Three levels of Design Tokens were created to help update design decisions globally or apply a change to a single component.
            </p>
            {/* Token hierarchy */}
            <div className="flex flex-col gap-3">
              {[
                { label: "Base Token", sub: "Primitive values — color palette, font sizes, spacing", bg: "#e8f5e9" },
                { label: "Alias Token", sub: "Semantic references — color.ui.interaction.default", bg: "#fff8e1" },
                { label: "Component Token", sub: "Component-specific — button.primary.background.default", bg: "#e3f2fd" },
              ].map((t) => (
                <div
                  key={t.label}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: t.bg }}
                >
                  <div>
                    <p className="text-sm font-bold text-[#303030]">{t.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{t.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
              Syncing to Code
            </p>
            <p className="text-sm text-[#303030] leading-[2] mb-6">
              As a pipeline between design and code a plugin called Figma Tokens from Jan Six was used.
            </p>
            <div className="bg-[#f8f8f8] rounded-xl p-6">
              <p className="text-xs text-[#303030] leading-[2] font-mono">
                <span className="text-purple-600">color.palette.brand.1.default</span><br />
                <span className="text-blue-600">color.ui.interaction.default</span><br />
                <span className="text-green-600">button.primary.background.default</span><br />
                <span className="text-gray-500">#0019A5</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── JIRA — dark section ── */}
      <section className="bg-[#1a1a2e] py-16 px-[80px]">
        <div className="flex gap-16 items-start">
          <div className="w-[260px] shrink-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">JIRA</p>
            <h4 className="text-xl font-black uppercase text-white mb-4">Design System Tracking</h4>
            <p className="text-sm text-white/60 leading-[2]">
              Jira as our Kanban board to track all progress. To request review from stakeholders via this tool. Team uses Jira to request designers for new requirements. Developers pick approved designs.
            </p>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden">
            <div style={{ position: "relative", width: "100%", height: 320 }}>
              <Image
                src="/whatsapp-sim/img-089.jpeg"
                alt="Jira design system kanban"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Icons + Components ── */}
      <section className="px-[80px] py-16">
        <div className="grid grid-cols-2 gap-12 mb-16">
          {/* Icons */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">~300 icons</p>
            <p className="text-sm text-[#303030] leading-[2] mb-6">
              To identify gaps the existing icons assets were audited to identify specific icons in both, solid and outline variations, and a new and refreshed icon library was designed using Adobe Illustrator and Figma.
            </p>
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div style={{ position: "relative", width: "100%", height: 420 }}>
                <Image
                  src="/whatsapp-sim/img-092.jpeg"
                  alt="Design system icons"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Components */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">~56 Components</p>
            <p className="text-sm text-[#303030] leading-[2] mb-6">
              Components were built as reusable blocks of our design system. Each component meets a specific interaction or UI need, and has been specifically created to work together to create patterns and intuitive user experiences.
            </p>
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div style={{ position: "relative", width: "100%", height: 420 }}>
                <Image
                  src="/whatsapp-sim/img-001.jpeg"
                  alt="Design system components in Figma"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Design Compositions */}
        <div className="border-t border-gray-100 pt-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
            Design Compositions
          </p>
          <p className="text-sm text-[#303030] leading-[2] max-w-3xl">
            Compositions were designed in a way that they can be reused in different parts of the design journey. Based on the design requirements and refinements of a flow, compositions were created with the involvement of the designers and engineers along with product and brand teams.
          </p>
        </div>
      </section>

      {/* ── Live Sites ── */}
      <section className="px-[80px] py-16 border-t border-gray-100 bg-[#fafafa]">
        <div className="w-full h-0.5 bg-black mb-10" />
        <h2 className="text-[32px] font-black uppercase text-[#303030] mb-12">Live Sites</h2>

        <div className="grid grid-cols-2 gap-12">
          {/* Laptop — NettoKOM */}
          <div>
            <a
              href="https://www.nettokom.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline text-[#303030] hover:opacity-60 block mb-4"
            >
              https://www.nettokom.de/
            </a>
            <p className="text-[#555] text-xs italic mb-3">Scroll inside</p>
            {/* Laptop frame */}
            <div className="relative">
              {/* Screen body */}
              <div className="bg-[#1a1a1a] rounded-t-xl pt-3 px-3 pb-0">
                {/* Top bar */}
                <div className="flex items-center gap-1.5 mb-2 px-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                {/* Screen content */}
                <div className="bg-white overflow-hidden rounded-t-lg" style={{ height: 360 }}>
                  <div style={{ height: 4096, position: "relative", width: "100%" }}>
                    <Image
                      src="/whatsapp-sim/img-106.jpeg"
                      alt="NettoKOM live site"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              {/* Base */}
              <div className="bg-[#2a2a2a] h-3 rounded-b-sm" />
              <div className="bg-[#3a3a3a] h-1.5 rounded-b-xl mx-8" />
            </div>
          </div>

          {/* Phone — WhatsApp SIM */}
          <div>
            <a
              href="https://www.whatsappsim.de/plp.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline text-[#303030] hover:opacity-60 block mb-4"
            >
              https://www.whatsappsim.de/plp.html
            </a>
            <p className="text-[#555] text-xs italic mb-3">Scroll inside</p>
            <div className="flex justify-center">
              <div className="relative w-[240px]">
                {/* Phone body */}
                <div className="bg-[#1a1a1a] rounded-[44px] p-3 shadow-[0_0_60px_rgba(0,0,0,0.12)]">
                  {/* Notch */}
                  <div className="w-20 h-4 bg-[#0f0f0f] rounded-full mx-auto mb-2" />
                  {/* Screen */}
                  <div className="bg-white rounded-[32px] overflow-hidden" style={{ height: 420 }}>
                    <div style={{ height: 4096, position: "relative", width: "100%" }}>
                      <Image
                        src="/whatsapp-sim/img-102.jpeg"
                        alt="WhatsApp SIM live site"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  {/* Home bar */}
                  <div className="w-20 h-1 bg-white/30 rounded-full mx-auto mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenges and Learnings ── */}
      <section className="px-[80px] py-20 border-t border-gray-100">
        <div className="w-full h-0.5 bg-black mb-10" />
        <h2 className="text-[32px] font-black uppercase text-[#303030] mb-12">
          Challenges and Learnings
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {challenges.map((c) => (
            <div key={c.title} className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#303030] mb-4">
                {c.title}
              </h3>
              <p className="text-sm text-[#303030] leading-[2]">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
