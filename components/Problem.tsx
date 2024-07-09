import Image from "next/image";
import { Separator } from "./ui/separator";
import { Lightbulb } from "lucide-react";
import { RiHandCoinFill } from "react-icons/ri";
import { IoConstruct, IoShieldCheckmarkSharp } from "react-icons/io5";

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
          PROBLEM
        </h2>
        <Separator className="my-4 w-24 mb-8 bg-[#ffba00]" />
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex gap-4">
            <Lightbulb size={90} />
            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-medium font-primary">Knowledge</h3>
              <p className="font-display">
                Many aspiring entrepreneurs struggle to access resources for
                starting and growing successful startups.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <RiHandCoinFill size={90} />
            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-medium font-primary">Financing</h3>
              <p className="font-display">
                Securing funding in the early stages is a challenge for
                entrepreneurs in Akure who struggle to access capital.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <IoConstruct size={90} />
            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-medium font-primary">
                Infrastructure
              </h3>
              <p className="font-display">
                Internet, office space, electricity are common problems that
                impede startups. They are often expensive as well.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <IoShieldCheckmarkSharp size={90} />
            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-medium font-primary">Support</h3>
              <p className="font-display">
                Embarking on an entrepreneurial journey can sometimes feel
                lonely, underscoring the need for community support, mentoring,
                and coaching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
