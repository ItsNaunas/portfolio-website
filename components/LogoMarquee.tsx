"use client";

import Marquee from "react-fast-marquee";
import { marqueeLogos } from "@/lib/data";
import Image from "next/image";

export default function LogoMarquee() {
  return (
    <section className="bg-signal py-6">
      <Marquee speed={50} gradient={false} pauseOnHover>
        {marqueeLogos.map((logo, idx) => (
          <div key={idx} className="mx-12 flex items-center justify-center">
            {/* TODO: Replace with actual logo images */}
            <div className="w-24 h-12 bg-ink/10 flex items-center justify-center text-ink font-display text-xs">
              logo
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

