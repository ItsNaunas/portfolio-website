"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
}: {
  name: string;
  className: string;
  background: ReactNode;
  description: string | string[];
  href?: string;
  cta?: string;
}) => {
  const isBulletList = Array.isArray(description);
  
  return (
    <motion.div
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-md",
        "bg-[#121212] border border-white/10",
        "transform-gpu transition-all duration-300 ease-out hover:border-signal/40",
        "min-h-[280px]",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>{background}</div>
      <div className="relative z-10 p-6 md:p-8 space-y-3">
        <h3 className="text-signal font-body text-sm md:text-base tracking-wide uppercase">
          {name}
        </h3>
        {isBulletList ? (
          <ul className="text-white/90 font-body text-sm md:text-base leading-relaxed space-y-2 list-none">
            {description.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-signal mt-1 flex-shrink-0 text-base leading-none font-medium">✓</span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white/90 font-body text-base md:text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[0.02]" />
    </motion.div>
  );
};

export { BentoCard, BentoGrid };
