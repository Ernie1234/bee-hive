"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OFFERS = [
  {
    id: 1,
    title: "Coaching",
    href: "/coaching",
    src: "/images/coaching.svg",
  },
  {
    id: 2,
    title: "Networking & Mentorship",
    href: "/networking-mentorship",
    src: "/images/networking.svg",
  },
  {
    id: 3,
    title: "Consulting",
    href: "/co-working-spaces",
    src: "/images/working.svg",
  },
  {
    id: 4,
    title: "Funding",
    href: "/funding",
    src: "/images/funding.svg",
  },
];

function Ofer() {
  return (
    <div className="flex md:flex-row flex-col md:justify-center md:gap-24">
      <h2 className="font-bold font-primary text-[#ffba00] text-2xl md:text-4xl md:text-left lg:text-5xl">
        We offer:
      </h2>
      <div className="gap-4 grid grid-cols-2 max-w-fit">
        {OFFERS.map((offer) => (
          <Card
            key={offer.id}
            title={offer.title}
            href={offer.href}
            src={offer.src}
          />
        ))}
      </div>
    </div>
  );
}

const Card = ({
  title,
  href,
  src,
}: {
  title: string;
  href: string;
  src: string;
}) => {
  return (
    <div className="flex flex-col border max-w-fit">
      <div className="md:w-96 overflow-hidden">
        <Image
          src={src}
          alt={title}
          className="w-full object-cover"
          height={500}
          width={500}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold font-primary text-xl">{title}</h3>
        <Link href={href} className="flex items-center gap-2 text-gold text-sm">
          Learn More <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Ofer;
