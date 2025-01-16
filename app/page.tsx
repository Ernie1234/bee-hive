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
import Link from "next/link";

export default function Home() {
  return (
    <main className="border-b-2 font-exo">
      <Navbar />
      <div className="mx-auto px-5 pb-12 w-full container">
        <section id="who">
          <Header />
        </section>
        <Overview />
        <div className="flex flex-col gap-5 my-12 sm:my-14 md:my-16 lg:my-24">
          <h2 className="font-primary font-semibold text-[#ffba00] text-5xl text-center uppercase">
            We offer
          </h2>
          <Offer />
          {/* <Solution /> */}
        </div>
        {/* <Model /> */}
        {/* <Philosophy />
        <Value /> */}
        {/* <ActionPlan /> */}
        <div className="flex flex-col justify-center items-center gap-6 mx-auto">
          <h2 className="font-primary font-semibold text-5xl text-white">
            For
            <span className="text-[#ffba00]"> 10% </span>
            Equity
          </h2>
          <Link
            href="/launch"
            className="bg-background hover:bg-background/95 px-14 py-3 rounded-full w-full max-w-fit text-center text-foreground text-lg transition-all duration-500"
          >
            Apply to Launch Lab
          </Link>
        </div>
        <Equity />
        <Catalyst />
        <section id="contact">
          <Contact />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        {/* <BuildWithUs /> */}
      </div>
      <div className="p-5 border-t-2 container">
        <Footer />
      </div>
    </main>
  );
}
