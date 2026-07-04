import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import CosmicScene from "./CosmicScene";
import "./qapita.css";

export const metadata: Metadata = {
  title: "One Design System — Kiruthika R",
  description:
    "How I rebuilt Qapita's design system so engineers — and the AI agents writing their code — could ship consistent UI without a designer reviewing every screen.",
};

const buttonSpec = `// simplified excerpt — reflects the Button component's documented anatomy
{
  "component": "Button",
  "description": "Interactive element that triggers an action",
  "anatomy": [
    { "part": "container", "required": true },
    { "part": "label", "required": true, "rule": "max 3 words, sentence case" },
    { "part": "leadingIcon", "required": false, "size": "16px" },
    { "part": "trailingIcon", "required": false, "size": "16px" }
  ],
  "variants": ["primary", "secondary", "tertiary", "compact"],
  "states": ["default", "hover", "pressed", "disabled"],
  "sizes": [
    { "token": "button.size.lg", "height": "48px", "use": "primary actions" },
    { "token": "button.size.md", "height": "40px", "use": "default, most common" },
    { "token": "button.size.sm", "height": "32px", "use": "dense UI, inline contexts" }
  ],
  "tokens": {
    "background.default": "button.primary.background.default",
    "label.typography": "typography.ui.default"
  },
  "rules": [
    "one primary button per screen",
    "icon-only requires a tooltip and aria-label"
  ]
}`;

export default function OneDesignSystemPage() {
  return (
    <main className="bg-white">
      {/* ── Nav bar ── */}
      <div className="flex items-center justify-between px-[80px] py-4 border-b border-gray-200">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
        >
          <span>←</span> Go Back
        </Link>
        <span className="text-2xl font-bold uppercase tracking-widest">Portfolio</span>
      </div>

      <article className="cds">
        {/* ── Hero ── */}
        <header className="hero">
          <div className="wrap">
            <div className="eyebrow">Case Study · Cosmic Design System</div>
            <h1>Building a Design System for Developers and Agents</h1>
            <p className="dek">
              How I rebuilt Qapita&apos;s design system so engineers — and the AI agents writing their
              code — could ship consistent UI without a designer reviewing every screen.
            </p>
            <div className="meta">
              <div><span>Role</span>Design lead — strategy, tokens, specs &amp; rollout</div>
              <div><span>Team</span>Solo build, partnered with engineering</div>
              <div><span>Timeline</span>3 weeks, ongoing rollout</div>
              <div><span>Company</span>Qapita · 2026</div>
            </div>
          </div>
        </header>

        {/* ── Hero visual: live Cosmic scene ── */}
        <div style={{ padding: "40px 32px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <CosmicScene interactive />
          </div>
        </div>

        {/* ── Context ── */}
        <section>
          <div className="wrap">
            <h2>Context</h2>
            <p className="lead">
              Qapita is an equity-management platform — cap tables, ESOP administration, and digital
              share issuance — used by founders, finance teams, and employees across India and
              Southeast Asia.
            </p>
            <p>
              The product&apos;s entire promise is a single, trustworthy source of truth for who owns
              what. That raises the stakes on interface consistency: when someone is approving an
              option exercise or reading their equity payslip, a screen that looks improvised reads as{" "}
              <em>&ldquo;can I trust this number?&rdquo;</em> Visual inconsistency isn&apos;t cosmetic
              here — it undercuts the core value proposition.
            </p>
            <p>
              By the time I took this on, the platform served 2,500+ companies and 350,000+
              stakeholders holding over USD 60 billion in equity across India and Southeast Asia. It
              had grown fast, and its interface had grown with it — in every direction at once.
            </p>
          </div>
        </section>

        {/* ── Why now ── */}
        <section>
          <div className="wrap">
            <h2>Why this happened now</h2>
            <p className="lead">
              Our engineering team had started using AI coding assistants to ship features faster. Code
              output went up. But there was no shared design foundation for those assistants — or our
              developers — to build from.
            </p>
            <p>
              Every prompt, every PR, was a fresh set of decisions: which icon, which button style,
              which shade of grey. AI didn&apos;t fix our inconsistency problem, it multiplied it. What
              used to be one developer making an off-spec choice became dozens of AI-generated
              components making off-spec choices, faster than we could review them. That was the
              trigger.
            </p>
            <p>
              It was compounded by two things we&apos;d been living with for a while: designers and
              developers losing time re-deciding things that should have already been settled, and — as
              we grew across teams — the same screen problems showing up in different products with
              different answers each time.
            </p>
          </div>
        </section>

        {/* ── Goals ── */}
        <section>
          <div className="wrap">
            <h2>What &ldquo;good&rdquo; looked like</h2>
            <p>
              Before building anything, I set the bar the system had to clear. These were my success
              criteria — and the lens I used to cut scope when three weeks got tight.
            </p>
            <ul className="prose">
              <li>
                <strong>One obvious answer per decision.</strong> If a developer or an agent has to
                guess which component or token to use, the system has failed.
              </li>
              <li>
                <strong>Machine-readable, not just human-readable.</strong> Every component parseable by
                an agent so it generates on-spec markup without a designer in the loop.
              </li>
              <li>
                <strong>Covers today, scales to tomorrow.</strong> Extensive enough to describe the
                current product, structured enough to absorb new surfaces without a rewrite.
              </li>
              <li>
                <strong>Adoptable without a gatekeeper.</strong> Consistency should hold because the
                system makes the right choice the easy choice — not because I review every screen.
              </li>
            </ul>
            <p className="note-s">
              Noting these upfront is deliberate: it&apos;s how I judge the results later in this study,
              and — honestly — setting a measurable baseline against each one is the thing I&apos;d do
              earlier next time.
            </p>
          </div>
        </section>

        {/* ── Process ── */}
        <section>
          <div className="wrap">
            <h2>How the three weeks broke down</h2>
            <div className="timeline">
              <div className="tl-step">
                <div className="tl-top"><div className="tl-dot">1</div><div className="tl-line" /></div>
                <div className="tl-dur">2–3 days</div>
                <div className="tl-title">Audit</div>
                <div className="tl-desc">
                  Catalogued every icon, component, and color token already in use across the product.
                </div>
              </div>
              <div className="tl-step">
                <div className="tl-top"><div className="tl-dot">2</div><div className="tl-line" /></div>
                <div className="tl-dur">1.5 weeks</div>
                <div className="tl-title">Build</div>
                <div className="tl-desc">
                  Defined the token architecture, then built the foundation, core components, and icon
                  set on top of it.
                </div>
              </div>
              <div className="tl-step">
                <div className="tl-top"><div className="tl-dot">3</div><div className="tl-line" /></div>
                <div className="tl-dur">1 week</div>
                <div className="tl-title">Document &amp; QA</div>
                <div className="tl-desc">
                  Wrote the component specs, ran accessibility checks, and stress-tested edge cases
                  before rollout.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Audit ── */}
        <section>
          <div className="wrap">
            <h2>What the audit found</h2>
            <p className="lead">
              The existing system was React components layered on top of a mix of custom and
              open-source icon and UI libraries — built up over time, with no governing layer above it.
              Nobody owned consistency, so nothing stayed consistent. The audit put a number on the gap.
            </p>
            <div className="audit-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
              <div className="audit-card">
                <div className="audit-cat">Components</div>
                <div className="audit-after">24</div>
                <div className="audit-sub">documented components — one spec, one source of truth each</div>
                <div className="audit-foot"><span className="audit-was">was ~12, undocumented</span><span className="audit-mult">2×</span></div>
              </div>
              <div className="audit-card">
                <div className="audit-cat">Icons</div>
                <div className="audit-after">200<span className="plus">+</span></div>
                <div className="audit-sub">icons unified into a single governed set</div>
                <div className="audit-foot"><span className="audit-was">was ~50, mixed sources</span><span className="audit-mult">4×</span></div>
              </div>
            </div>
            <p className="note" style={{ marginTop: 4 }}>
              From a foundation nobody owned to a governed system: components, icons, and color each
              moved from &ldquo;however it was built that day&rdquo; to one documented answer.
            </p>
            <p>None of this was anyone&apos;s fault. It&apos;s what happens when a product grows faster than its design foundation.</p>
          </div>
        </section>

        {/* ── Decisions ── */}
        <section>
          <div className="wrap">
            <h2>The decisions that shaped it</h2>
            <p className="lead">
              Three weeks forces choices. These are the ones that mattered — and what I traded away to
              make them.
            </p>
            <div className="split">
              <div className="dcard">
                <div className="decision">Build vs. adopt</div>
                <h4>A governing layer over the existing stack — not a rip-and-replace</h4>
                <p>
                  Adopting an off-the-shelf library (shadcn, Radix, MUI) would have meant re-platforming
                  a live product mid-flight. The primitives weren&apos;t the problem — the missing{" "}
                  <em>governing layer</em> was. So I built tokens, specs, and a consolidated component
                  set on top of what shipped, instead of swapping the foundation under it.
                </p>
                <div className="tradeoff"><b>Traded:</b> the polish of a mature third-party library, for zero migration risk and a system shaped to our exact product.</div>
              </div>
              <div className="dcard">
                <div className="decision">Token depth</div>
                <h4>Three layers (base → role → usage), not two</h4>
                <p>
                  A two-layer system is simpler to author. But agents need to resolve a value from{" "}
                  <em>where it&apos;s used</em>, not guess intent from a semantic name. The usage layer
                  gives every place in the product one addressable token — the extra indirection is what
                  makes drift structurally impossible.
                </p>
                <div className="tradeoff"><b>Traded:</b> some authoring overhead, for drift-proofing and machine-addressability.</div>
              </div>
              <div className="dcard">
                <div className="decision">Scope</div>
                <h4>The 24 highest-traffic components, not everything</h4>
                <p>
                  I deliberately didn&apos;t try to document all ~50+ surface patterns. I mapped
                  component usage, took the 24 that covered the majority of real screens, and left the
                  long tail for later. Coverage where it counts beat completeness on paper.
                </p>
                <div className="tradeoff"><b>Traded:</b> total coverage, for a system that was actually usable at the end of week three.</div>
              </div>
              <div className="dcard">
                <div className="decision">Deferred</div>
                <h4>What I explicitly left out</h4>
                <p>
                  No dark mode, no marketing-site components, no motion system — yet. Each was
                  defensible to skip because the token architecture leaves room to add them without
                  reworking anything underneath. Naming the cuts kept the timeline honest.
                </p>
                <div className="tradeoff"><b>Traded:</b> breadth now, for a foundation that absorbs it later.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Building the system ── */}
        <section>
          <div className="wrap">
            <h2>Building the system</h2>
            <p>
              I named the system <strong>Cosmic</strong>. I defined the foundational layers first — each
              one following the same principle: fewer options, and an obvious answer for which one to
              use. If a developer or an agent has to guess, the system has failed.
            </p>
            <div className="foundation-list">
              <div className="foundation-chip">Typography<span>3 families · 37 styles</span></div>
              <div className="foundation-chip">Color<span>Base → role → usage tokens</span></div>
              <div className="foundation-chip">Spacing<span>Consistent layout scale</span></div>
              <div className="foundation-chip">Corner radius<span>Standardized across components</span></div>
              <div className="foundation-chip">Icons<span>Single governed set, 24px grid</span></div>
              <div className="foundation-chip">Components<span>Documented anatomy per component</span></div>
            </div>

            <h3>The foundations, documented</h3>
            <p>
              Each foundation isn&apos;t a Figma page nobody reads — it&apos;s a specced rule set. Type
              has a fixed family and scale, color has a defined role for every value, and every icon is
              drawn on the same keyline grid so 200+ of them feel like one set.
            </p>
            <div className="doc-row">
              <figure className="shot">
                <Image src="/one-design-system/foundation-type.svg" alt="Cosmic typography specimen" width={280} height={200} className="w-full h-auto" />
                <figcaption>Typography — one heading family, a fixed scale, and a single line-height rule.</figcaption>
              </figure>
              <figure className="shot">
                <Image src="/one-design-system/foundation-color.svg" alt="Cosmic brand color ramp" width={280} height={200} className="w-full h-auto" />
                <figcaption>Color — the Brand ramp, each step carrying an explicit role; no raw hex past the base layer.</figcaption>
              </figure>
              <figure className="shot">
                <Image src="/one-design-system/foundation-icons.svg" alt="Cosmic icon construction" width={280} height={200} className="w-full h-auto" />
                <figcaption>Icons — one keyline grid, 1.5 stroke, and rounded caps governing all 200+.</figcaption>
              </figure>
            </div>

            <h3>The token architecture</h3>
            <p>
              Every value in the system — color, type, spacing, elevation — resolves through the same
              three-layer chain: a <strong>base token</strong> holds the raw value, a{" "}
              <strong>role token</strong> gives it semantic meaning, and a <strong>usage token</strong>{" "}
              binds it to a specific place in the product. Nothing is ever hardcoded past the base layer.
            </p>
            <figure className="shot">
              <Image src="/one-design-system/foundation-tokens.svg" alt="Token architecture: Base, Roles and Usage layers with a worked resolution example" width={860} height={520} className="w-full h-auto" />
              <figcaption>
                The three layers, plus a worked example — the real <code>left-nav-lv2-icon-selected</code> usage
                token resolving through role and base to a single value.
              </figcaption>
            </figure>

            <div className="callout">
              <p><strong>Before:</strong> a handful of color tokens, propped up by hardcoded hex values wherever they fell short.</p>
              <p><strong>After:</strong> a governed color system organised into base values, semantic roles, and usage tokens — every one traceable back to a single source of truth.</p>
            </div>

            <p>
              That structure isn&apos;t just a diagram — it&apos;s how the variables are organised in the
              file. Color is split into neutral, base, role, and usage collections, with parallel
              collections for typography, dimensions, elevation, and charts.
            </p>
            <figure className="shot">
              <div className="frame">
                <Image src="/one-design-system/figma-variables.png" alt="Figma variables panel showing token collections" width={1288} height={800} className="w-full h-auto" />
              </div>
              <figcaption>The same model in the file: every usage token points at a semantic role — never a raw value.</figcaption>
            </figure>
          </div>
        </section>

        {/* ── Themes ── */}
        <section>
          <div className="wrap">
            <h2>One system, many brands</h2>
            <p className="lead">
              The three-layer model isn&apos;t drift-proofing for its own sake — it&apos;s what lets one
              system carry many brands.
            </p>
            <p>
              Color is organised into a small set of roles: a <strong>primary</strong> for identity and
              key actions, a <strong>secondary</strong> for accent and emphasis, and a{" "}
              <strong>neutral</strong> range for surfaces and text. Components reference only these
              roles, never raw values — so re-skinning for a different client is a base-palette swap, not
              a rebuild. Change the values behind the roles and every component re-skins at once.
              That&apos;s what lets the system scale from an in-house tool into a white-label foundation,
              shaped to each client we work with.
            </p>
            <figure className="shot">
              <Image src="/one-design-system/foundation-themes.svg" alt="One system, many brands: the same components re-skinned by swapping the base palette" width={860} height={480} className="w-full h-auto" />
              <figcaption>Same components, same roles — only the base palette changes. That&apos;s the whole mechanism behind white-labelling the product per client.</figcaption>
            </figure>
          </div>
        </section>

        {/* ── Agent spec ── */}
        <section>
          <div className="wrap">
            <h2>Specced for agents, not just documented for humans</h2>
            <p className="lead">
              This is the part of the work I&apos;m proudest of. Every component ships with a structured
              JSON spec — its props, variants, states, and the tokens it consumes — alongside the
              human-readable documentation.
            </p>
            <p>
              An agent generating UI doesn&apos;t need to interpret a style guide or infer intent from a
              screenshot. It reads the spec and generates on-spec markup directly. The same source of
              truth that documents a component for a developer is what an agent uses to build with it
              correctly.
            </p>
            <pre><code>{buttonSpec}</code></pre>
            <p className="note">
              Reconstructed here from the component&apos;s documented spec to show the structure.
            </p>

            <h3>Documenting for scale</h3>
            <p>
              The real work here was process, not page-making. Every component is documented to one fixed
              template — preview, anatomy, variants, states, sizes, behavior, do&apos;s and don&apos;ts,
              and accessibility notes — so nothing ships half-specified, and a person and an agent read
              the exact same source.
            </p>
            <figure className="shot">
              <Image src="/one-design-system/foundation-doc-shape.svg" alt="One documentation template applied to every component: preview, anatomy, variants, states, sizes, behavior, do's and don'ts, accessibility" width={860} height={480} className="w-full h-auto" />
              <figcaption>One template, applied to every component — the same shape a person reads and an agent parses.</figcaption>
            </figure>
            <div className="stat-block">
              <p>
                Every component — 24 in total — follows the same documentation shape: preview, anatomy,
                variants, states, sizes, behavior, do&apos;s and don&apos;ts, and accessibility notes. The
                same shape a person or an agent can parse identically.
              </p>
              <div className="stat-big">24 COMPONENTS</div>
            </div>
          </div>
        </section>

        {/* ── System in context ── */}
        <section>
          <div className="wrap">
            <h2>The system in context</h2>
            <p>
              The clearest test of a system is a real screen built entirely from it. A production surface
              — the Exercises table — assembled from Cosmic components and tokens, with nothing hardcoded
              on the page.
            </p>
            <p className="note" style={{ marginTop: 22 }}>Components on this screen</p>
            <div className="comp-tags">
              <span>Left nav</span><span>Top bar</span><span>Tabs</span><span>Data table</span><span>Checkbox</span><span>Status pill</span><span>Button</span><span>Kebab menu</span><span>Filter panel</span><span>Pagination</span>
            </div>
          </div>
        </section>

        {/* ── Accessibility ── */}
        <section>
          <div className="wrap">
            <h2>Accessibility, checked per component</h2>
            <p>
              The last week of the three wasn&apos;t just documentation — it was stress-testing. Every
              component&apos;s spec includes explicit accessibility rules, not general guidance. For
              Button, that means:
            </p>
            <div className="stat-grid">
              <div className="stat-card">
                <div className="tl-title" style={{ fontSize: "13.5px", color: "var(--brand)", marginBottom: 8 }}>Color contrast</div>
                <div className="stat-label">Primary/secondary: min 4.5:1 (AA). Disabled state is intentionally reduced — color is never the sole state indicator.</div>
              </div>
              <div className="stat-card">
                <div className="tl-title" style={{ fontSize: "13.5px", color: "var(--brand)", marginBottom: 8 }}>Keyboard nav</div>
                <div className="stat-label">Focusable via Tab, activated via Enter or Space. Visible focus ring required — never suppress the outline.</div>
              </div>
              <div className="stat-card">
                <div className="tl-title" style={{ fontSize: "13.5px", color: "var(--brand)", marginBottom: 8 }}>Touch target</div>
                <div className="stat-label">44×44px minimum across all sizes by default. The 32px compact size uses invisible hit-area padding to still meet it.</div>
              </div>
              <div className="stat-card">
                <div className="tl-title" style={{ fontSize: "13.5px", color: "var(--brand)", marginBottom: 8 }}>Screen reader</div>
                <div className="stat-label">Icon-only buttons require an aria-label. Loading state announces via aria-live=&quot;polite&quot; without disabling keyboard access.</div>
              </div>
              <div className="stat-card">
                <div className="tl-title" style={{ fontSize: "13.5px", color: "var(--brand)", marginBottom: 8 }}>Disabled state</div>
                <div className="stat-label">aria-disabled=&quot;true&quot; keeps the button keyboard-reachable — the native disabled attribute is avoided in interactive contexts.</div>
              </div>
              <div className="stat-card" style={{ display: "flex", alignItems: "center" }}>
                <div className="stat-label">Every component carries its own version of this table — accessibility isn&apos;t a checklist run once at the end, it&apos;s part of the spec itself.</div>
              </div>
            </div>
            <p style={{ marginTop: 24 }}>
              It starts at the foundation. Color selection itself is governed by principles — accessibility
              first, functional hierarchy, consistency across surfaces — so contrast and legibility
              aren&apos;t retrofitted per screen, they&apos;re decided once at the token layer.
            </p>
          </div>
        </section>

        {/* ── Governance ── */}
        <section>
          <div className="wrap">
            <h2>Getting it adopted — and keeping it alive</h2>
            <p className="lead">
              A design system that nobody uses is just a folder. The harder half of this work wasn&apos;t
              building the system — it was making it the path of least resistance for a team already
              moving fast.
            </p>
            <h3>Buy-in</h3>
            <p>
              The AI-coding push was the wedge. Engineering leadership already felt the pain of reviewing
              a rising volume of AI-generated PRs, so I framed the system as the thing that lets them move{" "}
              <em>faster</em> with less review — not a design gate slowing them down. I partnered directly
              with engineering leadership to make sure the spec format fit how their assistants and
              developers actually consumed it, rather than handing over docs and hoping.
            </p>
            <h3>Ownership &amp; contribution</h3>
            <p>Consistency only holds if there&apos;s a clear answer to &ldquo;what happens when someone needs something the system doesn&apos;t have.&rdquo; The model I set up:</p>
            <ul className="prose">
              <li><strong>One owner for the source of truth.</strong> Changes to tokens and specs route through a single reviewed path so the system can&apos;t quietly fork.</li>
              <li><strong>A request flow for new components.</strong> When a team hits a gap, they propose against the same spec shape — new work enters the system on-spec instead of as another one-off.</li>
              <li><strong>Versioned, not frozen.</strong> The system is meant to grow; the structure is what stays fixed, not the contents.</li>
            </ul>
            <h3>Rollout</h3>
            <p>
              I rolled out to the highest-traffic surfaces first rather than attempting a big-bang cutover
              — proving the system on the screens most people touch, then widening.
            </p>
          </div>
        </section>

        {/* ── Extra mile ── */}
        <section>
          <div className="wrap">
            <h2>Going further</h2>
            <p>
              While building the core system, I also redesigned the left navigation, refreshed the icon
              set, and updated the illustration style. None of this was strictly in scope, but it was
              cheap to fix while I was already inside those parts of the product, and it removed friction
              users had been living with for a while.
            </p>
            <p>
              The nav rework is where the usage-token layer earns its keep — every state of every nav
              level resolves to an explicit token, so &ldquo;selected,&rdquo; &ldquo;hovered,&rdquo; and
              &ldquo;default&rdquo; never drift into inconsistent shades by accident:
            </p>
            <table className="tokentable">
              <thead>
                <tr><th>Usage token</th><th>Resolves to</th></tr>
              </thead>
              <tbody>
                <tr><td>left-nav-section-bg</td><td><span className="swatch"><span className="dot" style={{ background: "#4C1D95" }} />Brand / dark-800</span></td></tr>
                <tr><td>left-nav-lv1-icon-default</td><td><span className="swatch"><span className="dot" style={{ background: "#c7b6f0" }} />Brand / light-400</span></td></tr>
                <tr><td>left-nav-lv1-icon-selected</td><td><span className="swatch"><span className="dot" style={{ background: "#1a1a1a" }} />Neutral / dark-800</span></td></tr>
                <tr><td>left-nav-lv2-icon-default</td><td><span className="swatch"><span className="dot" style={{ background: "#9a94a3" }} />Neutral / light-500</span></td></tr>
                <tr><td>left-nav-lv2-icon-selected</td><td><span className="swatch"><span className="dot" style={{ background: "#4C1D95" }} />Brand / dark-800</span></td></tr>
                <tr><td>left-nav-lv2-selected-bg</td><td><span className="swatch"><span className="dot" style={{ background: "#f3eefc", borderColor: "#ddd" }} />Brand / light-100</span></td></tr>
              </tbody>
            </table>
            <p className="note">Every level and state of the left nav resolves to its own usage token — one lookup each.</p>
          </div>
        </section>

        {/* ── Results ── */}
        <section>
          <div className="wrap">
            <h2>Results &amp; how I&apos;m measuring them</h2>
            <p className="lead">
              The rollout is ongoing, so I&apos;m treating early movement as signal, not proof. What
              I&apos;m most deliberate about is <em>how</em> success gets measured — each metric ties back
              to a goal I set at the start.
            </p>
            <table className="tokentable">
              <thead>
                <tr><th>What I&apos;m measuring</th><th>Why it matters</th><th>How it&apos;s captured</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Component adoption</strong></td>
                  <td>% of new screens built from system components vs. one-offs</td>
                  <td>Component-usage lint / codebase scan per release</td>
                </tr>
                <tr>
                  <td><strong>Token coverage</strong></td>
                  <td>% of styling from tokens vs. hardcoded hex</td>
                  <td>Static scan for raw hex/px in the codebase</td>
                </tr>
                <tr>
                  <td><strong>Drift</strong></td>
                  <td>Net-new one-off components created per sprint (trending to zero)</td>
                  <td>Tracked against the component request flow</td>
                </tr>
                <tr>
                  <td><strong>Design-review load</strong></td>
                  <td>Review rounds per UI feature</td>
                  <td>PR review data / design QA tickets</td>
                </tr>
                <tr>
                  <td><strong>Agent spec-pass rate</strong></td>
                  <td>% of agent-generated components passing spec-lint first try</td>
                  <td>Spec-lint on AI-generated PRs</td>
                </tr>
              </tbody>
            </table>
            <p>
              Early, directional signals so far: component reuse is up, drift has slowed, and the team
              reports UI features coming together faster with the system in place. I&apos;m holding these
              loosely until the numbers above are instrumented — which is exactly the discipline I&apos;d
              bring to measuring it properly.
            </p>
          </div>
        </section>

        {/* ── Reflection ── */}
        <section>
          <div className="wrap">
            <h2>What I&apos;d do differently</h2>
            <ul className="prose">
              <li><strong>Baseline first.</strong> The biggest gap in this project is that I started building before capturing hard &ldquo;before&rdquo; numbers. The system&apos;s value is real, but harder to prove without the day-zero snapshot. Next time, I instrument before I build.</li>
              <li><strong>Bring engineering into the spec schema earlier.</strong> The agent-readable spec was strongest where I&apos;d pressure-tested the format against how assistants actually consume it. Doing that from day one — not at documentation stage — would have tightened it further.</li>
              <li><strong>Treat governance as a launch feature, not a follow-up.</strong> A system is only as consistent as its contribution model. I&apos;d stand up the request-and-review flow in parallel with the components, not after.</li>
            </ul>
          </div>
        </section>

        {/* ── What's next ── */}
        <section>
          <div className="wrap">
            <div className="whatsnext">
              <h2>What&apos;s next</h2>
              <p>
                I&apos;m currently building a generative UI composer on top of this system — a tool that
                lets agents assemble interfaces directly from the component specs, rather than generating
                UI code from scratch each time. The design system was the foundation. This is what it was
                built to support.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* ── Footer nav ── */}
      <section className="px-[80px] py-12 border-t border-gray-200">
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
