export const metadata = {
  title: "AI Solutions & Services | Technolytics",
  description:
    "Explore Technolytics AI platforms, analytics services, and intelligent enterprise solutions built for scale and performance.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#050A15] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-40 pb-32 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,200,255,0.15),transparent_60%)]" />

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Intelligent <span className="text-cyan-400">Enterprise</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-white/70">
          Building AI-powered platforms and analytics systems that redefine how
          enterprises operate, decide, and scale.
        </p>
      </section>

      {/* ================= FEATURE STRIP ================= */}
      <section className="border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="group transition hover:-translate-y-1"
            >
              <div className="text-cyan-400 text-3xl mb-3">
                {f.icon}
              </div>
              <h4 className="font-semibold mb-2">{f.title}</h4>
              <p className="text-sm text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid gap-14 md:grid-cols-2">

          {CORE_SERVICES.map((s, i) => (
            <div
              key={i}
              className="group relative p-10 rounded-3xl
              bg-gradient-to-br from-[#0a1222] to-[#060b14]
              border border-cyan-500/15
              hover:border-cyan-400 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0
              group-hover:opacity-100 transition
              bg-[linear-gradient(120deg,rgba(0,200,255,0.15),transparent_60%)]" />

              <h3 className="relative text-2xl font-semibold mb-4">
                {s.title}
              </h3>

              <p className="relative text-white/70 leading-relaxed">
                {s.desc}
              </p>

              <div className="relative mt-6 text-cyan-400 font-medium">
                → Learn more
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="relative py-28 bg-[#060b14]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-14">
            Industries We Empower
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {INDUSTRIES.map((i, idx) => (
              <div
                key={idx}
                className="relative p-8 rounded-2xl bg-[#0a1222]
                border border-white/10 hover:border-cyan-400
                transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,200,255,0.25)]"
              >
                <h4 className="text-xl font-semibold mb-3">{i}</h4>
                <p className="text-white/60 text-sm">
                  AI-driven intelligence tailored for {i.toLowerCase()} ecosystems.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-bold mb-20 text-center">
          Our Engagement Model
        </h2>

        <div className="grid md:grid-cols-4 gap-12">
          {PROCESS.map((p, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full
              bg-cyan-500/20 border border-cyan-400
              flex items-center justify-center text-xl font-bold text-cyan-400">
                {i + 1}
              </div>
              <h4 className="font-semibold mb-2">{p}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-28 text-center border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-cyan-500/20 blur-3xl" />

        <h2 className="relative text-4xl font-bold">
          Let’s Build the Future Together
        </h2>

        <p className="relative mt-4 text-white/70 max-w-xl mx-auto">
          Partner with Technolytics to unlock the full potential of AI-driven
          enterprise intelligence.
        </p>

        <a
          href="/get-demo"
          className="relative inline-block mt-10 px-12 py-4 rounded-full
          bg-cyan-500 text-black font-semibold
          hover:bg-cyan-400 transition
          shadow-[0_0_50px_rgba(0,200,255,0.65)]"
        >
          Request a Demo
        </a>
      </section>
    </main>
  );
}

/* ================= DATA ================= */

const FEATURES = [
  { icon: "⚡", title: "Speed", desc: "Real-time intelligence at scale" },
  { icon: "🧠", title: "AI Core", desc: "Advanced ML & predictive models" },
  { icon: "🔒", title: "Security", desc: "Enterprise-grade architecture" },
  { icon: "📈", title: "Scalability", desc: "Built for growth & resilience" },
];

const CORE_SERVICES = [
  {
    title: "AI Decision Intelligence",
    desc:
      "Autonomous decision systems combining AI, data science, and domain logic to drive outcomes.",
  },
  {
    title: "Advanced Analytics Platforms",
    desc:
      "Modern analytics stacks delivering deep insights across supply chains and operations.",
  },
  {
    title: "Digital Twin & Simulation",
    desc:
      "Virtual replicas enabling forecasting, risk modeling, and scenario planning.",
  },
  {
    title: "Control Tower Solutions",
    desc:
      "Unified visibility platforms providing real-time control across enterprise networks.",
  },
];

const INDUSTRIES = [
  "Retail & E-Commerce",
  "Logistics & Supply Chain",
  "Manufacturing",
  "Consumer Goods",
  "Healthcare",
  "Energy & Utilities",
];

const PROCESS = [
  "Discovery & Strategy",
  "Design & Architecture",
  "Build & Integrate",
  "Scale & Optimize",
];
