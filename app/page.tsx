import CosmicScene from "./CosmicScene";
import "./qapita.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Design System — Kiruthika R",
  description:
    "How I rebuilt Qapita's design system so designers could prototype faster with AI using the real components — and engineers, and AI agents writing code, could ship consistent UI without a review on every screen.",
};

const HEADER = `<header class="hero">
  <div class="hero-grid">
    <div class="hero-left">
      <div class="hero-rule"></div>
      <div class="hero-eyebrow">Cosmic Design System</div>
      <h1 class="hero-title">A Design System for Developers and Agents</h1>
    </div>
    <div class="hero-right">
      <div class="hero-label">Design Systems</div>
      <p class="hero-scope">Design Audit, Token Architecture, Design Foundation, Component Libraries, WCAG Compliance, Guideline &amp; Patterns, DS Dev Collaboration</p>
      <p class="hero-dek">How I rebuilt Qapita's design system so designers could prototype faster with AI using the real components — and engineers, and AI agents writing code, could ship consistent UI without a review on every screen.</p>
    </div>
  </div>
</header>`;

const BODY = `<section class="intro">
  <div class="intro-grid">
    <div class="intro-brand">Cosmic</div>
    <div class="intro-statement">
      <div class="intro-line"><em>for</em> “Designers, Product Owners, Developers and Agents”</div>
      <div class="intro-line"><em>who</em> “needs to design and build working prototypes with AI or Figma”</div>
      <div class="intro-line"><em>is the</em> “single source of truth”</div>
      <div class="intro-line"><em>which</em> “provides foundation and component library for designers (UI Kit), ready-made UI web components as code for developers, as well as guidelines, rules, and documentation for all.”</div>
    </div>
  </div>
</section>


<section id="context">
  <div class="wrap">
    <h2>Context</h2>
    <p class="lead">Qapita is an equity-management platform — cap tables, ESOP administration, and digital share issuance — used by founders, finance teams, and employees across India and Southeast Asia.</p>
    <p>The product's entire promise is a single, trustworthy source of truth for who owns what. That raises the stakes on interface consistency: when someone is approving an option exercise or reading their equity payslip, a screen that looks improvised reads as <em>"can I trust this number?"</em> Visual inconsistency isn't cosmetic here — it undercuts the core value proposition.</p>
    <p>By the time I took this on, the platform served 2,500+ companies and 350,000+ stakeholders holding over USD 60 billion in equity across India and Southeast Asia. It had grown fast, and its interface had grown with it — in every direction at once.</p>
  </div>
</section>
<section class="timeline2">
  <div class="tl2-inner">
    <h2 class="tl2-h">Timeline</h2>
    <div class="tl2-grid">
      <div class="tl2-step">
        <div class="tl2-top"><span class="tl2-dot">1</span><span class="tl2-line"></span></div>
        <div class="tl2-dur">2–3 days</div>
        <div class="tl2-title">Audit - FigJam</div>
        <div class="tl2-desc">Catalogued every icon, component, and color token already in use across the product.</div>
      </div>
      <div class="tl2-step">
        <div class="tl2-top"><span class="tl2-dot">2</span><span class="tl2-line"></span></div>
        <div class="tl2-dur">1.5 weeks</div>
        <div class="tl2-title">Build - Figma, Claude and VS Code</div>
        <div class="tl2-desc">Defined the token architecture, then built the foundation, core components, and icon set on top of it.</div>
      </div>
      <div class="tl2-step">
        <div class="tl2-top"><span class="tl2-dot">3</span><span class="tl2-line"></span></div>
        <div class="tl2-dur">1 week</div>
        <div class="tl2-title">Document &amp; QA - Storybook, Notion</div>
        <div class="tl2-desc">Wrote component specs, ran accessibility checks, and stress-tested edge cases before rollout.</div>
      </div>
    </div>
  </div>
</section>







<section id="audit">
  <div class="wrap">
    <div class="sec-rule"></div>
    <h2 class="sec-h">Audit</h2>
    <div class="audit2-row">
      <div class="audit2-text">
        <p>The existing system was React components layered on top of a mix of custom and open-source icon and UI libraries - built up over time, with no governing layer above it. Nobody owned consistency, so nothing stayed consistent. The audit put a number on the gap.</p>
        <p>From a foundation nobody owned to a governed system: from <em>“however it was built that day”</em> to one documented answer.</p>
      </div>
      <div class="audit2-cards">
        <div class="audit-card">
          <div class="audit-cat">Components</div>
          <div class="audit-after">24</div>
          <div class="audit-foot"><span class="audit-was">was ~12, undocumented</span><span class="audit-mult">2×</span></div>
        </div>
        <div class="audit-card">
          <div class="audit-cat">Icons</div>
          <div class="audit-after">200<span class="plus">+</span></div>
          <div class="audit-foot"><span class="audit-was">was ~50, mixed sources</span><span class="audit-mult">4×</span></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="token-arch">
  <div class="wrap">
    <div class="sec-rule"></div>
    <h2 class="sec-h">Token Architecture</h2>
    <div class="ta-cards">
      <div class="ta-card"><span class="ta-num">1</span><div class="ta-t">Base</div><div class="ta-sub">Primitives</div><div class="ta-cap">Raw values only</div></div>
      <span class="ta-arrow">→</span>
      <div class="ta-card"><span class="ta-num">2</span><div class="ta-t">Roles</div><div class="ta-sub">Semantics</div><div class="ta-cap">Defines intent and usage</div></div>
      <span class="ta-arrow">→</span>
      <div class="ta-card"><span class="ta-num">3</span><div class="ta-t">Usage</div><div class="ta-sub">Component tokens</div><div class="ta-cap">Maps tokens w/ components</div></div>
    </div>
    <div class="tk-panel">
      <div class="tk-left">
  <div class="tk-node"><div class="tk-lbl">VALUE</div><span class="tk-pill"><span class="tk-dot"></span><span>#633EA5</span></span></div>
  <div class="tk-arrow">↓</div>
  <div class="tk-node"><div class="tk-lbl">BASE TOKEN <span class="tk-sub">· Base</span></div><span class="tk-pill"><span class="tk-dot"></span><span>color.palette.brand.1.default</span></span></div>
  <div class="tk-arrow">↓</div>
  <div class="tk-node"><div class="tk-lbl">ALIAS TOKEN <span class="tk-sub">· Roles</span></div><span class="tk-pill"><span class="tk-dot"></span><span>color.ui.interaction.default</span></span></div>
  <div class="tk-arrow">↓</div>
  <div class="tk-node"><div class="tk-lbl">COMPONENT TOKEN <span class="tk-sub">· Usage</span></div><span class="tk-pill"><span class="tk-dot"></span><span>button.primary.background.default</span></span></div>
</div>
      <div class="tk-right">
  <div class="tk-row">
    <div class="tk-rowlbl"><div class="tk-h">VALUE</div><div class="tk-hsub">18 base tokens · 35 role tokens</div></div>
    <div class="tk-pairs"><div class="tk-pair"><span class="tk-gray"><span class="tt">Tt</span>Roboto</span><span class="tk-pill"><span class="tt">Tt</span><span>font.family.1</span></span></div><div class="tk-pair"><span class="tk-gray"><span class="tt">Tt</span>48px (3 rem)</span><span class="tk-pill"><span class="tt">Tt</span><span>font.size.7xl</span></span></div><div class="tk-pair"><span class="tk-gray"><span class="tt">Tt</span>bold</span><span class="tk-pill"><span class="tt">Tt</span><span>font.weight.bold</span></span></div></div>
  </div>
  <div class="tk-row">
    <div class="tk-rowlbl"><div class="tk-h">BASE TOKEN</div><div class="tk-hsub">Typography · Base</div></div>
    <div class="tk-pairs"><div class="tk-pair"><span class="tk-gray"><span class="tt">Tt</span>120%</span><span class="tk-pill"><span class="tt">Tt</span><span>font.lineHeight.snug</span></span></div><div class="tk-pair"><span class="tk-gray"><span class="tt">Tt</span>2,5% (0,025em)</span><span class="tk-pill"><span class="tt">Tt</span><span>font.letterSpacing.wide</span></span></div></div>
  </div>
  <div class="tk-row">
    <div class="tk-rowlbl"><div class="tk-h">ROLE TOKEN</div><div class="tk-hsub">Typography · Base</div></div>
    <div class="tk-pairs"><div class="tk-pair"><span class="tk-gray"><span class="tt">Tt</span>./. (with normal letters not necessary)</span><span class="tk-pill"><span class="tt">Tt</span><span>font.textcase.</span></span></div></div>
  </div>
  <div class="tk-foot">
    <div class="tk-footdiv"></div>
    <div class="tk-footrow"><span class="tk-h">TYPOGRAPHY TOKEN</span><span class="tk-arrowr">↓</span><span class="tk-outline"><span class="tt tt-o">Tt</span>typography.display.1</span></div>
  </div>
</div>
    </div>
  </div>
</section>
<section id="foundation2">
  <div class="wrap">
    <div class="sec-rule"></div>
    <h2 class="sec-h">Foundation</h2>
    <div class="fnd-grid">
      <div class="fnd-card">
        <img src="/one-design-system/foundation-color.png" alt="Color token scale, Brand/50 to Brand/950 with hex values">
        <div class="fnd-rule"></div>
        <div class="fnd-label">Color Token</div>
      </div>
      <div class="fnd-card">
        <img src="/one-design-system/foundation-typography.png" alt="Typography token scale, Roboto Slab weights and sizes">
        <div class="fnd-rule"></div>
        <div class="fnd-label">Typography Token</div>
      </div>
      <div class="fnd-card">
        <img src="/one-design-system/foundation-component.png" alt="Component typography tokens for buttons mapped to roles">
        <div class="fnd-rule"></div>
        <div class="fnd-label">Component Typography Token</div>
      </div>
    </div>
  </div>
</section>
<section id="icons2">
  <div class="wrap">
    <div class="ico-panel">
      <img class="ico-illus" src="/one-design-system/icons.png" alt="Refreshed icon library — receipt illustration on a grid of outline icons">
      <div class="ico-caption">
        <p class="ico-text">To identify gaps the existing icons assets were audited to identify specific icons in both, solid and outline variations, and a new and refreshed icon library was designed using Illustrator and Figma.</p>
        <div class="ico-count">~200 icons</div>
      </div>
    </div>
  </div>
</section>
<section id="components2">
  <div class="wrap">
    <div class="ico-panel">
      <img class="ico-illus" src="/one-design-system/components.png" alt="Component library — navigation, buttons, toggles and the component configuration panel">
      <div class="ico-caption">
        <p class="ico-text">Components were built as reusable blocks of our design system. Each component meets a specific interaction need, and has been specifically created to work together to create patterns.</p>
        <div class="ico-count">~24 components</div>
      </div>
    </div>
  </div>
</section>
<section id="patterns2">
  <div class="wrap">
    <div class="ico-panel">
      <img class="ico-illus" src="/one-design-system/patterns.png" alt="Design patterns — shell components composed into a multi-step flow and shell layout">
      <div class="ico-caption">
        <p class="ico-text">Patterns were designed in a way that they can be reused in different parts of the design journey. Based on the design requirements and refinements of a flow, compositions were created with the involvement of the designers and engineers along with product and brand teams.</p>
        <div class="ico-count">design patterns</div>
      </div>
    </div>
  </div>
</section>





<section id="themes">
  <div class="wrap">
    <h2>One system, many brands</h2>
    <p class="lead">The three-layer model isn't drift-proofing for its own sake — it's what lets one system carry many brands.</p>
    <p>Color is organised into a small set of roles: a <strong>primary</strong> for identity and key actions, a <strong>secondary</strong> for accent and emphasis, and a <strong>neutral</strong> range for surfaces and text. Components reference only these roles, never raw values — so re-skinning for a different client is a base-palette swap, not a rebuild. Change the values behind the roles and every component re-skins at once. That's what lets the system scale from an in-house tool into a white-label foundation, shaped to each client we work with.</p>

    <figure class="shot">
      <div style="width:100%"><svg viewBox="20 144 880 272" xmlns="http://www.w3.org/2000/svg" font-family="'Inter',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif">
  <defs>
    <linearGradient id="thHero" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#4C1D95"/>
      <stop offset="1" stop-color="#7C3AED"/>
    </linearGradient>
  </defs>


  <!-- ===== Theme A: Cosmic (default) ===== -->
  <g>
    <rect x="36" y="150" width="386" height="252" rx="14" fill="#faf9fc" stroke="#e7e3ee"/>
    <text x="56" y="180" font-size="11" font-weight="700" letter-spacing="0.8" fill="#4a4553">DEFAULT · IN-HOUSE</text>

    <!-- mini app -->
    <rect x="56" y="196" width="346" height="120" rx="10" fill="#ffffff" stroke="#e7e3ee"/>
    <rect x="56" y="196" width="40" height="120" rx="10" fill="#633EA5"/>
    <rect x="88" y="196" width="8" height="120" fill="#633EA5"/>
    <circle cx="76" cy="216" r="7" fill="#ffffff" opacity="0.9"/>
    <rect x="68" y="240" width="16" height="6" rx="3" fill="#ffffff" opacity="0.5"/>
    <rect x="68" y="256" width="16" height="6" rx="3" fill="#ffffff" opacity="0.5"/>
    <!-- content -->
    <rect x="116" y="214" width="150" height="9" rx="4" fill="#e7e3ee"/>
    <rect x="116" y="230" width="110" height="9" rx="4" fill="#eceaf1"/>
    <rect x="116" y="266" width="96" height="30" rx="7" fill="#633EA5"/>
    <text x="164" y="286" text-anchor="middle" font-size="12" font-weight="600" fill="#ffffff">Primary</text>
    <rect x="224" y="270" width="66" height="22" rx="11" fill="#FCD34D"/>
    <text x="257" y="285" text-anchor="middle" font-size="10.5" font-weight="700" fill="#5c4a00">Accent</text>

    <!-- role swatches -->
    <g>
      <rect x="56"  y="340" width="16" height="16" rx="4" fill="#633EA5"/>
      <text x="80" y="352" font-size="12" fill="#4a4553">Primary</text>
      <rect x="168" y="340" width="16" height="16" rx="4" fill="#FCD34D"/>
      <text x="192" y="352" font-size="12" fill="#4a4553">Secondary</text>
      <rect x="300" y="340" width="16" height="16" rx="4" fill="#141019"/>
      <text x="324" y="352" font-size="12" fill="#4a4553">Neutral</text>
    </g>
    <text x="56" y="382" font-size="11.5" fill="#7a7484">Purple identity, yellow accent, near-black neutral.</text>
  </g>

  <!-- ===== Theme B: white-label client (unnamed) ===== -->
  <g>
    <rect x="498" y="150" width="386" height="252" rx="14" fill="#f7f9fc" stroke="#e7e3ee"/>
    <text x="518" y="180" font-size="11" font-weight="700" letter-spacing="0.8" fill="#4a4553">WHITE-LABEL · CLIENT BRAND</text>

    <!-- mini app (identical layout) -->
    <rect x="518" y="196" width="346" height="120" rx="10" fill="#ffffff" stroke="#e7e3ee"/>
    <rect x="518" y="196" width="40" height="120" rx="10" fill="#1E4FB8"/>
    <rect x="550" y="196" width="8" height="120" fill="#1E4FB8"/>
    <circle cx="538" cy="216" r="7" fill="#ffffff" opacity="0.9"/>
    <rect x="530" y="240" width="16" height="6" rx="3" fill="#ffffff" opacity="0.5"/>
    <rect x="530" y="256" width="16" height="6" rx="3" fill="#ffffff" opacity="0.5"/>
    <!-- content -->
    <rect x="578" y="214" width="150" height="9" rx="4" fill="#e5e9f0"/>
    <rect x="578" y="230" width="110" height="9" rx="4" fill="#eef1f6"/>
    <rect x="578" y="266" width="96" height="30" rx="7" fill="#1E4FB8"/>
    <text x="626" y="286" text-anchor="middle" font-size="12" font-weight="600" fill="#ffffff">Primary</text>
    <rect x="686" y="270" width="66" height="22" rx="11" fill="#0D9488"/>
    <text x="719" y="285" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">Accent</text>

    <!-- role swatches -->
    <g>
      <rect x="518" y="340" width="16" height="16" rx="4" fill="#1E4FB8"/>
      <text x="542" y="352" font-size="12" fill="#4a4553">Primary</text>
      <rect x="630" y="340" width="16" height="16" rx="4" fill="#0D9488"/>
      <text x="654" y="352" font-size="12" fill="#4a4553">Secondary</text>
      <rect x="762" y="340" width="16" height="16" rx="4" fill="#334155"/>
      <text x="786" y="352" font-size="12" fill="#4a4553">Neutral</text>
    </g>
    <text x="518" y="382" font-size="11.5" fill="#7a7484">High-contrast blue &amp; teal for a financial client.</text>
  </g>

  <line x1="36" y1="424" x2="884" y2="424" stroke="#e7e3ee"/>
</svg>

</div>
      <figcaption>Same components, same roles — only the base palette changes. That's the whole mechanism behind white-labelling the product per client.</figcaption>
    </figure>
  </div>
</section>
<section id="metrics">
  <div class="wrap">
    <div class="sec-rule"></div>
    <h2 class="sec-h">Metrics</h2>
    <p class="lead">The rollout is ongoing, so I'm treating early movement as signal, not proof. What I'm most deliberate about is <em>how</em> success gets measured, each metric ties back to a goal I set at the start.</p>
    <table class="tokentable"><thead><tr><th>What I'm measuring</th><th>Why it matters</th><th>How it's captured</th></tr></thead><tbody>
    <tr><td><strong>Component adoption</strong></td><td>% of new screens built from system components vs. one-offs</td><td>Component-usage lint / codebase scan per release</td></tr>
    <tr><td><strong>Token coverage</strong></td><td>% of styling from tokens vs. hardcoded hex</td><td>Static scan for raw hex/px in the codebase</td></tr>
    <tr><td><strong>Drift</strong></td><td>Net-new one-off components created per sprint (trending to zero)</td><td>Tracked against the component request flow</td></tr>
    <tr><td><strong>Design-review load</strong></td><td>Review rounds per UI feature</td><td>PR review data / design QA tickets</td></tr>
    <tr><td><strong>Agent spec-pass rate</strong></td><td>% of agent-generated components passing spec-lint first try</td><td>Spec-lint on AI-generated PRs</td></tr>
    </tbody></table>
    <p>Early, directional signals so far: component reuse is up, drift has slowed, and the team reports UI features coming together faster with the system in place. I'm holding these loosely until the numbers above are instrumented.</p>
  </div>
</section>
<section id="challenges">
  <div class="wrap">
    <div class="sec-rule"></div>
    <h2 class="sec-h">Challenges and Learnings</h2>
    <div class="chal-grid chal-3">
      <div class="chal-item">
        <span class="chal-label">Consistency</span>
        <p class="chal-desc">Getting consistency across product lines meant rules couldn't live in tribal knowledge or Figma comments — they had to be explicit enough for a designer, a developer, and an AI agent to read the same intent without translation. Forums and pattern libraries worked as the human-facing layer, but the real forcing function was writing naming and token rules precise enough that a non-human collaborator could parse them too.</p>
      </div>
      <div class="chal-item">
        <span class="chal-label">Idea to Prototype made easy</span>
        <p class="chal-desc">Speed wasn't the goal until the system was mature enough to expose it as a gap: teams were rebuilding primitives instead of composing them. Once the library was structured and swappable, prototyping time collapsed — and that same structure is what let an agent assemble a feature from components without needing a human to hand-hold the logic.</p>
      </div>
      <div class="chal-item">
        <span class="chal-label">Reusability and modularity</span>
        <p class="chal-desc">Gaps kept surfacing at the handoff from brainstorm to production — components that looked reusable in Figma diverged the moment engineering touched them. The fix was continuous embedding, not a one-time sync: keeping designers, developers, and any AI-driven step aligned to the same source components throughout, so nothing needed re-interpretation downstream.</p>
      </div>
    </div>
  </div>
</section>`;

export default function OneDesignSystemPage() {
  return (
    <main className="cds">
      <div className="canvas-wrap">
        <div dangerouslySetInnerHTML={{ __html: HEADER }} />
        <div className="hero-visual"><CosmicScene interactive /></div>
        <div dangerouslySetInnerHTML={{ __html: BODY }} />
      </div>
    </main>
  );
}
