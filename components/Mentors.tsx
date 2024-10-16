import Image from "next/image";
import React from "react";

export default function Mentors() {
  return (
    <div className="flex flex-col items-center gap-8 my-8 md:my-20">
      <h4 className="font-primary font-semibold text-[#ffba00] text-5xl text-center">
        Mentors/Coaches
      </h4>
      <div className="gap-5 grid grid-cols-1 md:grid-cols-3">
        <div className="flex-1">
          <Image
            src="/images/LAYI'S PIC.jpg"
            alt="tech hub logo"
            className="hover:shadow-md rounded-xl hover:rounded-none w-full h-full transition-all duration-500 object-cover scale-95 hover:scale-100"
            height={500}
            width={500}
          />
        </div>
        <div className="flex-1">
          <Image
            src="/images/SANMI'S PIC.jpg"
            alt="tech hub logo"
            className="hover:shadow-md rounded-xl hover:rounded-none w-full h-full transition-all duration-500 object-cover scale-95 hover:scale-100"
            height={500}
            width={500}
          />
        </div>
        <div className="flex-1">
          <Image
            src="/images/SEGUN'S PIC.jpg"
            alt="tech hub logo"
            className="hover:shadow-md rounded-xl hover:rounded-none w-full h-full transition-all object-cover scale-95 hover:scale-100"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}
