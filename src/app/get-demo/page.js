"use client";

import Head from "next/head";
import { useState } from "react";

export default function GetDemo() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setError("");

    const form = e.target;

    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim(),
      phone: form.phone.value.trim(),
      message: form.message.value.trim(),
    };

    /* ===== CLIENT-SIDE VALIDATION ===== */
    if (formData.name.length < 3) {
      setError("Name must be at least 3 characters.");
      setLoading(false);
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (formData.company.length < 2) {
      setError("Company name is required.");
      setLoading(false);
      return;
    }

    if (formData.message.length < 10) {
      setError("Message must be at least 10 characters.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/send-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Request a Demo | Technolytics</title>
        <meta
          name="description"
          content="Request a personalized demo with Technolytics to explore AI-powered analytics and intelligent automation."
        />
      </Head>

      <section className="min-h-screen bg-[#050A15] px-4 py-28 flex items-center justify-center">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ===== LEFT CONTENT ===== */}
          <div className="text-white space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Experience <span className="text-blue-400">AI-Driven Intelligence</span>
            </h1>

            <p className="text-blue-200 text-lg">
              Discover how Technolytics helps organizations transform data into
              actionable insights using AI, analytics, and automation.
            </p>

            <ul className="space-y-3 text-blue-100">
              {[
                "AI-Powered Analytics & Insights",
                "Scalable Enterprise Solutions",
                "Smarter Decision Making",
                "Secure & Future-Ready Architecture",
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-blue-400 rounded-full mr-3 shadow-[0_0_10px_rgba(0,180,255,0.7)]" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm text-blue-300">
              Trusted by <span className="text-blue-400 font-semibold">75+</span>{" "}
              enterprises globally
            </p>
          </div>

          {/* ===== FORM ===== */}
          <div className="bg-[#0a1222] p-8 rounded-2xl border border-blue-500/10 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Request a Demo
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                required
                minLength={3}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-[#050A15] text-white
                border border-blue-500/20 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Work Email"
                className="w-full px-4 py-3 rounded-lg bg-[#050A15] text-white
                border border-blue-500/20 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                name="company"
                required
                minLength={2}
                placeholder="Company Name"
                className="w-full px-4 py-3 rounded-lg bg-[#050A15] text-white
                border border-blue-500/20 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                name="phone"
                type="tel"
                pattern="[0-9]{8,15}"
                placeholder="Contact Number (optional)"
                className="w-full px-4 py-3 rounded-lg bg-[#050A15] text-white
                border border-blue-500/20 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                name="message"
                rows={4}
                minLength={10}
                required
                placeholder="Tell us about your requirement"
                className="w-full px-4 py-3 rounded-lg bg-[#050A15] text-white
                border border-blue-500/20 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                disabled={loading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500
                text-white rounded-lg font-semibold transition
                disabled:opacity-60 hover:shadow-[0_0_25px_rgba(0,180,255,0.7)]"
              >
                {loading ? "Sending..." : "Request Demo"}
              </button>

              {status === "success" && (
                <p className="text-white text-center text-sm">
                  ✅ Demo request sent successfully
                </p>
              )}

              {status === "error" && (
                <p className="text-red text-center text-sm">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
