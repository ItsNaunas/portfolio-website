"use client";

import { motion } from "framer-motion";
import RotatingStat from "./RotatingStat";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: -24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const statBlockVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.8 },
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
            {/* BY NAUNAS stacked vertically */}
            <motion.div variants={wordVariants} className="text-signal font-body text-lg tracking-[0.2em] uppercase space-y-2">
              <div>BY</div>
              <div>NAUNAS</div>
            </motion.div>
            <motion.h1 variants={wordVariants} className="headline-xl text-white">
              CONSULTANT
            </motion.h1>
          </div>

          {/* Main headline stack */}
          <div className="space-y-12">

            {/* AGENCIES with orange stat block */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <motion.h1 variants={wordVariants} className="headline-xl text-white">
                AGENCIES
              </motion.h1>

              {/* Rotating stat block */}
              <motion.div
                variants={statBlockVariants}
                className="bg-signal text-ink px-12 py-10 min-w-[400px] h-[120px] flex items-center justify-center rounded-[2px] shadow-lg"
              >
                <RotatingStat />
              </motion.div>
            </div>

            {/* Third line: JOIN button + COACHES */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <Link href="#join" className="btn inline-block min-w-[400px] h-[120px] flex items-center justify-center text-[clamp(20px,3.5vw,32px)] font-bold">
                JOIN
              </Link>
              <motion.h1 variants={wordVariants} className="headline-xl text-white">
                COACHES
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

