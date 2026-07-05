import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Medical Billing Services for Phoenix Practices",
  description:
    "Full-service medical billing for practices in the Phoenix area: claims management, denial reduction, collections improvement, and transparent revenue cycle reporting.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <main className="flex-1" />
      <Footer />
    </div>
  );
}
