"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const notifications = [
  {
    name: "Lead Qualified",
    description: "Score: 87/100 → Routed to Sales",
    time: "2m ago",
    icon: "🎯",
  },
  {
    name: "Automation Triggered",
    description: "Onboarding sequence initiated",
    time: "5m ago",
    icon: "⚡",
  },
  {
    name: "System Health Check",
    description: "All pipelines operational",
    time: "10m ago",
    icon: "✓",
  },
  {
    name: "Booking Confirmed",
    description: "Call scheduled for tomorrow 2PM",
    time: "15m ago",
    icon: "📅",
  },
];

export default function AnimatedListDemo({ className }: { className?: string }) {
  const [items, setItems] = useState([notifications[0]]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < notifications.length) {
        setItems((prev) => [...prev, notifications[index]]);
        setIndex((prev) => prev + 1);
      } else {
        setItems([notifications[0]]);
        setIndex(1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className={className}>
      <div className="flex flex-col gap-2 p-4">
        <AnimatePresence>
          {items.map((item, idx) => (
            <motion.div
              key={`${item.name}-${idx}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 p-3"
            >
              <div className="text-2xl">{item.icon}</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">{item.name}</p>
                <p className="text-xs text-white/60">{item.description}</p>
              </div>
              <p className="text-xs text-white/40">{item.time}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
