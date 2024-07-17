import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";

export default function BuildWithUs() {
  return (
    <div className="my-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-8">
        <div className="flex-1">
          <h2 className="text-[#ffba00] text-5xl font-primary font-semibold">
            BUILD WITH US
          </h2>

          <Separator className="my-4 w-24 mb-8 bg-[#ffba00]" />
          <p className="font-display text-xl">
            Are you ready to make a real difference in the world of
            entrepreneurship?
          </p>
          <p className="font-display text-xl mt-8">
            Together, we can shape the future of business in emerging economies
            and create a hive of innovation and success
          </p>
        </div>
        <div className="flex-1 flex  justify-center items-center lg:items-start lg:justify-start">
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <Image
              src="/images/building.png"
              alt="Overview"
              // layout="fill"
              objectFit="cover"
              quality={100}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="mt-40 mb-28 flex flex-col gap-8 justify-center items-center">
        <p className="text-5xl font-primary">Let{"'"}s build together</p>
        <Link
          href="/coach"
          className="bg-background hover:bg-background/95 text-foreground text-lg px-14 py-3 rounded-full transition-all duration-500 text-center"
        >
          Join Us
        </Link>
      </div>
    </div>
  );
}
