"use client";

import Link from "next/link";
import { Button } from "./ui/button";

function Resilience() {
  return (
    <div className="flex md:flex-row flex-col mx-auto px-8 container">
      <div className="flex-1 bg-resilience-pattern bg-contain bg-no-repeat bg-left"></div>
      <div className="flex flex-col flex-1 justify-center gap-5 sm:gap-8 md:gap-12 py-20">
        <h1 className="max-w-prose font-primary font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Building Resilience: The Heartbeat of Our Mission
        </h1>
        <p className="w-full text-lg">
          At The Hive Incubator, we believe in more than just launching
          startups. Our philosophy is rooted in building resilient businesses
          that can withstand challenges, fostering growth-focused mindsets,
          cultivating high-trust relationships, and committing to the long
          journey of success. We are here to support and guide.
        </p>
        <Button
          variant="hiveYellow"
          className="max-w-fit font-primary"
          size="lg"
          asChild
        >
          <Link href="/inside-the-hive">Start your Journey</Link>
        </Button>
      </div>
    </div>
  );
}

export default Resilience;
