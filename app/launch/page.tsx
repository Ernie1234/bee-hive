import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LaunchFaq from "@/components/LaunchFaq";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, SearchSlash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="border-b-2">
      <Navbar />
      <div className="container w-full px-5 md:max-w-[63rem] mx-auto">
        {/* HEADER! */}
        <div className="flex flex-col justify-center items-center gap-6 min-h-[75dvh] pt-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-primary text-center">
            Ignite your <span className="text-[#ffba00]">startup</span> journey
          </h1>
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="text-lg sm:text-xl md:text-2xl w-full sm:w-2/3 text-center">
              Welcome to LaunchLab, The Hive Incubator{"'"}s premier event
              designed to ignite the entrepreneurial spirit and discover the
              next wave of innovative startups.
            </p>
            <p className="text-2xl sm:text-3xl w-full text-center">
              Up to
              <span className="text-[#ffba00] font-semibold text-5xl">
                {" "}
                3m Naira{" "}
              </span>
              in funding for 10% equity
            </p>
          </div>
        </div>
        {/* Apply to Launch Lab */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-8">
          <div className="flex-1">
            <h2 className="text-[#ffba00] text-5xl font-primary">
              About the Event
            </h2>

            <Separator className="my-4 w-24 mb-8 bg-[#ffba00]" />
            <p className="font-display text-xl">
              LaunchLab is not just a pitch competition; it{"'"}s a platform for
              aspiring entrepreneurs to present their vision, gain valuable
              feedback, and network with like-minded individuals. We are on a
              mission to empower the dreamers, innovators, and trailblazers who
              are ready to create change. At LaunchLab, we aim to identify the
              most promising startups and provide them with the resources and
              support they need to thrive.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-gray-900/50 p-8 rounded-lg">
              <div className="flex justify-between">
                <h2 className="text-white text-3xl mb-4 font-primary">
                  About the Event
                </h2>
                <span className="text-[#ffba00]">
                  <SearchSlash size={35} />
                </span>
              </div>
              <p className="font-display text-2xl">
                Application opens -
                <span className="text-[#ffba00] font-primary"> August 5th</span>
              </p>
              <p className="font-display text-2xl">
                Application closes -
                <span className="text-[#ffba00] font-primary">
                  {" "}
                  August 11th
                </span>
              </p>
              <p className="font-display text-2xl">
                Pitch Day -
                <span className="text-[#ffba00] font-primary">
                  {" "}
                  August 30th
                </span>
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-5 w-full">
                <Link
                  href="/launch-application-form"
                  className="bg-background hover:bg-background/95 text-foreground text-lg px-14 py-3 rounded-full transition-all duration-500 w-full text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Upcoming Events */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 my-8 md:my-16">
          <div className="flex-1">
            <div className="bg-gray-900/50 p-8 rounded-lg">
              <div className="flex justify-between">
                <h2 className="text-white text-3xl mb-4 font-primary">
                  Event Details
                </h2>
                <span className="text-[#ffba00]">
                  <CalendarDays size={35} />
                </span>
              </div>
              <p className="font-display text-2xl">
                Date:
                <span className="text-[#ffba00] font-primary">
                  {" "}
                  August 30th
                </span>
              </p>
              <p className="font-display text-2xl">
                Time:
                <span className="text-[#ffba00] font-primary"> TBD</span>
              </p>
              <p className="font-display text-2xl">
                Location:
                <span className="text-[#ffba00] font-primary">
                  {" "}
                  ALAGBAKA GRA
                </span>
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-5 w-full">
                <Link
                  href="/launch-application-form"
                  className="bg-background hover:bg-background/95 text-foreground text-lg px-14 py-3 rounded-full transition-all duration-500 w-full text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-[#ffba00] text-5xl font-primary">
              How to apply
            </h2>

            <Separator className="my-4 w-24 mb-8 bg-[#ffba00]" />
            <p className="font-display text-xl">
              Do you have a revolutionary idea that could change the world?
              Apply to pitch at LaunchLab by completing our online registration
              form (link to the form here). Share your vision, your team, and
              what sets you apart. We are looking for startups with the
              potential to make a significant impact, and we want to hear from
              you!
            </p>
          </div>
        </div>
        {/* Receive up to N3m in seed funding */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 my-24">
          <div className="hidden md:flex flex-1">
            <Image
              src="https://uploads-ssl.webflow.com/6392cc77dccb6e7e61c47fa1/6392cc77dccb6ee5efc47fb5_piggybank-min.png"
              alt="Overview"
              // layout="fill"
              objectFit="cover"
              quality={100}
              width={500}
              height={500}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-[#ffba00] text-5xl font-primary font-semibold">
              Receive up to N3m in seed funding
            </h2>
            <Separator className="my-4 w-24 bg-[#ffba00]" />
            <p className="text-lg mb-4">
              The selected startups will join The Hive Incubator{"'"}s program,
              where they will receive
            </p>
            <div className="flex flex-col gap-5 justify-center">
              <ol className="list-inside list-decimal font-medium pt-2">
                <li>
                  Free access to the Hive tech hub for up founder and up to 2
                  team members.
                </li>
                <li>
                  Monthly Stipend for 6 months Duration of the program (N70,000
                  per month)
                </li>
                <li>
                  Business support discount and perks such as business
                  registration, Accounting and legal consultancy
                </li>
                <li>Cash Investment of up to N1,000,000</li>
                <li>Access to Loans and other sources of funding</li>
                <li>Part of a new and vibrant technology ecosystem</li>
                <li>Coaching and mentorship</li>
                <li>Market access and visibility</li>
              </ol>
            </div>
          </div>
        </div>
        {/* TERMS OF APPLICATION */}
        <div className="flex flex-col gap-4 items-center text-white">
          *terms and condition apply, these are all based on accepting our offer
          for 10% equity ONLY 5 businesses will Join the incubator
        </div>
        {/* LAUNCH LAB PRIZE */}
        <div className="my-12">
          <h2 className="text-white text-center text-5xl font-primary font-semibold">
            Launch Lab
            <span className="text-[#ffba00]"> Prizes</span>
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-8">
            <div className="flex flex-col justify-center items-center gap-4 hover:bg-slate-900/50 rounded-lg transition-all duration-500">
              {/* <GiPencil size={30} /> */}
              <h3 className="text-4xl font-medium font-primary capitalize">
                250k
              </h3>
              <div className="w-full flex justify-center items-center text-7xl sm:text-[6rem]">
                🥇
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 hover:bg-slate-900/50 rounded-lg transition-all duration-500">
              <h3 className="text-4xl font-medium font-primary capitalize">
                150k
              </h3>
              <div className="w-full flex justify-center items-center text-7xl sm:text-[6rem]">
                🥈
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 hover:bg-slate-900/50 rounded-lg transition-all duration-500">
              <h3 className="text-4xl font-medium font-primary capitalize">
                100k
              </h3>
              <div className="w-full flex justify-center items-center text-7xl sm:text-[6rem]">
                🥉
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center mt-16 gap-5">
            <p className="text-[#ffba00] font-semibold text-5xl text-nowrap">
              Why wait?
            </p>
            <Link
              href="/launch-application-form"
              className="bg-background hover:bg-background/95 text-foreground text-lg px-14 py-3 rounded-full transition-all duration-500 text-center"
            >
              Apply Now
            </Link>
          </div>
        </div>
        <section id="faq">
          <Contact />
        </section>
        <section id="faq">
          <LaunchFaq />
        </section>
      </div>
      <div className="container border-t-2 p-5 mt-5">
        <Footer />
      </div>
    </div>
  );
}
