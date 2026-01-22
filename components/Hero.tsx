"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import RotatingStat from "./RotatingStat";

/**
 * HERO ANIMATION SPEC
 * - Phase 1 (INTRO): Centered stack reveals word-by-word from below:
 *   1) COACHES  2) AGENCIES (pushes down)  3) CONSULTANT (pushes down)
 * - Phase 2 (FINAL): BY/NAUNAS slides in from left, Stat block from right,
 *   JOIN from left. Headline morphs from centered stack to staggered grid.
 * - No cross-fade. One continuous morph using Framer Motion layout.
 */

const ease = [0.16, 1, 0.3, 1]; // Even smoother cubic bezier
const CALENDLY_URL = "https://calendly.com/its-naunas/30min";

export default function Hero() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"intro" | "final">(reduce ? "final" : "intro");

  // timings (slower/smoother)
  const tWord = 0.5;       // each word reveal duration (slower)
  const sWord = 0.2;       // stagger between words (longer pause)
  const tMorph = 0.8;      // morph to final layout (slower)
  const tRails = 0.7;      // side elements slide-in (slower)

  // When to switch from centered stack to final grid
  const totalIntro =
    tWord * 3 + sWord * 2 + 0.18; // small pause after last word before morph

  useEffect(() => {
    if (reduce) return;
    const id = setTimeout(() => setPhase("final"), totalIntro * 1000);
    return () => clearTimeout(id);
  }, [reduce, totalIntro]);

  return (
    <section className="relative min-h-screen bg-ink flex items-center pt-16 md:pt-20 overflow-hidden">
      <div className="section-container w-full">
        {/* 
          One tree rendered the whole time. We change the LAYOUT of wrappers
          when phase==="final" so Framer Motion morphs positions instead of fading.
        */}

        {/* HEADLINE WRAPPER: morphs from centered stack -> staggered rows */}
        <motion.div
          layout
          transition={{ duration: tMorph, ease }}
          className={
            phase === "intro"
              ? "text-center space-y-12"
              : "space-y-12 flex flex-col items-center"
          }
        >
          {/* Mobile-only header with BY NAUNAS (left) and rotating stat (right) */}
          <motion.div
            layout
            transition={{ duration: tMorph, ease }}
            className={phase === "final" ? "md:hidden flex justify-between items-start mb-4" : "hidden"}
          >
            {/* BY NAUNAS - left side */}
            <motion.div
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -36 }}
              animate={
                phase === "final"
                  ? { opacity: 1, x: 0, transition: { duration: tRails, ease, delay: 0.10 } }
                  : { opacity: 0, x: -36 }
              }
              className="text-signal font-body text-lg tracking-[0.2em] uppercase space-y-2 text-center"
            >
              <div>BY</div>
              <div>NAUNAS</div>
            </motion.div>

            {/* Rotating stat - right side */}
            <motion.div
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 36 }}
              animate={
                phase === "final"
                  ? { opacity: 1, x: 0, transition: { duration: tRails, ease, delay: 0.18 } }
                  : { opacity: 0, x: 36 }
              }
              className="text-signal font-body text-lg tracking-[0.2em] uppercase min-w-[140px] text-right"
            >
              <RotatingStat />
            </motion.div>
          </motion.div>

          {/* ROW 1 — BY/NAUNAS + CONSULTANT (appears last in intro, sits first in final) */}
          <motion.div 
            layout 
            transition={{ duration: tMorph, ease }}
            className={phase === "final" ? "flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full" : ""}
          >
            {/* LEFT RAIL (BY / NAUNAS) — hidden on mobile, visible on desktop */}
            <motion.div
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -36 }}
              animate={
                phase === "final"
                  ? { opacity: 1, x: 0, transition: { duration: tRails, ease, delay: 0.10 } }
                  : { opacity: 0, x: -36 }
              }
              className={phase === "final" ? "hidden md:block text-signal font-body text-lg tracking-[0.2em] uppercase space-y-2" : "hidden"}
            >
              <div>BY</div>
              <div>NAUNAS</div>
            </motion.div>

            <Word
              text="MEASURABLE"
              introOrder={3}            // 1: first shown, 2: second, 3: third
              phase={phase}
              tWord={tWord}
              sWord={sWord}
            />
          </motion.div>

            {/* ROW 2 — AGENCIES + STAT (stat slides from right after morph begins) */}
            <motion.div
              layout
              transition={{ duration: tMorph, ease }}
              className={phase === "intro" ? "" : "flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full"}
            >
              <Word
                text="AUTOMATED"
                introOrder={2}
                phase={phase}
                tWord={tWord}
                sWord={sWord}
              />

              {/* STAT pill — only visible/animated in final (desktop only) */}
              <motion.div
                initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 36 }}
                animate={
                  phase === "final"
                    ? { opacity: 1, x: 0, transition: { duration: tRails, ease, delay: 0.18 } }
                    : { opacity: 0, x: 36 }
                }
                className={phase === "final" ? "hidden md:flex bg-signal text-ink px-8 py-6 min-w-[280px] h-[120px] items-center justify-center rounded-[2px] shadow-lg" : "hidden"}
              >
                <RotatingStat />
              </motion.div>
            </motion.div>

            {/* ROW 3 — JOIN + COACHES (JOIN slides from left after morph) */}
            <motion.div
              layout
              transition={{ duration: tMorph, ease }}
              className={phase === "intro" ? "" : "flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full"}
            >
              {/* Desktop: JOIN appears on left */}
              <motion.div
                initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
                animate={
                  phase === "final"
                    ? { opacity: 1, x: 0, transition: { duration: tRails, ease, delay: 0.24 } }
                    : { opacity: 0, x: -28 }
                }
                className={phase === "final" ? "hidden md:block" : "hidden"}
              >
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-block min-w-[280px] h-[120px] flex items-center justify-center text-[clamp(20px,3.5vw,32px)] font-bold"
                >
                  INSTALL
                </Link>
              </motion.div>

              <Word
                text="PREDICTABLE"
                introOrder={1}
                phase={phase}
                tWord={tWord}
                sWord={sWord}
              />
            </motion.div>

            {/* Mobile: CTA appears after COACHES */}
            <motion.div
              layout
              transition={{ duration: tMorph, ease }}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              animate={
                phase === "final"
                  ? { opacity: 1, y: 0, transition: { duration: tRails, ease, delay: 0.32 } }
                  : { opacity: 0, y: 28 }
              }
              className={phase === "final" ? "md:hidden mt-8" : "hidden"}
            >
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-block w-full max-w-[400px] h-[80px] flex items-center justify-center text-xl font-bold mx-auto"
              >
                INSTALL
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

/**
 * Word component:
 * - INTRO: appears centered list, rises from below & fades in, in the order you specify.
 * - FINAL: participates in layout morph; no extra fade so animation is continuous.
 */
function Word({
  text,
  introOrder, // 1,2,3 — controls reveal order in intro
  phase,
  tWord,
  sWord,
}: {
  text: string;
  introOrder: 1 | 2 | 3;
  phase: "intro" | "final";
  tWord: number;
  sWord: number;
}) {
  // compute delay so: order 1 fires first, then 2, then 3
  const delay = (introOrder - 1) * (tWord + sWord);

  return (
    <motion.h1
      layout
      transition={{ layout: { duration: 0.8, ease } }}
      initial={{ opacity: 0, y: 28 }}
      animate={
        phase === "intro"
          ? { opacity: 1, y: 0, transition: { duration: tWord, delay, ease } }
          : { opacity: 1, y: 0 } // continuous; no fade-out/fade-in when morphing
      }
      className="headline-xl text-white"
    >
      {text}
    </motion.h1>
  );
}

