"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/lib/data";

export default function StatsBand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-signal py-16 md:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Number - Big, bold, white */}
              <p className="font-display text-[clamp(28px,4.5vw,48px)] text-white leading-none font-bold">
                {stat.metric}
              </p>
              
              {/* Label - Same size, uppercase, bold, black */}
              <div className="font-display text-[clamp(28px,4.5vw,48px)] text-ink leading-tight font-bold uppercase tracking-wide">
                {stat.label.split(' ').map((word, wordIdx) => (
                  <p key={wordIdx}>{word}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

