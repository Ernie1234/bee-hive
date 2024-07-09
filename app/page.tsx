import ActionPlan from "@/components/ActionPlan";
import Overview from "@/components/Overview";
import Link from "next/link";

export default function Home() {
  return (
    <h1 className="font-exo">
      <div className="container w-full px-5 md:max-w-[63rem] mx-auto">
        <div className="flex flex-col justify-center items-center gap-6 min-h-[75dvh]">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-primary">
            The <span className="text-[#ffba00]">Hive</span> Incubator
          </h1>
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="text-lg sm:text-xl md:text-2xl w-2/3 text-center">
              Discover the latest innovation, connect with the community, and
              make a difference.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-[#ffba00] italic ">
              build. grow. thrive
            </p>
          </div>
          <div className="flex space-x-8 justify-center items-center mt-6">
            <Link
              href="/coach"
              className="bg-background hover:bg-background/95 text-foreground text-lg px-14 py-3 rounded-full transition-all duration-500"
            >
              Join Us
            </Link>
            <Link
              href="/coach"
              className="border-2 border-background hover:bg-background text-background hover:text-foreground text-lg px-14 py-3 rounded-full transition-all duration-500"
            >
              Get started
            </Link>
          </div>
        </div>
        <Overview />
        <ActionPlan />
      </div>
    </h1>
  );
}
