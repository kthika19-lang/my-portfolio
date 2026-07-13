"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const PROMOS = [
  { src: "/neeyamo/promo-1.png", alt: "Let's Work Together" },
  { src: "/neeyamo/promo-2.png", alt: "Let's Understand Payroll Management" },
  { src: "/neeyamo/promo-3.png", alt: "Physical Event" },
];

const WORKFLOWS = [
  { n: "01", t: "Discovery", d: "Understand the business, users and the problem space." },
  { n: "02", t: "UI Audit", d: "Review the current site for gaps, debt and inconsistencies." },
  { n: "03", t: "Design Trends Research", d: "Explore current patterns, references and directions." },
  { n: "04", t: "Concepts", d: "Shape insights into multiple design directions." },
  { n: "05", t: "Final UIs", d: "Refine and hand off polished, responsive screens." },
];

const pad = (n: number) => String(n).padStart(2, "0");

function ScrollCue() {
  return (
    <div className="cc-cue cc-cue-desk">
      <span className="scroll-label">Scroll inside</span>
      <svg className="squiggle" width="212" height="132" viewBox="0 0 212 132" fill="none" aria-hidden="true">
        <path d="M20 16 C 30 72, 84 116, 182 96" stroke="#0a2540" strokeWidth="3" strokeLinecap="round" />
        <path d="M182 96 L 159 100 M182 96 L 174 75" stroke="#0a2540" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function NeeyamoCaseStudy() {
  const [cd, setCd] = useState({ d: "02", h: "18", m: "30", s: "00" });
  const [slide, setSlide] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // live countdown — date stays, seconds tick
  useEffect(() => {
    const end = Date.now() + (2 * 86400 + 18 * 3600 + 30 * 60) * 1000;
    const tick = () => {
      const s = Math.max(0, Math.floor((end - Date.now()) / 1000));
      setCd({
        d: pad(Math.floor(s / 86400)),
        h: pad(Math.floor((s % 86400) / 3600)),
        m: pad(Math.floor((s % 3600) / 60)),
        s: pad(s % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // auto-rotating promo carousel
  useEffect(() => {
    const id = setInterval(() => setSlide((i) => (i + 1) % PROMOS.length), 3500);
    return () => clearInterval(id);
  }, []);

  // gentle looping confetti inside the mailer panel
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const colors = ["#004bdd", "#236eff", "#7aa5ff", "#bcd1ff", "#ebf1ff"];
    let W = 0, H = 0, raf = 0;
    type P = { x: number; y: number; w: number; h: number; c: string; vy: number; rot: number; vr: number; sway: number; amp: number };
    let parts: P[] = [];
    const resize = () => {
      const r = cv.getBoundingClientRect();
      W = cv.width = r.width;
      H = cv.height = r.height;
    };
    const make = (top: boolean): P => ({
      x: Math.random() * W,
      y: top ? -10 - Math.random() * H : Math.random() * H,
      w: 5 + Math.random() * 5,
      h: 9 + Math.random() * 6,
      c: colors[(Math.random() * colors.length) | 0],
      vy: 0.5 + Math.random() * 0.9,
      rot: Math.random() * 6.28,
      vr: (Math.random() - 0.5) * 0.08,
      sway: Math.random() * 6.28,
      amp: 0.3 + Math.random() * 0.6,
    });
    resize();
    parts = Array.from({ length: 40 }, () => make(false));
    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.sway += 0.02;
        p.y += p.vy;
        p.x += Math.sin(p.sway) * p.amp;
        p.rot += p.vr;
        if (p.y > H + 12) parts[i] = make(true);
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = 0.9;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      raf = requestAnimationFrame(frame);
    };
    frame();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const spec = '~!@#$%^&*()_+-={}[]?:;"\',./\\<>';

  return (
    <div className="np">
      {/* Go Back / Portfolio bar */}
      <div className="topbar">
        <Link className="back" href="/"><span>←</span> Go Back</Link>
        <span className="brand">Portfolio</span>
      </div>

      {/* Intro */}
      <section className="intro">
        <div className="intro-rule" />
        <p className="intro-kicker">Neeyamo</p>
        <div className="intro-main">
          <h1 className="intro-title">Brand, Reimagined Through UX</h1>
          <div className="intro-meta">
            <div>
              <p className="meta-label">Scope</p>
              <p className="meta-scope-text">Design discoveries, Mood-boarding, Conceptual Thinking, Design trends, User Interviews, Micro-Interactions, Prototyping.</p>
            </div>
            <div className="meta-row">
              <div><p className="meta-label">Duration</p><p className="meta-val">8 weeks</p></div>
              <div><p className="meta-label">Year</p><p className="meta-val">2022</p></div>
              <div><p className="meta-label">Role</p><p className="meta-val">Product Designer</p></div>
            </div>
          </div>
        </div>
        <p className="intro-desc">When Neeyamo set out to modernise their brand for a new generation of users, we were brought in to reimagine the website experience. It began with an intensive week-long discovery workshop, the foundation for truly understanding the business and the people it serves.</p>
      </section>

      {/* Hero gallery */}
      <section className="gallery">
        <div className="cols">
          <div className="col col-1">
            <div className="card-article"><img src="/neeyamo/hero-article.png" alt="Service desk article" /></div>
          </div>

          <div className="col col-2">
            <p className="ev-kicker">Trending Events</p>
            <h3 className="ev-head">Let&apos;s Explore The Best Global Payroll &amp; HRO Events Around The Globe</h3>
            <div className="ev-card">
              <p className="ev-date">February 5-8, 2022 <span className="bar">|</span> Chennai, India</p>
              <p className="ev-title">Let&apos;s Work Together - A New Remote World</p>
              <div className="cd">
                <div className="box"><div className="num">{cd.d}</div><div className="lbl">Days</div></div>
                <span className="sep">:</span>
                <div className="box"><div className="num">{cd.h}</div><div className="lbl">Hours</div></div>
                <span className="sep">:</span>
                <div className="box"><div className="num">{cd.m}</div><div className="lbl">Mins</div></div>
                <span className="sep">:</span>
                <div className="box"><div className="num">{cd.s}</div><div className="lbl">Secs</div></div>
              </div>
              <button className="ev-btn" type="button">See details</button>

              <div className="carousel">
                <div className="track" style={{ transform: `translateX(-${slide * 100}%)` }}>
                  {PROMOS.map((p) => (
                    <div className="slide" key={p.src}><img src={p.src} alt={p.alt} /></div>
                  ))}
                </div>
              </div>
              <div className="dots">
                {PROMOS.map((p, k) => (
                  <span key={p.src} className={"dot" + (k === slide ? " active" : "")} onClick={() => setSlide(k)} />
                ))}
              </div>
            </div>
          </div>

          <div className="col col-3">
            <div className="testi"><img src="/neeyamo/hero-testimonials.png" alt="Student testimonials" /></div>
          </div>

          <div className="col col-4">
            <div className="mailer-wrap">
              <img className="mailer" src="/neeyamo/hero-mailer.png" alt="Thank you mailer" />
              <div className="confetti-clip"><canvas className="confetti" ref={canvasRef} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section className="wf">
        <div className="wf-head"><h2>Workflows</h2></div>
        <div className="wf-flow">
          {WORKFLOWS.map((w, i) => (
            <div className="wf-cell" key={w.n} style={{ display: "contents" }}>
              <div className="wf-step"><div className="wf-num">{w.n}</div><div className="wf-title">{w.t}</div><div className="wf-desc">{w.d}</div></div>
              {i < WORKFLOWS.length - 1 && <div className="wf-arrow">→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Concepts */}
      <section className="concepts">
        <div className="cc-stage">
          <div className="laptop">
            <ScrollCue />
            <div className="laptop-screen"><div className="screen-scroll"><img src="/neeyamo/concept-web.png" alt="Neeyamo concept, desktop" /></div></div>
            <div className="laptop-base" />
          </div>
          <img className="device-mobile" src="/neeyamo/concept-mobile.png" alt="Neeyamo concept, mobile" />
        </div>
      </section>

      {/* Final designs */}
      <section className="finals">
        <div className="finals-head">
          <h2>Final Designs</h2>
          <p>Scroll inside to view the complete UI</p>
        </div>
        <div className="finals-body">
          <span className="final-label">Press and Media Landing Page</span>
          <div className="final-frame"><img src="/neeyamo/final-press-media-web.png" alt="Press and Media landing page, full UI" /></div>

          <div style={{ marginTop: 64 }}>
            <span className="final-label">Events Landing Page</span>
            <div className="final-frame"><img src="/neeyamo/final-events-web.png" alt="Events landing page, full UI" /></div>
          </div>

          <div className="final-mobiles">
            <div className="final-mob">
              <span className="final-label">CSR Landing Page</span>
              <div className="mob-frame"><img src="/neeyamo/final-csr-mobile.png" alt="CSR landing page, mobile" /></div>
            </div>
            <div className="final-mob">
              <span className="final-label">Events Listing</span>
              <div className="mob-frame"><img src="/neeyamo/final-events-mobile.png" alt="Events listing, mobile" /></div>
            </div>
            <div className="final-mob">
              <span className="final-label">Contact Us</span>
              <div className="mob-frame"><img src="/neeyamo/final-contact-mobile.png" alt="Contact us, mobile" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Style guide */}
      <section className="sg">
        <div className="sg-rule" />
        <h2 className="sg-title">Style Guide</h2>
        <p className="sg-intro">During the revamp of the website we have curated few new colours, gradients and button styles referring to existing brand guidelines of the site. Whitespace was used generously to give prominence to the content and simple fonts like Avenir Next and Arial were used. To bring in the real life connection human imageries were added.</p>

        <div className="sg-grid">
          <div className="sg-left">
            <div className="sg-card">
              <div className="sg-banner">Typography</div>
              <div className="sg-body">
                <p className="sg-h">Font Family Selection</p>
                <div className="ff-row">
                  <div className="ff-card">
                    <div className="ff-head"><span>Avenir Next</span><span className="ff-tag">SANS SERIF</span></div>
                    <div className="ff-aa">Aa</div>
                    <div className="ff-spec">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />1234567890<br />{spec}</div>
                  </div>
                  <div className="ff-card arial">
                    <div className="ff-head"><span>Arial</span><span className="ff-tag">SANS SERIF</span></div>
                    <div className="ff-aa">Aa</div>
                    <div className="ff-spec">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />1234567890<br />{spec}</div>
                  </div>
                </div>

                <p className="sg-h">Font Pairing Breakdown</p>
                <p className="pairing">Heading Font - Avenir Next<br />Body - Arial<br />Links/Buttons - Avenir Next</p>

                <p className="sg-h">Type Scale</p>
                <p className="ts-note">The type scale will be based on an 8pt scale, using 16px as the base font-size</p>

                <div className="ts-block">
                  <p className="ts-kick">Display</p>
                  <p className="ts-sub">Used for desktop</p>
                  <p className="ts-spec" style={{ fontSize: 34, fontWeight: 600 }}>Display - 58px<br />Demi Bold</p>
                </div>
                <div className="ts-block">
                  <p className="ts-kick">Heading Bold</p>
                  <p className="ts-spec" style={{ fontWeight: 700 }}>
                    <span style={{ fontSize: 26 }}>Heading 1 - 48px Bold</span><br />
                    <span style={{ fontSize: 22 }}>Heading 2 - 40px Bold</span><br />
                    <span style={{ fontSize: 18 }}>Heading 3 - 32px Bold</span><br />
                    <span style={{ fontSize: 14 }}>Heading 4 - 24px Bold</span> &nbsp; <span style={{ fontSize: 12 }}>Heading 5 - 20px Bold</span>
                  </p>
                </div>
                <div className="ts-block">
                  <p className="ts-kick">Heading Demi Bold</p>
                  <p className="ts-spec" style={{ fontWeight: 600 }}>
                    <span style={{ fontSize: 26 }}>Heading 1 - 48px Demi Bold</span><br />
                    <span style={{ fontSize: 18 }}>Heading 3 - 32px Demi Bold</span> &nbsp; <span style={{ fontSize: 12 }}>Heading 5 - 20px Demi Bold</span>
                  </p>
                </div>
                <div className="ts-block">
                  <p className="ts-kick">Paragraph Medium</p>
                  <p className="ts-spec ts-cols" style={{ fontWeight: 500, color: "#3a4453" }}>
                    <span style={{ fontSize: 15 }}>Body 1 - 24px Medium</span>
                    <span style={{ fontSize: 13 }}>Body 2 - 20px Medium</span>
                    <span style={{ fontSize: 12 }}>Body 3 - 16px Medium</span>
                  </p>
                </div>
                <div className="ts-block">
                  <p className="ts-kick">Body Italic</p>
                  <p className="ts-spec ts-cols" style={{ fontStyle: "italic", color: "#3a4453" }}>
                    <span style={{ fontSize: 15 }}>Body 1 - 24px Italic</span>
                    <span style={{ fontSize: 13 }}>Body 2 - 20px Italic</span>
                    <span style={{ fontSize: 12 }}>Body 3 - 16px Italic</span>
                  </p>
                </div>
                <div className="ts-block">
                  <p className="ts-kick">Body Copy</p>
                  <p className="ts-sub">These fonts can be used both for mobile and desktop</p>
                  <p className="ts-spec ts-cols" style={{ color: "#3a4453" }}>
                    <span style={{ fontSize: 12, fontWeight: 700 }}>Body Heading Large - 16px Bold</span>
                    <span style={{ fontSize: 12, fontWeight: 700 }}>Body Heading Small - 16px Bold</span>
                    <span style={{ fontSize: 11, color: "#0b5ed7", letterSpacing: ".06em" }}>LABEL - 14PX SEMIBOLD CAP</span>
                    <span style={{ fontSize: 10 }}>Footer - 12px Regular</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sg-right">
            <div className="sg-card">
              <div className="sg-banner">Color Palette</div>
              <div className="sg-body">
                <div className="cp-row">
                  <div className="cp-meta"><p className="cp-name">Neutral</p><p className="cp-desc">These colours are used as supporting secondary colours in Backgrounds, text colours, seperators, modals etc</p></div>
                  <div className="cp-swatches">
                    <div className="cp-sw"><div className="cp-chip" style={{ background: "#FFFFFF" }} /><div className="cp-line"><span className="cp-step">0</span><span className="cp-hex">#FFFFFF</span></div></div>
                    <div className="cp-sw"><div className="cp-chip" style={{ background: "#CAD8ED" }} /><div className="cp-line"><span className="cp-step">50</span><span className="cp-hex">#CAD8ED</span></div></div>
                    <div className="cp-sw"><div className="cp-chip" style={{ background: "#45546B" }} /><div className="cp-line"><span className="cp-step">900</span><span className="cp-hex">#45546B</span></div></div>
                  </div>
                </div>
                <div className="cp-row">
                  <div className="cp-meta"><p className="cp-name">Primary</p><p className="cp-desc">This primary colour palette is used across all the interactive elements such as CTA&apos;s, links, inputs etc</p></div>
                  <div className="cp-swatches">
                    <div className="cp-sw"><div className="cp-chip" style={{ background: "#F2F7FF" }} /><div className="cp-line"><span className="cp-step">50</span><span className="cp-hex">#F2F7FF</span></div></div>
                    <div className="cp-sw"><div className="cp-chip" style={{ background: "#CAD8ED" }} /><div className="cp-line"><span className="cp-step">300</span><span className="cp-hex">#CAD8ED</span></div></div>
                    <div className="cp-sw"><div className="cp-chip" style={{ background: "#8CAAD7" }} /><div className="cp-line"><span className="cp-step">500</span><span className="cp-hex">#8CAAD7</span></div></div>
                    <div className="cp-sw"><div className="cp-chip" style={{ background: "#0B5ED7" }} /><div className="cp-line"><span className="cp-step">700</span><span className="cp-hex">#0B5ED7</span></div></div>
                    <div className="cp-sw"><div className="cp-chip" style={{ background: "#031B3D" }} /><div className="cp-line"><span className="cp-step">900</span><span className="cp-hex">#031B3D</span></div></div>
                  </div>
                </div>
                <div className="cp-row">
                  <div className="cp-meta"><p className="cp-name">Gradient</p><p className="cp-desc">This gradient is used for bold headings, background banner etc</p></div>
                  <div className="cp-swatches">
                    <div><div className="cp-grad" style={{ background: "linear-gradient(90deg,#0B5ED7,#1f7fb8,#7fb04f,#BAD80A)" }} /><div className="cp-line"><span className="cp-hex">#0B5ED7</span><span className="cp-hex">#BAD80A</span></div></div>
                  </div>
                </div>
                <div className="cp-row">
                  <div className="cp-meta"><p className="cp-name">Warning</p><p className="cp-desc">Can use for error messages, text field error labels etc</p></div>
                  <div className="cp-swatches">
                    <div className="cp-sw"><div className="cp-chip" style={{ background: "#ED1C29" }} /><div className="cp-line"><span className="cp-hex">#ED1C29</span></div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sg-card">
              <div className="sg-banner">Components</div>
              <div className="sg-body">
                <p className="sg-h">Button Styles</p>
                <p className="comp-note">Main interactive call to action on the page</p>
                <div className="btn-groups">
                  <div className="btn-col">
                    <h5>Primary Buttons</h5>
                    <div className="btn-line"><small>Default</small><span className="sg-btn">Explore More</span></div>
                    <div className="btn-line"><small>Hover</small><span className="sg-btn hover">Explore More</span></div>
                    <div className="btn-line"><small>Pressed</small><span className="sg-btn pressed">Explore More</span></div>
                  </div>
                  <div className="btn-col">
                    <h5>Secondary Buttons</h5>
                    <div className="btn-line"><small>Default</small><span className="sg-btn sec">Explore More</span></div>
                    <div className="btn-line"><small>Hover</small><span className="sg-btn sec" style={{ background: "#d9e8ff" }}>Explore More</span></div>
                    <div className="btn-line"><small>Pressed</small><span className="sg-btn sec" style={{ background: "#c4dcff" }}>Explore More</span></div>
                  </div>
                  <div className="btn-col dark">
                    <h5>Dark Buttons</h5>
                    <div className="btn-line"><small>Default</small><span className="sg-btn">Explore More</span></div>
                    <div className="btn-line"><small>Hover</small><span className="sg-btn hover">Explore More</span></div>
                    <div className="btn-line"><small>Pressed</small><span className="sg-btn pressed">Explore More</span></div>
                  </div>
                </div>

                <div className="comp-samples">
                  <div className="comp-chip">
                    <div className="row"><span>All Topics</span><span>▾</span></div>
                    <div className="row"><span>Payroll++</span></div>
                    <div className="row"><span>Time &amp; Attendance</span></div>
                    <div className="row"><span>Benefits</span></div>
                  </div>
                  <div className="comp-chip">
                    <div className="row"><span>Relevance</span><span>▾</span></div>
                    <div className="row"><span>Latest</span></div>
                  </div>
                  <div className="comp-chip" style={{ minWidth: 150 }}>
                    <div className="row"><span>Toggle</span><span className="toggle" /></div>
                    <div className="row"><span>Checkbox</span><span className="checkbox">✓</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live site */}
      <section className="livesite">
        <div className="ls-head">
          <h2>Live site</h2>
          <a href="https://www.neeyamo.com/" target="_blank" rel="noopener noreferrer">https://www.neeyamo.com/</a>
        </div>
        <div className="cc-stage">
          <div className="laptop">
            <ScrollCue />
            <div className="laptop-screen"><div className="screen-scroll"><img src="/neeyamo/live-homepage.png" alt="Neeyamo live homepage" /></div></div>
            <div className="laptop-base" />
          </div>
        </div>
      </section>

      <style jsx>{`
        .np { font-family: "Avenir Next", "Segoe UI", Arial, Helvetica, sans-serif; color: #303030; background: #fff; }
        .np :global(*) { box-sizing: border-box; }

        .topbar { display: flex; align-items: center; justify-content: space-between; padding: 16px 80px; border-bottom: 1px solid #e5e7eb; }
        .topbar :global(.back) { font-size: 13px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; display: flex; align-items: center; gap: 8px; color: #000; text-decoration: none; }
        .topbar .brand { font-size: 22px; font-weight: 800; letter-spacing: .15em; text-transform: uppercase; }

        .intro { padding: 72px 80px 56px; }
        .intro-rule { width: 512px; max-width: 55%; height: 2px; background: #141414; margin-bottom: 22px; }
        .intro-kicker { font-family: "SF Mono", ui-monospace, Menlo, Consolas, "Courier New", monospace; font-size: 14px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: #141414; }
        .intro-main { display: flex; gap: 80px; align-items: flex-end; margin-top: 64px; }
        .intro-title { flex: 1.35; font-family: "Avenir", "Avenir Next", Arial, sans-serif; font-size: 56px; line-height: 1.1; font-weight: 800; letter-spacing: 0; text-transform: uppercase; color: #181818; }
        .intro-meta { flex: 1; display: flex; flex-direction: column; gap: 36px; padding-top: 6px; }
        .meta-label { font-family: "SF Mono", ui-monospace, Menlo, Consolas, "Courier New", monospace; font-size: 12px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; color: #9a9a9a; margin-bottom: 12px; }
        .meta-scope-text { font-size: 17px; line-height: 1.5; color: #1c1c1c; font-weight: 500; }
        .meta-row { display: flex; gap: 56px; }
        .meta-val { font-size: 17px; color: #1c1c1c; font-weight: 500; }
        .intro-desc { margin-top: 48px; font-size: 22px; line-height: 1.5; color: #6c6c6c; max-width: 1180px; }

        .gallery { position: relative; overflow: hidden; padding: 40px 16px 48px; background: linear-gradient(180deg, #F5FAFF 0%, #EEF7FF 45%, #E1EFFF 100%); }
        .cols { display: flex; gap: 20px; align-items: flex-start; max-width: 1440px; margin: 0 auto; }
        .col { flex: 1; min-width: 0; }
        .card-article img { display: block; width: 100%; height: auto; }
        .col-1 { margin-top: 120px; }
        .col-3 { margin-top: 24px; }
        .testi img { display: block; width: 100%; height: auto; }
        .col-2 { margin-top: 8px; }
        .ev-kicker { text-align: center; font-size: 13px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #0b5ed7; }
        .ev-head { text-align: center; font-size: 22px; line-height: 1.35; font-weight: 700; color: #0e2748; margin: 10px 6px 18px; }
        .ev-card { position: relative; border-radius: 14px; padding: 26px 24px 22px; overflow: hidden;
          background: radial-gradient(120px 120px at 86% 40%, rgba(70,150,110,.30), transparent 60%), radial-gradient(160px 140px at 74% 74%, rgba(96,74,140,.28), transparent 62%), radial-gradient(140px 120px at 30% 20%, rgba(40,90,150,.22), transparent 60%), linear-gradient(160deg, #0a1f45 0%, #081a3a 55%, #06152f 100%); }
        .ev-date { color: #e4ecf7; font-size: 14px; font-weight: 600; margin-bottom: 16px; }
        .ev-date .bar { color: #7c8db0; margin: 0 6px; }
        .ev-title { color: #fff; font-size: 30px; line-height: 1.18; font-weight: 600; margin-bottom: 24px; }
        .cd { display: flex; gap: 8px; margin-bottom: 24px; align-items: center; }
        .cd .box { background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12); border-radius: 12px; padding: 11px 0 9px; flex: 1; text-align: center; }
        .cd .num { color: #fff; font-size: 28px; font-weight: 600; line-height: 1; }
        .cd .lbl { color: #9fb2cc; font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; margin-top: 7px; }
        .cd .sep { color: #54657f; font-size: 22px; font-weight: 700; }
        .ev-btn { background: linear-gradient(180deg, #3f86ff 0%, #1f63e6 100%); color: #fff; border: none; border-radius: 10px; padding: 10px 22px; font-size: 14px; font-weight: 600; cursor: pointer; margin-bottom: 22px; box-shadow: 0 8px 16px rgba(31,99,230,.35); }
        .carousel { margin: 0 -24px; overflow: hidden; position: relative; }
        .track { display: flex; transition: transform .5s cubic-bezier(.4,0,.2,1); }
        .slide { flex: 0 0 100%; aspect-ratio: 3 / 2; overflow: hidden; }
        .slide img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .dots { display: flex; gap: 9px; justify-content: center; margin-top: 18px; }
        .dot { width: 9px; height: 9px; border-radius: 50%; background: rgba(255,255,255,.3); cursor: pointer; transition: all .3s; }
        .dot.active { background: #fff; box-shadow: 0 0 0 3px rgba(255,255,255,.28); }
        .col-4 { margin-top: 8px; }
        .mailer-wrap { position: relative; }
        .mailer { width: 100%; display: block; }
        .confetti-clip { position: absolute; top: 8.4%; left: 1.3%; width: 96.9%; height: 82.5%; overflow: hidden; border-radius: 18px; pointer-events: none; }
        .confetti { width: 100%; height: 100%; display: block; }

        .wf { padding: 72px 80px; }
        .wf-head { display: flex; align-items: center; gap: 18px; margin-bottom: 40px; }
        .wf-head h2 { font-family: "Avenir", "Avenir Next", Arial, sans-serif; font-size: 30px; font-weight: 800; letter-spacing: .01em; text-transform: uppercase; color: #1c1c1c; }
        .wf-flow { display: flex; align-items: stretch; gap: 0; }
        .wf-step { flex: 1; background: linear-gradient(180deg, #f4f9ff 0%, #e9f3ff 100%); border: 1px solid #dcebff; border-radius: 18px; padding: 22px 20px; display: flex; flex-direction: column; gap: 12px; }
        .wf-num { width: 34px; height: 34px; border-radius: 10px; background: #0b5ed7; color: #fff; font-family: "SF Mono", ui-monospace, Menlo, Consolas, monospace; font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
        .wf-title { font-size: 17px; font-weight: 700; color: #11293e; line-height: 1.2; }
        .wf-desc { font-size: 13px; line-height: 1.5; color: #5f7288; }
        .wf-arrow { display: flex; align-items: center; justify-content: center; color: #a9c8ef; font-size: 22px; padding: 0 8px; flex: 0 0 auto; }

        .concepts { padding: 56px 80px 90px; }
        .cc-stage { position: relative; display: flex; align-items: flex-end; justify-content: center; gap: 64px; padding: 185px 0 20px; }
        .scroll-label { color: #0a2540; font-size: 26px; font-weight: 400; line-height: 1; }
        .cc-cue { position: absolute; display: flex; flex-direction: column; gap: 6px; z-index: 5; }
        .cc-cue-desk { bottom: calc(100% + 16px); left: -26px; align-items: flex-start; }
        .squiggle { display: block; }
        .laptop { width: 880px; flex: 0 0 auto; position: relative; }
        .laptop-screen { background: #0b0b0d; border: 14px solid #1d1d1f; border-bottom: none; border-radius: 20px 20px 0 0; overflow: hidden; }
        .screen-scroll { height: 470px; overflow-y: auto; overflow-x: hidden; background: #fff; }
        .screen-scroll img { width: 100%; display: block; }
        .laptop-base { height: 20px; width: 104%; margin-left: -2%; background: linear-gradient(#dfe3e8, #b6bcc4); border-radius: 0 0 16px 16px; position: relative; }
        .laptop-base::after { content: ""; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 130px; height: 9px; background: #a7adb5; border-radius: 0 0 9px 9px; }
        .device-mobile { height: 504px; width: auto; display: block; flex: 0 0 auto; }

        .finals { background: #f5faff; padding: 80px 0; }
        .finals-head { text-align: center; margin-bottom: 44px; }
        .finals-head h2 { font-family: "Avenir", "Avenir Next", Arial, sans-serif; font-size: 28px; font-weight: 700; color: #0e2335; }
        .finals-head p { color: #0b5ed7; font-size: 18px; margin-top: 8px; }
        .finals-body { padding: 0 80px; }
        .final-label { display: inline-block; background: #0b5ed7; color: #fff; font-size: 15px; padding: 6px 14px; border-radius: 6px; margin-bottom: 14px; }
        .final-frame { width: 100%; height: 760px; overflow-y: auto; overflow-x: hidden; border: 1px solid #e0ecff; border-radius: 14px; background: #fff; }
        .final-frame img { width: 100%; display: block; }
        .final-mobiles { display: flex; gap: 40px; justify-content: center; margin-top: 64px; }
        .final-mob { width: 360px; }
        .mob-frame { height: 830px; overflow-y: auto; overflow-x: hidden; border: 1px solid #e0ecff; border-radius: 14px; background: #fff; }
        .mob-frame img { width: 100%; display: block; }

        .livesite { background: linear-gradient(180deg, #F5FAFF 0%, #EEF7FF 50%, #E1EFFF 100%); padding: 56px 80px 80px; }
        .ls-head { text-align: center; }
        .ls-head h2 { font-family: "Avenir", "Avenir Next", Arial, sans-serif; font-size: 28px; font-weight: 700; color: #1e1e1e; }
        .ls-head a { display: inline-block; margin-top: 10px; font-size: 18px; color: #0a2540; text-decoration: underline; }

        .sg { padding: 64px 80px 40px; }
        .sg-rule { width: 100%; height: 2px; background: #111; margin-bottom: 24px; }
        .sg-title { font-family: "Avenir", "Avenir Next", Arial, sans-serif; font-size: 32px; font-weight: 800; text-transform: uppercase; color: #303030; }
        .sg-intro { max-width: 1010px; font-size: 16px; line-height: 1.9; color: #061125; margin-top: 16px; }
        .sg-grid { display: flex; gap: 24px; align-items: flex-start; margin-top: 44px; }
        .sg-left { width: 48%; flex: 0 0 auto; }
        .sg-right { flex: 1; display: flex; flex-direction: column; gap: 24px; }
        .sg-card { border: 1px solid #eef1f5; border-radius: 3px; overflow: hidden; background: #fff; }
        .sg-banner { background: #0b5ed7; color: #fff; font-size: 17px; font-weight: 700; padding: 15px 22px; }
        .sg-body { padding: 22px; }
        .sg-h { font-size: 15px; font-weight: 700; color: #0e2335; margin: 26px 0 12px; }
        .sg-h:first-child { margin-top: 0; }
        .ff-row { display: flex; gap: 14px; }
        .ff-card { flex: 1; border: 1px solid #e7ebf0; border-radius: 6px; overflow: hidden; }
        .ff-head { display: flex; justify-content: space-between; align-items: center; background: #f4f7fb; padding: 11px 14px; font-size: 13px; font-weight: 600; color: #0e2335; }
        .ff-tag { color: #8a94a3; font-size: 10px; letter-spacing: .08em; }
        .ff-aa { font-size: 42px; color: #0e2335; padding: 14px 14px 6px; }
        .ff-spec { padding: 0 14px 14px; font-size: 10px; line-height: 1.7; color: #3a4453; word-break: break-all; }
        .arial .ff-aa, .arial .ff-spec { font-family: Arial, Helvetica, sans-serif; }
        .pairing { font-size: 13px; line-height: 2; color: #3a4453; }
        .ts-note { font-size: 13px; color: #5f6b7a; margin-bottom: 6px; }
        .ts-block { border-top: 1px solid #eef1f5; padding: 16px 0; }
        .ts-kick { font-size: 12px; font-weight: 700; color: #0e2335; margin-bottom: 4px; }
        .ts-sub { font-size: 11px; color: #8a94a3; margin-bottom: 10px; }
        .ts-spec { color: #111; line-height: 1.15; }
        .ts-cols { display: flex; flex-wrap: wrap; gap: 6px 26px; }
        .cp-row { display: flex; gap: 16px; padding: 16px 0; border-top: 1px solid #f0f2f5; }
        .cp-row:first-child { border-top: none; }
        .cp-meta { width: 150px; flex: 0 0 auto; }
        .cp-name { font-size: 13px; font-weight: 700; color: #0e2335; margin-bottom: 5px; }
        .cp-desc { font-size: 10px; line-height: 1.55; color: #8a94a3; }
        .cp-swatches { display: flex; gap: 10px; flex-wrap: wrap; }
        .cp-sw { width: 70px; }
        .cp-chip { height: 44px; border-radius: 4px; border: 1px solid #eceff3; }
        .cp-line { display: flex; gap: 8px; margin-top: 5px; }
        .cp-step { font-size: 9px; color: #8a94a3; }
        .cp-hex { font-size: 9px; color: #5f6b7a; }
        .cp-grad { height: 44px; border-radius: 4px; width: 150px; }
        .comp-note { font-size: 13px; color: #5f6b7a; margin-bottom: 18px; }
        .btn-groups { display: flex; gap: 14px; align-items: flex-start; }
        .btn-col { flex: 1; }
        .btn-col.dark { background: #0c1f3a; border-radius: 8px; padding: 14px 14px 4px; }
        .btn-col h5 { font-size: 12px; font-weight: 700; color: #0e2335; margin-bottom: 14px; }
        .btn-col.dark h5 { color: #fff; }
        .btn-line { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
        .btn-line small { font-size: 10px; color: #5f6b7a; width: 48px; }
        .btn-col.dark .btn-line small { color: #c7d3e6; }
        .sg-btn { background: #0b5ed7; color: #fff; font-size: 9px; padding: 6px 12px; border-radius: 5px; font-weight: 600; }
        .sg-btn.hover { background: #0a52bd; }
        .sg-btn.pressed { background: #083f89; }
        .sg-btn.sec { background: #eaf2ff; color: #0b5ed7; }
        .comp-samples { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 22px; }
        .comp-chip { border: 1px solid #e7ebf0; border-radius: 6px; padding: 12px; font-size: 10px; color: #5f6b7a; min-width: 120px; }
        .comp-chip .row { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; border-bottom: 1px solid #f2f4f7; }
        .comp-chip .row:last-child { border-bottom: none; }
        .toggle { width: 34px; height: 18px; background: #0b5ed7; border-radius: 20px; position: relative; }
        .toggle::after { content: ""; position: absolute; top: 2px; right: 2px; width: 14px; height: 14px; background: #fff; border-radius: 50%; }
        .checkbox { width: 18px; height: 18px; border-radius: 4px; background: #0b5ed7; display: inline-flex; align-items: center; justify-content: center; color: #fff; font-size: 11px; }
      `}</style>
    </div>
  );
}
