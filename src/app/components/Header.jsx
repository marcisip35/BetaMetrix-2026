"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const headerRef = useRef(null);

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
  }, []);

  useEffect(() => {
    function setHeaderHeight() {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    }

    setHeaderHeight();

    const resizeObserver = new ResizeObserver(setHeaderHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
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
          <nav className="hidden xl:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest text-gray-300 ml-4">
            <Link href="/#about" className="nav-link-subtle">
              About
            </Link>

            <Link href="/#results" className="nav-link-subtle">
              Results
            </Link>

            <Link href="/#systems-technology" className="nav-link-subtle">
              Systems &amp; Technology
            </Link>

            <Link href="/services" className="nav-link-subtle">
              Services
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Direct Contact */}
          <div className="hidden xl:block">
            <Link
              href="/contact"
              className="inline-block bg-brand-yellow text-brand-black border border-brand-yellow px-10 py-2.5 rounded-md text-sm font-black uppercase tracking-widest contact-button-3d-corner header-contact-pulse"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="xl:hidden text-brand-offwhite p-2 -mr-2"
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
        <div className="w-full bg-brand-yellow text-brand-black">
          <div className="site-wrapper py-1.5 flex items-center justify-between gap-4">
            <p className="text-xs sm:text-sm md:text-base font-semibold">
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
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      <div
        className={`xl:hidden w-full bg-brand-black border-t border-white/10 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="site-wrapper flex flex-col py-4 gap-1 text-sm font-bold uppercase tracking-widest text-gray-300">
          <Link
            href="/#about"
            onClick={() => setIsMenuOpen(false)}
            className="py-3 border-b border-white/10"
          >
            About
          </Link>

          <Link
            href="/#results"
            onClick={() => setIsMenuOpen(false)}
            className="py-3 border-b border-white/10"
          >
            Results
          </Link>

          <Link
            href="/#systems-technology"
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
