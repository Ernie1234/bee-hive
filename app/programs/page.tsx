import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MentorsCoaches from "@/components/MentorsCoaches";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PAST_EVENTS = [
  {
    id: 1,
    title: "Building Resilient Startups",
    date: "23rd January, 2024",
    image: "/images/programs/pastEvent1.svg",
    link: "/event/1",
    linkName: "Listen to the audio",
  },
  {
    id: 2,
    title: "The Launch Lab",
    date: "30th August, 2024",
    image: "/images/programs/pastEvent2.svg",
    link: "/event/2",
    linkName: "More info",
  },
  {
    id: 3,
    title: "The Hive Incubator Program",
    date: "11th August, 2024",
    image: "/images/programs/pastEvent3.svg",
    link: "/event/2",
    linkName: "More info",
  },
];

function page() {
  return (
    <div className="min-h-dvh font-exo">
      <Navbar />
      <div className="flex md:flex-row flex-col justify-center items-center p-8 max-h-dvh container">
        <div className="flex flex-col flex-1 gap-5">
          <h1 className="font-bold text-2xl text-white">
            Are you an entrepreneur in Akure with big ideas?
          </h1>
          <p className="max-w-prose">
            The Hive Incubator is your gateway to growth and success. Apply now
            to be part of a community that nurtures creativity, fosters
            innovation, and empowers startups to thrive.
          </p>
          <Button className="max-w-fit" variant="hiveYellow" size="lg" asChild>
            <Link href="/business">Join Us</Link>
          </Button>
        </div>
        <div className="flex-1">
          <Image
            src="/images/programs/programsHero.svg"
            alt="about_hive"
            className="w-full h-full"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 md:gap-16">
        <div className="flex flex-col container my-8 md:my-16">
          <div className="flex justify-between items-center gap-3 mb-8">
            <h2 className="font-primary font-semibold text-gold text-xl">
              Upcoming Events
            </h2>

            <Link className="p-2 border border-gold" href="/#">
              View Past Events
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="">
              <div className="space-y-4 bg-gold/10 p-4 font-primary w-full h-auto bg-gradient-to-t from-gold-foreground/50 to-black">
                <p className="text-gold font-primary p-2 border border-gold max-w-fit text-sm bg-gold/30">
                  Reg. closes Jan. 27th
                </p>
                <p className="text-xl leading-tight font-semibold text-gold-foreground">
                  the Hive Incubator Entrepreneurship COHORT 2
                </p>
                <Link className="flex gap-4 text-gold" href="/#">
                  View Past Events
                  <ArrowRight size={20} />
                </Link>
              </div>
              <Image
                src="/images/programs/programsHero.svg"
                alt="Modern building architecture"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col container my-8 md:my-16">
          <div className="flex justify-between items-center gap-3 mb-8">
            <h2 className="font-primary font-semibold text-gold text-xl">
              Past Events
            </h2>

            {/* <Link className="p-2 border border-gold" href="/#">
            View Past Events
          </Link> */}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {PAST_EVENTS.map((event) => (
              <div className="" key={event.id}>
                <div className="space-y-4 bg-gold/10 p-4 font-primary w-full h-auto bg-gradient-to-t from-gold-foreground/50 to-black">
                  <p className="text-gold font-primary p-2 border border-gold max-w-fit text-sm bg-gold/30">
                    {event.date}
                  </p>
                  <p className="text-xl leading-tight font-semibold text-gold-foreground">
                    {event.title}
                  </p>
                  <Link className="flex gap-4 text-gold" href={event.link}>
                    {event.linkName}
                    <ArrowRight size={20} />
                  </Link>
                </div>
                <Image
                  src={event.image}
                  alt={event.title}
                  className="w-full h-auto object-cover"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center p-8 max-h-dvh container my-8 md:my-16">
        <div className="flex flex-col flex-1 gap-16 justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/Icons/IdeaLab.svg"
              alt="entrepreneurs_icon"
              className="w-8"
              height={100}
              width={100}
            />
            <h1 className="font-bold text-2xl text-center text-gold">
              Idea Lab
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-3xl">
              Where Ideas Become Profitable Businesses
            </h4>
            <p className="max-w-prose">
              At Idea Lab, we craft innovative ideas, build sustainable business
              models, and connect them with the right entrepreneurs to bring
              them to life. Be part of the next big thing!
            </p>
            <Button
              variant="hiveYellow"
              size="lg"
              className="max-w-fit"
              asChild
            >
              <Link href="/business">Explore Communities</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 p-16">
          <Image
            src="/images/programs/idearLabProgram.svg"
            alt="about_hive"
            className="w-full"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center p-8 max-h-dvh container my-8 md:my-16">
        <div className="flex flex-col flex-1 gap-16 justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/Icons/LaunchLab.svg"
              alt="entrepreneurs_icon"
              className="w-8"
              height={100}
              width={100}
            />
            <h1 className="font-bold text-2xl text-center text-gold">
              Launch Lab
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-3xl">
              The Hive{"'"}s Flagship Entrepreneurship Program
            </h4>
            <p className="max-w-prose">
              We bring together the best businesses in Akure, providing them
              with the resources, mentorship, and network to thrive. Join a
              community of innovators shaping the future.
            </p>
            <Button
              variant="hiveYellow"
              size="lg"
              className="max-w-fit"
              asChild
            >
              <Link href="/business">Join Us</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-end p-16">
          <Image
            src="/images/programs/launchLab.svg"
            alt="about_hive"
            className="w-2/4"
            width={100}
            height={100}
          />
        </div>
      </div>
      <MentorsCoaches />

      <div className="my-16 container">
        <Contact />
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}

export default page;
