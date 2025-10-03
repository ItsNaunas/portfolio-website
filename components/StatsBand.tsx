"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { stats } from "@/lib/data";

// Count up animation hook
function useCountUp(end: number, duration: number, isInView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return count;
}

export default function StatsBand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Parse the metrics to extract numbers for count-up animation
  const getCountUpValue = (metric: string) => {
    const number = parseInt(metric.replace(/[^0-9]/g, ''));
    return isNaN(number) ? 0 : number;
  };

  const getCountUpSuffix = (metric: string) => {
    return metric.replace(/[0-9]/g, '');
  };

  return (
    <section ref={ref} className="bg-signal py-16 md:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {stats.map((stat, idx) => {
            const endValue = getCountUpValue(stat.metric);
            const suffix = getCountUpSuffix(stat.metric);
            const count = useCountUp(endValue, 2000, isInView); // 2 second animation
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Number - Big, bold, white with count-up animation */}
                <p className="font-display text-[clamp(28px,4.5vw,48px)] text-white leading-none font-bold">
                  {suffix.includes('+') ? '+' : ''}{count}{suffix.replace('+', '')}
                </p>
                
                {/* Label - Same size, uppercase, bold, black */}
                <div className="font-display text-[clamp(28px,4.5vw,48px)] text-ink leading-tight font-bold uppercase tracking-wide">
                  {stat.label.split(' ').map((word, wordIdx) => (
                    <p key={wordIdx}>{word}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

