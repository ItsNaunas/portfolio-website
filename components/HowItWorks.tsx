"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/its-naunas/30min";
import Image from "next/image";

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      title: "Centralized Intake",
      description: "All traffic, forms, DMs, and inquiries enter one central intake layer. No scattered inboxes, no manual routing, no lost messages.",
      image: "/steps/step-1.png"
    },
    {
      title: "Lead & Client State", 
      description: "Every lead and client has a clear status, owner, and next action. No ambiguity, no guesswork, no lost context.",
      image: "/steps/step-2.png"
    },
    {
      title: "Automation & Admin",
      description: "Follow-ups, contracts, invoices, reminders, and onboarding are automated and connected. No manual chasing, no founder memory required.",
      image: "/steps/step-3.png"
    },
    {
      title: "Revenue & Operations Visibility",
      description: "Revenue, delivery, renewals, and bottlenecks are visible in one system. No spreadsheets, no fragmented tools, no operational blind spots.",
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
              WHAT CHANGES ON DAY 1
            </h2>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              Immediate control and certainty replace manual workflows and uncertainty
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

          {/* Headline and Supporting Block - Side by Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch"
          >
            {/* Left: Headline */}
            <div className="flex items-center md:items-center min-h-full">
              <h3 className="text-signal font-display headline-lg font-bold uppercase tracking-tight text-left leading-[0.95]">
                THE ENTIRE BACKEND — NOT JUST LEAD FLOW
              </h3>
            </div>

            {/* Right: Supporting Block */}
            <div className="space-y-4 md:space-y-5">
              <p className="text-white/80 font-body text-sm md:text-base leading-relaxed pl-4 md:pl-5 border-l-2 border-signal">
                Contracts and invoices generated automatically.
              </p>
              <p className="text-white/80 font-body text-sm md:text-base leading-relaxed pl-4 md:pl-5 border-l-2 border-signal">
                Forms wired directly into CRM and automations.
              </p>
              <p className="text-white/80 font-body text-sm md:text-base leading-relaxed pl-4 md:pl-5 border-l-2 border-signal">
                Client onboarding and delivery tracked in one place.
              </p>
              <p className="text-white/80 font-body text-sm md:text-base leading-relaxed pl-4 md:pl-5 border-l-2 border-signal">
                Renewals, follow-ups, and referrals handled by logic.
              </p>
              <p className="text-white/80 font-body text-sm md:text-base leading-relaxed pl-4 md:pl-5 border-l-2 border-signal">
                One source of truth for operations and revenue.
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center pt-8"
          >
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-signal text-ink hover:bg-signal/90 font-bold text-lg px-12 py-4"
            >
              INSTALL SYSTEM
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
