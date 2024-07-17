import ActionPlan from "@/components/ActionPlan";
import BuildWithUs from "@/components/BuildWithUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import Philosophy from "@/components/Philosophy";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Value from "@/components/Value";

export default function Home() {
  return (
    <main className="font-exo border-b-2">
      <Navbar />
      <div className="container w-full px-5 md:max-w-[63rem] mx-auto">
        <Header />
        <Overview />
        <Problem />
        <div className="flex flex-col gap-5 my-12 sm:my-14 md:my-16 lg:my-24">
          <h2 className="text-[#ffba00] text-center text-5xl font-primary font-semibold">
            SOLUTIONS
          </h2>
          <Solution />
        </div>
        {/* <Model /> */}
        <Philosophy />
        <Value />
        {/* <ActionPlan /> */}
        <BuildWithUs />
      </div>
      <div className="container border-t-2 p-5">
        <Footer />
      </div>
    </main>
  );
}
