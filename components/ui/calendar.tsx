"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Calendar({
  className,
  mode,
  selected,
}: {
  className?: string;
  mode?: string;
  selected?: Date;
}) {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const dates = Array.from({ length: 35 }, (_, i) => i + 1);
  
  // Cycle through different dates to show bookings happening
  const bookingDates = [11, 15, 18, 22, 25, 28];
  const [activeDate, setActiveDate] = useState(bookingDates[0]);
  const [bookedDates, setBookedDates] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDate((prev) => {
        const currentIndex = bookingDates.indexOf(prev);
        const nextIndex = (currentIndex + 1) % bookingDates.length;
        const nextDate = bookingDates[nextIndex];
        
        // Add the previous date to booked dates (keep it highlighted)
        if (currentIndex >= 0) {
          setBookedDates((prev) => {
            if (!prev.includes(prev)) {
              return [...prev, prev];
            }
            return prev;
          });
        }
        
        return nextDate;
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const isActive = (date: number) => date === activeDate;
  const isBooked = (date: number) => bookedDates.includes(date);

  return (
    <div className={className}>
      <div className="rounded-lg bg-white/5 border border-white/10 p-4">
        <div className="grid grid-cols-7 gap-2 mb-2">
          {days.map((day, i) => (
            <div
              key={i}
              className="text-center text-xs font-medium text-white/40"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {dates.map((date, i) => {
            const dateIsActive = isActive(date);
            const dateIsBooked = isBooked(date);
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                }}
                transition={{ delay: i * 0.01, duration: 0.2 }}
                className={cn(
                  "aspect-square flex items-center justify-center text-xs rounded relative",
                  dateIsActive 
                    ? "bg-signal text-white font-bold" 
                    : dateIsBooked
                    ? "bg-signal/40 text-white/90 font-medium"
                    : "bg-white/5 text-white/60"
                )}
              >
                <AnimatePresence>
                  {dateIsActive && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.2, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded bg-signal/20"
                      style={{
                        boxShadow: "0 0 12px rgba(242, 97, 63, 0.4)",
                      }}
                    />
                  )}
                </AnimatePresence>
                {date <= 31 ? date : ""}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
