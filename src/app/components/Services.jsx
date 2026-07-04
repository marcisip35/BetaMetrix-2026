"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function ServiceImage({ src, alt }) {
  return (
    <div className="relative h-24 sm:h-56 md:h-64 shrink-0 overflow-hidden">
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
    <section id="services" className="bg-brand-white">
      <div className="site-wrapper py-24 max-sm:pt-[50px] max-sm:pb-[20px]">
        <h2 className="mx-auto max-w-3xl text-center text-2xl md:text-5xl font-black tracking-tight text-brand-black">
          Services We Offer
        </h2>

        <div
          ref={gridRef}
          className="mt-14 grid services-grid gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={[
                "service-card flex flex-col rounded-2xl overflow-hidden bg-brand-green transition-all duration-700 ease-out hover:-translate-y-1",
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95",
              ].join(" ")}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <ServiceImage src={service.image} alt={service.title} />

              <div className="flex flex-1 flex-col p-4 sm:p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-brand-offwhite">
                  {service.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-sm md:text-base text-gray-100 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-auto pt-3 sm:pt-5 flex justify-end">
                  <Link
                    href={service.href}
                    className="service-card-link inline-flex items-center gap-1 text-brand-offwhite font-semibold transition-colors"
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
