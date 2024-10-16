import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <div className="flex flex-col items-center gap-8 my-8 md:my-20">
      <h4 className="font-primary font-semibold text-[#ffba00] text-5xl text-center">
        Our Partners
      </h4>
      <p className="text-lg">
        The Hive Incubator proudly partners with individuals and organizations
        that support startups and the entrepreneurial ecosystem in Akure.
      </p>
      <div className="gap-5 grid grid-cols-4 md:grid-cols-6">
        <div className="w-28 h-28">
          <Image
            src="/images/347230969_1274609106826041_1689596625258781868_n.jpg"
            alt="tech hub logo"
            className="hover:shadow-md rounded-full w-full h-full transition-all duration-500 object-cover scale-95 hover:scale-100 hover:grayscale"
            height={500}
            width={500}
          />
        </div>
        <div className="w-28 h-28">
          <Image
            src="/Property 1=Variant2.svg"
            alt="tech hub logo"
            className="hover:shadow-md rounded-full w-full h-full transition-all duration-500 object-cover scale-95 hover:scale-100 hover:grayscale"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}
