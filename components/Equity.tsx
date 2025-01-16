"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-96px)]

function Equity() {
  return (
    <div className="mx-auto my-12 md:my-16 px-8 container">
      <div className="flex flex-col justify-center items-center gap-5 bg-equity-pattern bg-contain bg-no-repeat bg-bottom min-h-[25vw]">
        <h2 className="font-bold font-primary text-2xl text-center md:text-3xl lg:text-5xl">
          For 10% Equity
        </h2>
        <Button variant="hiveYellow" size="lg" asChild>
          <Link href="/inside-the-hive">Inside the Hive</Link>
        </Button>
      </div>
    </div>
  );
}

export default Equity;
