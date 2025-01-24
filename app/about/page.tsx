import Communities from "@/components/Communities";
import Contact from "@/components/Contact";
import Entrepreneurs from "@/components/Entrepreneurs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import TechHub from "@/components/TechHub";
import TheTeam from "@/components/TheTeam";
import Image from "next/image";

function page() {
  return (
    <div className="border-b-2 min-h-dvh font-exo">
      <Navbar />
      <div className="flex md:flex-row flex-col justify-center items-center p-8 max-h-dvh">
        <div className="flex flex-col flex-1 gap-5">
          <div className="flex items-center gap-3">
            <Image
              src="/Icons/About.svg"
              alt="about_icon"
              className="w-8"
              height={100}
              width={100}
            />
            <h1 className="font-bold text-3xl text-center text-gold">About</h1>
          </div>
          <p className="max-w-prose">
            The Hive Incubator in Akure, Nigeria, is a vibrant hub empowering
            entrepreneurs with the resources and support to transform ideas into
            thriving businesses. It fosters innovation and growth for startups
            at any stage.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/aboutHive.svg"
            alt="about_hive"
            className="w-full h-full"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 md:gap-12 bg-hive p-8 md:p-12 min-h-fit">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold font-primary text-3xl text-black text-center">
            Welcome to The Hive
          </h2>
          <p className="max-w-prose text-lg">
            Fueling Innovation, Empowering Entrepreneurs
          </p>
        </div>
        <div className="gap-5 grid grid-cols-1 md:grid-cols-3 mx-auto">
          <div className="flex group">
            <Image
              src="/images/Collaborate and Thrive.svg"
              alt="innovation"
              className="group-hover:scale-105 group-hover:rounded-3xl w-full h-full transition-all duration-500 ease-in-out"
              width={500}
              height={500}
            />
          </div>
          <div className="flex group">
            <Image
              src="/images/Grow your vision.svg"
              alt="innovation"
              className="group-hover:scale-105 group-hover:rounded-3xl w-full h-full transition-all duration-500 ease-in-out"
              width={500}
              height={500}
            />
          </div>
          <div className="flex group">
            <Image
              src="/images/Innovate the Future.svg"
              alt="innovation"
              className="group-hover:scale-105 group-hover:rounded-3xl w-full h-full transition-all duration-500 ease-in-out"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center mx-auto py-10 p-8 container">
        <div className="flex flex-col flex-1 gap-8 md:gap-12">
          <div className="flex flex-col gap-3 md:gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/Icons/Mission.svg"
                alt="mission"
                className="w-8"
                width={100}
                height={100}
              />
              <h5 className="font-primary font-semibold text-2xl text-gold md:text-3xl">
                Mission
              </h5>
            </div>
            <p className="max-w-prose text-gold">
              To empower the dreamers, the innovators, and the trailblazers who
              are ready to create change in Akure and beyond.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/Icons/Vision.svg"
                alt="mission"
                className="w-8"
                width={100}
                height={100}
              />
              <h5 className="font-primary font-semibold text-2xl text-gold md:text-3xl">
                Vision
              </h5>
            </div>
            <p className="max-w-prose text-gold">
              Empowering Entrepreneurs for a Brighter Tomorrow
            </p>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Image
            src="/images/Group 14.svg"
            alt="about_hive"
            className="w-full md:w-2/3"
            width={100}
            height={100}
          />
        </div>
      </div>
      <Philosophy />
      <Communities />
      <TechHub />
      <TheTeam />
      <Entrepreneurs />
      <div className="my-16 container">
        <Contact />
      </div>
      <div className=" container">
        <Footer />
      </div>
    </div>
  );
}

export default page;
