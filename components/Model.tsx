import { FcIdea } from "react-icons/fc";

export default function Model() {
  return (
    <div className="my-16">
      <h2 className="text-[#ffba00] text-5xl text-center font-primary font-semibold">
        BUSINESS MODEL
      </h2>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-3">
        <div className="flex flex-col gap-4 hover:bg-slate-900 rounded-lg p-4 transition-all duration-500">
          <div className="flex self-center p-5 bg-gray-900 rounded-full">
            <FcIdea size={70} />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-medium font-primary">PRE IDEATION</h3>
            <p className="font-display">
              Driven and highly talented entrepreneurs lacking a specific idea.
            </p>
            <h3 className="font-medium font-primary text-center text-[#ffba00] uppercase">
              FEE
            </h3>
            <p className="font-primary">
              One cohort perquarter, with high competitiveness. Entrepreneurs
              must show readiness to engage fully indeveloping an idea and
              establishing a business.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 hover:bg-slate-900 rounded-lg p-4 transition-all duration-500">
          <div className="w-full justify-center items-center flex">
            <p className="text-5xl px-5 py-7 bg-gray-900 rounded-full">🟰</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-medium font-primary">PROTOTYPE</h3>
            <p className="font-display">
              Entrepreneurs starting their journey with uncertainty and facing
              capital constraints.
            </p>
            <h3 className="font-medium font-primary text-center text-[#ffba00] uppercase">
              Equity/Interest
            </h3>
            <p className="font-primary">
              Commencing with a crash course in business management, we will
              offer coaching, mentorship, and complete access to the co-working
              space before seeking funds.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 hover:bg-slate-900 rounded-lg p-4 transition-all duration-500">
          <div className="w-full justify-center items-center flex">
            <p className="text-5xl px-5 py-7 bg-gray-900 rounded-full">🕐</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-medium font-primary">EARLY STAGE</h3>
            <p className="font-display">
              Entrepreneurs who have initiated the process but are struggling to
              gain momentum.
            </p>
            <h3 className="font-medium font-primary text-center text-[#ffba00] uppercase">
              Equity/commission
            </h3>
            <p className="font-primary">
              We will grant access to co-working spaces, partner vendors,
              mentorship, and qualified leads. Furthermore, to maximize
              opportunities, we will provide capital in return for equity or a
              loan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
