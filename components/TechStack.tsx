"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { tech } from "@/lib/data";
import Image from "next/image";

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-ink">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="headline-sm text-white">TECH STACK</h2>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {tech.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group"
              >
                {/* Orange background with black SVG on top */}
                <div className="bg-signal p-4 rounded-lg transition-all duration-300 hover:bg-signal/90 hover:scale-105 hover:shadow-lg">
                  <div className="flex flex-col items-center space-y-2">
                    {/* SVG Icon */}
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain filter brightness-0"
                      />
                    </div>
                    
                    {/* Tech name */}
                    <span className="text-ink font-body text-xs font-medium">
                      {item.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

