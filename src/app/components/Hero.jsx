"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const statements = [
    ["Medical Billing Built", "for Better Collections"],
    ["Reduce Denials", "Improve Collections"],
    ["Doctor-Owned", "Revenue Cycle Management"],
    ["Billing Support Built", "for Medical Practices"],
  ];

  const [currentStatement, setCurrentStatement] = useState(0);

  useEffect(() => {
    const statementTimer = setInterval(() => {
      setCurrentStatement((oldStatement) => {
        return (oldStatement + 1) % statements.length;
      });
    }, 4000);

    return () => clearInterval(statementTimer);
  }, []);

  return (
    <section className="hero-section">
      <video
        className="hero-video"
        src="/videos/pixabay-royalty-free-medical-hospital-hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="hero-video-overlay" />

      <div className="site-wrapper hero-content flex-1 flex items-center justify-center text-center">
        <div className="min-w-0 max-w-6xl mx-auto">
          <p className="text-l sm:text-sm font-black uppercase tracking-widest text-brand-yellow">
            Doctor-Owned Medical Billing
          </p>

          <h2 className="mt-4 md:mt-6 text-[clamp(1.25rem,calc(8.5vw_-_4px),2.25rem)] min-[600px]:text-5xl md:text-7xl font-black tracking-tighter text-brand-offwhite hero-statement-window">
            <span
              className="hero-statement-track"
              style={{
                transform: `translateY(calc(${currentStatement} * -1 * var(--slide-height)))`,
              }}
            >
              {statements.map((statement, index) => {
                return (
                  <span key={index} className="hero-statement-slide">
                    <span className="hero-statement-line">{statement[0]}</span>
                    <span className="hero-statement-line">{statement[1]}</span>
                  </span>
                );
              })}
            </span>
          </h2>

          <p className="mt-6 md:mt-8 max-w-2xl mx-auto text-lg min-[600px]:text-xl leading-7 min-[600px]:leading-8 text-gray-300 max-h-[9rem] min-[600px]:max-h-none overflow-hidden">
            BetaMetrix helps medical practices improve collections, reduce
            denials, manage claims, and better understand revenue cycle
            performance.
          </p>

          <div className="mt-8 md:mt-10 max-sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="/#about"
              className="inline-block bg-brand-green text-brand-offwhite border border-brand-green px-6 md:px-8 py-3 md:py-4 max-sm:px-6 max-sm:py-[0.875rem] max-sm:w-[calc(100%-20px)] max-sm:text-center rounded-md text-xs min-[600px]:text-sm max-sm:text-base font-black uppercase tracking-widest contact-button-3d-corner"
            >
              Learn More
            </Link>

            <Link
              href="/contact"
              className="inline-block bg-brand-yellow text-brand-black border border-brand-yellow px-6 md:px-8 py-3 md:py-4 max-sm:px-6 max-sm:py-[0.875rem] max-sm:w-[calc(100%-20px)] max-sm:text-center rounded-md text-xs min-[600px]:text-sm max-sm:text-base font-black uppercase tracking-widest contact-button-3d-corner"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
