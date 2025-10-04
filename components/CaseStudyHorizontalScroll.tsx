"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ScrollSection {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  content: string;
  metrics?: string[];
}

interface CaseStudyHorizontalScrollProps {
  sections: ScrollSection[];
}

export default function CaseStudyHorizontalScroll({ sections }: CaseStudyHorizontalScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-ink py-16">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="headline-md text-white mb-4">Project Deep Dive</h2>
          <p className="text-white/70 font-body text-lg max-w-2xl">
            A comprehensive look at the development process, technical challenges, and business impact.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scroll Indicator */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-full mb-8">
            <motion.div
              className="h-full bg-signal rounded-full"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          {/* Horizontal Scroll Content */}
          <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[45vw]"
              >
                <div className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-6">
                  {/* Section Header */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-signal text-ink rounded-full flex items-center justify-center font-display text-sm font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-white font-display text-xl">{section.title}</h3>
                    </div>
                    {section.subtitle && (
                      <p className="text-signal font-body text-sm uppercase tracking-wide">
                        {section.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Image */}
                  {section.image && (
                    <div className="aspect-video bg-ink border border-white/10 rounded overflow-hidden">
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="space-y-4">
                    <p className="text-white/90 font-body text-lg leading-relaxed">
                      {section.content}
                    </p>

                    {/* Metrics */}
                    {section.metrics && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                        {section.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <div className="text-signal font-display text-2xl mb-1">
                              {metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-2 text-white/50 font-body text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
              <span>Scroll horizontally to explore</span>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
