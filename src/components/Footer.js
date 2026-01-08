import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-white/10">

      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(0,180,255,0.15)_0%,_transparent_65%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-white">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-semibold tracking-[0.22em]">
            TECHNOLYTICS
          </h3>
          <p className="text-sm text-white/60 mt-4 leading-relaxed">
            Engineering intelligent platforms using AI, Machine Learning, and
            Data Analytics to power future-ready enterprises.
          </p>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">
            Solutions
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/platforms/scai" className="hover:text-cyan-400">SCAI Platform</Link></li>
            <li><Link href="/products/demand-ai" className="hover:text-cyan-400">Demand AI</Link></li>
            <li><Link href="/services/control-tower" className="hover:text-cyan-400">Control Tower</Link></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">
            Resources
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/resources/blog" className="hover:text-cyan-400">Insights</Link></li>
            <li><Link href="/resources/case-studies" className="hover:text-cyan-400">Case Studies</Link></li>
            <li><Link href="/resources/whitepapers" className="hover:text-cyan-400">Whitepapers</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/company/about" className="hover:text-cyan-400">About Us</Link></li>
            <li><Link href="/company/careers" className="hover:text-cyan-400">Careers</Link></li>
            <li><Link href="/company/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Technolytics. All Rights Reserved.
      </div>
    </footer>
  );
}
