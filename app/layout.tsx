import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kiruthika R — Product Designer",
  description: "Product Designer with 5+ years building SaaS and fintech products at scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-white text-black`}>

        {/* NAV */}
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link href="/" className="text-xs font-bold tracking-widest uppercase">
            Design Portfolio
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/about" className="text-xs hover:underline">About</Link>
            <Link href="/contact" className="text-xs hover:underline">Contact</Link>
            <span className="text-gray-300">|</span>
            <a
              href="https://www.linkedin.com/in/kiruthika-r-1801/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:underline"
            >
              in
            </a>
          </div>
        </nav>

        {/* PAGE CONTENT SLOTS IN HERE */}
        {children}

        {/* FOOTER */}
        <footer className="bg-black text-white px-6 py-4 flex items-center justify-between gap-6 overflow-hidden">
          <Link
            href="/"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border border-white/40 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-colors"
          >
            ← Back to Projects
          </Link>
          <div className="overflow-hidden whitespace-nowrap flex-1">
            <span className="text-xs tracking-widest uppercase animate-marquee inline-block">
              PORTFOLIO+++ &nbsp; PORTFOLIO+++ &nbsp; PORTFOLIO+++ &nbsp; PORTFOLIO+++ &nbsp; PORTFOLIO+++ &nbsp; PORTFOLIO+++ &nbsp;
            </span>
          </div>
          <div className="text-right text-xs shrink-0">
            <a href="mailto:kthika.19@gmail.com" className="block text-gray-300">kthika.19@gmail.com</a>
            <a
              href="https://docs.google.com/document/d/1v6Hn2Lttu7qxJDWac0oWtK6jmubaoaReg21g309MY9Y/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View Resume
            </a>
          </div>
        </footer>

      </body>
    </html>
  );
}