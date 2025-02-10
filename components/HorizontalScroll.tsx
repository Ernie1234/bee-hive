"use client";

import Image from "next/image";
import Link from "next/link";
import { AiFillYoutube } from "react-icons/ai";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const dataImg = [
  "/images/LAYI'S PIC.jpg",
  "/images/SANMI'S PIC.jpg",
  "/images/SEGUN'S PIC.jpg",
];

function HorizontalScroll() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  return (
    <div
      className="pt-8 flex
     flex-col w-[95%] m-auto"
    >
      <div className="relative flex items-center ">
        <MdChevronLeft
          className="opacity-50 dark:text-white cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide no-scrollbar"
        >
          {dataImg.map((item, index) => (
            <Link key={index} href={item} target="_blank">
              <Image
                className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] object-cover inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={item}
                alt="img"
              />
            </Link>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 dark:text-white cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  );
}

export default HorizontalScroll;
