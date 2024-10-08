import Image from "next/image";
import { Separator } from "./ui/separator";

export default function Overview() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-8">
      <div className="flex-1">
        <h2 className="text-[#ffba00] text-5xl font-primary">
          Big Ideas need guidance, funding and action!
        </h2>

        <Separator className="my-4 w-24 mb-8 bg-[#ffba00]" />
        <p className="font-display text-xl">
          Turning visionary ideas into thriving startups requires more than just
          a spark. The Hive Incubator will help you navigate the challenges of
          entrepreneurship. We empower innovators to transform their dreams into
          reality, fostering a vibrant ecosystem.
        </p>
      </div>
      <div className="flex-1">
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
    </div>
  );
}
