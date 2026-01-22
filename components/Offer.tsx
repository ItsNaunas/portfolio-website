"use client";

import { useRef } from "react";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { AnimatedBeamIntegration } from "@/components/ui/animated-beam-integration";
import AnimatedListDemo from "@/components/ui/animated-list";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";
import { motion, useInView } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/its-naunas/30min";

const intakeSources = [
  {
    name: "Website Forms",
    body: "Lead capture from landing pages, contact forms, and embedded widgets across your website.",
  },
  {
    name: "Email Capture",
    body: "Unified inbox processing with automatic lead extraction and CRM routing.",
  },
  {
    name: "Social Channels",
    body: "Instagram, LinkedIn, and other social platform lead capture integrated into one system.",
  },
  {
    name: "Referral Links",
    body: "Trackable referral URLs that route directly to qualification layer with attribution.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Intake Layer",
    description: [
      "Unified capture across website, email, social, referrals",
      "No raw leads touch the CRM",
      "Automatic routing to qualification layer",
    ],
    href: CALENDLY_URL,
    cta: "Install System",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        reverse
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:40s] transition-all duration-300 ease-out group-hover:scale-105"
      >
        {intakeSources.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-white/10 bg-white/5 hover:bg-white/10",
              "transform-gpu transition-all duration-300 ease-out"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-white/60">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Qualification Layer",
    description: [
      "AI-assisted diagnostics and scoring",
      "Automated routing based on fit",
      "Founder subjectivity removed",
    ],
    href: CALENDLY_URL,
    cta: "Install System",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "System Integration",
    description: [
      "Connects CRM, booking, payments, email",
      "Unified communication tools",
      "Single operating system across all tools",
    ],
    href: CALENDLY_URL,
    cta: "Install System",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamIntegration className="absolute inset-0 opacity-70 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Sales Layer",
    description: [
      "Automated booking and scheduling",
      "Pre-call context and outcome logging",
      "Contracts automated from qualification to close",
    ],
    className: "col-span-3 lg:col-span-1",
    href: CALENDLY_URL,
    cta: "Install System",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute top-10 left-1/2 -translate-x-1/2 origin-top scale-90 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-100"
      />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Optimisation Loop",
    description: [
      "System health checks and bottleneck detection",
      "Monitors uptime and conversion rates",
      "Continuous iteration and pipeline flow optimization",
    ],
    className: "col-span-3",
    href: CALENDLY_URL,
    cta: "Install System",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-60">
        <Image
          src="/features/optimisation-layer.png"
          alt="Optimisation Loop"
          width={1000}
          height={400}
          className="w-full h-full object-contain md:scale-150 scale-105 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out md:group-hover:scale-[1.6] group-hover:scale-110"
        />
      </div>
    ),
  },
];

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
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline-md md:headline-lg text-white leading-tight"
            >
              THE REVENUE OPERATING SYSTEM
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 font-body text-lg md:text-xl"
            >
              A backend system installed across your tools that runs acquisition, sales, delivery, and retention.
            </motion.p>
          </div>

          {/* System Layers Bento Grid */}
          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
