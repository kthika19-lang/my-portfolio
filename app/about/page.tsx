import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Kiruthika R",
  description: "Product Designer and Architect passionate about transforming insights into visually compelling and user-intuitive designs.",
};

export default function About() {
  return (
    <main>
      {/* Hero title */}
      <section className="px-6 pt-16 pb-0 overflow-hidden">
        <h1 className="text-[clamp(64px,10vw,160px)] font-bold leading-none tracking-tight whitespace-nowrap">
          Everything Design
        </h1>
      </section>

      {/* Ticker */}
      <div className="bg-black text-white py-3 overflow-hidden whitespace-nowrap mt-6">
        <span className="text-xs tracking-widest uppercase animate-marquee inline-block">
          Portfolio+++ &nbsp; UI and UX, Product Design, Design Systems, Case Studies, User Research +++ &nbsp; Portfolio+++ &nbsp; UI and UX, Product Design, Design Systems, Case Studies, User Research +++
        </span>
      </div>

      {/* Hello there */}
      <section className="px-6 pt-16 pb-4">
        <h2 className="text-[clamp(48px,8vw,96px)] font-bold uppercase leading-none tracking-tight">
          👋 Hello There!
        </h2>
      </section>

      {/* Bio */}
      <section className="px-6 py-16 border-b border-gray-200">
        <div className="flex gap-12 items-start max-w-5xl">
          {/* Photo */}
          <div className="shrink-0">
            <div className="w-[280px] h-[280px] rounded-full overflow-hidden relative">
              <Image
                src="/kiruthika.jpg"
                alt="Kiruthika"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-10 pt-2">
            <div>
              <div className="w-24 h-0.5 bg-black mb-1" />
              <p className="text-sm tracking-widest uppercase font-bold">
                Kiruthika
                <span className="font-normal normal-case tracking-normal text-gray-500">, Product Designer and Architect</span>
              </p>
            </div>

            <p className="text-sm leading-relaxed text-gray-700 max-w-lg">
              Let me introduce myself, I&apos;m a passionate designer who loves transforming insights into visually compelling and user-intuitive designs. And welcome, to my capsule with a few of my work that I am proud of.
            </p>

            {/* Skills / tags */}
            <div className="flex flex-wrap gap-2">
              {["Product Design", "UX Research", "Design Systems", "Fintech", "SaaS", "Prototyping", "UX Writing"].map((tag) => (
                <span key={tag} className="text-xs border border-black px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience highlights */}
      <section className="px-6 py-16 border-b border-gray-200">
        <h3 className="text-xs font-bold tracking-widest uppercase mb-8">Experience</h3>
        <div className="grid grid-cols-2 gap-0 border border-gray-200">
          {[
            { role: "Product Designer", company: "Neeyamo", period: "2022 – Present", desc: "End-to-end design for global B2B HRMS platform. Discoveries, user interviews, micro-interactions." },
            { role: "UX Designer", company: "Fintech SaaS", period: "2021 – 2022", desc: "Designed tax and compliance flows supporting 2,500+ companies and 350,000+ employees." },
            { role: "UI / UX Designer", company: "WhatsApp SIM", period: "2020 – 2021", desc: "White label design system for millions of users across platforms. Full handover." },
            { role: "Creative Designer", company: "Moderne", period: "2019 – 2020", desc: "Brand and digital design for architecture and interior design studio." },
          ].map((exp, i) => (
            <div key={i} className={`p-6 border-gray-200 ${i < 2 ? "border-b" : ""} ${i % 2 === 0 ? "border-r" : ""}`}>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{exp.period}</p>
              <p className="text-sm font-semibold mb-0.5">{exp.role}</p>
              <p className="text-xs text-gray-500 mb-2">{exp.company}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Want to work together?</p>
          <a
            href="mailto:kthika.19@gmail.com"
            className="text-sm border border-black px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
