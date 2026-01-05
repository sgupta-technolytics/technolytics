"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-white font-bold text-xl tracking-wide">
          TECHNOLYTICS
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-white/80">

          {/* SOLUTIONS */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-cyan-400 transition">
              SOLUTIONS
              <span className="text-cyan-400">▾</span>
            </button>

            {/* MEGA MENU */}
            {open && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[1000px] bg-[#060b14] border border-cyan-500/15 rounded-xl shadow-2xl p-10">
                <div className="grid grid-cols-4 gap-10">

                  {/* LEFT INTRO */}
                  <div>
                    <h3 className="text-2xl font-semibold text-white leading-snug">
                      Creating<br />Sustainable<br />Value
                    </h3>
                  </div>

                  {/* PLATFORMS */}
                  <div>
                    <h4 className="text-white mb-3 font-semibold">Platforms</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="text-cyan-400 font-medium">SCAI</li>
                      <li>Integrated Business Planning</li>
                      <li>Risk Management & Digital Twin</li>
                      <li>Enterprise Data Management</li>

                      <li className="pt-3 text-cyan-400 font-medium">iTMS</li>
                      <li>Shipment Lifecycle Management</li>
                      <li>Execution Orchestration</li>
                      <li>Track & Trace</li>
                      <li>Logistics Analytics</li>
                    </ul>
                  </div>

                  {/* PRODUCTS */}
                  <div>
                    <h4 className="text-white mb-3 font-semibold">Products</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="text-cyan-400 font-medium">
                        Planning Products
                      </li>
                      <li>Demand AI</li>
                      <li>Replenishment AI</li>
                      <li>Production AI</li>
                      <li>Supply AI</li>

                      <li className="pt-3 text-cyan-400 font-medium">
                        Execution Products
                      </li>
                      <li>Order AI</li>
                      <li>Dispatch AI</li>
                      <li>Orchestration AI</li>
                      <li>Track AI</li>
                    </ul>
                  </div>

                  {/* SERVICES */}
                  <div>
                    <h4 className="text-white mb-3 font-semibold">Services</h4>
                    <ul className="space-y-2 text-white/70">
                      <li>Control Tower</li>
                      <li>4PL</li>
                      <li>Advanced Analytics</li>
                    </ul>
                  </div>

                </div>
              </div>
            )}
          </div>

          <button className="hover:text-cyan-400 transition">
            RESOURCES
          </button>

          <button className="hover:text-cyan-400 transition">
            COMPANY
          </button>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-[0_0_25px_rgba(0,200,255,0.5)]">
            REQUEST A DEMO
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
