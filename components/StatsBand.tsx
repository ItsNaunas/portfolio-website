"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/lib/data";

// Component to handle individual stat
function StatItem({ stat, idx, isInView }: { stat: { primary: string; subtext?: string }; idx: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="flex flex-col items-center text-center space-y-3 md:space-y-4"
    >
      {/* Headline - Bold, ink (secondary color), dominant visual weight */}
      <p className="font-display text-[clamp(28px,4.5vw,48px)] text-ink leading-[1.05] font-bold uppercase tracking-tight">
        {stat.primary}
      </p>
    </motion.div>
  );
}

export default function StatsBand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-signal py-20 md:py-24 lg:py-28">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} idx={idx} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

