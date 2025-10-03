"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/lib/data";

export default function StatsBand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-signal py-12 md:py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center md:text-left"
            >
              <p className="font-display text-[clamp(32px,5vw,56px)] text-ink leading-none mb-2">
                {stat.metric}
              </p>
              <p className="text-ink/80 font-body text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

