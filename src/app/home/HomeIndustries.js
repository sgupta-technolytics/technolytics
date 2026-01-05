"use client";

import { useEffect, useRef } from "react";

export default function HomeIndustries() {
  const scrollRef = useRef(null);
  const pauseRef = useRef(false);

  const industries = [
    {
      title: "Automobile",
      image:
        "https://images.unsplash.com/photo-1527383418406-f85a3b146499?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: "Pharmaceutical",
      image:
        "https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: "Construction",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: "Manufacturing",
      image:
        "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: "Retail & FMCG",
      image:
        "https://images.unsplash.com/photo-1588848567248-8203ed798b4e?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: "Logistics & Warehousing",
      image:
        "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: "Energy & Utilities",
      image:
        "https://images.unsplash.com/photo-1691239562261-2ea945b4e2d4?q=80&w=1170&auto=format&fit=crop",
    },
  ];

  // AUTO SCROLL
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId;

    const loop = () => {
      if (!pauseRef.current) {
        el.scrollLeft += 0.45;

        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative w-full bg-[#050b16] py-28 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(0,180,255,0.18),transparent_55%)]" />

      {/* HEADER */}
      <div className="relative text-center mb-16 px-6">
        <h2 className="text-sm tracking-[0.45em] text-cyan-400 uppercase">
          Industries
        </h2>
      </div>

      {/* AUTO SCROLL TRACK */}
      <div
        ref={scrollRef}
        onMouseEnter={() => (pauseRef.current = true)}
        onMouseLeave={() => (pauseRef.current = false)}
        onTouchStart={() => (pauseRef.current = true)}
        onTouchEnd={() => (pauseRef.current = false)}
        className="
          relative
          max-w-7xl mx-auto
          flex gap-12 px-6
          overflow-hidden
        "
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE
        }}
      >
        {/* DUPLICATE FOR INFINITE LOOP */}
        {[...industries, ...industries].map((item, i) => (
          <div
            key={i}
            className="min-w-[260px] flex-shrink-0 group text-center"
          >
            {/* CARD */}
            <div className="relative h-[220px] rounded-lg overflow-hidden border border-cyan-500/10 bg-[#020814]">
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full h-full object-cover
                  opacity-80
                  transition-all duration-700 ease-out
                  group-hover:scale-110 group-hover:opacity-100
                "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* GLOW */}
            <div className="mx-auto w-14 h-[3px] bg-cyan-400 mt-5 mb-3 shadow-[0_0_18px_rgba(0,200,255,0.6)]" />

            {/* TITLE */}
            <p className="text-white text-lg tracking-wide">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
