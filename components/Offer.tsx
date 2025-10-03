"use client";

import { motion } from "framer-motion";
import { offerBullets } from "@/lib/data";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Offer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-ink">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 md:gap-16"
        >
          {/* Left: Headline */}
          <div>
            <h2 className="headline-lg text-white">
              WEBSITES & SYSTEMS THAT TURN CLICKS INTO CLIENTS
            </h2>
          </div>

          {/* Right: Bullets + CTA */}
          <div className="space-y-8">
            <ul className="space-y-4">
              {offerBullets.map((bullet, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="w-6 h-6 text-signal mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90 font-body text-lg">{bullet}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-signal/10 border border-signal/20 p-6 space-y-4"
            >
              <p className="text-white/80 font-body text-sm">
                WANT RESULTS LIKE THIS?
              </p>
              <Link href="#call" className="btn">
                BOOK A CALL
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

