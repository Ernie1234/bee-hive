import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex w-full bg-hero-pattern bg-no-repeat bg-right-top">
      <div className="flex-1 flex flex-col justify-center gap-6 min-h-dvh">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-primary">
          Where <span className="text-[#ffba00]">dreams</span> take flight!
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl w-full  max-w-prose">
          We are on a mission to empower the dreamers, the innovators, and the
          trailblazers who are ready to create change in Akure and beyond.
        </p>

        <Button asChild variant="hiveYellow" className="max-w-fit">
          <Link href="/launch">Learn More</Link>
          {/* <Link href="/launch">Apply to Launch Lab</Link> */}
        </Button>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
