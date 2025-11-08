"use client";

import { motion } from "framer-motion";
import { offerBullets, mainCaseHighlight } from "@/lib/data";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/its-naunas/30min";

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
          className="grid md:grid-cols-2 gap-8 md:gap-16"
        >
          {/* Left Column: Text-driven */}
          <div className="space-y-6">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline-md md:headline-lg text-white leading-tight"
            >
              WEBSITES & SYSTEMS THAT TURN CLICKS INTO CLIENTS
            </motion.h2>

            {/* Bullet List */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {offerBullets.map((bullet, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
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
                  <span className="text-white/90 font-body text-base md:text-lg">{bullet}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                BOOK A CALL
              </Link>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-[#121212] p-4 md:p-6 space-y-4"
            >
              <div className="flex items-start gap-4">
                {/* Client Headshot */}
                <div className="w-12 h-12 bg-signal/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 bg-signal rounded-full"></div>
                </div>
                
                <div className="space-y-2">
                  {/* Quote */}
                  <p className="text-white/80 font-body text-sm md:text-base italic">
                    &quot;Naunas built our AI-powered Amazon audit tool that transformed our lead generation. We now process 100+ audits weekly with 83% email open rates.&quot;
                  </p>
                  
                  {/* Client Info */}
                  <div>
                    <p className="text-white font-body text-sm font-medium">Fesal</p>
                    <p className="text-white/60 font-body text-xs">Founder, E-CTRL</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual-driven */}
          <div className="space-y-6">
            {/* Case Study Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="/case-study-mockups/case study 1/e-ctrl-case2.png"
                alt="E-CTRL Case Study"
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Problem/Solution/Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              {/* Problem */}
              <div>
                <p className="text-signal font-body text-xs tracking-wide uppercase mb-1">Problem</p>
                <p className="text-white/90 font-body text-sm">{mainCaseHighlight.problem}</p>
              </div>

              {/* Solution */}
              <div>
                <p className="text-signal font-body text-xs tracking-wide uppercase mb-1">Solution</p>
                <p className="text-white/90 font-body text-sm">{mainCaseHighlight.solution}</p>
              </div>

              {/* Results Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-signal text-ink px-6 py-4"
              >
                <p className="font-display text-2xl font-bold">{mainCaseHighlight.result}</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

