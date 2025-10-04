"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TechItem {
  name: string;
  description: string;
  icon?: string;
  category: "frontend" | "backend" | "integration";
}

interface TechStackShowcaseProps {
  title: string;
  techItems: TechItem[];
}

export default function TechStackShowcase({ title, techItems }: TechStackShowcaseProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = {
    frontend: { label: "Frontend", color: "text-blue-400" },
    backend: { label: "Backend", color: "text-green-400" },
    integration: { label: "Integrations", color: "text-purple-400" }
  };

  return (
    <section ref={ref} className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="headline-sm md:headline-md text-white">{title}</h2>
        <p className="text-white/70 font-body text-base md:text-lg max-w-3xl mx-auto px-4">
          A comprehensive overview of the technologies and tools used to build this solution.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
        {Object.entries(categories).map(([category, categoryInfo]) => {
          const categoryItems = techItems.filter(item => item.category === category);
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className={`font-display text-lg md:text-xl font-bold ${categoryInfo.color}`}>
                    {categoryInfo.label}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent mx-auto opacity-50"></div>
                </div>
                <div className="space-y-4">
                  {categoryItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -12 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="p-4 md:p-5 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/8 transition-all duration-200 group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          {item.icon && (
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/15 transition-colors flex-shrink-0">
                              <span className="text-white/80 font-bold text-sm">
                                {item.name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div className="space-y-2 flex-1">
                            <h4 className="text-white font-body font-semibold text-base group-hover:text-white transition-colors">{item.name}</h4>
                            <p className="text-white/70 font-body text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
