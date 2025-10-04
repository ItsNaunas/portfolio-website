"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelinePhase {
  phase: string;
  description: string;
}

interface DevelopmentTimelineProps {
  timeline: TimelinePhase[];
  title?: string;
}

export default function DevelopmentTimeline({ timeline, title = "Development Timeline" }: DevelopmentTimelineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="headline-md text-white mb-4">{title}</h2>
        <p className="text-white/70 font-body text-lg max-w-2xl">
          A detailed breakdown of the development process, from concept to launch.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10" />
        
        <div className="space-y-12">
          {timeline.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-start gap-6"
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-signal text-ink rounded-full flex items-center justify-center font-display font-bold text-lg">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div className="space-y-3">
                  <h3 className="text-white font-display text-xl">{phase.phase}</h3>
                  <p className="text-white/80 font-body text-lg leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
