import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Systems & Technology – Billing Software We Work With",
  description:
    "BetaMetrix works with the practice management and EHR systems Phoenix-area practices already use, pairing them with data-driven revenue cycle reporting.",
  alternates: { canonical: "/systems-technology" },
};

export default function SystemsTechnologyPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <main className="flex-1" />
      <Footer />
    </div>
  );
}
