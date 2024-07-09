import ActionPlan from "@/components/ActionPlan";
import Header from "@/components/Header";
import Overview from "@/components/Overview";
import Philosophy from "@/components/Philosophy";
import Value from "@/components/Value";
import Link from "next/link";

export default function Home() {
  return (
    <h1 className="font-exo">
      <div className="container w-full px-5 md:max-w-[63rem] mx-auto">
        <Header />
        <Overview />
        <Philosophy />
        <Value />
        <ActionPlan />
      </div>
    </h1>
  );
}
