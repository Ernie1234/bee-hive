import BigIdeas from "@/components/BigIdeas";
import Catalyst from "@/components/Catalyst";
import Contact from "@/components/Contact";
import Equity from "@/components/Equity";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Ofer from "@/components/Ofer";
import Resilience from "@/components/Resilience";

export default function Home() {
  return (
    <main className="border-b-2 font-exo">
      <Navbar />
      <div className="mx-auto px-5 pb-12 w-full container">
        <section id="who">
          <Header />
        </section>
        <BigIdeas />
        <Ofer />
        <Equity />
        <Resilience />
        <Catalyst />
        <FAQ />
        <section id="contact">
          <Contact />
        </section>
      </div>
      <div className="pt-8 container">
        <Footer />
      </div>
    </main>
  );
}
