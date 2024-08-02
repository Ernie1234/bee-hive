import BuildWithUs from "@/components/BuildWithUs";
import Catalyst from "@/components/Catalyst";
import Contact from "@/components/Contact";
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
    <main className="font-exo border-b-2">
      <Navbar />
      <div className="container w-full px-5 md:max-w-[63rem] mx-auto pb-12">
        <section id="who">
          <Header />
        </section>
        <Overview />
        <div className="flex flex-col gap-5 my-12 sm:my-14 md:my-16 lg:my-24">
          <h2 className="text-[#ffba00] text-center text-5xl font-primary font-semibold uppercase">
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
          <h2 className="text-white text-5xl font-primary font-semibold">
            For
            <span className="text-[#ffba00]"> 10% </span>
            Equity
          </h2>
          <Link
            href="/launch"
            className="bg-background hover:bg-background/95 text-foreground text-lg px-14 py-3 rounded-full transition-all duration-500 w-full text-center max-w-fit"
          >
            Apply to Launch Lab
          </Link>
        </div>
        <Problem />
        <Catalyst />
        <section id="contact">
          <Contact />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        {/* <BuildWithUs /> */}
      </div>
      <div className="container border-t-2 p-5">
        <Footer />
      </div>
    </main>
  );
}
