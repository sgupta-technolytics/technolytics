// src/app/components/StatsSection.jsx
"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { percent: "15–25%", title: "Improvement in", subtitle: "Forecast Accuracy" },
    { percent: "10–15%", title: "Reduction in", subtitle: "Inventory" },
    { percent: "8–10%", title: "Reduction", subtitle: "in Carbon Emissions" },
    { percent: "20–35%", title: "Improvement in", subtitle: "Planner Productivity" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-32 bg-black bg-gradient-to-r from-black via-[#041012] to-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14 text-center">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.06 }}
            className="relative group cursor-pointer"
          >
            {/* Percent text */}
            <motion.h2
              className="text-6xl font-light text-white 
              drop-shadow-[0_0_12px_#00ffe1]"
              animate={{ textShadow: "0 0 20px #00ffe1" }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "mirror" }}
            >
              {item.percent}
            </motion.h2>

            {/* Titles */}
            <p className="text-[#00ffe1] text-lg mt-4 tracking-wide
            drop-shadow-[0_0_6px_#00ffe1a0]">
              {item.title}
              <br />
              {item.subtitle}
            </p>

            {/* Divider */}
            {i !== stats.length - 1 && (
              <div className="hidden md:block h-24 w-[1.5px] 
                bg-[#002d28] absolute right-[-35px] top-1/2 -translate-y-1/2
                transition-all duration-500 group-hover:bg-[#00ffe1]
                group-hover:shadow-[0_0_12px_#00ffe1]">
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
