"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function ServiceImage({ src, alt }) {
  return (
    <div className="relative h-56 md:h-64 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Medical Audits",
      description:
        "Medical audits review billing processes to ensure accuracy, compliance, and optimize revenue. Our reviews catch costly errors before they impact your bottom line.",
      href: "/services#audits",
      image: "/images/service_image_1.jpg",
    },
    {
      title: "Medical Billing",
      description:
        "We handle claims processing to ensure accurate payments and streamline your financial operations. From submission to follow-up, our team keeps your revenue cycle moving so cash flow stays consistent.",
      href: "/services#medical-billing",
      image: "/images/service_image_2.png",
    },
    {
      title: "Medical Credentialing",
      description:
        "Medical credentialing involves verifying provider qualifications and maintaining compliance to support seamless patient care. We manage the paperwork and payer requirements so your providers can start seeing patients sooner.",
      href: "/services#medical-credentialing",
      image: "/images/service_image_3.png",
    },
    {
      title: "Medical Coding",
      description:
        "Medical coding translates patient information and treatments into standardized codes for accurate billing and streamlined claims processing. Our coders stay current with the latest standards.",
      href: "/services#medical-coding",
      image: "/images/service_image_4.jpg",
    },
    {
      title: "MIPS Reporting",
      description:
        "Performance tracking and data submission help providers meet quality standards and maximize reimbursement opportunities. We monitor your metrics year-round so nothing falls through the cracks at reporting time.",
      href: "/services#mips-reporting",
      image: "/images/service_image_5.png",
    },
    {
      title: "More Ways We Help",
      description:
        "Additional services coming soon. Reach out to learn how BetaMetrix can support your practice's unique billing needs. We're always expanding to meet the needs of the practices we serve.",
      href: "/services",
      image: "/images/service_image_6.jpg",
    },
  ];

  const gridRef = useRef(null);
  const cardRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const [cardHeight, setCardHeight] = useState(null);

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

  // Description lengths vary per service, so card heights must be measured
  // and equalized in JS: the tallest card's height wraps differently at
  // every viewport width, not just at grid breakpoints, so no fixed
  // CSS min-height/line-clamp value fits every width without either
  // truncating text or leaving most cards oversized.
  useLayoutEffect(() => {
    const equalize = () => {
      const cards = cardRefs.current.filter(Boolean);
      if (!cards.length) return;
      // scrollHeight ignores the card's own overflow-hidden clipping, so it
      // still reports each card's natural content height even while a
      // shorter fixed height from a previous measurement is applied.
      const tallest = Math.max(...cards.map((card) => card.scrollHeight));
      setCardHeight(tallest);
    };

    equalize();

    let resizeTimeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(equalize, 150);
    };
    window.addEventListener("resize", onResize);

    document.fonts?.ready.then(equalize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="services" className="bg-brand-white">
      <div className="site-wrapper py-24">
        <h2 className="mx-auto max-w-3xl text-center text-2xl md:text-5xl font-black tracking-tight text-brand-black">
          Services We Offer
        </h2>

        <div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(node) => (cardRefs.current[index] = node)}
              className={[
                "service-card group flex flex-col rounded-2xl overflow-hidden bg-brand-green transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-2xl",
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95",
              ].join(" ")}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                height: cardHeight ? `${cardHeight}px` : undefined,
              }}
            >
              <ServiceImage src={service.image} alt={service.title} />

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-brand-offwhite">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-gray-100 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-auto pt-5 flex justify-end">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-brand-offwhite font-semibold hover:text-brand-yellow transition-colors"
                  >
                    Read more <span aria-hidden="true">&gt;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
