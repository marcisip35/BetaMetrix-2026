import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <main className="flex-1" />
      <Footer />
    </div>
  );
}
