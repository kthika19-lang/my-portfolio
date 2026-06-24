import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

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
    bg: "#fff8dc",
    accent: "#e5b800",
  },
  {
    name: "WhatsApp SIM",
    status: "shipped",
    statusColor: "#1a6b3a",
    statusBg: "#d4edda",
    users: "24 million users",
    desc: "An Innovative Sim card to use WhatsApp with free roaming worldwide.",
    bg: "#e8f5e9",
    accent: "#075e54",
  },
  {
    name: "ALDI TALK",
    status: "In design",
    statusColor: "#555",
    statusBg: "#eee",
    users: "30 million users",
    desc: "Aldi is a well-known supermarket selling SIM cards which operates on the O2 network.",
    bg: "#f0f0ff",
    accent: "#3a3a8c",
  },
  {
    name: "Blau",
    status: "In design",
    statusColor: "#555",
    statusBg: "#eee",
    users: "600K users",
    desc: "The brand blau offers discount tariff for calls within Germany and for calls outside Germany.",
    bg: "#e3f4ff",
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
              UI and UX Design — Product Design
            </p>
          </div>
          <h1 className="text-[56px] font-black uppercase leading-[1.1] text-[#303030]">
            A White label<br />Design solution
          </h1>
        </div>

        {/* Right: scope + description */}
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#303030]">
              UX Research, UX Design, UI Design, UI Testing, Agile Methodologies, Design System, Cross-team Collaboration
            </p>
          </div>
          <div>
            <h2 className="text-[40px] font-black uppercase leading-[1.1] text-[#303030] mb-4">
              One Design,<br />Ten Brands
            </h2>
            <p className="text-lg text-black leading-[1.8]">
              A design solution that answers users and stakeholders from 10 different brands.
            </p>
          </div>
        </div>
      </section>

      {/* ── RAITT + White Label ── */}
      <section className="px-[80px] py-16 bg-[#f8f8f8] flex gap-16">
        <div className="flex-1">
          <div className="w-full h-0.5 bg-black mb-6" />
          <h3 className="text-base font-bold tracking-[0.18em] uppercase text-[#303030] mb-5">
            The RAITT design programme
          </h3>
          <p className="text-base text-[#303030] leading-[2]">
            The programme aimed to modernise and launch a range of new offerings and services to mobile telephone, web and app users of Telefonica products.
          </p>
        </div>
        <div className="flex-1">
          <div className="w-full h-0.5 bg-black mb-6" />
          <h3 className="text-base font-bold tracking-[0.18em] uppercase text-[#303030] mb-5">
            White Label Approach
          </h3>
          <p className="text-base text-[#303030] leading-[2]">
            Through the approach, Telefonica as the parent brand aimed at offering seamless expansion of products with their 10 sub brands.
          </p>
        </div>
      </section>

      {/* ── Brand Stack ── */}
      <section className="px-[80px] py-16">
        <div className="w-full h-0.5 bg-black mb-10" />
        <h2 className="text-[32px] font-black uppercase text-[#303030] mb-10">Brand Stack</h2>
        <div className="grid grid-cols-4 gap-5">
          {brands.map((b) => (
            <div
              key={b.name}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: b.bg }}
            >
              <span
                className="self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ color: b.statusColor, background: b.statusBg }}
              >
                {b.status}
              </span>
              <h3 className="text-xl font-black uppercase" style={{ color: b.accent }}>{b.name}</h3>
              <p className="text-sm text-[#303030] leading-relaxed">{b.desc}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#303030] mt-auto">{b.users}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final Designs ── */}
      <section className="bg-[#f0faf2] py-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-semibold text-[#0e2335]">Final Designs</h2>
          <p className="text-[#075e54] text-lg mt-2">Scroll inside to view the complete UI</p>
        </div>

        <div className="px-[80px] flex gap-10">
          {/* WhatsApp SIM */}
          <div className="flex-1">
            <p className="text-white text-base mb-3 bg-[#075e54] inline-block px-3 py-1 rounded font-semibold">WhatsApp SIM</p>
            <div className="h-[700px] overflow-y-auto overflow-x-hidden border border-[#b2dfdb] rounded-2xl">
              <div style={{ height: 4096, position: "relative", width: "100%" }}>
                <Image src="/whatsapp-sim/img-102.jpeg" alt="WhatsApp SIM mobile app" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
          {/* NettoKOM */}
          <div className="flex-1">
            <p className="text-white text-base mb-3 bg-[#cc0000] inline-block px-3 py-1 rounded font-semibold">NettoKOM</p>
            <div className="h-[700px] overflow-y-auto overflow-x-hidden border border-[#f5c6c6] rounded-2xl">
              <div style={{ height: 4096, position: "relative", width: "100%" }}>
                <Image src="/whatsapp-sim/img-106.jpeg" alt="NettoKOM mobile app" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
          {/* Blau */}
          <div className="flex-1">
            <p className="text-white text-base mb-3 bg-[#0099d6] inline-block px-3 py-1 rounded font-semibold">Blau</p>
            <div className="h-[700px] overflow-y-auto overflow-x-hidden border border-[#b3e5fc] rounded-2xl">
              <div style={{ height: 4096, position: "relative", width: "100%" }}>
                <Image src="/whatsapp-sim/img-103.jpeg" alt="Blau mobile app" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Design Process ── */}
      <section className="px-[80px] py-20">
        <div className="w-full h-0.5 bg-black mb-10" />
        <h2 className="text-[32px] font-black uppercase text-[#303030] mb-12">The Design Process</h2>
        <div className="flex items-start gap-0">
          {processSteps.map((step, i) => (
            <div key={step} className="flex-1 flex flex-col items-center text-center">
              <div className="flex items-center w-full">
                {i > 0 && <div className="flex-1 h-0.5 bg-gray-300" />}
                <div className="w-8 h-8 rounded-full bg-[#075e54] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                {i < processSteps.length - 1 && <div className="flex-1 h-0.5 bg-gray-300" />}
              </div>
              <p className="text-xs text-[#303030] font-medium mt-3 leading-snug px-1">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESIGN CONTRIBUTIONS ── */}
      <section className="px-[80px] py-16 border-t border-gray-100">
        <div className="w-full h-0.5 bg-black mb-10" />
        <h2 className="text-[32px] font-black uppercase text-[#303030] mb-16">Design Contributions</h2>

        {/* 01 – Payment Module */}
        <div className="mb-20">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-[64px] font-black text-gray-100 leading-none select-none">01</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#075e54] mb-1">optimized user navigation</p>
              <h3 className="text-[28px] font-black uppercase text-[#303030]">Payment Module</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 mb-12">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075e54] mb-3">Objective</p>
                <p className="text-sm text-[#303030] leading-[2]">
                  The existing payment module redirects and takes the user away from the journey. To redefine the journey so the user doesn&apos;t lose track of the steps during checkout and help retain customers.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075e54] mb-3">Rationale</p>
                <p className="text-sm text-[#303030] leading-[2]">
                  When the flow is simplified with limiting the relevant information and an easy save card details option, not only it pushed selecting direct debit first but reduce the user time during checkout journey helping in conversion.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075e54] mb-3">Solution</p>
                <p className="text-sm text-[#303030] leading-[2]">
                  I had reworked with the architects to redefine the payment journey, that lets user setup auto-up for future purchases. And designed a component that lets retain the user within the flow and enter payment details in the same flow.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075e54] mb-3">Feedback</p>
                <p className="text-sm text-[#303030] leading-[2]">
                  The new proposal was tested and data showed 85% of new users chose to set up auto-up. The new design was also found to be legally compliant, improved retention rate and was adopted by other brand managers within the RAITT stack.
                </p>
              </div>
            </div>
          </div>

          {/* Payment screens */}
          <p className="text-[#303030] text-xs font-bold uppercase tracking-widest mb-4 text-center">Auto Top-Up & Recurring Payment — Payment Module</p>
          <div className="w-full overflow-hidden rounded-2xl border border-gray-200">
            <div style={{ position: "relative", width: "100%", height: 420 }}>
              <Image src="/whatsapp-sim/img-096.jpeg" alt="Payment module flow" fill className="object-cover object-top" />
            </div>
          </div>
        </div>

        {/* 02 – Mini Shopping-bag */}
        <div className="mb-20">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-[64px] font-black text-gray-100 leading-none select-none">02</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#075e54] mb-1">Design Iterations</p>
              <h3 className="text-[28px] font-black uppercase text-[#303030]">Placement of Mini Shopping-bag</h3>
            </div>
          </div>

          {/* Alignment call table */}
          <div className="grid grid-cols-3 gap-0 border border-gray-200 rounded-xl overflow-hidden mb-12">
            {[
              { label: "Open Topics", content: "UI + DS needs to make the rules for the centered/left-aligned design. Which other pages will display the Mini-Shopping-Cart?" },
              { label: "Data Collected", content: "Layout of the page: 8 + 4 columns Content + mini-shopping cart. Current decision from DS Team: always use 8/12 columns due to better readability. Inlife Journeys (SIM Barring/Settings) — Side Navigation + content, flows don't have the side-nav → 4 +8 and then 8 centered." },
              { label: "Key Decisions", content: "'Summary Page' will NEVER have the Mini-Shopping Cart. 'Select Payment Page' will ALWAYS have the Mini-Shopping Cart. Mini-Shopping/Summary Cart will be displayed only in cases of Purchase-Journeys (price-communication)." },
            ].map((col) => (
              <div key={col.label} className="p-6 border-r border-gray-200 last:border-r-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075e54] mb-3">{col.label}</p>
                <p className="text-xs text-[#303030] leading-[2]">{col.content}</p>
              </div>
            ))}
          </div>

          {/* Competitor research */}
          <p className="text-sm font-bold uppercase tracking-widest text-[#303030] mb-6">UX & UI Alignment Call — Competitor Research</p>
          <div className="grid grid-cols-3 gap-6 mb-12">
            {[
              { src: "/whatsapp-sim/img-000.jpeg", label: "John Lewis", h: 1200 },
              { src: "/whatsapp-sim/img-011.jpeg", label: "Microsoft", h: 1200 },
              { src: "/whatsapp-sim/img-019.jpeg", label: "Zalando", h: 1200 },
            ].map((c) => (
              <div key={c.label}>
                <p className="text-xs text-[#303030] font-semibold mb-2">{c.label}</p>
                <div className="h-[400px] overflow-y-auto overflow-x-hidden rounded-xl border border-gray-200">
                  <div style={{ height: c.h, position: "relative", width: "100%" }}>
                    <Image src={c.src} alt={`${c.label} competitor screen`} fill className="object-cover object-top" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Change logs */}
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
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075e54] mb-4">{item.log}</p>
                <p className="text-sm text-[#303030] leading-[1.8] mb-3">{item.note}</p>
                <p className="text-xs text-gray-500 leading-[1.8]">{item.extra}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 03 – TOKENS */}
        <div className="mb-20">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-[64px] font-black text-gray-100 leading-none select-none">03</span>
            <div>
              <h3 className="text-[28px] font-black uppercase text-[#303030]">Tokens</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 mb-12">
            <div>
              <p className="text-sm text-[#303030] leading-[2] mb-6">
                We started with an audit of existing resources. Three levels of Design Tokens were created to help update design decisions globally or apply a change to a single component.
              </p>
              {/* Token hierarchy */}
              <div className="flex flex-col gap-3">
                {[
                  { label: "Base Token", desc: "Primitive values — color palette, font sizes, spacing", color: "#e8f5e9" },
                  { label: "Alias Token", desc: "Semantic references — color.ui.interaction.default", color: "#fff3e0" },
                  { label: "Component Token", desc: "Component-specific — button.primary.background.default", color: "#e3f2fd" },
                ].map((t) => (
                  <div key={t.label} className="flex items-start gap-4 p-4 rounded-xl" style={{ background: t.color }}>
                    <div>
                      <p className="text-sm font-bold text-[#303030]">{t.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075e54] mb-3">Syncing to Code</p>
              <p className="text-sm text-[#303030] leading-[2] mb-8">
                As a pipeline between design and code a plugin called Figma Tokens from Jan Six was used.
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075e54] mb-3">Jira — Design System Tracking</p>
              <p className="text-sm text-[#303030] leading-[2] mb-6">
                Jira as our Kanban board to track all progress. To request review from stakeholders via this tool. Team uses Jira to request designers for new requirements. Developers pick approved designs.
              </p>
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <div style={{ position: "relative", width: "100%", height: 200 }}>
                  <Image src="/whatsapp-sim/img-089.jpeg" alt="Jira design system kanban" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design System ── */}
      <section className="bg-[#1a1a2e] py-20">
        <div className="px-[80px]">
          <h2 className="text-[32px] font-black uppercase text-white mb-4">Design System</h2>
          <p className="text-gray-400 text-base leading-[2] max-w-3xl mb-16">
            To identify gaps the existing icons assets were audited to identify specific icons in both, solid and outline variations, and a new and refreshed icon library was designed using Adobe Illustrator and Figma.
          </p>

          <div className="grid grid-cols-2 gap-10 mb-12">
            {/* Icons */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#4caf50] mb-3">~300 icons</p>
              <div className="rounded-2xl overflow-hidden">
                <div style={{ position: "relative", width: "100%", height: 500 }}>
                  <Image src="/whatsapp-sim/img-092.jpeg" alt="Design system icons" fill className="object-cover object-top" />
                </div>
              </div>
            </div>

            {/* Components */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#4caf50] mb-3">~56 Components</p>
              <p className="text-gray-400 text-sm leading-[1.8] mb-4">
                Components were built as reusable blocks of our design system. Each component meets a specific interaction or UI need, and has been specifically created to work together to create patterns and intuitive user experiences.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <div style={{ position: "relative", width: "100%", height: 430 }}>
                  <Image src="/whatsapp-sim/img-001.jpeg" alt="Design system components in Figma" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </div>

          {/* Compositions */}
          <div className="border-t border-white/10 pt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#4caf50] mb-3">Design Compositions</p>
            <p className="text-gray-400 text-sm leading-[2] max-w-3xl">
              Compositions were designed in a way that they can be reused in different parts of the design journey. Based on the design requirements and refinements of a flow, compositions were created with the involvement of the designers and engineers along with product and brand teams.
            </p>
          </div>
        </div>
      </section>

      {/* ── Live Sites ── */}
      <section className="py-20 bg-[#f0faf2]">
        <div className="px-[80px]">
          <div className="w-full h-0.5 bg-[#075e54] mb-10" />
          <h2 className="text-[32px] font-black uppercase text-[#303030] mb-12">Live Sites</h2>
          <p className="text-[#303030] text-sm italic mb-8">Scroll inside</p>

          <div className="grid grid-cols-2 gap-10">
            {/* NettoKOM */}
            <div>
              <a
                href="https://www.nettokom.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cc0000] font-semibold text-sm underline mb-4 block"
              >
                https://www.nettokom.de/
              </a>
              <div className="h-[600px] overflow-y-auto overflow-x-hidden rounded-2xl border border-gray-200">
                <div style={{ height: 4096, position: "relative", width: "100%" }}>
                  <Image src="/whatsapp-sim/img-106.jpeg" alt="NettoKOM live site" fill className="object-cover object-top" />
                </div>
              </div>
            </div>

            {/* WhatsApp SIM */}
            <div>
              <a
                href="https://www.whatsappsim.de/plp.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#075e54] font-semibold text-sm underline mb-4 block"
              >
                https://www.whatsappsim.de/plp.html
              </a>
              <div className="h-[600px] overflow-y-auto overflow-x-hidden rounded-2xl border border-gray-200">
                <div style={{ height: 4096, position: "relative", width: "100%" }}>
                  <Image src="/whatsapp-sim/img-102.jpeg" alt="WhatsApp SIM live site" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenges and Learnings ── */}
      <section className="px-[80px] py-20 border-t border-gray-100">
        <div className="w-full h-0.5 bg-black mb-10" />
        <h2 className="text-[32px] font-black uppercase text-[#303030] mb-12">Challenges and Learnings</h2>
        <div className="grid grid-cols-2 gap-8">
          {challenges.map((c) => (
            <div key={c.title} className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-lg font-black uppercase tracking-wider text-[#075e54] mb-4">{c.title}</h3>
              <p className="text-sm text-[#303030] leading-[2]">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
