import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-brand-yellow flex items-center min-h-[calc(100vh-var(--header-height,8.5rem))]"
    >
      <div className="site-wrapper py-24 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-black">
            Let&apos;s Talk Billing
          </h2>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-brand-black/80 leading-relaxed">
            Ready to simplify your revenue cycle? Reach out and our team will
            get back to you.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3 text-lg font-semibold text-brand-black">
              <svg
                className="w-6 h-6 flex-shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 2C8.1 2 5 5.1 5 9C5 14.3 12 22 12 22C12 22 19 14.3 19 9C19 5.1 15.9 2 12 2ZM12 11.5C10.6 11.5 9.5 10.4 9.5 9C9.5 7.6 10.6 6.5 12 6.5C13.4 6.5 14.5 7.6 14.5 9C14.5 10.4 13.4 11.5 12 11.5Z"
                  fill="currentColor"
                />
              </svg>
              <span>2163 E. Baseline Road, Suite 105, Tempe, AZ 85283</span>
            </div>

            <div className="flex items-center gap-3 text-lg font-semibold text-brand-black">
              <svg
                className="w-6 h-6 flex-shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M6.6 10.8C8 13.6 10.4 16 13.2 17.4L15.4 15.2C15.7 14.9 16.1 14.8 16.5 14.9C17.7 15.3 19 15.5 20.3 15.5C20.9 15.5 21.3 15.9 21.3 16.5V20.2C21.3 20.8 20.9 21.2 20.3 21.2C10.6 21.2 2.8 13.4 2.8 3.7C2.8 3.1 3.2 2.7 3.8 2.7H7.5C8.1 2.7 8.5 3.1 8.5 3.7C8.5 5 8.7 6.3 9.1 7.5C9.2 7.9 9.1 8.3 8.8 8.6L6.6 10.8Z"
                  fill="currentColor"
                />
              </svg>
              <span>431-480-5127</span>
            </div>

            <div className="flex items-center gap-3 text-lg font-semibold text-brand-black">
              <svg
                className="w-6 h-6 flex-shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M4 5H20C21.1 5 22 5.9 22 7V17C22 18.1 21.1 19 20 19H4C2.9 19 2 18.1 2 17V7C2 5.9 2.9 5 4 5ZM12 12.5L20 7.5V7L12 12L4 7V7.5L12 12.5Z"
                  fill="currentColor"
                />
              </svg>
              <span>Admin@betametrix.us</span>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
