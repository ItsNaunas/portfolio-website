"use client";

import { motion } from "framer-motion";
import RotatingStat from "./RotatingStat";
import Link from "next/link";

export default function Hero() {
  // Animation variants for the intro sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        when: "beforeChildren",
      },
    },
  };

  // Word-by-word reveal variants (centered stack)
  const wordRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.22, 
        ease: "easeOut"
      },
    },
  };

  // Side elements slide in variants with precise timing
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.45, 
        ease: "easeOut",
        delay: 0.52 // After last word (0.3s) + 0.22s delay
      },
    },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.45, 
        ease: "easeOut",
        delay: 0.58 // After last word (0.3s) + 0.28s delay
      },
    },
  };

  const slideInFromLeftCTA = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.45, 
        ease: "easeOut",
        delay: 0.64 // After last word (0.3s) + 0.34s delay
      },
    },
  };

  // Layout shift variants for smooth transition from centered to final layout
  const layoutShiftVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: 0.52 // Start shifting when side elements begin sliding
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-ink flex items-center pt-20 overflow-hidden">
      <div className="section-container w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* First line: BY NAUNAS + CONSULTANT */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            {/* BY NAUNAS stacked vertically - slides in from left */}
            <motion.div 
              variants={slideInFromLeft}
              className="text-signal font-body text-lg tracking-[0.2em] uppercase space-y-2"
            >
              <div>BY</div>
              <div>NAUNAS</div>
            </motion.div>
            
            {/* CONSULTANT - word reveal (0.0s) */}
            <motion.h1 
              variants={wordRevealVariants}
              className="headline-xl text-white"
            >
              CONSULTANT
            </motion.h1>
          </div>

          {/* Main headline stack */}
          <div className="space-y-12">
            {/* AGENCIES with orange stat block */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              {/* AGENCIES - word reveal (0.08s delay) */}
              <motion.h1 
                variants={wordRevealVariants}
                className="headline-xl text-white"
                transition={{ delay: 0.08 }}
              >
                AGENCIES
              </motion.h1>

              {/* Rotating stat block - slides in from right */}
              <motion.div
                variants={slideInFromRight}
                className="bg-signal text-ink px-12 py-10 min-w-[400px] h-[120px] flex items-center justify-center rounded-[2px] shadow-lg"
              >
                <RotatingStat />
              </motion.div>
            </div>

            {/* Third line: JOIN button + COACHES */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              {/* JOIN button - slides in from left */}
              <motion.div
                variants={slideInFromLeftCTA}
              >
                <Link href="#join" className="btn inline-block min-w-[400px] h-[120px] flex items-center justify-center text-[clamp(20px,3.5vw,32px)] font-bold">
                  JOIN
                </Link>
              </motion.div>
              
              {/* COACHES - word reveal (0.16s delay) */}
              <motion.h1 
                variants={wordRevealVariants}
                className="headline-xl text-white"
                transition={{ delay: 0.16 }}
              >
                COACHES
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

