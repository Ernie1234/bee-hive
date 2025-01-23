import Image from "next/image";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiCamel } from "react-icons/gi";
import { PiHandshakeFill, PiHeadCircuitFill } from "react-icons/pi";

export default function Philosophy() {
  return (
    <div className="my-16 container">
      <div className="flex items-center gap-3 mb-8">
        <Image
          src="/Icons/Philosophy.svg"
          alt="philosophy"
          className="w-8"
          width={100}
          height={100}
        />
        <h2 className="font-primary font-semibold text-gold text-xl">
          Philosophy
        </h2>
      </div>

      <div className="border-gold bg-black bg-gradient-to-b from-transparent to-gold-foreground/30 mx-auto p-8 md:p-14 border w-4/5">
        <div className="gap-8 md:gap-10 grid grid-cols-1 md:grid-cols-2 bg-dots-pattern bg-no-repeat bg-center">
          <div className="flex gap-6">
            <Image
              src="/Icons/Resilience_flower.svg"
              alt="resilience_flower"
              className="w-10"
              width={100}
              height={100}
            />
            <div className="flex flex-col gap-1">
              <h5 className="text-2xl text-gold/90">Building Resilience</h5>
              <p className="text-gold">
                Enhancing communities, generating employment, and achieving
                profitability.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <Image
              src="/Icons/payment.svg"
              alt="resilience_flower"
              className="w-10"
              width={100}
              height={100}
            />
            <div className="flex flex-col gap-1">
              <h5 className="text-2xl text-gold/90">Profit From Day 1</h5>
              <p className="text-gold">
                Profit-focused thinking ensures value for all
                stakeholders—investors, employees, entrepreneurs, and customers.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <Image
              src="/Icons/LockIcon.svg"
              alt="resilience_flower"
              className="w-10"
              width={100}
              height={100}
            />
            <div className="flex flex-col gap-1">
              <h5 className="text-2xl text-gold/90">Long Term Thinking</h5>
              <p className="text-gold">
                We are committed for the long haul, striving for profitability,
                and aiming to create one of Nigeria&apos;s finest ecosystems.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <Image
              src="/Icons/LockIcon.svg"
              alt="resilience_flower"
              className="w-10"
              width={100}
              height={100}
            />
            <div className="flex flex-col gap-1">
              <h5 className="text-2xl text-gold/90">High Trust Businesses</h5>
              <p className="text-gold">
                We honor our promises and deeply respect the trust placed in us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
