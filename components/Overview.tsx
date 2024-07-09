import Image from "next/image";
import { Separator } from "./ui/separator";

export default function Overview() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-8">
      <div className="flex-1">
        <h2 className="text-[#ffba00] text-5xl font-primary font-semibold">
          OVERVIEW
        </h2>
        <p className="text-4xl font-primary">
          Empowering Entrepreneurs for a Brighter Tomorrow
        </p>
        <Separator className="my-4 w-24 mb-8 bg-[#ffba00]" />
        <p className="font-display text-xl">
          The Hive Incubator in Akure, Nigeria, strives to bridge a market void
          by offering extensive assistance and resources to up-and-coming
          entrepreneurs. Our goal is to spark the entrepreneurial drive and
          assist emerging entrepreneurs in overcoming the challenges of
          launching and expanding their businesses. By offering mentorship,
          coaching, funding, and shared workspaces, we aim to establish a
          flourishing entrepreneurial environment.
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="https://uploads-ssl.webflow.com/6392cc77dccb6e7e61c47fa1/6392cc77dccb6e5467c47fb7_studio-img-min.png"
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
