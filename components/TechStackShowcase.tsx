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
    <section ref={ref} className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="headline-md text-white mb-4">{title}</h2>
        <p className="text-white/70 font-body text-lg max-w-2xl">
          A comprehensive overview of the technologies and tools used to build this solution.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(categories).map(([category, categoryInfo]) => {
          const categoryItems = techItems.filter(item => item.category === category);
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className={`font-display text-lg font-bold ${categoryInfo.color}`}>
                  {categoryInfo.label}
                </h3>
                <div className="space-y-4">
                  {categoryItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -12 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 transition-colors"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          {item.icon && (
                            <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                              <span className="text-white/80 font-bold text-sm">
                                {item.name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <h4 className="text-white font-body font-medium">{item.name}</h4>
                        </div>
                        <p className="text-white/70 font-body text-sm leading-relaxed">
                          {item.description}
                        </p>
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
