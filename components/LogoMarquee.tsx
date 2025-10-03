"use client";

import Marquee from "react-fast-marquee";
import { marqueeLogos } from "@/lib/data";
import Image from "next/image";

export default function LogoMarquee() {
  return (
    <section className="bg-signal py-12">
      <Marquee speed={50} gradient={false} pauseOnHover>
        {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map((logo, idx) => (
          <div key={idx} className="mx-8 flex items-center justify-center">
            {/* TODO: Replace with actual logo images */}
            <div className="w-32 h-16 bg-ink/10 flex items-center justify-center text-ink font-display text-sm">
              logo
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

