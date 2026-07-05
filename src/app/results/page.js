import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Results – Medical Billing Performance",
  description:
    "See how BetaMetrix improves collections, reduces denials, and speeds up reimbursement for medical practices in Phoenix and across Arizona.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <main className="flex-1" />
      <Footer />
    </div>
  );
}
