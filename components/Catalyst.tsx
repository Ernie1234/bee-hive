"use client";

import Link from "next/link";
import { Button } from "./ui/button";

function Catalyst() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-catalyst-pattern bg-contain bg-no-repeat bg-bottom pb-20 min-h-[45vw]">
      <div className="flex flex-col flex-1 justify-center items-center gap-5 sm:gap-8 md:gap-12 pt-12 pb-24 text-center">
        <h1 className="max-w-prose font-primary font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Be a Catalyst
        </h1>
        <p className="w-full max-w-prose text-lg">
          Are you passionate about mentoring and guiding the next generation of
          entrepreneurs? We seek experienced coaches to share their knowledge
          and expertise, helping to shape the future of innovative startups.
          Partner with us and inspire the trailblazers of tomorrow.
        </p>
        <Button
          variant="hiveYellow"
          className="max-w-fit font-primary"
          size="lg"
          asChild
        >
          <Link href="/join">Join us</Link>
        </Button>
      </div>
    </div>
  );
}

export default Catalyst;
