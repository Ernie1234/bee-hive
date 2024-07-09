import { PartyPopper } from "lucide-react";
import { FaHandshakeSimple } from "react-icons/fa6";
import { GiLoveMystery } from "react-icons/gi";
import { PiHeadCircuitFill } from "react-icons/pi";
import { RiHandCoinFill } from "react-icons/ri";

export default function Value() {
  return (
    <div className="my-16">
      <h2 className="text-[#ffba00] text-5xl text-center font-primary font-semibold">
        CORE VALUE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-6">
        <div className="flex gap-4 hover:bg-slate-900 rounded-lg p-4 transition-all duration-500">
          <FaHandshakeSimple size={90} />
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-medium font-primary">Integrity</h3>
            <p className="font-display">Uphold the highest level of honesty</p>
          </div>
        </div>
        <div className="flex gap-4 hover:bg-slate-900 rounded-lg p-4 transition-all duration-500">
          <RiHandCoinFill size={90} />
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-medium font-primary">Give Back</h3>
            <p className="font-display">
              To our ecosystem and all our partners
            </p>
          </div>
        </div>
        <div className="flex gap-4 hover:bg-slate-900 rounded-lg p-4 transition-all duration-500">
          <PartyPopper size={90} />
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-medium font-primary">Excellence</h3>
            <p className="font-display">
              We will strive to achieve the highest level of performance
            </p>
          </div>
        </div>
        <div className="flex gap-4 hover:bg-slate-900 rounded-lg p-4 transition-all duration-500">
          <PiHeadCircuitFill size={90} />
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-medium font-primary">Patience</h3>
            <p className="font-display">
              We will be patient with all forms of capital. Human and financial
            </p>
          </div>
        </div>
        <div className="flex gap-4 hover:bg-slate-900 rounded-lg p-4 transition-all duration-500">
          <GiLoveMystery size={90} />
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-medium font-primary">Love</h3>
            <p className="font-display">
              Passion for the environment, our community, and our state.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
