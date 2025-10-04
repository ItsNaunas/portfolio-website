"use client";

import Marquee from "react-fast-marquee";
import { tech } from "@/lib/data";
import Image from "next/image";

export default function TechStack() {
  return (
    <section className="bg-signal py-12">
      <div className="text-center mb-8">
        <h2 className="headline-sm text-ink">TECH STACK</h2>
      </div>
      <Marquee speed={50} gradient={false} pauseOnHover>
        {[...tech, ...tech, ...tech, ...tech].map((item, idx) => (
          <div key={idx} className="mx-12 flex items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.name}
                width={64}
                height={64}
                className="w-full h-full object-contain"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(5%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                }}
              />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

