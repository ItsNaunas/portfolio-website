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

  const item = rotatingStats[i]?.text ?? "";

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(20px,3.5vw,32px)] tracking-tight text-center"
        >
          {item}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

