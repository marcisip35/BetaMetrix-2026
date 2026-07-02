"use client";

import { useEffect, useRef, useState } from "react";

function TypedTitle({ text, className }) {
  const ref = useRef(null);
  const timerRef = useRef(null);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearInterval(timerRef.current);

        if (entry.isIntersecting) {
          setDisplayCount(0);

          const duration = 2000;
          const interval = duration / text.length;
          let count = 0;

          timerRef.current = setInterval(() => {
            count += 1;
            setDisplayCount(count);
            if (count >= text.length) {
              clearInterval(timerRef.current);
            }
          }, interval);
        } else {
          setDisplayCount(0);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearInterval(timerRef.current);
    };
  }, [text]);

  const isTyping = displayCount > 0 && displayCount < text.length;

  return (
    <h3 ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {text.slice(0, displayCount)}
        <span
          className={`typing-cursor${isTyping ? " typing-cursor-active" : ""}`}
        />
      </span>
    </h3>
  );
}

export default function Results() {
  const stats = [
    {
      title: "$50M+ In Claims Processed",
      description:
        "We've processed over $50 million in medical claims for practices across the country, giving providers more time to focus on patient care instead of paperwork.",
      icon: (
        <svg
          viewBox="0 0 1024 1024"
          className="w-[80px] h-[80px]"
          aria-hidden="true"
        >
          <path
            d="M661.333333 170.666667l253.866667 34.133333-209.066667 209.066667zM362.666667 853.333333L108.8 819.2l209.066667-209.066667zM170.666667 362.666667L204.8 108.8l209.066667 209.066667z"
            fill="#9C27B0"
          />
          <path
            d="M198.4 452.266667l-89.6 17.066666c-2.133333 14.933333-2.133333 27.733333-2.133333 42.666667 0 98.133333 34.133333 192 98.133333 264.533333l64-55.466666C219.733333 663.466667 192 588.8 192 512c0-19.2 2.133333-40.533333 6.4-59.733333zM512 106.666667c-115.2 0-217.6 49.066667-292.266667 125.866666l59.733334 59.733334C339.2 230.4 420.266667 192 512 192c19.2 0 40.533333 2.133333 59.733333 6.4l14.933334-83.2C563.2 108.8 537.6 106.666667 512 106.666667zM825.6 571.733333l89.6-17.066666c2.133333-14.933333 2.133333-27.733333 2.133333-42.666667 0-93.866667-32-185.6-91.733333-258.133333l-66.133333 53.333333c46.933333 57.6 72.533333 130.133333 72.533333 202.666667 0 21.333333-2.133333 42.666667-6.4 61.866666zM744.533333 731.733333C684.8 793.6 603.733333 832 512 832c-19.2 0-40.533333-2.133333-59.733333-6.4l-14.933334 83.2c25.6 4.266667 51.2 6.4 74.666667 6.4 115.2 0 217.6-49.066667 292.266667-125.866667l-59.733334-57.6z"
            fill="#9C27B0"
          />
          <path
            d="M853.333333 661.333333l-34.133333 253.866667-209.066667-209.066667z"
            fill="#9C27B0"
          />
        </svg>
      ),
    },
    {
      title: "98% First-Pass Acceptance Rate",
      description:
        "Our meticulous coding and review process gets claims approved right the first time, reducing costly resubmissions and speeding up your reimbursements.",
      icon: (
        <svg viewBox="3 6 18 13" className="w-[80px] h-[80px]" aria-hidden="true">
          <defs>
            <path
              id="stat-check-a"
              d="M4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L1.90917969,5.46118164 C1.5186554,5.85170593 0.885490417,5.85170593 0.494966125,5.46118164 C0.104441833,5.07065735 0.104441833,4.43749237 0.494966125,4.04696808 L4.29289322,0.292893219 Z"
            />
            <path
              id="stat-check-c"
              d="M10.7071068,13.2928932 C11.0976311,13.6834175 11.0976311,14.3165825 10.7071068,14.7071068 C10.3165825,15.0976311 9.68341751,15.0976311 9.29289322,14.7071068 L0.292893219,5.70710678 C-0.0976310729,5.31658249 -0.0976310729,4.68341751 0.292893219,4.29289322 L4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L2.41421356,5 L10.7071068,13.2928932 Z"
            />
          </defs>
          <g fill="none" fillRule="evenodd" transform="rotate(-90 11 7)">
            <g transform="translate(1 1)">
              <mask id="stat-check-b" fill="#ffffff">
                <use xlinkHref="#stat-check-a" />
              </mask>
              <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#stat-check-a" />
              <g fill="#0f766e" mask="url(#stat-check-b)">
                <rect width="24" height="24" transform="translate(-7 -5)" />
              </g>
            </g>
            <mask id="stat-check-d" fill="#ffffff">
              <use xlinkHref="#stat-check-c" />
            </mask>
            <use fill="#000000" fillRule="nonzero" xlinkHref="#stat-check-c" />
            <g fill="#18181b" mask="url(#stat-check-d)">
              <rect width="24" height="24" transform="translate(-6 -4)" />
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "24hrs Average Claim Turnaround",
      description:
        "Claims are submitted and processed quickly so you get paid faster, with our team monitoring every step of the billing cycle around the clock.",
      icon: (
        <svg
          viewBox="0 0 1024 1024"
          className="w-[80px] h-[80px]"
          aria-hidden="true"
        >
          <path
            d="M597.678 480.76L390.797 333.998c-22.209-15.766-53-10.532-68.762 11.687l-2.04 2.871c-15.753 22.214-10.526 53 11.691 68.762l206.876 146.771c22.218 15.757 53 10.527 68.766-11.687l2.035-2.876c15.768-22.218 10.529-53.005-11.685-68.766z"
            fill="#F39A2B"
          />
          <path
            d="M585.066 423.392l-2.871-2.034c-22.218-15.763-53.004-10.527-68.766 11.687L279.007 763.472c-15.762 22.214-10.527 53.005 11.69 68.763l2.871 2.04c22.218 15.762 53.004 10.53 68.762-11.688l234.423-330.428c15.767-22.22 10.531-53.001-11.687-68.767z"
            fill="#E5594F"
          />
          <path
            d="M891.662 525.126c-0.363 50.106-8.104 91.767-27.502 142.522-13.232 34.625-44.231 82.177-70.529 111.108-62.993 69.31-152.478 113.292-240.772 121.615-100.773 9.501-189.621-17.478-271.287-78.551 7.65 5.723-7.536-6.408-7.061-6.009-4.562-3.821-8.967-7.82-13.369-11.824-8.803-8.003-17.105-16.535-25.225-25.224-18.148-19.432-26.188-30.526-41.439-54.866-27.11-43.264-40.704-80.283-51.007-132.536-4.015-20.354-5.395-39.803-5.586-66.233-0.531-73.33-114.29-73.381-113.758 0 1.607 222.487 154.098 420.146 370.093 475.715 216.482 55.697 449.039-49.258 553.91-245.54 37.754-70.664 56.715-150.224 57.293-230.179 0.526-73.379-113.231-73.328-113.761 0.002z"
            fill="#4A5699"
          />
          <path
            d="M137.884 501.467c0.362-50.104 8.103-91.762 27.502-142.52 13.233-34.621 44.233-82.173 70.53-111.108 62.993-69.309 152.472-113.29 240.768-121.615 100.773-9.5 189.626 17.479 271.292 78.554-7.652-5.721 7.532 6.408 7.057 6.01 4.563 3.819 8.968 7.821 13.371 11.823 8.803 8 17.108 16.535 25.228 25.225 18.147 19.43 26.187 30.526 41.438 54.866 27.111 43.264 40.709 80.28 51.009 132.533 4.014 20.352 5.396 39.804 5.586 66.232 0.529 73.33 114.287 73.384 113.76 0-1.608-222.489-154.107-420.144-370.099-475.715-216.482-55.7-449.036 49.26-553.905 245.541-37.753 70.664-56.715 150.219-57.292 230.174-0.534 73.384 113.225 73.33 113.755 0z"
            fill="#C45FA0"
          />
        </svg>
      ),
    },
    {
      title: "500+ Hospital Rooms",
      description:
        "We support billing operations across hundreds of hospital rooms and departments, coordinating seamlessly with in-house staff and administrators.",
      icon: (
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-[80px] h-[80px] text-brand-black"
          aria-hidden="true"
        >
          <polygon points="17 12 15 12 15 14.5 12.5 14.5 12.5 16.5 15 16.5 15 19 17 19 17 16.5 19.5 16.5 19.5 14.5 17 14.5 17 12" />
          <path d="M28,7.39A7.08,7.08,0,0,0,22.73,4a7.35,7.35,0,0,0-2.58.28,11.44,11.44,0,0,0-3.82,2.05L16,6.62l-.12-.1A13.4,13.4,0,0,0,14,5.23,8.29,8.29,0,0,0,9.27,4a6.16,6.16,0,0,0-1.42.28A6.86,6.86,0,0,0,5.11,6.07,10.49,10.49,0,0,0,4,7.39C.2,12.86,7.91,21.14,12.48,25.3c.56.52,1.08,1,1.52,1.34.65.56,1.14.95,1.38,1.14h1.24C18.31,26.45,33,14.53,28,7.39ZM16,25.71l-.48-.41c-.47-.39-1-.84-1.52-1.33C9.33,19.71,2.91,12.46,5.66,8.54a6.34,6.34,0,0,1,2.26-2.1A4,4,0,0,1,9.43,6,2.3,2.3,0,0,1,9.8,6a5.57,5.57,0,0,1,1.86.34l.46.18A10.34,10.34,0,0,1,14,7.6a10.69,10.69,0,0,1,1.29,1.06h1.43a10.9,10.9,0,0,1,3.36-2.22A5.51,5.51,0,0,1,22.56,6a1.77,1.77,0,0,1,.32,0,5.32,5.32,0,0,1,3.46,2.48C29.51,13.07,20.47,22,16,25.71Z" />
          <path
            d="M16,25.71l-.48-.41C20.09,21.14,27.8,12.86,24,7.39a10.66,10.66,0,0,0-1.1-1.33,5.32,5.32,0,0,1,3.46,2.48C29.51,13.07,20.47,22,16,25.71Z"
            fill="#ff005c"
          />
        </svg>
      ),
    },
    {
      title: "200+ Satisfied Doctors",
      description:
        "Physicians trust us to handle their billing accurately and efficiently, freeing them up to spend more time with their patients.",
      icon: (
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-[80px] h-[80px] text-brand-black"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M24,12a4,4,0,0,0-1,7.86V22a6,6,0,0,1-6,6,6,6,0,0,1-6-6V19h1l1-1V16.41A8,8,0,0,0,18,9V4L17,3H14V5h2V9a6,6,0,0,1-6,6,5.81,5.81,0,0,1-.86-.06A6,6,0,0,1,4,9V5H6V3H3L2,4V9a8.06,8.06,0,0,0,5,7.41V18l1,1H9v3a8,8,0,0,0,16,0V19.86A4,4,0,0,0,24,12Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,24,18Z"
          />
          <circle cx="24" cy="16" r="2" fill="#ff005c" />
        </svg>
      ),
    },
    {
      title: "25+ Different Specialties",
      description:
        "Our team has experience billing for a wide range of medical specialties, from primary care to highly specialized surgical practices.",
      icon: (
        <svg
          viewBox="0 0 32 32"
          className="w-[80px] h-[80px]"
          aria-hidden="true"
        >
          <path d="M26,4H23V3L22,2H10L9,3V4H6L5,5V29l1,1H26l1-1V5ZM21,4V6H11V4Zm4,24H7V6H9V7l1,1H22l1-1V6h2Z" />
          <polygon
            fill="#ff005c"
            points="25 6 25 28 7 28 7 27 22 27 23 26 23 6 25 6"
          />
          <polygon points="17 14 15 14 15 16.5 12.5 16.5 12.5 18.5 15 18.5 15 21 17 21 17 18.5 19.5 18.5 19.5 16.5 17 16.5 17 14" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="results"
      className="bg-[#EFEDE8] min-h-[calc(100vh-var(--header-height,8.5rem))] flex items-center overflow-x-hidden"
    >
      <div className="site-wrapper py-20">
        <h2 className="mx-auto text-center whitespace-nowrap text-lg sm:text-2xl md:text-5xl font-normal tracking-tight text-brand-black">
          Simplifying Medical Billing for Healthcare Professionals
        </h2>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-24">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="stat-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {stat.icon}

              <TypedTitle
                text={stat.title}
                className="mt-8 min-h-[4.5rem] md:min-h-[5rem] text-3xl md:text-4xl font-bold text-brand-black"
              />

              <p className="mt-4 text-lg md:text-xl text-brand-gray leading-relaxed line-clamp-3">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
