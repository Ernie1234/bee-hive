import { FaHandHoldingUsd } from "react-icons/fa";
import { GiCamel } from "react-icons/gi";
import { PiHandshakeFill, PiHeadCircuitFill } from "react-icons/pi";

export default function Philosophy() {
  return (
    <div className="my-16">
      <h2 className="text-[#ffba00] text-5xl text-center font-primary font-semibold">
        PHILOSOPHY
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-6">
        <div className="flex gap-4 hover:bg-slate-900 rounded-lg p-4 transition-all duration-500">
          <GiCamel size={90} />
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-medium font-primary">
              Building Resilience
            </h3>
            <p className="font-display">
              Enhancing communities, generating employment, and achieving
              profitability.
            </p>
          </div>
        </div>
        <div className="flex gap-4 hover:bg-slate-900 rounded-lg p-4 transition-all duration-500">
          <PiHandshakeFill size={90} />
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-medium font-primary">
              High Trust Businesses
            </h3>
            <p className="font-display">
              Our commitment is to follow through with what we promise. We hold
              deep respect for all who place their trust in us.
            </p>
          </div>
        </div>
        <div className="flex gap-4 hover:bg-slate-900 rounded-lg p-4 transition-all duration-500">
          <FaHandHoldingUsd size={90} />
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-medium font-primary">
              Profit From Day 1
            </h3>
            <p className="font-display">
              Thinking about profits guarantees value for all stakeholders,
              including investors, employees, entrepreneurs, and customers.
            </p>
          </div>
        </div>
        <div className="flex gap-4 hover:bg-slate-900 rounded-lg p-4 transition-all duration-500">
          <PiHeadCircuitFill size={90} />
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-medium font-primary">
              Long Term Thinking
            </h3>
            <p className="font-display">
              We are committed for the long haul, striving for profitability,
              continuous development, and aiming to create one of the finest
              ecosystems in Nigeria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
