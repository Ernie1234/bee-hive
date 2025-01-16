import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function BigIdeas() {
  return (
    <div className="flex bg-[39%] md:bg-bigIdea-pattern bg-contain bg-no-repeat w-full">
      <div className="md:block flex-1 hidden"></div>
      <div className="flex flex-col flex-1 justify-end gap-6 py-12 md:py-0 pb-12 md:pb-24 lg:pl-8 md:min-h-dvh">
        <h1 className="font-primary font-semibold text-xl sm:text-2xl md:text-4xl lg:text-5xl">
          Big Ideas need guidance, funding and action!
        </h1>

        <p className="w-full max-w-prose text-base md:text-lg">
          Turning visionary ideas into thriving startups requires more than just
          a spark. The Hive Incubator will help you navigate the challenges of
          entrepreneurship. We empower innovators to transform their dreams into
          reality, fostering a vibrant ecosystem.
        </p>

        <Button asChild variant="hiveYellow" size="lg" className="max-w-fit">
          <Link href="/launch">Learn More</Link>
        </Button>
      </div>
    </div>
  );
}

export default BigIdeas;
