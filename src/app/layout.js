import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  siteUrl,
  siteName,
  defaultTitle,
  defaultDescription,
} from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "medical billing Phoenix",
    "medical billing services Phoenix AZ",
    "revenue cycle management Phoenix",
    "medical billing company Arizona",
    "physician billing services",
    "medical claims management Phoenix",
    "doctor-owned medical billing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Local-business structured data so search engines associate the site with
// medical billing services in the Phoenix metro area.
// TODO: add address, telephone, and sameAs (social profiles) when available.
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  description:
    "Doctor-owned medical billing and revenue cycle management company serving medical practices in the Phoenix, Arizona metro area.",
  areaServed: [
    { "@type": "City", name: "Phoenix" },
    { "@type": "City", name: "Scottsdale" },
    { "@type": "City", name: "Mesa" },
    { "@type": "City", name: "Tempe" },
    { "@type": "City", name: "Chandler" },
    { "@type": "City", name: "Glendale" },
    { "@type": "State", name: "Arizona" },
  ],
  serviceType: [
    "Medical Billing",
    "Revenue Cycle Management",
    "Medical Claims Management",
    "Denial Management",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </body>
    </html>
  );
}
