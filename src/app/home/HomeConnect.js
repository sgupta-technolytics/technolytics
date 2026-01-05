"use client";

export default function HomeConnect() {
  return (
    <section className="relative w-full bg-black py-28 px-6 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,160,255,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,160,255,0.08)_1px,transparent_1px)] bg-[size:140px_140px] opacity-20" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
          One Unified Platform to{" "}
          <span className="text-cyan-400">Connect</span>,{" "}
          <span className="text-cyan-400">Plan</span>, and{" "}
          <span className="text-cyan-400">Execute</span>
          <br className="hidden md:block" />
          your Entire Supply Chain
        </h2>

        {/* CTA BUTTON */}
        <div className="mt-12 flex justify-center">
          <button
            className="
              relative px-10 py-4 rounded-full
              bg-gradient-to-r from-cyan-400 to-blue-500
              text-black font-semibold text-lg
              shadow-[0_0_30px_rgba(0,180,255,0.6)]
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_45px_rgba(0,200,255,0.85)]
            "
          >
            Talk to Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}
