"use client";

import Head from "next/head";

export default function GetDemo() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>Request a Demo | Technolytics – AI & Data Analytics</title>
        <meta
          name="description"
          content="Book a demo with Technolytics to transform your supply chain using AI, machine learning, and advanced analytics."
        />
        <meta
          name="keywords"
          content="AI supply chain, data analytics demo, AI logistics, Technolytics demo"
        />
      </Head>

      {/* ================= PAGE ================= */}
      <section className="min-h-screen bg-[#050A15] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ================= LEFT CONTENT ================= */}
          <div className="bg-[#0a1222] rounded-2xl p-8 md:p-10 shadow-xl border border-blue-500/10">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to take your{" "}
              <span className="text-blue-400">business intelligence</span>{" "}
              to the next level?
            </h1>

            <p className="mt-4 text-blue-200 text-lg">
              Your one-stop solution for smarter, scalable & AI-driven
              transformation.
            </p>

            {/* FEATURES */}
            <div className="mt-8 bg-[#050A15] rounded-xl p-6 border border-blue-500/10">
              <ul className="space-y-4">
                {[
                  "AI-Driven Intelligence",
                  "Advanced Data Analytics",
                  "End-to-End Digital Transformation",
                  "Seamless Orchestration",
                  "Future-Ready Solutions",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-blue-100">
                    <span className="w-3 h-3 mr-3 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(0,180,255,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* TRUST */}
            <p className="mt-6 text-sm text-blue-300">
              Empowering <span className="text-blue-400 font-semibold">75+</span>{" "}
              enterprises globally
            </p>

            {/* LOGOS (optional placeholders) */}
            <div className="mt-4 flex flex-wrap gap-6 opacity-80">
              <span className="text-blue-400 font-semibold">Enterprise</span>
              <span className="text-blue-400 font-semibold">Retail</span>
              <span className="text-blue-400 font-semibold">Logistics</span>
              <span className="text-blue-400 font-semibold">Manufacturing</span>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="bg-[#0a1222] rounded-2xl p-8 md:p-10 shadow-xl border border-blue-500/10">
            <form className="space-y-5">
              {[
                { label: "Name", type: "text" },
                { label: "Email", type: "email" },
                { label: "Company Name", type: "text" },
                { label: "Contact Number", type: "tel" },
              ].map((field, i) => (
                <input
                  key={i}
                  type={field.type}
                  placeholder={field.label}
                  className="w-full px-4 py-3 rounded-lg bg-[#050A15] border border-blue-500/20
                  text-white placeholder-blue-300 focus:outline-none focus:ring-2
                  focus:ring-blue-500 transition"
                />
              ))}

              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[#050A15] border border-blue-500/20
                text-white placeholder-blue-300 focus:outline-none focus:ring-2
                focus:ring-blue-500 transition"
              />

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white
                font-semibold rounded-lg transition-all duration-300
                hover:shadow-[0_0_30px_rgba(0,180,255,0.8)]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
