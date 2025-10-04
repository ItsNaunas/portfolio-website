"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { rotatingStats } from "@/lib/data";

export default function RotatingStat() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setI((p) => (p + 1) % rotatingStats.length);
    }, 2400); // a hair slower for readability
    return () => clearInterval(id);
  }, [reduce]);

  const item = rotatingStats[i];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Mobile: Two lines like BY NAUNAS */}
          <div className="md:hidden space-y-2 font-body text-lg tracking-[0.2em] uppercase">
            <div>{item?.line1 ?? ""}</div>
            <div>{item?.line2 ?? ""}</div>
          </div>
          {/* Desktop: Single line in the box */}
          <div className="hidden md:block font-display text-[clamp(20px,3.5vw,32px)] tracking-tight">
            {item?.line1 ?? ""} {item?.line2 ?? ""}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

