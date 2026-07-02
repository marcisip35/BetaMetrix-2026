"use client";

import { useEffect, useRef, useState } from "react";

const specialties = [
  "Family Medicine",
  "Internal Medicine",
  "Cardiology",
  "Orthopedics",
  "Dermatology",
  "Pediatrics",
  "Surgery",
  "Other",
];

const initialForm = { name: "", email: "", phone: "", specialty: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef(null);
  const specialtyRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSpecialtyOpen, setIsSpecialtyOpen] = useState(false);

  useEffect(() => {
    const el = formRef.current;
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

  useEffect(() => {
    if (!isSpecialtyOpen) return;

    function handleClickOutside(e) {
      if (specialtyRef.current && !specialtyRef.current.contains(e.target)) {
        setIsSpecialtyOpen(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key === "Escape") setIsSpecialtyOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSpecialtyOpen]);

  function selectSpecialty(value) {
    setForm((prev) => ({ ...prev, specialty: value }));
    setIsSpecialtyOpen(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.email.trim() && !form.phone.trim()) {
      setError("Please provide an email or a phone number.");
      return;
    }

    setError("");
    setSubmitted(true);
  }

  return (
    <div
      ref={formRef}
      className={`contact-form-reveal${
        isVisible ? " contact-form-reveal-visible" : ""
      }`}
    >
      {!submitted && (
        <p
          className="contact-form-field mb-6 text-center text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-wide text-brand-gray"
          style={{ transitionDelay: "0ms" }}
        >
          Fill this out if you&apos;re interested and we will reach back
          within 1-2 business days.
        </p>
      )}

      {submitted ? (
        <div className="bg-brand-white rounded-md border border-black/10 p-8 text-center">
          <p className="text-lg font-black text-brand-black">
            Thanks, {form.name.split(" ")[0]}!
          </p>
          <p className="mt-2 text-brand-gray">
            We&apos;ve received your message and will be in touch shortly.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto w-full max-w-xl space-y-4"
        >
          <div
            className="contact-form-field bg-brand-white rounded-md border border-black/10 px-4 pt-3 pb-2"
            style={{ transitionDelay: "60ms" }}
          >
            <label
              htmlFor="name"
              className="block text-xs font-black uppercase tracking-widest text-brand-gray"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full bg-transparent text-base text-brand-black outline-none"
            />
          </div>

          <div
            className="contact-form-field bg-brand-white rounded-md border border-black/10 px-4 pt-3 pb-2"
            style={{ transitionDelay: "120ms" }}
          >
            <label
              htmlFor="email"
              className="block text-xs font-black uppercase tracking-widest text-brand-gray"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full bg-transparent text-base text-brand-black outline-none"
            />
          </div>

          <div
            className="contact-form-field bg-brand-white rounded-md border border-black/10 px-4 pt-3 pb-2"
            style={{ transitionDelay: "180ms" }}
          >
            <label
              htmlFor="phone"
              className="block text-xs font-black uppercase tracking-widest text-brand-gray"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full bg-transparent text-base text-brand-black outline-none"
            />
          </div>

          <div
            className="contact-form-field relative z-20 bg-brand-white rounded-md border border-black/10 px-4 pt-3 pb-2"
            style={{ transitionDelay: "240ms" }}
          >
            <label
              htmlFor="specialty"
              className="block text-xs font-black uppercase tracking-widest text-brand-gray"
            >
              Specialty
            </label>
            <div ref={specialtyRef} className="relative mt-1">
              <button
                type="button"
                id="specialty"
                onClick={() => setIsSpecialtyOpen((open) => !open)}
                aria-haspopup="listbox"
                aria-expanded={isSpecialtyOpen}
                className="flex w-full cursor-pointer items-center justify-between bg-transparent text-base text-brand-black outline-none"
              >
                <span className={form.specialty ? "" : "text-brand-gray"}>
                  {form.specialty || "--Please choose an option--"}
                </span>

                <svg
                  className={`w-4 h-4 flex-shrink-0 text-brand-gray transition-transform duration-200${
                    isSpecialtyOpen ? " rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

              {isSpecialtyOpen && (
                <ul
                  role="listbox"
                  className="absolute left-0 right-0 top-full z-10 mt-2 max-h-56 overflow-auto rounded-md border border-black/10 bg-brand-white shadow-lg"
                >
                  <li>
                    <button
                      type="button"
                      role="option"
                      aria-selected={form.specialty === ""}
                      onClick={() => selectSpecialty("")}
                      className="block w-full cursor-pointer px-4 py-2 text-left text-base text-brand-gray hover:bg-brand-green hover:text-brand-offwhite"
                    >
                      --Please choose an option--
                    </button>
                  </li>

                  {specialties.map((specialty) => (
                    <li key={specialty}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={form.specialty === specialty}
                        onClick={() => selectSpecialty(specialty)}
                        className="block w-full cursor-pointer px-4 py-2 text-left text-base text-brand-black hover:bg-brand-green hover:text-brand-offwhite"
                      >
                        {specialty}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {error && (
            <p className="text-sm font-semibold text-red-600">{error}</p>
          )}

          <div
            className="contact-form-field flex justify-end"
            style={{ transitionDelay: "300ms" }}
          >
            <button
              type="submit"
              className="inline-block cursor-pointer bg-brand-green text-brand-offwhite border border-brand-green px-8 py-3 rounded-md text-sm font-black uppercase tracking-widest submit-button-hover"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
