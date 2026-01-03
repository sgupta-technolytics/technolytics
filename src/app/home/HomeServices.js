"use client";

import { useEffect, useState } from "react";

export default function HomeStats() {
  const [t, setT] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setT((v) => v + 1), 60);
    return () => clearInterval(id);
  }, []);

  // Simple analytics-like data
  const points = [
    [60, 230],
    [140, 215],
    [220, 205],
    [300, 225],
    [380, 165],
    [460, 145],
    [540, 170],
  ];

  const animatedPath = `M ${points
    .map(([x, y], i) => `${x} ${y + Math.sin(t / 14 + i) * 2}`)
    .join(" L ")}`;

  return (
    <section className="relative w-full bg-black py-32 px-6 md:px-20 overflow-hidden">
      {/* 🌌 Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,160,255,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,120,255,0.12),transparent_60%)]" />

      {/* 🔷 Geometric pulse drops */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => {
          const size = 10 + Math.random() * 18;
          const isDiamond = Math.random() > 0.5;

          return (
            <span
              key={i}
              className="absolute top-[-10%] bg-cyan-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: "2px",
                transform: isDiamond ? "rotate(45deg)" : "none",
                animation: `geoDrop ${8 + Math.random() * 6}s linear infinite`,
                animationDelay: `${Math.random() * 6}s`,
                boxShadow: "0 0 14px rgba(0,234,255,0.25)",
              }}
            />
          );
        })}
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        {/* 📊 LEFT — Chart */}
        <div className="w-full md:w-[60%]">
          <div className="relative h-[380px] rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#020c14] via-black to-black overflow-hidden shadow-[0_0_80px_rgba(0,160,255,0.15)]">
            <svg viewBox="0 0 600 300" className="absolute inset-0 w-full h-full">
              {/* Grid */}
              {[...Array(6)].map((_, i) => (
                <line
                  key={i}
                  x1="60"
                  y1={50 + i * 40}
                  x2="560"
                  y2={50 + i * 40}
                  stroke="white"
                  strokeOpacity="0.05"
                />
              ))}

              {[...Array(7)].map((_, i) => (
                <line
                  key={i}
                  y1="50"
                  x1={60 + i * 80}
                  y2="260"
                  x2={60 + i * 80}
                  stroke="white"
                  strokeOpacity="0.04"
                />
              ))}

              {/* Axes */}
              <line x1="60" y1="40" x2="60" y2="260" stroke="#00eaff" />
              <line x1="60" y1="260" x2="560" y2="260" stroke="#00eaff" />

              {/* Chart line */}
              <path
                d={animatedPath}
                fill="none"
                stroke="#00eaff"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Nodes */}
              {points.map(([x, y], i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={y + Math.sin(t / 14 + i) * 2}
                  r="3.5"
                  fill="#00eaff"
                />
              ))}

              {/* Axis labels */}
              <text x="18" y="55" fill="#00eaff" fontSize="12">
                Value
              </text>
              <text x="520" y="290" fill="#00eaff" fontSize="12">
                Time
              </text>
            </svg>
          </div>
        </div>

        {/* 🧠 RIGHT — Text */}
        <div className="w-full md:w-[40%] space-y-10">
          <h3 className="text-cyan-300 tracking-widest uppercase text-sm">
            Live Intelligence
          </h3>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Adaptive
            <br />
            <span className="text-cyan-400">Decision Analytics</span>
          </h2>

          <p className="text-cyan-200/80 text-lg leading-relaxed">
            A continuously evolving intelligence layer that tracks trends,
            adapts to change, and supports high-impact decisions in real time.
          </p>

          <div className="space-y-6">
            {[
              "Trend Forecasting",
              "Operational Efficiency",
              "Risk Pattern Analysis",
              "System Performance Signals",
            ].map((item, i) => (
              <div
                key={i}
                className="relative text-white text-lg tracking-wide border-l-2 border-cyan-400/40 pl-6"
              >
                <span className="absolute left-0 top-2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_12px_#00eaff]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🎞️ Animations */}
      <style jsx>{`
        @keyframes geoDrop {
          0% {
            transform: translateY(0) scale(0.6) rotate(45deg);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          60% {
            transform: translateY(70vh) scale(1);
            opacity: 0.35;
          }
          100% {
            transform: translateY(130vh) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
