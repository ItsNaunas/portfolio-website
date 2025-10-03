"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { mainCaseHighlight } from "@/lib/data";
import Image from "next/image";

export default function CaseHighlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-ink">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Device mockup */}
          <div className="relative">
            {/* Laptop frame */}
            <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
              <div className="aspect-video bg-ink border border-white/10 rounded overflow-hidden relative">
                {/* TODO: Replace with actual screenshot */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-signal/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-signal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-signal/5 to-transparent" />
              </div>
            </div>
          </div>

          {/* Right: Problem/Solution/Results */}
          <div className="space-y-6">
            <div>
              <p className="text-signal font-body text-xs tracking-wide uppercase mb-2">PROBLEM</p>
              <p className="text-white/90 text-lg">{mainCaseHighlight.problem}</p>
            </div>

            <div>
              <p className="text-signal font-body text-xs tracking-wide uppercase mb-2">SOLUTION</p>
              <p className="text-white/90 text-lg">{mainCaseHighlight.solution}</p>
            </div>

            {/* Results pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block"
            >
              <div className="bg-signal text-ink px-8 py-4">
                <p className="text-xs font-body tracking-wide uppercase mb-1">RESULTS</p>
                <p className="font-display text-2xl">{mainCaseHighlight.result}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

