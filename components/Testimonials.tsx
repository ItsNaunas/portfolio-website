"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Highlight component for emphasizing text
function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-signal/10 px-1 py-0.5 font-bold text-signal">
      {children}
    </span>
  );
}

// Marquee component adapted for your theme
function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${
        vertical ? "flex-col" : "flex-row"
      } ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)] ${
              vertical 
                ? "animate-marquee-vertical flex-col" 
                : "animate-marquee flex-row"
            } ${
              pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
            } ${
              reverse ? "[animation-direction:reverse]" : ""
            }`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// Testimonial card component
interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  description: React.ReactNode;
}

function TestimonialCard({ description, name, role, company }: TestimonialCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 space-y-4 mb-4 transition-all duration-300 hover:border-signal/30 hover:-translate-y-1">
      {/* Quote */}
      <div className="text-white/90 font-body text-sm leading-relaxed">
        {description}
      </div>

      {/* Stars */}
      <div className="flex flex-row gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 fill-signal text-signal"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Client info */}
      <div className="flex items-center gap-4">
        {/* Avatar placeholder */}
        <div className="w-10 h-10 bg-signal/20 rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-6 h-6 bg-signal rounded-full"></div>
        </div>
        
        <div>
          <p className="text-white font-body font-medium text-sm">{name}</p>
          <p className="text-white/60 font-body text-xs">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
}

// Testimonials data
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart',
    description: (
      <p>
        Naunas transformed our website into a lead generation machine.
        <Highlight>Our conversion rate increased by 82% in just 7 days.</Highlight> The 
        results speak for themselves - we&apos;re now booking 3x more qualified calls.
      </p>
    ),
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'GrowthCo',
    description: (
      <p>
        Working with Naunas was a game-changer for our business.
        <Highlight>We launched our new funnel 3 weeks ahead of schedule</Highlight> and 
        immediately saw a 67% increase in lead quality. Highly recommend!
      </p>
    ),
  },
  {
    name: 'Emma Rodriguez',
    role: 'Founder',
    company: 'FitnessPro',
    description: (
      <p>
        The ROI has been incredible. <Highlight>We&apos;re generating 5x more qualified 
        leads</Highlight> since implementing Naunas&apos; system. The automation alone 
        saves us 10 hours per week.
      </p>
    ),
  },
  {
    name: 'David Park',
    role: 'CTO',
    company: 'SaaSLaunch',
    description: (
      <p>
        Naunas understood our technical requirements perfectly.
        <Highlight>Our demo booking rate jumped from 12% to 34%</Highlight> after 
        the optimization. The technical implementation was flawless.
      </p>
    ),
  },
  {
    name: 'Lisa Thompson',
    role: 'VP Sales',
    company: 'Enterprise Solutions',
    description: (
      <p>
        Best investment we&apos;ve made this year. <Highlight>Sales qualified leads 
        increased by 156%</Highlight> and our sales cycle shortened by 40%. 
        Naunas delivers results.
      </p>
    ),
  },
  {
    name: 'Alex Kumar',
    role: 'Head of Growth',
    company: 'StartupXYZ',
    description: (
      <p>
        The system Naunas built is incredibly sophisticated yet simple to use.
        <Highlight>We&apos;re converting 3x more visitors into paying customers.</Highlight> 
        The analytics and tracking are second to none.
      </p>
    ),
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-ink">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="headline-lg text-white mb-4">
            WHAT CLIENTS SAY
          </h2>
          <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what <span className="text-signal font-semibold">real clients</span> are saying about working with us.
          </p>
        </motion.div>

        {/* Testimonials Marquee */}
        <div className="relative mt-6 max-h-[600px] overflow-hidden">
          <div className="gap-4 md:columns-2 lg:columns-3">
            {/* Create 3 columns with 2 testimonials each */}
            {[0, 1, 2].map((columnIndex) => {
              // Distribute testimonials across 3 columns
              const columnTestimonials = [
                testimonials.slice(0, 2), // First 2 testimonials
                testimonials.slice(2, 4), // Next 2 testimonials  
                testimonials.slice(4, 6)  // Last 2 testimonials
              ][columnIndex];
              
              return (
                <Marquee
                  key={columnIndex}
                  vertical
                  className={`${
                    columnIndex === 0 ? "[--duration:60s]" : 
                    columnIndex === 1 ? "[--duration:30s]" : 
                    "[--duration:70s]"
                  }`}
                >
                  {columnTestimonials.map((card, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: Math.random() * 0.8,
                        duration: 1.2,
                      }}
                    >
                      <TestimonialCard {...card} />
                    </motion.div>
                  ))}
                </Marquee>
              );
            })}
          </div>
          {/* Gradient overlays */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-ink from-20% pointer-events-none"></div>
          <div className="absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-ink from-20% pointer-events-none"></div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/80 font-body text-lg mb-6">
            Ready to get similar results for your business?
          </p>
          <a 
            href="#connect" 
            className="btn bg-signal text-ink hover:bg-signal/90 font-bold text-lg px-8 py-4"
          >
            GET STARTED TODAY
          </a>
        </motion.div>
      </div>
    </section>
  );
}
