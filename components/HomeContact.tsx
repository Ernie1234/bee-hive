"use client";

import Image from "next/image";
import ContackForm from "./ContackForm";

function HomeContact() {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-5 md:gap-8">
      <div className="flex flex-1 justify-center items-center">
        <Image
          src="/images/bee.svg"
          alt="bee"
          className="w-full md:w-3/5 object-contain"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <h3 className="font-primary font-semibold text-3xl md:text-4xl lg:text-5xl">
          Need the Buzz?
        </h3>
        <p className="inline-block bg-clip-text bg-gradient-to-b from-white to-gold font-primary font-semibold text-3xl text-transparent md:text-4xl lg:text-5xl">
          Let{"'"}s Bee in Touch!
        </p>
        <ContackForm />
      </div>
    </div>
  );
}

export default HomeContact;
