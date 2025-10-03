"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function FooterCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="join" className="bg-ink">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="headline-lg text-white">
            READY TO CONVERT?
          </h2>

          <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
            7-day average delivery • Conversion-first design • Results guaranteed
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#call" className="btn text-lg px-12 py-5">
              JOIN NOW
            </Link>
          </div>

          {/* TODO: Add Calendly inline embed or modal trigger */}
          <p className="text-white/50 text-xs font-body">
            Book a call to discuss your project
          </p>
        </motion.div>
      </div>
    </section>
  );
}

