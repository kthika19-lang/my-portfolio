export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  scope: string;
  duration: string;
  year: string;
  role: string;
  overview: string;
  challenge: string;
  approach: string[];
  outcome: string;
  externalLink?: string;
  image: string;
  imageBg: string;
};

export const projects: Project[] = [
  {
    slug: "neeyamo",
    title: "Neeyamo",
    subtitle: "B2B HRMS Platform",
    description: "Neeyamo, a leading provider of HR Technology, HR Operations, and HR Process Consulting services, committed to help build stronger businesses.",
    scope: "Discoveries, Conceptual Thinking, User Interviews, Micro-Interactions, Prototyping",
    duration: "3 months",
    year: "2022",
    role: "Product Designer",
    image: "/projects/neeyamo.png",
    imageBg: "#f0f4f8",
    overview: "Neeyamo provides HR technology and services to global enterprises. The challenge was to rethink core HRMS workflows to reduce friction for HR administrators managing payroll and compliance across multiple countries.",
    challenge: "HR administrators were dealing with fragmented workflows across multiple modules, leading to high error rates and extended time-on-task. The platform needed to feel cohesive, scalable, and intuitive for power users managing global HR operations.",
    approach: [
      "Discovery workshops with HR administrators to map current pain points",
      "Competitive analysis of leading HRMS platforms",
      "Journey mapping and user interviews across 3 enterprise clients",
      "Iterative prototyping with bi-weekly usability testing",
      "Micro-interaction design for key action states and feedback loops",
    ],
    outcome: "Redesigned core modules led to a 30% reduction in task completion time. The new design system was adopted across 5 product teams and established a consistent visual language for the platform.",
  },
  {
    slug: "whatsapp-sim",
    title: "WhatsApp SIM",
    subtitle: "White Label Design",
    description: "To modernise and launch a range of new offerings and services to over millions of users across platforms, through the White Label approach.",
    scope: "UX Research, UI/UX Designer, Design Systems, UX Writing, Handover",
    duration: "18 months",
    year: "2021",
    role: "UX Designer",
    image: "/projects/whatsapp-sim.png",
    imageBg: "#e8f5e9",
    overview: "WhatsApp SIM aimed to modernise its product suite and launch new offerings to millions of users via a white-label approach — enabling partner brands to deliver tailored experiences at scale.",
    challenge: "Designing a flexible design system that could be white-labelled across different brands while maintaining usability and consistency. UX writing had to work across cultural and linguistic contexts.",
    approach: [
      "Audit of existing UI patterns and identification of components to standardise",
      "Design system architecture: tokens, primitives, and composable components",
      "UX writing guidelines adaptable to different brand voices",
      "Accessibility review and WCAG compliance check",
      "Developer handover documentation and component spec sheets",
    ],
    outcome: "White label system launched to millions of users. Partner onboarding time reduced by 40%. Design system adopted by 3 partner brands in the first quarter post-launch.",
  },
  {
    slug: "tax-compliance",
    title: "Tax and Compliance",
    subtitle: "Fintech SaaS Product",
    description: "A design solution that positively impacted ESOPs and equity grants, supporting over 2,500 companies and 350,000 employees, collectively holding more than USD 60 billion in equity value.",
    scope: "Research, Iterative Designs, Metrics and Analytics",
    duration: "8 weeks",
    year: "2021",
    role: "UX Designer",
    image: "/projects/tax-compliance.png",
    imageBg: "#f3f0ff",
    overview: "A fintech SaaS product helping companies manage employee stock ownership plans (ESOPs) and equity grants. The product needed to make complex financial concepts accessible to both HR admins and employees.",
    challenge: "Equity management involves deeply complex financial and legal information. Employees often don't understand their equity position, leading to missed financial opportunities and high support load.",
    approach: [
      "Stakeholder interviews with legal, finance, and HR teams",
      "Employee surveys to understand comprehension gaps",
      "Iterative design and A/B testing of equity summary views",
      "Metrics instrumentation to track feature adoption and error rates",
      "Collaboration with engineering on data visualisation components",
    ],
    outcome: "Redesigned equity dashboard adopted by 2,500+ companies. Employee self-service actions increased by 45%, reducing support tickets significantly. Platform collectively holds USD 60B+ in equity value.",
    externalLink: "https://medium.com/design-bootcamp/the-joy-and-chaos-of-iterative-design-948b2a64f816",
  },
  {
    slug: "one-design-system",
    title: "One Design System",
    subtitle: "Design System for Developers & Agents",
    description: "How I rebuilt Qapita's design system so engineers — and the AI agents writing their code — could ship consistent UI without a designer reviewing every screen.",
    scope: "Design Systems, Tokens, Component Specs, Accessibility, Agent-Readable Docs",
    duration: "3 weeks",
    year: "2026",
    role: "Design Lead",
    image: "/projects/one-design-system.png",
    imageBg: "#0c0812",
    overview: "Cosmic is the design system I built for Qapita — an equity-management platform for cap tables, ESOP administration, and share issuance. It was built to be read by both developers and the AI coding assistants generating their UI, anchored by a three-layer token architecture.",
    challenge: "The product had grown faster than its design foundation. With engineering leaning on AI coding assistants, inconsistency wasn't just persisting — it was multiplying, as dozens of AI-generated components made off-spec choices faster than anyone could review them.",
    approach: [
      "Audited every icon, component, and color token already in use across the product",
      "Defined a three-layer token architecture: base → role → usage, so nothing is hardcoded past the base layer",
      "Built the Cosmic foundation — 200+ icons, 24 documented components, and a governed color system with nothing hardcoded past the base layer",
      "Shipped every component with a structured JSON spec so agents generate on-spec markup without a designer in the loop",
      "Ran per-component accessibility checks and stood up an ownership + contribution model for adoption",
    ],
    outcome: "A governed, agent-readable design system rolled out to the highest-traffic surfaces first. The three-layer tokens make white-label re-skinning a base-palette swap, and the JSON specs let AI-generated UI pass spec-lint — the foundation for a generative UI composer now in progress.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
