import Image from "next/image";
import React from "react";

const featGallery = [
  {
    id: 1,
    src: "/images/communities/1.svg",
    alt: "Tech Hub 1",
    name: "Layi Daniels ",
    position: "Business Strategy, Management and Consulting",
    description:
      "Layi has extensive experience in strategy, management, and consulting across IT, financial services, and health sectors. He has a track record in IT strategy, ERP implementation, and information systems audit.",
  },
  {
    id: 2,
    src: "/images/communities/2.svg",
    alt: "Tech Hub 2",
    name: "Ore Omotayo",
    position: "Wellness Coach & CEO, Growth Catalyst, Inc.",
    description:
      "An experienced wellness coach passionate about supporting individuals in achieving work-life balance and personal fulfillment.",
  },
  {
    id: 3,
    src: "/images/communities/Sanmi Olukanmi.jfif",
    alt: "Tech Hub 3",
    name: "Sanmi Olukanmi",
    position: "CEO and Co-Founder, Shekel Mobility (YC W23) | Investor",
    description:
      "Sanmi is an experienced founder with a demonstrated history of working in the automotive industry, E-commerce and Strategic sourcing. Sanmi is the founder of Shekel mobility and Easypapers Technologies. He is also a Venture partner at Pioneer fund.",
  },
  {
    id: 4,
    src: "/images/communities/Segun Allen.jfif",
    alt: "Tech Hub 4",
    name: "Segun Allen",
    position: "Innovator | Entrepreneur",
    description:
      "Segun has a track record of top-rated delivery on diverse multi-million dollar projects cutting across diverse sectors in various world regions including Africa, Europe and North America. He has worked with Clockwork recruiting (Los Angeles), Hexad Gmbh (Munich), and Venture Garden Group (Lagos).",
  },
  {
    id: 5,
    src: "/images/communities/Samuel Solomon Utoh.svg",
    alt: "Tech Hub 4",
    name: "Samuel Solomon Utoh",
    position:
      "Startup Investor | Private Equity & Venture Capital | Investment Banking",
    description:
      "Samuel is an expert in quantitative analysis, risk management, and financial data interpretation. He excels in evaluating investments, strategic policy implementation, and financial modeling for optimal portfolio performance. He advises institutions on market trends, offering strategies for profitability and stability.",
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
      <div className="flex flex-nowrap overflow-x-scroll  gap-8 mt-8">
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
