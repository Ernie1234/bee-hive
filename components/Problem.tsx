import Image from "next/image";
import { Separator } from "./ui/separator";

export default function Problem() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-16">
      <div className="hidden md:flex flex-1">
        <Image
          src="https://uploads-ssl.webflow.com/6392cc77dccb6e7e61c47fa1/6392cc77dccb6ef3d6c47fb6_unity-min.png"
          alt="Overview"
          // layout="fill"
          objectFit="cover"
          quality={100}
          width={500}
          height={500}
        />
      </div>
      <div className="flex-1">
        <h2 className="text-[#ffba00] text-5xl font-primary font-semibold">
          Building Resilience: The Heartbeat of Our Mission
        </h2>
        <Separator className="my-4 w-24 mb-8 bg-[#ffba00]" />
        <div className="flex flex-col gap-5 justify-center">
          <p className="font-display text-lg">
            At The Hive Incubator, we believe in more than just launching
            startups. Our philosophy is rooted in building resilient businesses
            that can withstand challenges, fostering growth-focused mindsets,
            cultivating high-trust relationships, and committing to the long
            journey of success. We are here to support and guide you every step
            of the way.
          </p>
        </div>
      </div>
    </div>
  );
}
