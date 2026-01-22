"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Marquee({
  children,
  className,
  pauseOnHover = false,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
}) {
  return (
    <div className={cn("flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex animate-marquee gap-4",
          pauseOnHover && "hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
          "[--gap:1rem]"
        )}
        style={{
          gap: "1rem",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
