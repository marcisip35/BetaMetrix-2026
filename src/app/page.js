import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Results from "./components/Results";
import SystemsTechnology from "./components/SystemsTechnology";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <main>
        <Hero />
        <Results />
        <About />
        <SystemsTechnology />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}