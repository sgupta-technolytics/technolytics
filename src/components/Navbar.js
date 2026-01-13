"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const MenuWrapper = ({ name, label, children }) => (
    <div
      className="relative"
      onMouseEnter={() => setActiveMenu(name)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button className="hover:text-cyan-400 transition">
        {label}
      </button>

      {activeMenu === name && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/85 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* BRAND */}
        <Link
          href="/"
          className="text-white text-xl font-semibold tracking-[0.22em] hover:text-cyan-400 transition"
        >
          TECHNOLYTICS
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-14 text-sm font-medium text-white/75">

          {/* SOLUTIONS */}
          <MenuWrapper name="solutions" label="SOLUTIONS">
            <MegaMenu
              title="Engineering Intelligent Solutions"
              subtitle="AI platforms powering autonomous supply chains."
              sections={[
                {
                  title: "Platforms",
                  links: [
                    ["SCAI", "/services"],
                    ["Integrated Planning", "/services"],
                    ["Digital Twin", "/services"],
                  ],
                },
                {
                  title: "Products",
                  links: [
                    ["Demand AI", "/services"],
                    ["Supply AI", "/services"],
                    ["Production AI", "/services"],
                  ],
                },
                {
                  title: "Services",
                  links: [
                    ["Control Tower", "/services"],
                    ["Advanced Analytics", "/services"],
                    ["4PL", "/services"],
                  ],
                },
              ]}
            />
          </MenuWrapper>

          {/* RESOURCES */}
          <MenuWrapper name="resources" label="RESOURCES">
            <MegaMenu
              title="Insights That Drive Decisions"
              subtitle="Thought leadership, research, and industry learnings."
              sections={[
                {
                  title: "Explore",
                  links: [
                    ["Blog & Insights", "/services"],
                    ["Case Studies", "/services"],
                    ["Whitepapers", "/services"],
                  ],
                },
              ]}
              narrow
            />
          </MenuWrapper>

          {/* COMPANY */}
          <MenuWrapper name="company" label="COMPANY">
            <MegaMenu
              title="Building the Future of Intelligence"
              subtitle="People, purpose, and innovation at Technolytics."
              sections={[
                {
                  title: "Company",
                  links: [
                    ["About Us", "/services"],
                    ["Careers", "/careers"],   // ✅ stays careers
                    ["Contact", "/services"],
                  ],
                },
              ]}
              narrow
            />
          </MenuWrapper>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/get-demo"
            className="px-7 py-3 rounded-full bg-cyan-500 text-black font-semibold
            hover:bg-cyan-400 transition shadow-[0_0_30px_rgba(0,200,255,0.55)]"
          >
            REQUEST A DEMO
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-6">

          {[
            {
              title: "Solutions",
              links: [
                ["SCAI", "/services"],
                ["Demand AI", "/services"],
                ["Control Tower", "/services"],
              ],
            },
            {
              title: "Resources",
              links: [
                ["Blog", "/src/services"],
                ["Case Studies", "/services"],
              ],
            },
            {
              title: "Company",
              links: [
                ["About", "/services"],
                ["Careers", "/careers"], // ✅ stays careers
                ["Contact", "/services"],
              ],
            },
          ].map((section, i) => (
            <details key={i} className="group">
              <summary className="cursor-pointer text-white text-lg font-medium">
                {section.title}
              </summary>
              <div className="mt-3 pl-4 space-y-3 border-l border-cyan-500/30">
                {section.links.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="block text-white/70 hover:text-cyan-400 transition"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </details>
          ))}

          <Link
            href="/get-demo"
            className="block text-center mt-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold"
          >
            Request a Demo
          </Link>
        </div>
      )}
    </header>
  );
}

/* ================= MEGA MENU ================= */

function MegaMenu({ title, subtitle, sections, narrow }) {
  return (
    <div
      className={`bg-[#060b14]/95 backdrop-blur-xl border border-cyan-500/15
      rounded-2xl shadow-[0_0_80px_rgba(0,180,255,0.18)]
      ${narrow ? "w-[520px]" : "w-[900px]"} p-10`}
    >
      <div className={`grid ${narrow ? "grid-cols-2" : "grid-cols-4"} gap-10`}>

        <div>
          <h3 className="text-2xl font-semibold text-white leading-snug">
            {title}
          </h3>
          <p className="text-sm text-cyan-300/60 mt-4">
            {subtitle}
          </p>
        </div>

        {sections.map((section, i) => (
          <div key={i}>
            <h4 className="text-white mb-4 font-semibold">
              {section.title}
            </h4>
            <ul className="space-y-3 text-white/70">
              {section.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-cyan-400 transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
