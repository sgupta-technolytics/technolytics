"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  { label: "Demand Intelligence" },
  { label: "Inventory Optimization" },
  { label: "Production Planning" },
  { label: "Supply Coordination" },
  { label: "Risk Mitigation" },
];

export default function HomeStack() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  // 👀 Observe when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ⏱ Start formation only after active
  useEffect(() => {
    if (!active) return;

    const id = setInterval(() => {
      setStep((s) => (s < services.length ? s + 1 : s));
    }, 850);

    return () => clearInterval(id);
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#050b16] py-48 px-6 md:px-24 overflow-hidden"
    >
      {/* BACKGROUND (unchanged) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,160,255,0.06)_1px,transparent_1px)] bg-[size:120px_120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,160,255,0.05)_1px,transparent_1px)] bg-[size:120px_120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,120,255,0.18),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">

        {/* LEFT — COPY */}
        <div>
          <h3 className="text-xs tracking-[0.35em] uppercase text-cyan-400 mb-6">
            Integrated Services
          </h3>

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
            Supply Chain
            <br />
            <span className="text-cyan-400">Control Intelligence</span>
          </h2>

          <p className="text-lg text-cyan-100/70 max-w-xl">
            Each service operates independently — yet synchronizes in real time —
            creating a unified control layer that drives faster, smarter, and more
            resilient decisions across your supply chain.
          </p>
        </div>

        {/* RIGHT — STACK */}
        <div className="relative h-[560px] flex items-center justify-center">
          <div className="relative w-[380px] h-[420px]">

            {/* FRAME */}
            <div className="absolute inset-0 border border-cyan-500/20 rounded-xl" />

            {/* DATA STREAMS */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"
                style={{ left: `${120 + i * 70}px` }}
              >
                <div
                  className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_12px_#00eaff]"
                  style={{ animation: `flow 2.${i}s linear infinite` }}
                />
              </div>
            ))}

            {/* STACK FORMATION */}
            {services.map((service, i) => {
              const formed = step > i;

              return (
                <div
                  key={i}
                  className="absolute left-1/2 w-[280px] h-[64px] rounded-lg"
                  style={{
                    top: `${70 + i * 68}px`,
                    transform: `
                      translateX(-50%)
                      translateY(${formed ? 0 : i % 2 ? -160 : 160}px)
                      translateX(${formed ? 0 : i % 2 ? -180 : 180}px)
                    `,
                    background:
                      "linear-gradient(135deg,#0bbcff,#005bff)",
                    boxShadow:
                      formed
                        ? "0 0 50px rgba(0,160,255,0.45)"
                        : "none",
                    opacity: formed ? 1 : 0,
                    transition:
                      "all 1s cubic-bezier(.22,.9,.34,1)",
                  }}
                >
                  <div className="absolute inset-0 rounded-lg border border-white/10" />
                  <div className="absolute left-4 top-1/2 w-2 h-2 bg-white rounded-full -translate-y-1/2" />
                  <div className="absolute right-4 top-1/2 w-10 h-px bg-white/40" />

                  <span className="absolute left-10 top-1/2 -translate-y-1/2 text-sm text-white tracking-wide">
                    {service.label}
                  </span>
                </div>
              );
            })}

            {/* CORE ENERGY */}
            <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-3xl" />
          </div>
        </div>
      </div>

      {/* STREAM ANIMATION */}
      <style jsx>{`
        @keyframes flow {
          0% { top: 0%; opacity: 0 }
          10% { opacity: 1 }
          90% { opacity: 1 }
          100% { top: 100%; opacity: 0 }
        }
      `}</style>
    </section>
  );
}
