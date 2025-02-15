import Image from "next/image";
import React from "react";

const items = [
  "/images/communities/Start up lab.svg",
  "/images/communities/Creative minds.svg",
  "/images/communities/Innovators in tech.svg",
  "/images/communities/Change makers in Finance.svg",
];

function PerfectCommunity() {
  return (
    <div className="pt-12 md:pt-20 container flex flex-col">
      <h2 className="text-3xl text-gold font-bold">
        Find the Perfect Community to Thrive
      </h2>
      <p className="max-w-prose text-white">
        Connect with communities that inspire growth, spark ideas, and empower
        your journey.
      </p>
      <div className="grid grid-cols-2 gap-5 container mt-4">
        {items.map((item) => (
          <Image
            src={item}
            alt={item}
            key={item}
            className="w-full object-cover rounded-lg hover:scale-100 scale-95 transition-all duration-500"
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  );
}

export default PerfectCommunity;
