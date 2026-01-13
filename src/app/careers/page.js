"use client";

import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          role: e.target.role.value,
          experience: e.target.experience.value,
          message: e.target.message.value,
        }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      e.target.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>

      {/* CONTENT */}
      <section className="bg-[#050A15] pt-24 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="text-white space-y-6 md:sticky md:top-28">
            <h2 className="text-4xl font-bold">
              Join <span className="text-cyan-400">Technolytics</span>
            </h2>

            <p className="text-white/70 text-lg">
              Build intelligent platforms, solve real-world problems,
              and grow with a fast-moving AI company.
            </p>

            <ul className="space-y-3 text-white/80">
              <li>• High-impact AI & analytics projects</li>
              <li>• Strong engineering culture</li>
              <li>• Learning & growth-focused environment</li>
            </ul>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#0a1222] p-8 rounded-2xl border border-cyan-500/20
            shadow-[0_0_40px_rgba(0,200,255,0.25)] space-y-4"
          >
            <input
              name="name"
              required
              minLength={3}
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-[#050A15] rounded-lg
              border border-cyan-500/30 text-white outline-none
              focus:border-cyan-400"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-[#050A15] rounded-lg
              border border-cyan-500/30 text-white outline-none
              focus:border-cyan-400"
            />

            <select
              name="role"
              required
              className="w-full px-4 py-3 bg-[#050A15] rounded-lg
              border border-cyan-500/30 text-white outline-none"
            >
              <option value="">Select Role</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>AI / ML Engineer</option>
              <option>Data Analyst</option>
            </select>

            <select
              name="experience"
              required
              className="w-full px-4 py-3 bg-[#050A15] rounded-lg
              border border-cyan-500/30 text-white outline-none"
            >
              <option value="">Experience Level</option>
              <option>0–1 Years</option>
              <option>1–3 Years</option>
              <option>3–5 Years</option>
              <option>5+ Years</option>
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder="Why do you want to join us?"
              className="w-full px-4 py-3 bg-[#050A15] rounded-lg
              border border-cyan-500/30 text-white outline-none
              focus:border-cyan-400"
            />

            <button
              disabled={loading}
              className="w-full py-3 bg-cyan-500 text-black
              font-semibold rounded-lg hover:bg-cyan-400 transition
              disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Apply Now"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center">
                Application submitted successfully
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
