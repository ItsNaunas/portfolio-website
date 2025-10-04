"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { caseStudies } from "@/lib/data";
import Link from "next/link";

export default function CaseGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="case-studies" className="bg-ink">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.slice(0, 2).map((study, idx) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 24, rotate: idx % 2 === 0 ? -2 : 2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: idx % 2 === 0 ? -2 : 2 } : {}}
              whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Link href={`/case/${study.slug}`} className="block">
                <div className="bg-white/5 border border-white/10 p-6 space-y-6 transition-all duration-300 hover:border-signal/30">
                  {/* Device frame */}
                   <div className="aspect-[4/3] bg-ink border border-white/10 rounded overflow-hidden relative">
                     {study.image ? (
                       <img
                         src={study.image}
                         alt={study.title}
                         className={`w-full h-full object-contain ${study.slug === 'e-ctrl' ? 'scale-110' : ''}`}
                       />
                     ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-signal/10 to-transparent" />
                        <div className="absolute top-4 left-4 px-4 py-2 bg-signal text-ink text-xs font-display">
                          {study.title}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-signal font-body text-xs tracking-wide uppercase">Challenge</p>
                      <p className="text-white/80 text-sm mt-1">{study.problem}</p>
                    </div>

                    <div>
                      <p className="text-signal font-body text-xs tracking-wide uppercase">Outcome</p>
                      <p className="text-white font-body text-lg mt-1">{study.result}</p>
                    </div>

                    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-signal font-body text-sm">
                        Read case study →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Centered Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center my-16"
        >
          <h2 className="headline-md text-white">
            CASE STUDIES
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.slice(2, 4).map((study, idx) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 24, rotate: idx % 2 === 0 ? -2 : 2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: idx % 2 === 0 ? -2 : 2 } : {}}
              whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Link href={`/case/${study.slug}`} className="block">
                <div className="bg-white/5 border border-white/10 p-6 space-y-6 transition-all duration-300 hover:border-signal/30">
                  {/* Device frame */}
                   <div className="aspect-[4/3] bg-ink border border-white/10 rounded overflow-hidden relative">
                     {study.image ? (
                       <img
                         src={study.image}
                         alt={study.title}
                         className={`w-full h-full object-contain ${study.slug === 'e-ctrl' ? 'scale-110' : ''}`}
                       />
                     ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-signal/10 to-transparent" />
                        <div className="absolute top-4 left-4 px-4 py-2 bg-signal text-ink text-xs font-display">
                          {study.title}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-signal font-body text-xs tracking-wide uppercase">Challenge</p>
                      <p className="text-white/80 text-sm mt-1">{study.problem}</p>
                    </div>

                    <div>
                      <p className="text-signal font-body text-xs tracking-wide uppercase">Outcome</p>
                      <p className="text-white font-body text-lg mt-1">{study.result}</p>
                    </div>

                    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-signal font-body text-sm">
                        Read case study →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

