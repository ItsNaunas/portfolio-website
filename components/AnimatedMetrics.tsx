"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Metric {
  metric: string;
  label: string;
  description?: string;
}

interface AnimatedMetricsProps {
  title: string;
  metrics: Metric[];
  className?: string;
}

export default function AnimatedMetrics({ title, metrics, className = "" }: AnimatedMetricsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`space-y-6 ${className}`}>
      <h3 className="text-signal font-display text-sm uppercase tracking-wide">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-6 bg-white/5 border border-white/10 rounded-lg hover:border-signal/30 transition-colors"
          >
            <motion.div
              className="text-signal font-display text-3xl mb-2"
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {metric.metric}
            </motion.div>
            <div className="text-white/90 font-body font-medium mb-1">{metric.label}</div>
            {metric.description && (
              <div className="text-white/60 font-body text-sm">{metric.description}</div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
