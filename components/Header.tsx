import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex bg-hero-pattern bg-contain bg-no-repeat bg-right-top w-full">
      <div className="flex flex-col flex-1 justify-end gap-6 pb-12 md:pb-24 min-h-dvh">
        <h1 className="font-primary font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Where <span className="text-[#ffba00]">dreams</span> take flight!
        </h1>

        <p className="w-full max-w-prose text-base md:text-2xl">
          We are on a mission to empower the dreamers, the innovators, and the
          trailblazers who are ready to create change in Akure and beyond.
        </p>

        <Button asChild variant="hiveYellow" size="lg" className="max-w-fit">
          <Link href="/launch">Learn More</Link>
          {/* <Link href="/launch">Apply to Launch Lab</Link> */}
        </Button>
      </div>
      <div className="md:block flex-1 hidden"></div>
    </div>
  );
}
