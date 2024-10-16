import Mentors from "@/components/Mentors";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Image from "next/image";
import { TbBuildingFactory } from "react-icons/tb";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto my-8 px-5 w-full md:max-w-[63rem] container">
        <div className="flex justify-center items-center gap-5">
          <div className="flex flex-1 flex-col gap-3">
            <h1 className="text-[#ffba00] text-5xl font-primary font-semibold">
              About us
            </h1>
            <p className="">
              The Hive Incubator is a dynamic startup business incubator located
              in Akure, Nigeria, dedicated to fueling the entrepreneurial spirit
              in the local community. We are not just a space for budding
              businesses; we are a comprehensive ecosystem designed to ignite
              ideas and cultivate innovation. Whether you have a groundbreaking
              idea or an established startup seeking to scale, The Hive
              Incubator is your partner in transforming dreams into reality and
              shaping the future of innovation!
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/WhatsApp Image 2024-10-14 at 00.28.47_ff809419.jpg"
              alt="About us"
              className="object-cover w-full h-full"
              height={500}
              width={500}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 md:my-20">
          <div className="bg-gray-800/30 p-4 rounded-md">
            <h5 className="text-[#ffba00] text-2xl font-semibold font-display">
              Mission
            </h5>
            <p className="">
              To empower the dreamers, the innovators, and the trailblazers who
              are ready to create change in Akure and beyond.
            </p>
          </div>
          <div className="bg-gray-800/30 p-4 rounded-md">
            <h5 className="text-[#ffba00] text-2xl font-semibold font-display">
              Vision
            </h5>
            <p className="">Empowering Entrepreneurs for a Brighter Tomorrow</p>
          </div>
        </div>
        <div className="my-8 md:my-20">
          <h4 className="text-[#ffba00] text-5xl font-primary font-semibold text-center">
            Philosophy
          </h4>
          <div className="grid grid-cols-2 gap-5 my-8">
            <div className="flex flex-col gap-4">
              <div className="text-[#ffba00] flex items-center gap-3">
                <TbBuildingFactory size={40} />
                <p className="text-xl font-display">Building Resilience</p>
              </div>
              <p className="text-sm">
                Enhancing communities, generating employment, and achieving
                profitability.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[#ffba00] flex items-center gap-3">
                <TbBuildingFactory size={40} />
                <p className="text-xl font-display">Profit From Day 1</p>
              </div>
              <p className="text-sm">
                Thinking about profits guarantees value for all stakeholders,
                including investors, employees, entrepreneurs, and customers.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[#ffba00] flex items-center gap-3">
                <TbBuildingFactory size={40} />
                <p className="text-xl font-display">High Trust Businesses</p>
              </div>
              <p className="text-sm">
                Our commitment is to follow through with what we promise. We
                hold deep respect for all who place their trust in us.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[#ffba00] flex items-center gap-3">
                <TbBuildingFactory size={40} />
                <p className="text-xl font-display">Long Term Thinking</p>
              </div>
              <p className="text-sm">
                We are committed for the long haul, striving for profitability,
                continuous development, and aiming to create one of the finest
                ecosystems in Nigeria.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col justify-center gap-5">
              <h5 className="text-[#ffba00] text-4xl font-semibold font-display">
                The Tech Hub
              </h5>
              <p className="text-sm">
                Our hub offers state-of-the-art facilities equipped with the
                latest tools and technologies to bring your ideas to life.
                Collaborate with like-minded innovators and make the most of our
                exclusive resources to accelerate your success.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/images/Logo.png"
                alt="tech hub logo"
                className="object-cover w-full h-full"
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <p className="text-xl font-display">Co-Working Space</p>
            <p className="text-xl font-display">Mini Lounge and Resting Area</p>
            <p className="text-xl font-display">Creative Space</p>
            <p className="text-xl font-display">Board Room</p>
            <p className="text-xl font-display">Recreational Facilities</p>
            <p className="text-xl font-display">kitchen</p>
            <p className="text-xl font-display">Internet</p>
            <p className="text-xl font-display">Parking Space</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center my-8 md:my-20">
          <div className="flex flex-col justify-center gap-5">
            <h4 className="text-[#ffba00] text-5xl font-primary font-semibold text-center">
              Businesses in The Hub
            </h4>
            <p className="text-lg">
              At the Hub, we provide businesses with cutting-edge facilities and
              collaborative spaces designed to fuel innovation and growth.
            </p>
          </div>
        </div>
        <Mentors />
        <Partners />
      </div>
    </div>
  );
}
