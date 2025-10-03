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
        duration: 0.5,
        when: "beforeChildren",
      },
    },
  };

  // Centered stack animation (initial state)
  const centeredStackVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: 0.1
      },
    },
  };

  // Side elements slide in variants with staggered delays
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.65 // 0.5s (centered stack) + 0.15s (byline delay)
      },
    },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.75 // 0.5s (centered stack) + 0.25s (stat block delay)
      },
    },
  };

  const slideInFromLeftCTA = {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.8 // 0.5s (centered stack) + 0.3s (CTA delay)
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
            
            {/* CONSULTANT - part of centered stack */}
            <motion.h1 
              variants={centeredStackVariants}
              className="headline-xl text-white"
            >
              CONSULTANT
            </motion.h1>
          </div>

          {/* Main headline stack */}
          <div className="space-y-12">
            {/* AGENCIES with orange stat block */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              {/* AGENCIES - part of centered stack */}
              <motion.h1 
                variants={centeredStackVariants}
                className="headline-xl text-white"
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
              
              {/* COACHES - part of centered stack */}
              <motion.h1 
                variants={centeredStackVariants}
                className="headline-xl text-white"
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

