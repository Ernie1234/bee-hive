import Image from "next/image";
import Link from "next/link";

export default function Contact() {
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
          Need the Buzz? Let{"'"}s Bee in Touch!
        </h2>
        {/* <Separator className="my-4 w-24 mb-8 bg-[#ffba00]" /> */}
        <div className="flex flex-col gap-5 justify-center mt-8">
          <p className="font-display text-lg">
            Contact Us:{" "}
            <span className="text-[#ffba00] font-primary">0707-212-1073</span>
          </p>
          <p className="font-display text-lg">
            Email:{" "}
            <span className="text-[#ffba00] font-primary">
              hello@thehiveincubator.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
