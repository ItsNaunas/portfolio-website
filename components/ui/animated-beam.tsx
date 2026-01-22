"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBeamMultipleOutputDemo({ className }: { className?: string }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div key={key} className={className}>
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Central Hub */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute z-10 h-16 w-16 rounded-full bg-signal/20 border-2 border-signal flex items-center justify-center"
        >
          <div className="h-8 w-8 rounded-full bg-signal" />
        </motion.div>

        {/* Output Nodes */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * 360) / 4;
          const radius = 100;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <div key={i}>
              {/* Beam */}
              <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                className="absolute h-1 bg-gradient-to-r from-signal to-transparent"
                style={{
                  left: "50%",
                  top: "50%",
                  width: `${radius}px`,
                  transformOrigin: "0 50%",
                  transform: `rotate(${angle}deg)`,
                }}
              />

              {/* Output Node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.3 }}
                className="absolute h-12 w-12 rounded-full bg-white/10 border border-white/20"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
