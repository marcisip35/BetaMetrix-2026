"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SystemsTechnology() {
  const systemLogos = [
    "software1.png",
    "software2.png",
    "software3.png",
    "software4.png",
    "software5.png",
    "software6.png",
    "software7.jpg",
    "software8.png",
    "software9.png",
    "software10.png",
    "software11.png",
    "software12.png",
    "software13.png",
    "software14.png",
    "software15.png",
    "software16.png",
    "software17.png",
    "software18.png",
    "software19.png",
    "software20.png",
    "software21.png",
  ];

  const gridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="systems-technology" className="bg-brand-white">
      <div className="site-wrapper py-12 text-center md:h-[calc(100vh-104px)] md:flex md:flex-col">
        <h3 className="text-sm font-black uppercase tracking-widest text-brand-gray">
          Systems &amp; Technology We Work With
        </h3>

        <div
          ref={gridRef}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:flex-1 md:min-h-0 md:grid-rows-[repeat(7,minmax(0,1fr))] md:gap-x-2 md:gap-y-6"
        >
          {systemLogos.map((logo, index) => (
            <div
              key={logo}
              className={[
                "systems-logo relative h-32 md:h-auto",
                isVisible && "systems-logo-visible",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ transitionDelay: `${Math.min(index, 12) * 45}ms` }}
            >
              <Image
                src={`/systems_technology/${logo}`}
                alt={`Systems & technology partner ${index + 1}`}
                fill
                className="systems-logo-img object-contain p-4"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 30vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
