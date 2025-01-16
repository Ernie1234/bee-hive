import Catalyst from "@/components/Catalyst";
import Contact from "@/components/Contact";
import Equity from "@/components/Equity";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Overview from "@/components/Overview";
import Problem from "@/components/Problem";
import Resilience from "@/components/Resilience";
import Link from "next/link";

export default function Home() {
  return (
    <main className="border-b-2 font-exo">
      <Navbar />
      <div className="mx-auto px-5 pb-12 w-full container">
        <section id="who">
          <Header />
        </section>

        <Equity />
        <Resilience />
        <Catalyst />
        <FAQ />
        <section id="contact">
          <Contact />
        </section>
        <section id="faq"></section>
        {/* <BuildWithUs /> */}
      </div>
      <div className="p-5 border-t-2 container">
        <Footer />
      </div>
    </main>
  );
}
