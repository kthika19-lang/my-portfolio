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
    subtitle: "Scalable Design System",
    description: "A full fledged white label design system that scales with token-based architecture and is LLM compatible.",
    scope: "Design Systems, White Label",
    duration: "6–8 months",
    year: "2024",
    role: "Design Systems Designer",
    image: "/projects/one-design-system.png",
    imageBg: "#eef1f8",
    overview: "ONE is a comprehensive white-label design system built to scale across brands and channels. Designed for both MFE developers and UX/UI designers, it delivers a token-based component library with full documentation — enabling consistent product development across the PAYTV stack.",
    challenge: "Building a design system that could be white-labelled across multiple brands while remaining LLM-compatible and developer-ready. The system needed to serve both designers through a UI Kit and engineers through ready-made web components, all anchored by a shared token architecture.",
    approach: [
      "Established a token-based foundation covering colour, typography, and spacing across all brand variants",
      "Built a library of 300+ icons and 56+ components with full variant and state coverage",
      "Created detailed documentation covering anatomy, do's and don'ts, and icon mapping per component",
      "Set up Figma-to-code sync via Storybook with Jira-integrated handoff for engineering",
      "Designed for LLM compatibility with consistent naming conventions and structured component metadata",
    ],
    outcome: "Delivered a fully documented white-label design system adopted across brands and channels. Token-based theming enabled rapid multi-brand rollouts, and LLM-compatible structure future-proofed the system for AI-driven workflows.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
