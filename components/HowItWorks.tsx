"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      title: "Traffic In",
      description: "Targeted visitors are driven to the landing page from ads, social media, and email campaigns.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      title: "Lead Capture", 
      description: "A high-converting form captures names, emails, and phone numbers from visitors.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Follow-up Automation",
      description: "Automated email and SMS sequences nurture leads instantly, ensuring no opportunity is missed.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
    {
      title: "Conversion Tracking",
      description: "Every step is tracked, showing how many clicks turn into booked calls.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
      )
    }
  ];

  return (
    <section ref={ref} className="bg-ink">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center space-y-4"
          >
            <h2 className="headline-md text-white">
              HOW THE SYSTEM WORKS
            </h2>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              Step-by-step breakdown of the exact system I set up for clients
            </p>
          </motion.div>

          {/* Horizontal Flow (Desktop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="flex items-start justify-between relative">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                  className="flex-1 flex flex-col items-center text-center space-y-4"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-signal/10 rounded-full flex items-center justify-center text-signal">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="headline-sm text-white font-bold">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 font-body text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                  {/* Arrow (except for last step) */}
                  {idx < steps.length - 1 && (
                    <div className="absolute top-8 left-full w-full flex justify-center">
                      <svg className="w-8 h-8 text-signal" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vertical Stack (Mobile) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:hidden space-y-8"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-signal/10 rounded-full flex items-center justify-center text-signal">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="headline-sm text-white font-bold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 font-body text-sm leading-relaxed max-w-sm">
                  {step.description}
                </p>

                {/* Arrow (except for last step) */}
                {idx < steps.length - 1 && (
                  <div className="py-4">
                    <svg className="w-8 h-8 text-signal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center pt-8"
          >
            <Link href="#demo" className="btn bg-signal text-ink hover:bg-signal/90 font-bold">
              SEE IT IN ACTION
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
