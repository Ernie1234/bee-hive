import Image from "next/image";
import React from "react";

const featGallery = [
  {
    id: 1,
    src: "/images/techHub/Co-Working Space.svg",
    alt: "Tech Hub 1",
  },
  {
    id: 2,
    src: "/images/techHub/Mini Lounge and Resting area.svg",
    alt: "Tech Hub 2",
  },
  {
    id: 3,
    src: "/images/techHub/Creative Space.svg",
    alt: "Tech Hub 3",
  },
  {
    id: 4,
    src: "/images/techHub/Board Room.svg",
    alt: "Tech Hub 4",
  },
  {
    id: 5,
    src: "/images/techHub/Recreational Facilities.svg",
    alt: "Tech Hub 5",
  },
  {
    id: 6,
    src: "/images/techHub/Kitchen.svg",
    alt: "Tech Hub 6",
  },
  {
    id: 7,
    src: "/images/techHub/Kitchen1.svg",
    alt: "Tech Hub 7",
  },
  {
    id: 8,
    src: "/images/techHub/Kitchen2.svg",
    alt: "Tech Hub 8",
  },
];

function TechHub() {
  return (
    <div className="my-16 container">
      <div className="flex items-center gap-3 mb-8">
        <Image
          src="/Icons/TechHub.svg"
          alt="philosophy"
          className="w-8"
          width={100}
          height={100}
        />
        <h2 className="font-primary font-semibold text-gold text-xl">
          The tech hub
        </h2>
      </div>
      <p className="max-w-prose text-white">
        Become part of a dynamic community of forward-thinkers. At The Hive, we
        connect passionate individuals who are eager to share, learn, and grow.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8">
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

export default TechHub;
