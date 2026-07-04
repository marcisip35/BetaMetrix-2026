import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-offwhite flex flex-col min-h-[85vh]">
      {/* Link columns */}
      <div className="site-wrapper flex-1 flex items-center py-16">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-24 max-sm:gap-y-12">
          {/* Medical Billing Services */}
          <div className="md:py-6">
            <h3 className="text-lg font-black uppercase tracking-widest text-brand-yellow mb-6">
              Medical Billing Services
            </h3>

            <ul className="space-y-4 text-xl max-sm:text-lg text-gray-300">
              <li>
                <Link href="/services#audits" className="footer-link">
                  Audits
                </Link>
              </li>

              <li>
                <Link href="/services#medical-billing" className="footer-link">
                  Medical Billing
                </Link>
              </li>

              <li>
                <Link
                  href="/services#medical-credentialing"
                  className="footer-link"
                >
                  Medical Credentialing
                </Link>
              </li>

              <li>
                <Link href="/services#medical-coding" className="footer-link">
                  Medical Coding
                </Link>
              </li>

              <li>
                <Link href="/services#mips-reporting" className="footer-link">
                  MIPS Reporting
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology & Softwares */}
          <div className="md:py-6 md:pl-12 md:border-l md:border-gray-700">
            <h3 className="text-lg font-black uppercase tracking-widest text-brand-yellow mb-6">
              Technology &amp; Softwares
            </h3>

            <ul className="space-y-4 text-xl max-sm:text-lg text-gray-300">
              <li>
                <Link href="/#systems-technology" className="footer-link">
                  Our Softwares
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="md:py-6 md:pl-12 md:border-l md:border-gray-700">
            <h3 className="text-lg font-black uppercase tracking-widest text-brand-yellow mb-6">
              About Us
            </h3>

            <ul className="space-y-4 text-xl max-sm:text-lg text-gray-300">
              <li>
                <Link href="/about-us" className="footer-link">
                  Who We Are
                </Link>
              </li>

              <li>
                <Link href="/about-us#what-we-do" className="footer-link">
                  What We Do
                </Link>
              </li>

              <li>
                <Link href="/about-us#who-we-serve" className="footer-link">
                  Who We Serve
                </Link>
              </li>

              <li>
                <Link href="/#results" className="footer-link">
                  Metrics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:py-6 md:pl-12 md:border-l md:border-gray-700">
            <h3 className="text-lg font-black uppercase tracking-widest text-brand-yellow mb-6">
              Contact Us
            </h3>

            <ul className="space-y-4 text-xl max-sm:text-lg text-gray-300">
              <li>
                <Link href="/contact" className="footer-link">
                  Book A Consultation
                </Link>
              </li>

              <li>
                <Link href="/contact" className="footer-link">
                  Get Help
                </Link>
              </li>

              <li className="footer-contact-item">
                <svg
                  className="footer-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2C8.1 2 5 5.1 5 9C5 14.3 12 22 12 22C12 22 19 14.3 19 9C19 5.1 15.9 2 12 2ZM12 11.5C10.6 11.5 9.5 10.4 9.5 9C9.5 7.6 10.6 6.5 12 6.5C13.4 6.5 14.5 7.6 14.5 9C14.5 10.4 13.4 11.5 12 11.5Z"
                    fill="currentColor"
                  />
                </svg>

                <span>2163 E. Baseline Road, Suite 105, Tempe, AZ 85283, USA</span>
              </li>

              <li>
                <a
                  href="tel:+16022835920"
                  className="footer-contact-item footer-link"
                >
                  <svg
                    className="footer-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M6.6 10.8C8 13.6 10.4 16 13.2 17.4L15.4 15.2C15.7 14.9 16.1 14.8 16.5 14.9C17.7 15.3 19 15.5 20.3 15.5C20.9 15.5 21.3 15.9 21.3 16.5V20.2C21.3 20.8 20.9 21.2 20.3 21.2C10.6 21.2 2.8 13.4 2.8 3.7C2.8 3.1 3.2 2.7 3.8 2.7H7.5C8.1 2.7 8.5 3.1 8.5 3.7C8.5 5 8.7 6.3 9.1 7.5C9.2 7.9 9.1 8.3 8.8 8.6L6.6 10.8Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span>Tel: (602)-283-5920</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:admin@BetaMetrix.us"
                  className="footer-contact-item footer-link"
                >
                  <svg
                    className="footer-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 5H20C21.1 5 22 5.9 22 7V17C22 18.1 21.1 19 20 19H4C2.9 19 2 18.1 2 17V7C2 5.9 2.9 5 4 5ZM12 12.5L20 7.5V7L12 12L4 7V7.5L12 12.5Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span>Email: admin@BetaMetrix.us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* What We Do + Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="site-wrapper py-12 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-xl">
            <h3 className="text-sm font-black uppercase tracking-widest mb-3">
              What We Do
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed md:line-clamp-4">
              BetaMetrix is a medical billing consultancy, not a direct
              provider of healthcare services. We focus on delivering
              transparency and precision in revenue cycle management through
              expert auditing and billing services. All client accounts
              begin with a detailed audit, and dedicated billing teams work
              to optimize financial outcomes by addressing both simple and
              complex revenue cycle challenges.
            </p>
          </div>

          <div className="flex flex-col-reverse items-center md:items-end gap-4 flex-shrink-0">
            <p className="text-sm text-gray-400 text-center md:text-right">
              © 2026 BetaMetrix. All rights reserved.
            </p>

            <h3 className="text-4xl md:text-5xl font-black tracking-tighter">
              <Link href="/">BetaMetrix</Link>
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
