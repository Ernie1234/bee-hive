import AboutCard from "@/components/AboutCard";
import Contact from "@/components/Contact";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import LaunchFaq from "@/components/LaunchFaq";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function page() {
  return (
    <div className="border-b-2">
      <Navbar />
      <div className="mx-auto px-5 w-full md:max-w-[63rem] container">
        {/* HEADER! */}
        <div className="flex flex-col justify-center items-center gap-6 pt-16 min-h-[75dvh]">
          <h1 className="font-primary font-semibold text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl">
            Ignite your <span className="text-[#ffba00]">startup</span> journey
          </h1>
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="w-full sm:w-2/3 text-center text-lg sm:text-xl md:text-2xl">
              Welcome to LaunchLab, The Hive Incubator{"'"}s premier event
              designed to ignite the entrepreneurial spirit and discover the
              next wave of innovative startups.
            </p>
            <p className="w-full text-2xl text-center sm:text-3xl">
              Up to
              <span className="font-semibold text-[#ffba00] text-5xl">
                {" "}
                3m Naira{" "}
              </span>
              in funding for 10% equity
            </p>
          </div>
        </div>
        {/* Apply to Launch Lab */}
        <div className="flex md:flex-row flex-col justify-center items-center gap-5 my-8">
          <div className="flex-1">
            <h2 className="font-primary text-[#ffba00] text-5xl">
              About the Event
            </h2>

            <Separator className="bg-[#ffba00] my-4 mb-8 w-24" />
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
            <AboutCard />
          </div>
        </div>
        {/* Upcoming Events */}
        <div className="flex md:flex-row flex-col justify-center items-center gap-16 my-8 md:my-16">
          <div className="flex-1">
            <EventCard />
          </div>
          <div className="flex-1">
            <h2 className="font-primary text-[#ffba00] text-5xl">
              How to apply
            </h2>

            <Separator className="bg-[#ffba00] my-4 mb-8 w-24" />
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
        <div className="flex md:flex-row flex-col justify-center items-center gap-12 mt-24 mb-6">
          {/* <div className="md:flex flex-1 hidden">
            <Image
              src="https://uploads-ssl.webflow.com/6392cc77dccb6e7e61c47fa1/6392cc77dccb6ee5efc47fb5_piggybank-min.png"
              alt="Overview"
              // layout="fill"
              objectFit="cover"
              quality={100}
              width={500}
              height={500}
            />
          </div> */}
          <div className="flex-1">
            <h2 className="font-primary font-semibold text-[#ffba00] text-5xl">
              Receive up to N3m in seed funding
            </h2>
            <Separator className="bg-[#ffba00] my-4 w-24" />
            <p className="mb-4 text-lg">
              The selected startups will join The Hive Incubator{"'"}s program,
              where they will receive
            </p>
            <div className="flex flex-col justify-center gap-5">
              <ol className="pt-2 font-medium list-decimal list-inside">
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
        <div className="flex flex-col items-center gap-4 text-white">
          *terms and condition apply, these are all based on accepting our offer
          for 10% equity ONLY 5 businesses will Join the incubator
        </div>
        {/* LAUNCH LAB PRIZE */}
        <div className="my-12">
          <h2 className="font-primary font-semibold text-5xl text-center text-white">
            Launch Lab
            <span className="text-[#ffba00]"> Prizes</span>
          </h2>
          <div className="gap-5 grid grid-cols-3 mt-8">
            <div className="flex flex-col justify-center items-center gap-4 hover:bg-slate-900/50 rounded-lg transition-all duration-500">
              {/* <GiPencil size={30} /> */}
              <h3 className="font-medium font-primary text-4xl capitalize">
                250k
              </h3>
              <div className="flex justify-center items-center w-full text-7xl sm:text-[6rem]">
                🥇
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 hover:bg-slate-900/50 rounded-lg transition-all duration-500">
              <h3 className="font-medium font-primary text-4xl capitalize">
                150k
              </h3>
              <div className="flex justify-center items-center w-full text-7xl sm:text-[6rem]">
                🥈
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 hover:bg-slate-900/50 rounded-lg transition-all duration-500">
              <h3 className="font-medium font-primary text-4xl capitalize">
                100k
              </h3>
              <div className="flex justify-center items-center w-full text-7xl sm:text-[6rem]">
                🥉
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col justify-center items-center gap-5 mt-16">
            <p className="font-semibold text-[#ffba00] text-5xl text-nowrap">
              Why wait?
            </p>
            <Link
              href="/launch-application-form"
              className="bg-background hover:bg-background/95 px-14 py-3 rounded-full text-center text-foreground text-lg transition-all duration-500"
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
      <div className="mt-5 p-5 border-t-2 container">
        <Footer />
      </div>
    </div>
  );
}
