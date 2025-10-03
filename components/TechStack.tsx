"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { tech } from "@/lib/data";

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-ink">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="headline-sm text-white">TECH STACK</h2>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {tech.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-signal/30 transition-colors"
              >
                {/* TODO: Replace with actual tech icons */}
                <div className="w-6 h-6 bg-signal/20 rounded" />
                <span className="text-white/80 font-body text-sm">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

