export default function HomeAbout() {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-black overflow-hidden">

      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,160,255,0.15),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,120,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:140px_140px] opacity-10" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <span className="inline-block mb-6 text-xs tracking-[0.35em] uppercase text-cyan-400">
          Who We Are
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          About <span className="text-cyan-400">Technolytics</span>
        </h2>

        {/* Divider */}
        <div className="mx-auto mb-10 w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-cyan-100/70 leading-relaxed">
          We combine{" "}
          <span className="text-white font-medium">
            Artificial Intelligence, Machine Learning,
          </span>{" "}
          and{" "}
          <span className="text-white font-medium">
            Advanced Data Analytics
          </span>{" "}
          to help enterprises automate critical decisions, optimize complex
          processes, and innovate at scale — faster than the competition.
        </p>

        {/* Subtle highlight cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Decision Automation",
            "Operational Intelligence",
            "Predictive Insights",
          ].map((item, i) => (
            <div
              key={i}
              className="relative px-6 py-8 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#020c14] via-black to-black text-white text-sm tracking-wide
                         shadow-[0_0_40px_rgba(0,160,255,0.12)]
                         hover:shadow-[0_0_60px_rgba(0,160,255,0.22)]
                         transition-all"
            >
              <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-2xl opacity-40" />
              <span className="relative">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
