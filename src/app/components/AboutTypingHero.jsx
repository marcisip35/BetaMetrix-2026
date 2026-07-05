"use client";

import { useEffect, useState } from "react";

// The constant lead-in that always stays on screen; only the phrase after
// it is typed out and erased.
const PREFIX = "BetaMetrix helps ";

// Each phrase grammatically follows "BetaMetrix helps ..." and is drawn from
// the copy across the home page (hero, About, Results stats, Services).
// The first is the site's existing starter sentence; the rest mirror the
// rotating hero statements' topics.
const PHRASES = [
  "medical practices improve collections, reduce denials, manage claims, and better understand revenue cycle performance.",
  "medical practices collect more by getting claims coded and submitted right the first time, earning a 98% first-pass acceptance rate.",
  "practices reduce denials and recover more revenue, having cleanly processed over $50 million in claims with a 24-hour average turnaround.",
  "physicians take control of their revenue cycle with doctor-owned billing built by people who genuinely understand medicine.",
  "over 200 providers across 25+ specialties simplify their billing with expert audits, coding, credentialing, and MIPS reporting.",
];

// Never spend more than 3s typing a full phrase; the per-character speed is
// capped so short phrases still feel like natural keyboard typing.
const MAX_TYPE_DURATION = 2500;
const MAX_TYPE_SPEED = 45;
const DELETE_SPEED = 10;
const HOLD_AFTER_TYPED = 2200;
const PAUSE_BEFORE_NEXT = 400;

export default function AboutTypingHero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState("typing"); // "typing" | "deleting"

  const phrase = PHRASES[phraseIndex];

  useEffect(() => {
    let timeout;

    if (phase === "typing") {
      if (charCount < phrase.length) {
        const typeSpeed = Math.min(
          MAX_TYPE_DURATION / phrase.length,
          MAX_TYPE_SPEED,
        );
        timeout = setTimeout(() => setCharCount((c) => c + 1), typeSpeed);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), HOLD_AFTER_TYPED);
      }
    } else if (charCount > 0) {
      timeout = setTimeout(() => setCharCount((c) => c - 1), DELETE_SPEED);
    } else {
      timeout = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
        setPhase("typing");
      }, PAUSE_BEFORE_NEXT);
    }

    return () => clearTimeout(timeout);
  }, [charCount, phase, phrase]);

  // Cursor blinks only once a phrase is fully typed and holding; while
  // actively typing or deleting it stays solid.
  const settled = phase === "typing" && charCount === phrase.length;

  return (
    <p
      className="mt-6 max-[639px]:mt-3 min-[1000px]:mt-8 max-w-xl text-xl max-[639px]:text-[0.8125rem]! min-[640px]:text-[18px]! min-[1000px]:text-[1.625rem]! leading-relaxed text-brand-offwhite/90 grid"
      aria-label={`${PREFIX}${PHRASES[0]}`}
    >
      {/* Invisible sizers: every phrase is stacked in the same grid cell so the
          paragraph is always as tall as the longest phrase. This keeps the hero
          layout constant regardless of which phrase is currently typed. */}
      {PHRASES.map((p, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="invisible [grid-area:1/1]"
        >
          <span className="font-black">{PREFIX}</span>
          {p}
        </span>
      ))}
      {/* Visible animated text, overlaid on top of the sizers. */}
      <span aria-hidden="true" className="[grid-area:1/1]">
        <span className="font-black text-brand-yellow">{PREFIX}</span>
        {phrase.slice(0, charCount)}
        <span
          className={`typing-cursor${settled ? " typing-cursor-active" : ""}`}
          style={settled ? undefined : { opacity: 1 }}
        />
      </span>
    </p>
  );
}
