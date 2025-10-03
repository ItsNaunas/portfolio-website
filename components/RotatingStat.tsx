"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rotatingStats } from "@/lib/data";

export default function RotatingStat() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      return; // Don't start rotation if user prefers reduced motion
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingStats.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute font-display text-[clamp(20px,3.5vw,32px)] tracking-tight text-center"
        >
          {rotatingStats[currentIndex].text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

