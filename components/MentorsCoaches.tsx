import Image from "next/image";
import React from "react";

const featGallery = [
  {
    id: 1,
    src: "/images/communities/1.svg",
    alt: "Tech Hub 1",
    name: "ALayi Daniels ",
    position: "Business Strategy, Management and Consulting",
    description:
      "Layi has extensive experience in strategy, management, and consulting across IT, financial services, and health sectors. He has a track record in IT strategy, ERP implementation, and information systems audit.",
  },
  {
    id: 2,
    src: "/images/communities/2.svg",
    alt: "Tech Hub 2",
    name: "Funke Adesanya",
    position: "Wellness Coach & CEO, Growth Catalyst, Inc.",
    description:
      "An experienced wellness coach passionate about supporting individuals in achieving work-life balance and personal fulfillment.",
  },
  {
    id: 3,
    src: "/images/communities/coach.svg",
    alt: "Tech Hub 3",
    name: "Segun Adebayo",
    position: "Business Development & Strategy",
    description:
      "Segun is a seasoned business development professional with experience in strategy, business development, and project management across various sectors.",
  },
  {
    id: 4,
    src: "/images/communities/coach.svg",
    alt: "Tech Hub 4",
    name: "Sanmi Akinpelu",
    position: "Business Development & Strategy",
    description:
      "Sanmi is a seasoned business development professional with experience in strategy, business development, and project management across various sectors.",
  },
];

function MentorsCoaches() {
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
          Mentors/Coaches
        </h2>
      </div>
      <p className="max-w-prose text-white text-xl">
        Meet our experienced coaches and mentors, dedicated to empowering your
        growth and unlocking your potential.
      </p>
      <div className="flex flex-nowrap overflow-x-scroll no-scrollbar gap-8 mt-8">
        {featGallery.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center gap-4 min-w-[45rem]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                className="w-full object-cover rounded-lg hover:scale-100 scale-95 transition-all duration-500"
                width={500}
                height={500}
              />
              <div className="flex flex-col gap-8 w-full min-w-80">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-medium font-primary text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.position}</p>
                </div>
                <p className="text-sm text-white-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MentorsCoaches;
