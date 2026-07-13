"use client";

import { useEffect, useRef } from "react";

/**
 * Cosmic — the design-system scene used as the project hero and the
 * home-page card. Designed at 1200×675 and scaled to fit its container.
 * `interactive` enables pointer parallax + swatch selection (hero only).
 */
export default function CosmicScene({ interactive = false }: { interactive?: boolean }) {
  const thumbRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const thumb = thumbRef.current;
    const stage = stageRef.current;
    if (!thumb || !stage) return;

    const fit = () => {
      const s = thumb.clientWidth / 1200;
      stage.style.transform = `scale(${s})`;
    };
    const ro = new ResizeObserver(fit);
    ro.observe(thumb);
    fit();

    let raf = 0;
    const cleanups: Array<() => void> = [() => ro.disconnect()];

    if (interactive) {
      const pieces = Array.from(stage.querySelectorAll<HTMLElement>(".cx-piece"));
      let tx = 0, ty = 0, cx = 0, cy = 0;
      const onMove = (e: MouseEvent) => {
        const r = thumb.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
      };
      const onLeave = () => { tx = 0; ty = 0; };
      thumb.addEventListener("mousemove", onMove);
      thumb.addEventListener("mouseleave", onLeave);
      const loop = () => {
        cx += (tx - cx) * 0.06;
        cy += (ty - cy) * 0.06;
        pieces.forEach((p) => {
          const d = Number(p.dataset.depth) || 3;
          p.style.transform = `translate(${-cx * d * 3.2}px, ${-cy * d * 3.2}px)`;
        });
        raf = requestAnimationFrame(loop);
      };
      loop();

      const swatches = Array.from(stage.querySelectorAll<HTMLElement>(".cx-sw"));
      const onSwatch = (sw: HTMLElement) => () => {
        stage
          .querySelectorAll<HTMLElement>(`.cx-sw[data-grp="${sw.dataset.grp}"]`)
          .forEach((s) => s.classList.remove("cx-selected"));
        sw.classList.add("cx-selected");
      };
      swatches.forEach((sw) => {
        const h = onSwatch(sw);
        sw.addEventListener("click", h);
        cleanups.push(() => sw.removeEventListener("click", h));
      });

      cleanups.push(() => {
        thumb.removeEventListener("mousemove", onMove);
        thumb.removeEventListener("mouseleave", onLeave);
        cancelAnimationFrame(raf);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [interactive]);

  return (
    <div className={"cx-thumb" + (interactive ? "" : " cx-static")} ref={thumbRef}>
      <div className="cx-stage" ref={stageRef}>
        {/* ambient */}
        <div className="cx-glow" style={{ width: 420, height: 420, left: 120, top: -60, background: "#7C3AED" }} />
        <div className="cx-glow" style={{ width: 360, height: 360, left: 780, top: 360, background: "#4C1D95", opacity: 0.4 }} />
        <div className="cx-streak" style={{ width: 180, left: 120, top: 330, animationDuration: "6s" }} />
        <div className="cx-streak" style={{ width: 140, left: 60, top: 560, animationDuration: "8s" }} />
        <div className="cx-streak" style={{ width: 220, left: 900, top: 250, animationDuration: "7s" }} />
        <div className="cx-streak" style={{ width: 160, left: 980, top: 600, animationDuration: "9s" }} />
        <div className="cx-streak" style={{ width: 120, left: 1020, top: 120, animationDuration: "5.5s" }} />

        {/* token square */}
        <div className="cx-piece" data-depth="4" style={{ left: 236, top: 150 }}>
          <div className="cx-bob" style={{ animationDuration: "6.5s" }}><div className="cx-token-sq" /></div>
        </div>

        {/* nav chips */}
        <div className="cx-piece" data-depth="5" style={{ left: 96, top: 288 }}>
          <div className="cx-bob cx-bobB" style={{ animationDuration: "7.5s" }}>
            <div className="cx-chip"><i style={{ background: "#2b2f3a" }} /><div className="cx-bars"><b /><b /></div></div>
          </div>
        </div>
        <div className="cx-piece" data-depth="6" style={{ left: 126, top: 360 }}>
          <div className="cx-bob cx-bobB" style={{ animationDuration: "6.8s", animationDelay: ".4s" }}>
            <div className="cx-chip"><i style={{ background: "#2F6BEB" }} /><div className="cx-bars"><b /><b /></div></div>
          </div>
        </div>
        <div className="cx-piece" data-depth="7" style={{ left: 88, top: 432 }}>
          <div className="cx-bob cx-bobB" style={{ animationDuration: "8.2s", animationDelay: ".2s" }}>
            <div className="cx-chip"><i style={{ background: "#C7B6F0" }} /><div className="cx-bars"><b /><b /></div></div>
          </div>
        </div>

        {/* Libraries panel */}
        <div className="cx-piece" data-depth="3" style={{ left: 255, top: 92 }}>
          <div className="cx-bob" style={{ animationDuration: "8s" }}>
            <div className="cx-card cx-libs">
              <div className="cx-lib-head"><span>Custom</span><b>Libraries</b><span className="cx-sp">＋ ✕</span></div>
              <div className="cx-lib-search">Search</div>
              <div className="cx-lib-all">All libraries ⌄ <span style={{ color: "#b6b0c0" }}>☰</span></div>
              <div className="cx-lib-sec">
                <div className="cx-lbl">color/brand</div>
                <div className="cx-row">
                  <div className="cx-sw cx-selected" data-grp="brand" style={{ background: "#6D28D9" }} />
                  <div className="cx-sw" data-grp="brand" style={{ background: "#FFC42B" }} />
                </div>
              </div>
              <div className="cx-lib-sec">
                <div className="cx-lbl">color/accent</div>
                <div className="cx-row"><div className="cx-sw" data-grp="accent" style={{ background: "#0D9488" }} /></div>
              </div>
              <div className="cx-lib-sec">
                <div className="cx-lbl">color/gradient</div>
                <div className="cx-row"><div className="cx-sw" data-grp="grad" style={{ background: "linear-gradient(140deg,#4C1D95,#3730A3)" }} /></div>
              </div>
              <div className="cx-lib-sec">
                <div className="cx-lbl">color/neutral</div>
                <div className="cx-row" style={{ gap: 8 }}>
                  {["#F7F7FA", "#E4E6EC", "#C6CBD6", "#98A0B0", "#6B7280", "#4B5563"].map((c, i) => (
                    <div key={c} className={"cx-neut" + (i === 0 ? " cx-b" : "")} style={{ background: c }} />
                  ))}
                </div>
                <div className="cx-row" style={{ gap: 8, marginTop: 8 }}>
                  {["#3A4250", "#2A3140", "#1D2330", "#141019", "#ffffff", "#000000"].map((c, i) => (
                    <div key={c} className={"cx-neut" + (c === "#ffffff" ? " cx-b" : "")} style={{ background: c }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Component config panel */}
        <div className="cx-piece" data-depth="2" style={{ left: 588, top: 150 }}>
          <div className="cx-bob cx-bobB" style={{ animationDuration: "9s" }}>
            <div className="cx-card cx-cfg">
              <div className="cx-cfg-head">Component configuration <span className="cx-x">✕</span></div>
              <div className="cx-cfg-tabs"><span className="cx-on">◆ Component set</span><span><span className="cx-dot2">◆</span> Selected variant</span></div>
              <div className="cx-cfg-body">
                <div className="cx-h">Description</div>
                <p>A single component to compose your own screens. Available in different styles, states and backgrounds — every value bound to a token.</p>
              </div>
              <div className="cx-cfg-tool"><span>B</span><span><i>I</i></span><span>S</span><span>H1</span><span>☰</span><span>1.</span><span>🔗</span><span>&lt;/&gt;</span></div>
              <div className="cx-cfg-link">https://cosmic.designsystem/components…</div>
            </div>
          </div>
        </div>

        {/* badges */}
        <div className="cx-piece" data-depth="8" style={{ left: 1000, top: 250 }}>
          <div className="cx-bob" style={{ animationDuration: "6s" }}>
            <div className="cx-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="cx-piece" data-depth="9" style={{ left: 585, top: 470 }}>
          <div className="cx-bob" style={{ animationDuration: "7.4s", animationDelay: ".3s" }}>
            <div className="cx-badge" style={{ width: 92, height: 92, background: "radial-gradient(120% 120% at 30% 25%,#FFD65A,#FFC42B)", boxShadow: "0 20px 44px rgba(245,176,20,.55)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#141019" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20l4.5-1L20 7.5l-3.5-3.5L5 15.5 4 20z" /><path d="M14.5 6l3.5 3.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* split card */}
        <div className="cx-piece" data-depth="4" style={{ left: 720, top: 500 }}>
          <div className="cx-bob" style={{ animationDuration: "8.6s" }}>
            <div className="cx-split">
              <div className="cx-lite" /><div className="cx-dark" />
              <div className="cx-av" /><div className="cx-l1" /><div className="cx-l2" /><div className="cx-l3" />
            </div>
          </div>
        </div>
      </div>

      <style>{cosmicCss}</style>
    </div>
  );
}

const cosmicCss = `
.cx-thumb{position:relative;width:100%;aspect-ratio:16/9;overflow:hidden;border-radius:18px;
  background:radial-gradient(120% 120% at 70% 15%,#241a34 0%,#150f20 45%,#0b0710 100%);}
.cx-thumb.cx-static{pointer-events:none;}
.cx-stage{position:absolute;top:0;left:0;width:1200px;height:675px;transform-origin:top left;}
.cx-streak{position:absolute;height:2px;border-radius:2px;background:linear-gradient(90deg,transparent,rgba(124,58,237,0.55),transparent);opacity:0.5;animation:cxDash linear infinite;}
.cx-glow{position:absolute;border-radius:50%;filter:blur(60px);opacity:0.55;}
.cx-piece{position:absolute;will-change:transform;transition:transform .25s cubic-bezier(.2,.7,.2,1);}
.cx-bob{animation:cxFloat 7s ease-in-out infinite alternate;}
.cx-bobB{animation-name:cxFloatB;}
.cx-card{background:#fff;border-radius:14px;box-shadow:0 24px 60px rgba(0,0,0,0.38);overflow:hidden;transition:transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s ease;}
.cx-card:hover{transform:translateY(-6px) scale(1.02);box-shadow:0 34px 80px rgba(76,29,149,0.4);}
@keyframes cxFloat{from{transform:translateY(-9px) rotate(-.6deg);}to{transform:translateY(9px) rotate(.6deg);}}
@keyframes cxFloatB{from{transform:translateY(8px) rotate(.5deg);}to{transform:translateY(-10px) rotate(-.5deg);}}
@keyframes cxPulse{0%,100%{box-shadow:0 0 0 0 rgba(124,58,237,.55);}50%{box-shadow:0 0 0 8px rgba(124,58,237,0);}}
@keyframes cxDash{to{background-position:220px 0;}}
.cx-libs{width:322px;}
.cx-lib-head{display:flex;align-items:center;gap:14px;padding:16px 18px;border-bottom:1px solid #e7e3ee;font-size:14px;color:#8a8494;}
.cx-lib-head b{color:#141019;}
.cx-lib-head .cx-sp{margin-left:auto;display:flex;gap:12px;color:#b6b0c0;}
.cx-lib-search{margin:14px 18px;height:34px;border-radius:8px;background:#f3f1f8;display:flex;align-items:center;padding:0 12px;color:#a6a0b2;font-size:13px;}
.cx-lib-all{display:flex;align-items:center;justify-content:space-between;padding:0 18px 6px;font-size:13px;color:#141019;font-weight:600;}
.cx-lib-sec{padding:10px 18px;}
.cx-lib-sec .cx-lbl{font-size:13px;color:#5a5566;margin-bottom:10px;}
.cx-row{display:flex;gap:12px;flex-wrap:wrap;}
.cx-sw{width:44px;height:44px;border-radius:50%;cursor:pointer;transition:transform .18s ease;border:2px solid transparent;}
.cx-sw:hover{transform:scale(1.12);}
.cx-sw.cx-selected{border-color:#fff;box-shadow:0 0 0 3px #7C3AED;animation:cxPulse 2s infinite;}
.cx-neut{width:40px;height:40px;border-radius:50%;}
.cx-neut.cx-b{border:1px solid #d9d9e0;}
.cx-cfg{width:384px;}
.cx-cfg-head{display:flex;align-items:center;gap:10px;padding:16px 18px;border-bottom:1px solid #e7e3ee;font-size:15px;font-weight:600;color:#141019;}
.cx-cfg-head .cx-x{margin-left:auto;color:#b6b0c0;}
.cx-cfg-tabs{display:flex;gap:18px;padding:14px 18px 0;font-size:13.5px;color:#8a8494;}
.cx-cfg-tabs .cx-on{color:#141019;font-weight:600;}
.cx-cfg-tabs .cx-dot2{color:#7C3AED;}
.cx-cfg-body{padding:14px 18px 4px;}
.cx-cfg-body .cx-h{font-size:13px;color:#8a8494;margin-bottom:8px;}
.cx-cfg-body p{font-size:14px;color:#3a3644;margin:0 0 12px;line-height:1.5;max-width:none;}
.cx-cfg-tool{display:flex;gap:16px;padding:12px 18px;border-top:1px solid #e7e3ee;color:#6f6980;font-size:14px;font-weight:700;align-items:center;}
.cx-cfg-tool span{opacity:.8;}
.cx-cfg-link{padding:0 18px 16px;font-size:13px;color:#7C3AED;}
.cx-chip{width:196px;height:46px;background:#fff;border-radius:10px;box-shadow:0 16px 40px rgba(0,0,0,.3);display:flex;align-items:center;gap:12px;padding:0 12px;}
.cx-chip i{width:22px;height:22px;border-radius:6px;flex:none;display:block;}
.cx-bars{flex:1;display:flex;flex-direction:column;gap:5px;}
.cx-bars b{height:6px;border-radius:3px;background:#eceaf1;display:block;}
.cx-bars b:first-child{width:70%;}
.cx-bars b:last-child{width:45%;background:#f4f2f8;}
.cx-badge{width:88px;height:88px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:radial-gradient(120% 120% at 30% 25%,#7C3AED,#4C1D95);box-shadow:0 20px 44px rgba(76,29,149,.5);color:#fff;}
.cx-badge svg{width:38px;height:38px;}
.cx-token-sq{width:88px;height:88px;border-radius:18px;background:linear-gradient(140deg,#FFC42B,#f0a92e);box-shadow:0 18px 40px rgba(240,169,46,.45);}
.cx-split{width:360px;height:150px;position:relative;border-radius:14px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.4);}
.cx-split .cx-lite{position:absolute;inset:0;background:#fff;}
.cx-split .cx-dark{position:absolute;inset:0;background:#1b2540;clip-path:polygon(100% 0,100% 100%,0 100%);}
.cx-split .cx-av{position:absolute;left:22px;top:34px;width:34px;height:34px;border-radius:50%;background:#e9e7ef;}
.cx-split .cx-l1{position:absolute;left:68px;top:40px;width:150px;height:12px;border-radius:6px;background:#edebf2;}
.cx-split .cx-l2{position:absolute;left:210px;top:76px;width:120px;height:12px;border-radius:6px;background:rgba(255,255,255,.35);}
.cx-split .cx-l3{position:absolute;left:150px;top:100px;width:150px;height:12px;border-radius:6px;background:rgba(255,255,255,.28);}
@media (prefers-reduced-motion: reduce){
  .cx-bob{animation:none;}
  .cx-streak{animation:none;}
  .cx-sw.cx-selected{animation:none;}
}
`;
