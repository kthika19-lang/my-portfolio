import Link from "next/link";

const projects = [
  { title: "Neeyamo — B2B HRMS Platform", description: "Neeyamo, a leading provider of HR Technology, HR Operations, and HR Process Consulting services, committed to help build stronger businesses.", scope: "Discoveries, Conceptual Thinking, User Interviews, Micro-Interactions, Prototyping", duration: "3 months", slug: "neeyamo" },
  { title: "WhatsApp SIM — White Label Design", description: "To modernise and launch a range of new offerings and services to over millions of users across platforms, through the White Label approach.", scope: "UX Research, UI/UX Designer, Design Systems, UX Writing, Handover", duration: "18 months", slug: "whatsapp-sim" },
  { title: "Tax and Compliance — Fintech SaaS", description: "A design solution that positively impacted ESOPs and equity grants, supporting over 2,500 companies and 350,000 employees, collectively holding more than USD 60 billion in equity value.", scope: "Research, Iterative Designs, Metrics and Analytics", duration: "8 weeks", slug: "tax-compliance" },
  { title: "Mahindra Rise — Reimagining the brand", description: "Facelift of the existing homepage rewriting what Rise stands for and highlighting the missions. Interactive space that lets users consume, inspire and contribute through true stories.", scope: "UI Design, Visual Design, Micro Interactions", duration: "2 weeks", slug: "mahindra-rise" },
];

const articles = [
  { tag: "Case Study", title: "A better streaming experience through UX", meta: "Read 3 Min · May 28, 2021", href: "#", cta: "Read" },
  { tag: "Case Study", title: "Quick fixes to long-existing Millennial/Gen-Z problems", meta: "Read 5 Min · May 9, 2021", href: "#", cta: "Read" },
  { tag: "Case Study", title: "India's first Thrift App — User Research, UX and UI Design", meta: "Read 5 Min · May 9, 2021", href: "#", cta: "Read" },
  { tag: "Creative Designer", title: "Moderne — Architecture and Interior Design", meta: null, href: "https://modernedesignstudio.com", cta: "Visit" },
];

export default function Home() {
  return (
    <main>

      <section className="grid grid-cols-2 gap-12 px-6 py-16 border-b border-gray-200 min-h-[40vh] items-end">
        <h1 className="text-8xl font-bold uppercase leading-none tracking-tight">Hello<br />There!</h1>
        <div className="pb-1">
          <p className="text-sm mb-3"><span className="font-semibold tracking-widest uppercase">Kiruthika</span> — Product Designer and Architect</p>
          <p className="text-gray-500 text-sm leading-relaxed">I am a Product Designer with experience building SaaS and fintech products at scale. I work end-to-end and am comfortable bridging design and engineering. I enjoy turning complex, high-impact problems into clear, intuitive experiences that deliver real business results.</p>
        </div>
      </section>

      <div className="bg-black text-white py-3 overflow-hidden whitespace-nowrap">
        <span className="text-xs tracking-widest uppercase animate-marquee inline-block">PORTFOLIO+++ UI and UX Product Design Design Systems Case Studies User Research UX Writing PORTFOLIO+++ UI and UX Product Design Design Systems Case Studies User Research UX Writing</span>
      </div>

      <section className="grid grid-cols-2">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="p-6 border-b border-r border-gray-200 hover:bg-gray-50 transition-colors">
            <div className="bg-gray-100 aspect-video mb-5" />
            <h2 className="text-sm font-semibold mb-2">{p.title}</h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">{p.description}</p>
            <p className="text-xs text-gray-400"><span className="text-black font-medium">Scope</span> {p.scope}</p>
            <p className="text-xs text-gray-400 mt-1"><span className="text-black font-medium">Duration</span> {p.duration}</p>
          </Link>
        ))}
      </section>

      <section className="px-6 py-12">
        <h2 className="text-xs font-bold tracking-widest uppercase mb-6">Articles and Personal Projects</h2>
        <div className="grid grid-cols-2 border border-gray-200">
          {articles.map((a, i) => (
            <div key={i} className={`flex items-start gap-4 p-5 border-gray-200 ${i < 2 ? "border-b" : ""} ${i % 2 === 0 ? "border-r" : ""}`}>
              <div className="bg-gray-100 w-20 h-16 shrink-0" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{a.tag}</p>
                <p className="text-sm font-medium mb-2">{a.title}</p>
                {a.meta && <p className="text-xs text-gray-400 mb-2">{a.meta}</p>}
                <a href={a.href} target="_blank" rel="noopener noreferrer" className="text-xs underline">{a.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}