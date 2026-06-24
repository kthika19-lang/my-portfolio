import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProject, projects } from "../data";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Kiruthika R`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main>
      {/* Back link */}
      <div className="px-6 py-4 border-b border-gray-200">
        <Link href="/" className="text-xs text-gray-400 hover:text-black transition-colors">
          ← Back to portfolio
        </Link>
      </div>

      {/* Header */}
      <section className="px-6 py-16 border-b border-gray-200">
        <div className="grid grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">{project.subtitle}</p>
            <h1 className="text-[clamp(48px,6vw,96px)] font-bold uppercase leading-none tracking-tight">
              {project.title}
            </h1>
          </div>
          <div className="flex flex-col gap-4 pb-1">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-400 uppercase tracking-widest">Scope</p>
              <p className="text-sm">{project.scope}</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Duration</p>
                <p className="text-sm font-medium">{project.duration}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Year</p>
                <p className="text-sm font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Role</p>
                <p className="text-sm font-medium">{project.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div
        className="relative w-full aspect-[16/7] overflow-hidden"
        style={{ background: project.imageBg }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Overview */}
      <section className="px-6 py-16 border-b border-gray-200">
        <div className="grid grid-cols-2 gap-12">
          <h2 className="text-xs font-bold tracking-widest uppercase pt-1">Overview</h2>
          <p className="text-sm leading-relaxed text-gray-700">{project.overview}</p>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 py-16 border-b border-gray-200 bg-gray-50">
        <div className="grid grid-cols-2 gap-12">
          <h2 className="text-xs font-bold tracking-widest uppercase pt-1">The Challenge</h2>
          <p className="text-sm leading-relaxed text-gray-700">{project.challenge}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 py-16 border-b border-gray-200">
        <div className="grid grid-cols-2 gap-12">
          <h2 className="text-xs font-bold tracking-widest uppercase pt-1">Approach</h2>
          <ul className="flex flex-col gap-4">
            {project.approach.map((step, i) => (
              <li key={i} className="flex gap-4 text-sm text-gray-700">
                <span className="text-xs text-gray-300 font-mono pt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcome */}
      <section className="px-6 py-16 border-b border-gray-200">
        <div className="grid grid-cols-2 gap-12">
          <h2 className="text-xs font-bold tracking-widest uppercase pt-1">Outcome</h2>
          <p className="text-sm leading-relaxed text-gray-700">{project.outcome}</p>
        </div>
      </section>

      {/* Next project + external link */}
      <section className="px-6 py-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xs border border-black px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors">
            ← All projects
          </Link>
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs border border-black px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Read case study ↗
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
