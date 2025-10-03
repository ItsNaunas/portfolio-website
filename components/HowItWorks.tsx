"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      title: "Traffic In",
      description: "Targeted visitors are driven to the landing page from ads, social media, and email campaigns.",
      image: "/steps/step-1.png"
    },
    {
      title: "Lead Capture", 
      description: "A high-converting form captures names, emails, and phone numbers from visitors.",
      image: "/steps/step-2.png"
    },
    {
      title: "Follow-up Automation",
      description: "Automated email and SMS sequences nurture leads instantly, ensuring no opportunity is missed.",
      image: "/steps/step-3.png"
    },
    {
      title: "Conversion Tracking",
      description: "Every step is tracked, showing how many clicks turn into booked calls.",
      image: "/steps/step-4.png"
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
            <div className="flex items-center justify-between relative">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                  className="flex-1 flex flex-col items-center text-center space-y-3 px-6"
                >
                  {/* Step Card - Grouped tightly */}
                  <div className="flex flex-col items-center space-y-3">
                    {/* Icon */}
                    <div className="w-48 h-48 flex items-center justify-center">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={256}
                        height={256}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="headline-sm text-signal font-bold">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 font-body text-sm leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (except for last step) */}
                  {idx < steps.length - 1 && (
                    <div className="absolute top-24 left-full w-full flex justify-center z-10">
                      <div className="bg-ink rounded-full p-2">
                        <svg className="w-6 h-6 text-signal" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                      </div>
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
            className="md:hidden space-y-12"
          >
            {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
                {/* Step Card - Grouped tightly */}
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon */}
                  <div className="w-48 h-48 flex items-center justify-center">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={256}
                      height={256}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="headline-sm text-signal font-bold">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 font-body text-sm leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (except for last step) */}
                {idx < steps.length - 1 && (
                  <div className="py-4">
                    <div className="bg-ink rounded-full p-2">
                      <svg className="w-6 h-6 text-signal" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                      </svg>
                    </div>
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
            className="text-center pt-16"
          >
            <Link href="#demo" className="btn bg-signal text-ink hover:bg-signal/90 font-bold text-lg px-12 py-4">
              SEE IT IN ACTION
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
