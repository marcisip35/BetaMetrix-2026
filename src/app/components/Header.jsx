"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  useEffect(() => {
    function checkScroll() {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  useEffect(() => {
    // On the contact page the banner is persistent, so skip the auto-hide
    // that dismisses it when the on-page contact section scrolls into view.
    if (isContactPage) return;

    const contactEl = document.getElementById("contact");
    if (!contactEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBannerOpen(false);
        }
      },
      { threshold: 0 }
    );

    observer.observe(contactEl);

    return () => observer.disconnect();
  }, [isContactPage]);

  return (
    <header
      className={`w-full bg-brand-black sticky top-0 z-50 shadow-md transition-all duration-300 ${
        isScrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="site-wrapper py-[17px] md:py-[19px] flex items-center justify-between">
        <div className="flex items-center gap-8 md:gap-12">
          {/* Logo */}
          <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-brand-offwhite">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              BetaMetrix
            </Link>
          </h1>

          {/* Navigation */}
          <nav className="hidden nav:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest text-gray-300 ml-4">
            <Link href="/about" className="nav-link-subtle">
              About
            </Link>

            <Link href="/results" className="nav-link-subtle">
              Results
            </Link>

            <Link href="/systems-technology" className="nav-link-subtle">
              Systems &amp; Technology
            </Link>

            <Link href="/services" className="nav-link-subtle">
              Services
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Direct Contact */}
          <div className="hidden nav:block relative header-contact-pulse">
            <Link
              href="/contact"
              className="inline-block bg-brand-yellow text-brand-black border border-brand-yellow px-10 py-2.5 rounded-md text-sm font-black uppercase tracking-widest contact-button-3d-corner"
            >
              Contact
            </Link>

            <svg
              className="absolute inset-0 w-full h-full header-contact-trace"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="header-contact-rainbow"
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#ff3b3b" />
                  <stop offset="16.6%" stopColor="#ff9a3b" />
                  <stop offset="33.3%" stopColor="#ffe83b" />
                  <stop offset="50%" stopColor="#3bff6a" />
                  <stop offset="66.6%" stopColor="#3bc4ff" />
                  <stop offset="83.3%" stopColor="#8a3bff" />
                  <stop offset="100%" stopColor="#ff3b3b" />
                  <animateTransform
                    attributeName="gradientTransform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </linearGradient>
              </defs>
              <rect
                x="1"
                y="1"
                width="98"
                height="98"
                rx="10"
                ry="10"
                pathLength="100"
                stroke="url(#header-contact-rainbow)"
                vectorEffect="non-scaling-stroke"
                className="header-contact-trace-rect"
              />
            </svg>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="nav:hidden text-brand-offwhite p-2 -mr-2 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-7 h-7"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Contact info banner */}
      {isBannerOpen && (
        <div
          className={`w-full ${
            isContactPage ? "bg-white" : "bg-brand-yellow"
          } text-brand-black`}
        >
          <div className="site-wrapper header-banner-py flex items-center justify-between gap-4">
            {isContactPage ? (
              <>
                <p className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap header-banner-text header-banner-full font-semibold">
                  Check the difference we make on our{" "}
                  <Link
                    href="/results"
                    className="font-black underline underline-offset-2"
                  >
                    Results
                  </Link>{" "}
                  page, and see how we can help on our{" "}
                  <Link
                    href="/services"
                    className="font-black underline underline-offset-2"
                  >
                    Services
                  </Link>{" "}
                  page.
                </p>

                <p className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap max-sm:whitespace-normal header-banner-text header-banner-short font-semibold">
                  Check our{" "}
                  <Link
                    href="/results"
                    className="font-black underline underline-offset-2"
                  >
                    Results
                  </Link>
                  <span className="max-sm:hidden">{" "}and{" "}</span>
                  <br className="hidden max-sm:inline" />
                  <Link
                    href="/services"
                    className="font-black underline underline-offset-2"
                  >
                    Services
                  </Link>
                </p>

                <button
                  type="button"
                  onClick={() => setIsBannerOpen(false)}
                  aria-label="Dismiss"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-black text-brand-yellow flex-shrink-0 cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </>
            ) : (
              <>
                <p className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap header-banner-text header-banner-full font-semibold">
                  Call BetaMetrix at{" "}
                  <a
                    href="tel:4314805127"
                    className="font-black underline underline-offset-2"
                  >
                    431-480-5127
                  </a>{" "}
                  or email us at{" "}
                  <a
                    href="mailto:Admin@betametrix.us"
                    className="font-black underline underline-offset-2"
                  >
                    Admin@betametrix.us
                  </a>
                  , or click the Contact button to get in touch.
                </p>

                <p className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap max-sm:whitespace-normal header-banner-text header-banner-short font-semibold">
                  Call BetaMetrix at{" "}
                  <a
                    href="tel:4314805127"
                    className="font-black underline underline-offset-2"
                  >
                    431-480-5127
                  </a>
                  <span className="max-sm:hidden">{" "}or{" "}</span>
                  <br className="hidden max-sm:inline" />
                  email us at{" "}
                  <a
                    href="mailto:Admin@betametrix.us"
                    className="font-black underline underline-offset-2"
                  >
                    Admin@betametrix.us
                  </a>
                </p>

                <button
                  type="button"
                  onClick={() => setIsBannerOpen(false)}
                  aria-label="Dismiss"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-black text-brand-yellow flex-shrink-0 cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      <div
        className={`nav:hidden w-full bg-brand-black border-t border-white/10 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="site-wrapper flex flex-col py-4 gap-1 text-sm font-bold uppercase tracking-widest text-gray-300">
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="py-3 border-b border-white/10"
          >
            About
          </Link>

          <Link
            href="/results"
            onClick={() => setIsMenuOpen(false)}
            className="py-3 border-b border-white/10"
          >
            Results
          </Link>

          <Link
            href="/systems-technology"
            onClick={() => setIsMenuOpen(false)}
            className="py-3 border-b border-white/10"
          >
            Systems &amp; Technology
          </Link>

          <Link
            href="/services"
            onClick={() => setIsMenuOpen(false)}
            className="py-3 border-b border-white/10"
          >
            Services
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 inline-block text-center bg-brand-yellow text-brand-black border border-brand-yellow px-5 py-3 rounded-md contact-button-3d-corner"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
