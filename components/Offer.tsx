import Image from "next/image";
import { GiPencil } from "react-icons/gi";

function Offer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-0 md:p-5">
      <div className="flex flex-col justify-center gap-12 hover:bg-slate-900 rounded-lg transition-all duration-500">
        {/* <GiPencil size={30} /> */}

        <h3 className="text-3xl font-medium font-primary capitalize text-center">
          Coaching
        </h3>

        <div className="w-full flex">
          <Image
            src="/images/coaching.png"
            alt="coaching"
            className="object-cover rounded-md"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 hover:bg-slate-900 rounded-lg transition-all duration-500">
        {/* <GiPencil size={30} /> */}
        <h3 className="text-2xl font-medium font-primary capitalize text-center">
          Networking & Mentorship
        </h3>
        <div className="w-full flex">
          <Image
            src="/images/Mentorship2.png"
            alt="mentor"
            className="object-cover rounded-md"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 hover:bg-slate-900 rounded-lg transition-all duration-500">
        {/* <GiPencil size={30} /> */}
        <h3 className="text-2xl font-medium font-primary capitalize text-center">
          Co-working space
        </h3>
        <div className="w-full flex">
          <Image
            src="/images/co_working.png"
            alt="co-working"
            className="object-cover rounded-md"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 hover:bg-slate-900 rounded-lg transition-all duration-500">
        {/* <GiPencil size={30} /> */}
        <h3 className="text-3xl font-medium font-primary capitalize text-center">
          Funding
        </h3>
        <div className="w-full flex">
          <Image
            src="/images/Funding2.png"
            alt="funding"
            className="object-cover rounded-md"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
