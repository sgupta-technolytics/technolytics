export const metadata = {
  title: "Intelligent Services | Technolytics",
  description:
    "Technolytics delivers AI-powered platforms, advanced analytics, digital twins, and intelligent automation for future-ready enterprises.",
};

export default function ServicesPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-36 pb-28 px-6 bg-gradient-to-br from-[#040914] via-[#020A16] to-black">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,160,255,0.25),transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto text-center">
          <span className="uppercase tracking-widest text-cyan-400 text-xs">
            Services
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Engineering
            <span className="block text-cyan-400">
              Intelligent Enterprises
            </span>
          </h1>

          <p className="mt-6 text-white/70 text-lg max-w-3xl mx-auto">
            We design AI-driven platforms and services that transform data into
            autonomous decision intelligence — continuously, securely, and at scale.
          </p>
        </div>
      </section>

      {/* ================= SERVICE CARDS ================= */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {[
            {
              title: "AI Platforms",
              tag: "Core Intelligence",
              desc:
                "Enterprise-grade AI platforms for demand, supply, and production intelligence.",
            },
            {
              title: "Advanced Analytics",
              tag: "Predict & Optimize",
              desc:
                "Prescriptive and predictive analytics that convert complexity into clarity.",
            },
            {
              title: "Digital Twin",
              tag: "Simulate Reality",
              desc:
                "Virtual replicas enabling real-time scenario modeling and optimization.",
            },
            {
              title: "Control Tower",
              tag: "Unified Visibility",
              desc:
                "End-to-end command centers with autonomous decision capabilities.",
            },
            {
              title: "Integrated Planning",
              tag: "Connected Decisions",
              desc:
                "Cross-functional planning across demand, supply, and finance.",
            },
            {
              title: "Intelligent Automation",
              tag: "Self-Learning Systems",
              desc:
                "AI-powered automation that adapts, learns, and scales with your business.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10
              bg-gradient-to-br from-white/5 to-white/0 p-8
              hover:border-cyan-400/40 transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                bg-[radial-gradient(circle_at_top,rgba(0,180,255,0.25),transparent_60%)]
                transition"
              />

              <div className="relative">
                <span className="text-xs uppercase tracking-widest text-cyan-400">
                  {service.tag}
                </span>

                <h3 className="mt-3 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-white/70 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VALUE SECTION ================= */}
      <section className="relative py-24 px-6 bg-[#020A16]">
        <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-2 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Intelligence That Evolves
            </h2>

            <p className="mt-6 text-white/70">
              Our services are designed to move beyond dashboards and automation —
              enabling self-learning systems that continuously improve decisions
              across your enterprise.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-white/80">
              <div>✔ AI-first architecture</div>
              <div>✔ Secure by design</div>
              <div>✔ Scalable globally</div>
              <div>✔ Industry-proven</div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-cyan-500/20
            bg-gradient-to-br from-cyan-500/20 to-blue-800/10 p-10">
            <p className="text-lg font-semibold text-cyan-300">
              “The future belongs to organizations that let intelligence flow
              across every decision.”
            </p>
            <p className="mt-4 text-white/60">
              — Technolytics Vision
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,160,255,0.2),transparent_65%)]" />

        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Build Intelligent Systems
          </h2>

          <p className="mt-6 text-white/70">
            Discover how Technolytics services can transform your operations
            into adaptive, AI-driven ecosystems.
          </p>

          <a
            href="/get-demo"
            className="inline-block mt-10 px-9 py-4 rounded-full
            bg-cyan-500 text-black font-semibold
            hover:bg-cyan-400 transition
            shadow-[0_0_35px_rgba(0,200,255,0.55)]"
          >
            Request a Demo
          </a>
        </div>
      </section>
    </main>
  );
}
