"use client";

import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

// Loads the Lottie animation JSON from /public at runtime so its ~116KB of
// vector data stays out of the client JS bundle. The animation loops
// indefinitely as the Contact hero illustration.
export default function ContactLottieHero({ className }) {
  const [animationData, setAnimationData] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    fetch("/animations/singing-contract.json")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted.current) setAnimationData(data);
      })
      .catch(() => {
        // Silently ignore — hero copy still renders without the illustration.
      });

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className={className}
      // The artwork only occupies part of the 1200x1200 canvas, leaving
      // transparent padding. Crop the SVG viewBox to the content's real
      // bounds (with a little slack for strokes and the swinging arms) so
      // the illustration fills its box tightly.
      rendererSettings={{
        viewBoxSize: "88 215 1024 835",
        preserveAspectRatio: "xMidYMid meet",
      }}
      aria-label="Person reviewing and signing a contract illustration"
      role="img"
    />
  );
}
