import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="bg-brand-green about-slice min-h-[calc(100vh-var(--header-height,8.5rem))] flex items-center"
    >
      <div className="site-wrapper py-28 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-brand-offwhite">
            About Us
          </h2>

          <p className="mt-6 text-lg text-gray-100 leading-relaxed">
            At BetaMetrix, we bring transparency to medical billing by
            providing clients with clear, data-driven insights into their
            revenue cycle. This allows us to quickly identify and resolve any
            bottlenecks or issues.
          </p>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-offwhite">
                Who We Are
              </h3>
              <p className="mt-2 text-lg text-gray-100 leading-relaxed">
                Medical billing has long been an unclear and complex process,
                leaving physicians uncertain about their billing and accounts
                receivable.
              </p>
              <Link
                href="/about-us"
                className="mt-3 inline-flex items-center gap-1 text-brand-yellow font-semibold hover:underline underline-offset-2"
              >
                Learn More <span aria-hidden="true">&gt;</span>
              </Link>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-offwhite">
                What We Do
              </h3>
              <p className="mt-2 text-lg text-gray-100 leading-relaxed">
                BetaMetrix delivers clear, data-driven insights into the
                revenue cycle, identifying and resolving bottlenecks to ensure
                full transparency in medical billing.
              </p>
              <Link
                href="/services"
                className="mt-3 inline-flex items-center gap-1 text-brand-yellow font-semibold hover:underline underline-offset-2"
              >
                Learn More <span aria-hidden="true">&gt;</span>
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full border-2 border-brand-yellow px-8 py-3 text-sm font-black uppercase tracking-widest text-brand-yellow pill-button-outline"
          >
            Contact BetaMetrix
          </Link>
        </div>

        <div className="order-first md:order-none relative w-full h-80 md:h-[560px] rounded-lg overflow-hidden">
          <Image
            src="/images/usman-yousaf-pTrhfmj2jDA-unsplash.jpg"
            alt="Healthcare professional reviewing patient records"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
