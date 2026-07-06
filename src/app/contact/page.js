import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactLottieHero from "../components/ContactLottieHero";

export const metadata = {
  title: "Contact Us – Phoenix Medical Billing Support",
  description:
    "Get in touch with BetaMetrix to talk about medical billing and revenue cycle management for your practice in Phoenix and the surrounding Valley.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-brand-black min-h-[240px] min-[1000px]:min-h-[max(500px,85vh)] flex flex-row">
          {/* Abstract shapes background */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden="true"
          >
            {/* Large darker blob, top-left */}
            <div className="absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-brand-black/15 blur-2xl" />
            {/* Lighter circle, bottom-right */}
            <div className="absolute -bottom-32 -right-16 w-[28rem] h-[28rem] rounded-full bg-white/10" />
            {/* Filled circle, mid-left */}
            <div className="absolute top-1/3 left-8 w-40 h-40 rounded-full bg-white/10" />
            {/* Off-white ring, upper-right */}
            <div className="absolute top-16 right-24 w-56 h-56 rounded-full border-[3px] border-white/15" />
            {/* Small filled square, center */}
            <div className="absolute top-1/2 right-1/3 w-24 h-24 rotate-12 rounded-2xl bg-white/5" />
            {/* Off-white ring, lower-left */}
            <div className="absolute bottom-20 left-16 w-52 h-52 rounded-full border-[3px] border-white/15" />
            {/* Small filled square, mid-left */}
            <div className="absolute top-1/3 left-1/4 w-24 h-24 rotate-12 rounded-2xl bg-white/5" />
            {/* Filled circle, upper-left */}
            <div className="absolute top-24 left-1/3 w-32 h-32 rounded-full bg-white/10" />
          </div>
          {/* Left section */}
          <div className="relative z-10 w-1/2 flex items-end justify-center pt-8 px-8 pb-[20px]">
            {/* Contact Us hero animation */}
            <ContactLottieHero className="w-[380px] max-[639px]:w-auto max-[639px]:h-[160px] min-[640px]:w-[360px] min-[1000px]:w-[600px] xl:w-[700px] aspect-[1024/835] shrink-0 -translate-y-5" />
          </div>
          {/* Right section */}
          <div className="relative z-10 w-1/2 flex flex-col items-start justify-center pt-8 max-[639px]:pt-[5px] px-8 max-[639px]:px-[5px] pb-[20px]">
            <h1 className="text-5xl max-[639px]:text-[23px]! min-[640px]:text-[50px]! min-[1000px]:text-[90px]! xl:text-[100px]! font-black tracking-tighter text-brand-offwhite text-left">
              Contact Us
            </h1>

            <div className="mt-5 min-[1000px]:mt-8 space-y-3 min-[1000px]:space-y-4">
              <div className="flex items-start gap-3 text-brand-offwhite font-semibold text-[0.6875rem] max-[639px]:text-[0.625rem] min-[640px]:text-sm min-[1000px]:text-lg">
                <svg
                  className="w-4 h-4 min-[1000px]:w-6 min-[1000px]:h-6 flex-shrink-0 text-white mt-0.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2C8.1 2 5 5.1 5 9C5 14.3 12 22 12 22C12 22 19 14.3 19 9C19 5.1 15.9 2 12 2ZM12 11.5C10.6 11.5 9.5 10.4 9.5 9C9.5 7.6 10.6 6.5 12 6.5C13.4 6.5 14.5 7.6 14.5 9C14.5 10.4 13.4 11.5 12 11.5Z"
                    fill="currentColor"
                  />
                </svg>
                <span>2163 E. Baseline Road, Suite 105, Tempe, AZ 85283, USA</span>
              </div>

              <a
                href="tel:+14314805127"
                className="group flex w-fit items-center gap-3 text-brand-offwhite font-semibold text-[0.6875rem] max-[639px]:text-[0.625rem] min-[640px]:text-sm min-[1000px]:text-lg transition-colors hover:text-brand-yellow"
              >
                <svg
                  className="w-4 h-4 min-[1000px]:w-6 min-[1000px]:h-6 flex-shrink-0 text-white transition-colors group-hover:text-brand-yellow"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M6.6 10.8C8 13.6 10.4 16 13.2 17.4L15.4 15.2C15.7 14.9 16.1 14.8 16.5 14.9C17.7 15.3 19 15.5 20.3 15.5C20.9 15.5 21.3 15.9 21.3 16.5V20.2C21.3 20.8 20.9 21.2 20.3 21.2C10.6 21.2 2.8 13.4 2.8 3.7C2.8 3.1 3.2 2.7 3.8 2.7H7.5C8.1 2.7 8.5 3.1 8.5 3.7C8.5 5 8.7 6.3 9.1 7.5C9.2 7.9 9.1 8.3 8.8 8.6L6.6 10.8Z"
                    fill="currentColor"
                  />
                </svg>
                <span>431-480-5127</span>
              </a>

              <a
                href="mailto:Admin@betametrix.us"
                className="group flex w-fit items-center gap-3 text-brand-offwhite font-semibold text-[0.6875rem] max-[639px]:text-[0.625rem] min-[640px]:text-sm min-[1000px]:text-lg transition-colors hover:text-brand-yellow"
              >
                <svg
                  className="w-4 h-4 min-[1000px]:w-6 min-[1000px]:h-6 flex-shrink-0 text-white transition-colors group-hover:text-brand-yellow"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M4 5H20C21.1 5 22 5.9 22 7V17C22 18.1 21.1 19 20 19H4C2.9 19 2 18.1 2 17V7C2 5.9 2.9 5 4 5ZM12 12.5L20 7.5V7L12 12L4 7V7.5L12 12.5Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Admin@betametrix.us</span>
              </a>
            </div>

            <p className="mt-5 min-[1000px]:mt-8 max-w-md min-[1000px]:max-w-xl text-[0.6875rem] max-[639px]:text-[0.625rem] min-[640px]:text-sm min-[1000px]:text-lg font-semibold text-white">
              <span className="max-[999px]:hidden">
                Prefer to send us a message? Complete the form below and a
                member of our team will be in touch shortly.
              </span>
              <span className="min-[1000px]:hidden">
                Prefer to send us a message? Complete the form below
              </span>
            </p>
          </div>
        </section>
        {/* Contact form on gold background */}
        <section className="relative z-10 bg-brand-yellow flex items-center justify-center py-20 md:py-28 shadow-[0_20px_30px_-10px_rgba(0,0,0,0.5)]">
          <div className="site-wrapper">
            <div className="mx-auto w-full max-w-2xl">
              <h2 className="mb-8 text-center text-4xl md:text-6xl font-black tracking-tighter text-brand-black">
                Get In Touch
              </h2>
              <ContactForm intro="We're happy to answer any questions and reply to any requests." />
            </div>
          </div>
        </section>
        {/* Full-width image banner */}
        <section className="relative h-[70vh] w-full overflow-hidden">
          <Image
            src="/images/contact_img.jpg"
            alt="BetaMetrix medical billing team"
            fill
            className="object-cover -scale-x-100"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-brand-black/30" aria-hidden="true" />
          {/* Statement overlay */}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="site-wrapper">
              <div className="max-w-3xl text-left">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-brand-offwhite">
                  BetaMetrix
                </h2>
                <p className="mt-6 text-sm md:text-lg font-semibold leading-relaxed text-brand-offwhite">
                  BetaMetrix is a physician-owned medical billing company
                  serving practices across the Phoenix metro area — from Tempe
                  and Scottsdale to Mesa and the greater Valley. Because we're
                  built and run by doctors, we know exactly where practices
                  lose revenue and how to win it back. Our team manages
                  billing, coding, audits, and complete revenue cycle
                  management so you can stay focused on patient care.
                  BetaMetrix is ready to help — reach out today.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
