import Image from "next/image";
import React from "react";

const featGallery = [
  {
    id: 1,
    src: "/images/theTeam/1.svg",
    alt: "Tech Hub 1",
  },
  {
    id: 2,
    src: "/images/theTeam/2.svg",
    alt: "Tech Hub 2",
  },
  {
    id: 3,
    src: "/images/theTeam/3.svg",
    alt: "Tech Hub 3",
  },
  {
    id: 4,
    src: "/images/theTeam/4.svg",
    alt: "Tech Hub 4",
  },
  {
    id: 5,
    src: "/images/theTeam/5.svg",
    alt: "Tech Hub 4",
  },
];

function TheTeam() {
  return (
    <div className="my-16 container">
      <div className="flex items-center gap-3 mb-8">
        <Image
          src="/Icons/TeamExpert.svg"
          alt="philosophy"
          className="w-8"
          width={100}
          height={100}
        />
        <h2 className="font-primary font-semibold text-gold text-xl">
          the Team
        </h2>
      </div>
      <p className="max-w-prose text-white">
        Meet our passionate team of experts driven by a passion for growth.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
        {featGallery.map((item) => {
          return (
            <div key={item.id} className="relative">
              <Image
                src={item.src}
                alt={item.alt}
                className="w-full object-cover rounded-lg hover:scale-100 scale-95 transition-all duration-500"
                width={500}
                height={500}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TheTeam;
