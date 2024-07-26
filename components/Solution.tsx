"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { BsPersonRaisedHand, BsPersonWorkspace } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { TbGuitarPickFilled } from "react-icons/tb";

export default function Solution() {
  const [active, setActive] = useState(1);

  const handleClick = useCallback((index: number) => {
    setActive(index);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-1 bg-gray-900/60 rounded-3xl p-0 lg:p-5">
      <div className="col-span-3 w-full lg:col-start-1 lg:col-end-2 p-0 lg:p-3 flex flex-row justify-center lg:flex-col gap-0 lg:gap-3 shadow-sm rounded-md">
        <div
          className={`flex space-x-0 md:space-x-6 p-3 rounded-none lg:rounded-md items-center justify-center lg:justify-normal transition-all duration-500 w-full ${
            active === 1
              ? "bg-joelBlue-foreground text-background"
              : "bg-gray-800/50 hover:bg-gray-800/70 cursor-pointer text-joelBlue"
          }`}
          onClick={() => handleClick(1)}
        >
          <div
            className={`rounded-full hidden md:flex justify-center items-center p-3 ${
              active === 1 ? "bg-gray-800" : "bg-transparent"
            }`}
          >
            <BsPersonRaisedHand size={30} />
          </div>
          <p className="md:text-lg lg:text-2xl font-medium">Coaching</p>
        </div>
        <div
          className={`flex space-x-0 md:space-x-6 p-3 rounded-none lg:rounded-md items-center justify-center lg:justify-normal transition-all duration-500 w-full ${
            active === 2
              ? "bg-joelBlue-foreground text-background"
              : "bg-gray-800/50 hover:bg-gray-800/70 cursor-pointer text-joelBlue"
          }`}
          onClick={() => handleClick(2)}
        >
          <div
            className={`rounded-full hidden md:flex justify-center items-center p-3 ${
              active === 2 ? "bg-gray-800" : "bg-transparent"
            }`}
          >
            <TbGuitarPickFilled size={30} />
          </div>
          <p className="md:text-lg lg:text-2xl font-medium">Mentorship</p>
        </div>
        <div
          className={`flex space-x-0 md:space-x-6 p-3 rounded-none lg:rounded-md items-center justify-center lg:justify-normal transition-all duration-500 w-full ${
            active === 3
              ? "bg-joelBlue-foreground text-background"
              : "bg-gray-800/50 hover:bg-gray-800/70 cursor-pointer text-joelBlue"
          }`}
          onClick={() => handleClick(3)}
        >
          <div
            className={`rounded-full hidden md:flex justify-center items-center p-3 ${
              active === 3 ? "bg-gray-800" : "bg-transparent"
            }`}
          >
            <BsPersonWorkspace size={30} />
          </div>
          <p className="md:text-lg lg:text-2xl font-medium">Co-Working</p>
        </div>
        <div
          className={`flex space-x-0 md:space-x-6 p-3 rounded-none lg:rounded-md items-center justify-center lg:justify-normal transition-all duration-500 w-full ${
            active === 4
              ? "bg-joelBlue-foreground text-background"
              : "bg-gray-800/50 hover:bg-gray-800/70 cursor-pointer text-joelBlue"
          }`}
          onClick={() => handleClick(4)}
        >
          <div
            className={`rounded-full hidden md:flex justify-center items-center p-3 ${
              active === 4 ? "bg-gray-800" : "bg-transparent"
            }`}
          >
            <FaMoneyBill1Wave size={30} />
          </div>
          <p className="md:text-lg lg:text-2xl font-medium">Funding</p>
        </div>
      </div>
      <div className="col-span-3 lg:col-start-2 lg:col-end-4 p-3 flex flex-col gap-3 shadow-sm rounded-md">
        <div className="w-full h-full rounded-md flex flex-col sm:flex-row gap-6 sm:gap-0">
          {active === 1 && (
            <>
              <div className="flex-1 flex justify-center">
                <div className="flex flex-col w-11/12 text-joelBlue">
                  <h6 className="mt-8 mb-4 font-medium text-xl">Coaching</h6>
                  <p className="leading-8 text-lg">
                    Tailored business planning and market analysis. Includes
                    go-to-market strategy and marketing promotion
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-2/5 flex">
                <Image
                  src="/images/Coaching2.png"
                  alt="coaching"
                  className="object-cover rounded-md"
                  width={500}
                  height={500}
                />
              </div>
            </>
          )}
          {active === 2 && (
            <>
              <div className="flex-1 flex justify-center">
                <div className="flex flex-col w-11/12 text-joelBlue">
                  <h6 className="mt-8 mb-4 font-medium text-xl">Mentorship</h6>
                  <p className="leading-8">
                    Our cutting-edge system acts as your virtual compliance
                    officer, constantly monitoring your posture and proactively
                    identifying any areas needing attention.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-3/5 flex">
                <Image
                  src="/images/Mentorship2.png"
                  alt="mentor"
                  className="object-cover rounded-md"
                  width={500}
                  height={500}
                />
              </div>
            </>
          )}
          {active === 3 && (
            <>
              <div className="flex-1 flex justify-center">
                <div className="flex flex-col w-11/12 text-joelBlue">
                  <h6 className="mt-8 mb-4 font-medium text-xl">Co-Working</h6>
                  <p className="leading-8">
                    We{"'"}re your one-stop shop for expert security and
                    compliance solutions. We provide tailored guidance and
                    support, ensuring you meet all regulatory requirements
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-2/3 flex">
                <Image
                  src="/images/co_working.png"
                  alt="coworking"
                  className="object-cover rounded-md"
                  width={500}
                  height={500}
                />
              </div>
            </>
          )}
          {active === 4 && (
            <>
              <div className="flex-1 flex justify-center">
                <div className="flex flex-col w-11/12 text-joelBlue">
                  <h6 className="mt-8 mb-4 font-medium text-xl">Funding</h6>
                  <p className="leading-8">
                    We understand that everyone works differently. That{"'"}s
                    why we offer a customised interface that puts you in
                    control.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-2/3 flex">
                <Image
                  src="/images/Funding2.png"
                  alt="funding"
                  className="object-cover rounded-md"
                  width={500}
                  height={500}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
